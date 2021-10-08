import random
from hangman_art import *
from word_list import *
import clear as cls

chosen_word = random.choice(word_list)
display = []

lifes = 6

print(logo)

for i in range(len(chosen_word)):
  display.append("_")

print("Guess the word\n")
print(f"{' '.join(display)}")

guessed = False

while display.count("_") != 0 and lifes !=0:
  print(stages[lifes])
  guess = input("Guess a letter: ").lower()

  cls.clear()

  if guess in display:
    print("You have already guessed this letter\n")

  guessed = False
  for j in range(len(chosen_word)):
      if chosen_word[j] == guess:
          display[j] = guess
          guessed = True

  if not guessed:
    lifes  = lifes -1
    print(f"'{guess}' is not in the word\n")
    print(f"You loose a life\n")

  print(f"{' '.join(display)}")
  
if display.count("_") == 0:
  print(win)
else:
  print(stages[lifes])
  print(loose)
  print(f"The letter was {chosen_word}")