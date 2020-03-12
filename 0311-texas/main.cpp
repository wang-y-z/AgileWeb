#include <algorithm>
#include <iostream>
#include <cstring>
#include <cstdio>

using namespace std;

//input-->parse input-->caculate the rank-->compare rank-->output
//color:1 2 3 4
//value:1 2 3 4 5 6 7 8 9 10 11 12 13
//rank: 9 8 7 6 5 4 3 2 1

//case:
    //input:   Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH
    //output:  Black wins; White wins; Tie;

int color( char ch )
{
	if ( ch == 'S' ) return 0;
	if ( ch == 'H' ) return 1;
	if ( ch == 'D' ) return 2;
	if ( ch == 'C' ) return 3;
}

int value( char ch )
{
	if ( ch == 'T' ) return 8;
	if ( ch == 'J' ) return 9;
	if ( ch == 'Q' ) return 10;
	if ( ch == 'K' ) return 11;
	if ( ch == 'A' ) return 12;
	return ch - '2';
}

int Rank(char cards[][3]){
    for (int i = 5; i > 1; --i){
        for (int j = 1; j < i; ++j){
            if (cards[j-1][0] > cards[j][0]){
                swap(cards[j-1][0], cards[j][0]);
                swap(cards[j-1][1], cards[j][1]);
                //冒泡
            }
        }
    int maps[5][13];
    memset(maps, 0, sizeof(maps));
    for (int i = 0; i < 5; ++i){
        maps[color(cards[i][1])][value(cards[i][0])] ++;
        maps[4][value(cards[i][0])] ++;
    }
    //同花顺
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 9; ++j)
            if (maps[i][j]&maps[i][j+1]&maps[i][j+2]&maps[i][j+3]&maps[i][j+4])
                return 13*13*13*13*13+40+j;
    //铁汁
    for (int j = 0; j < 13; ++j)
        if (maps[4][i] >= 4) return 13*13*13*13*13+20+j;
    //葫芦
    int three = 0, two = 0;
    for (int i = 12; i >= 0; --i){
        if (maps[4][i] == 2)
            two = two*15 + i + 1;
        if (maps[4][i] == 3)
            three = i+1;
    }
	if (two && three) return 13*13*13*13*13+three+1;
    //同花
    for (int i = 0; i < 4; ++ i){
        int count = 0 , number = 0;
        for (int j = 12; j>= 0; -- j)
            for (int k = 12; k <maps[i][j] ; ++k){
                ++ count;
                number = number * 13+ j;
            }
        if (count == 5) return number;
    }
    //顺子
    for (int i = 0 ; i < 9 ; ++i)
        if (maps[4][i]&maps[4][i+1]&maps[4][i+2]&maps[4][i+3]&maps[4][i+4])
            return i-20;
    //三条
    if (three ) return three - 40;
    int answer = 0;
    for(int i = 12; i >= 0; --i)
        if (maps[4][i]== 1)
            answer = answer * 13 + i;
    //两对
    if (two >= 15) two*15+answer-8000;
    //对子
    if (two) return two*13*13*13+answer-13*13*13*13*30;
    //散牌
    return answer - 13*13*13*13*50;
    }
}

int main()
{
    char white[5][3],black[5][3];
    char w[10],b[10];

    while ( ~scanf("%s",b) ) {
		for (int i = 0; i < 5 ; ++i){
            cin>>black[i];
        }
        cin>>w;
        for (int i = 0; i < 5 ; ++i){
            cin>>white[i];
        }
		//int value = rank(black)-rank(white);
		if (Rank(black) < Rank(white))
			printf("White wins.\n");
		else if (Rank(black) > Rank(white))
			printf("Black wins.\n");
		else printf("Tie.\n");
	}
    return 0;
}

