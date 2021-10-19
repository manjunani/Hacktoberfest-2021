import itertools
import random

# create a deck of cards
deck = list(itertools.product(range(1, 14), [
            'Spade', 'Heart', 'Diamond', 'Club']))

# shuffle the cards
random.shuffle(deck)

# draw 10 card
print("You got:")
for i in range(10):
    print(deck[i][0], "of", deck[i][1])
