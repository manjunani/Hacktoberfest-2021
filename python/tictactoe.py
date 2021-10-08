import random

def checkBoard(board):
    for player in range(1,3):
        if player==1:
            symbol="X"
        else:
            symbol="O"
        for i in range(0,3):
            if (board[i][0]==symbol) and (board[i][1]==symbol) and (board[i][2]==symbol):
                return player+1
        for i in range(0,3):
            if (board[0][i]==symbol) and (board[1][i]==symbol) and (board[2][i]==symbol):
                return player+1
    
            if (board[0][0]==symbol) and (board[1][1]==symbol) and (board[2][2]==symbol):
                return player+1

            if (board[0][2]==symbol) and (board[1][1]==symbol) and (board[2][0]==symbol):
                return player+1
       

    for i in range(0,3):
        for j in range(0,3):
            if board[i][j]=="":
                return 0
    return 1

def initializeBoard(board):
    for i in range(0,3):
        for j in range(0,3):
            board[i][j]=""


def printBoard(board):
    #write code to print the current board of the game
    cellstr=""
    print("............")
    for i in range(0,3):
        for j in range(0,3):
            if board[i][j]=="":
                cellstr=" "
            elif board[i][j]=="X":
                cellstr="X"
            else:
                cellstr="O"
            print("|",cellstr,end="")
        print("|")
        if i<2:
            print("___________")
    print()

def whoWillStart():
    #returns who will start the game
    return random.randint(1,2)

def startGame(board,players,player):
    initializeBoard(board)
    players[1]=input("Enter name of the Player 1 (symbol X) :")
    players[2]=input("Enter name of the Player 2 (symbol O) :")
    print(players[player]," won the toss. So ",players[player]," will start first")
    print()


def playMove(board,players, player):
    
    print(players[player]," will take move now")
    row=int(input("Choose Row where you want to put your marker : ")) 
    column=int(input("Choose Column where you want to put your marker : ")) 
    if player==1:
        board[row-1][column-1]="X"
    else:
        board[row-1][column-1]="O"
            
    printBoard(board)


def togglePlayer(playerInGame):
    if playerInGame==1:
        return 2
    else:
        return 1


def announceResult(state,states,players):    
    if states[state]=="DRAW":
        print("Game results in a draw")
    elif states[state]=="P1-WIN":
        print(players[1], "won the game. Congratulations!!")
    elif states[state]=="P2-WIN":
        print(players[2], "won the game. Congratulations!!")

    print()
    return int(input("Do you want to play again (Enter 1 for yes, 0 for No) :"))


def restartGame(board,players,whoStarted):
    initializeBoard(board)
    whoStarted=togglePlayer(whoStarted)
    print("In this game ",players[whoStarted], " will start the game")
    return whoStarted
    

# Main Program

# Variables

board=[["O","X","O"],["X","X","O"],["O","","X"]]

players=["","P1","P2"]

states=["PLAY", "DRAW","P1-WIN","P2-WIN"]

playerInGame=0
state=0
whoStarted=0

# Main Program

playerInGame=whoWillStart()
whoStarted=playerInGame
startGame(board,players,whoStarted)

# Game Loop

while True:
    playMove(board,players, playerInGame)
    state=checkBoard(board)
    if states[state]=="PLAY":
        playerInGame=togglePlayer(playerInGame)
    else:
        playMore=announceResult(state,states,players)
        if playMore==1:
            playerInGame=restartGame(board,players,whoStarted)
            whoStarted=playerInGame
        else:
            print("Thanks for playing game")
            break