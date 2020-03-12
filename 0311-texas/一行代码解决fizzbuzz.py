for x in range(100):print("fizz"[(1-(str(x).find('3')!=-1 or x%3==0))*4::]+"buzz"[(1-(str(x).find('5')!=-1 or x%5==0))*4::]or x)
