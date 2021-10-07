
# WORM.IO

import pygame
import random
import os
k = pygame.init()


pygame.mixer.init()
pygame.init()


# Colours
white = (255 , 255 , 255)
red = (255 , 0 , 0)
black = (0 , 0 , 0)
green = (0 , 255 , 0)
blue = (0 , 0 , 255)
violet = (23 , 0 , 9)
brown = (65 , 30 , 8)
darkblue = (30 , 35 , 98)
r1 = (32 , 90 , 80)
r2 = (60 , 0 , 70)


# Game title
pygame.display.set_caption("MY FIRST GAME IN PYTHON : WORM.IO")
clock = pygame.time.Clock()
font = pygame.font.SysFont("calibri" , 35)


# Creating window
width = 1200
height = 800
gWindow = pygame.display.set_mode((width , height))


def screen_score(text,color ,x,y):
    screen_text = font.render(text , True, color)
    gWindow.blit(screen_text , [x,y])
    
def plot_snake(gWindow , color , snake_list , snake_size):
    for x,y in snake_list:
        pygame.draw.rect(gWindow , blue , [x , y, snake_size , snake_size]) 


def welcome():
    exit_game = False
    while not exit_game:
        gWindow.fill(violet)
        screen_score("Welcome to WORM.IO" , r1 , 400 , 300)
        screen_score("Hi there,I am Manish Das,i made this game using python", green , 200 , 200)
        screen_score("Press Space Bar to Play", white , 400 , 350)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit_game = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    pygame.mixer.music.load("bgm.mp3")
                    pygame.mixer.music.play()
                    gameloop()
        pygame.display.update()
        clock.tick(60)                    


# Creating a game loop
def gameloop():
    
    # Game specific variables
    exit_game = False
    game_over = False

    snake_x = 55
    snake_y = 55

    snake_size = 15
    apple_size = 15
    fps = 60

    velocity_x = 0
    velocity_y = 0

    apple_x = random.randint(0 , width/2)
    apple_y = random.randint(0 , height/2)

    score = 0
    init_velocity = 7

    snake_list = []
    snake_length = 1
    # Check if the file exists or else create one
    if (not os.path.exists("Highscore.txt")):
        with open("Highscore.txt","w") as f :
            f.write("20")
            
    with open("Highscore.txt","r") as f:
        Highscore = f.read()
    
    
    while not exit_game:
        
        if game_over:
            
            with open("Highscore.txt","w") as f:
                f.write(str(Highscore))
            
            gWindow.fill(darkblue)
            screen_score("Game Over! You SUCK BRO , EZ  " , red , 350 , 200 )
            screen_score("Press Enter to Continue" , red , 400 , 300 )
            screen_score("HUE ... HUE ... HUE",red, 430 , 400)
            
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    exit_game = True

                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_RETURN:
                        welcome()
                
        else:
            
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    exit_game = True

                if event.type == pygame.KEYDOWN:
                    
                    if event.key == pygame.K_RIGHT:
                        velocity_x = init_velocity
                        velocity_y = 0
                        
                    if event.key == pygame.K_LEFT:
                        velocity_x = - init_velocity
                        velocity_y = 0
                        
                    if event.key == pygame.K_DOWN:
                        velocity_y =  init_velocity
                        velocity_x = 0
                        
                    if event.key == pygame.K_UP:
                        velocity_y = - init_velocity
                        velocity_x = 0
                        
                    if event.key == pygame.K_p:
                        score += 50
            
            snake_x = snake_x + velocity_x
            snake_y = snake_y + velocity_y
            
            if abs(snake_x - apple_x) < 10 and abs(snake_y - apple_y) < 10 :
                score += 10
                apple_x = random.randint(0 , width/2)
                apple_y = random.randint(0 , height/2)
                snake_length += 5
                if(score > int(Highscore)):
                    Highscore = score
                
            gWindow.fill(brown)
            screen_score("Your score is : "+ str(score), white , 5 , 5)
            screen_score("Highscore is : "+ str(Highscore), white , 5 , 35)
            pygame.draw.rect(gWindow , red , [apple_x, apple_y, apple_size, apple_size])  
            
            head = []
            head.append(snake_x)
            head.append(snake_y)
            snake_list.append(head)
            
            if len(snake_list)>snake_length:
                del snake_list[0]
            
            if head in snake_list[ : -1  ]:
                 game_over = True
                 pygame.mixer.music.load("GAMEOVER.mp3")
                 pygame.mixer.music.play()
            
            if snake_x < 0 or snake_x > width or snake_y < 0 or snake_y > height :
                game_over = True
                pygame.mixer.music.load("GAMEOVER.mp3")
                pygame.mixer.music.play()
                
            plot_snake(gWindow , black , snake_list , snake_size)
        pygame.display.update()
        clock.tick(fps) 
        
        
    pygame.quit()
    quit()
welcome()

