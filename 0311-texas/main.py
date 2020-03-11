def parseInput(myinput):
  hands = {}
  hand_length = 6 #Name plus cards 
  splitinput = [x for x in myinput.split(' ') if x.strip()!='']
  while len(splitinput) > 0:
    playerhand = splitinput[0:hand_length]
    player = playerhand.pop(0).replace(":", "")
    hands[player] = playerhand
    splitinput = splitinput[hand_length:]
  
  return hands 
    
    
  print(splitinput)

def getValue(card):
  valuemap = {
    "A":14,
    "K":13,
    "Q":12,
    "J":11,
    "1":10, #Stand in for 10 
    "10":10,  #More flex in implementation
    "9":9,
    "8":8,
    "7":7,
    "6":6,
    "5":5,
    "4":4,
    "3":3,
    "2":2,
    "0":0 #Filler as a default value
  }
  return valuemap[card[0]]

def cardsort(cards):
  return sorted(cards, key=lambda x: getValue(x))
  
def isSeq(vals):
  vals.sort()
  for v in range(len(vals)):
    if v == 0:
      prev = vals[v]
    else:
      if vals[v]!=prev+1:
        return False
  return True

def compareHands(hands):
  rankings = {}
  for player in hands:
    rank = hands[player]["rank"]
    print(rank)
    if rank not in rankings:
      rankings[rank] = [player]
    else:
      rankings[rank].append(player)
    
  results = []
  for key in sorted(rankings.keys(), reverse=True):
    results.append(rankings[key])
  return results
    

def getHands(name, hand):
  handset = {
    "vals":[],
    "S":  [],
    "H": [],
    "D": [],
    "C": []
  }
  handranks = ["Straight Flush", "Four of a Kind", "Full House", "Flush", "Straight", "Three of a Kind", "Two Pairs", "Pair", "High Card"]
  if type(hand) == str: cards = hand.split(' ')
  else: cards = hand
  
  for card in cards:
    value = getValue(card)
    if value not in handset:
      handset[value] = [card] 
    else:
      handset[value].append(card)
    
    #Add card to value sets 
    #Add to suit and values
    handset[card[-1]].append(card)
    handset["vals"].append(value)
    if value==14: #ace 
      handset["vals"].append(1)
      
    #Check for flush and straights
    if len(handset[card[-1]])==5:
      handset["Flush"]=cardsort(cards)
    if len(handset["vals"]) == 5 and isSeq(handset["vals"]):
      if "Flush" in handset:
        handset["Straight Flush"] = cardsort(cards)
        break
      else:
        handset["Straight"] = cardsort(cards)
        break
    
    #High card 
    if "High Card" not in handset:
      handset["High Card"]=[card]
    elif value > getValue(handset["High Card"][-1]):
      handset["High Card"].append(card)
    else:
      handset["High Card"].insert(0, card)
    
    #Pairs and card counts
    if len(handset[value])==2:
      if "Three of a Kind" in handset:
          handset["Full House"] = cardsort(list(set(handset["Three of a Kind"]+handset[value])))
      elif "Pair" in handset:
          handset["Two Pairs"] = cardsort(list(set(handset["Pair"]+handset[value])))
      else:
        handset["Pair"] = handset[value]
        
    elif len(handset[value])==3:
      if "Two Pairs" in handset:
        handset["Full House"] = cardsort(list(set([card]+handset["Two Pairs"])))
      else:
        handset["Three of a Kind"] = handset[value]
      
    elif handset[value]==4:
      handset["Four of a Kind"] = handset[value]
      break; #If you have 4 of a kind, you cannot get flush or straight, so no need to check last card if it exists
    
  for h in handranks:
    if h in handset:
      print("%s's best hand is a %s: %s%s" % (name, h, 
        str(handset[h]) if h!="High Card" else handset[h][-1], 
        ", high card "+handset[h][-1] if h!="High Card" else ''))
      
      rank = ((len(handranks)-handranks.index(h))*(10**11))
      for i in range(1, 2*len(handset[h]), 2):
        rank+=getValue(handset[h][(i-1)//2])*(10**i) #Latter portion is to get high cards
      return {
        "rank":rank, 
        "title":h, 
        "hand":handset[h]
      } 

allinputs = "Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH"
'''Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S
Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH
Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH'''

inputs = allinputs.split('\n')

#myinput = "Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH"

for i in inputs:

  hands = parseInput(i)
  results = {}
  for player in hands:
    print("%s: %s" % (player, ' '.join(hands[player])))
    results[player] = getHands(player, hands[player])
  
  rankings = compareHands(results)
  
  if len(rankings[0])==1:
    print("The winner is %s!" % rankings[0][0])
  else:
    print("There is a tie between %s!" % ' and '.join(rankings[0]))
  print('\n')