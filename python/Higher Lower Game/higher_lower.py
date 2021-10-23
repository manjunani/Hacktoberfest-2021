import art
from game_data import data
import random
from replit import clear


def get_random_account():
    acc_data = random.choice(data)
    return acc_data


def format_data(acc_data):

    name = acc_data['name']
    description = acc_data['description']
    country = acc_data['country']
    return f"{name}, a {description}, from {country}"


def check_answer(guess, a_followers, b_followers):
    if a_followers > b_followers:
        return guess == 'a'
    else:
        return guess == 'b'


score = 0


def game(score):
    print(art.logo)

    game_should_continue = 0
    account_a = get_random_account()
    account_b = get_random_account()
    while game_should_continue:
        account_a = account_b
        account_b = get_random_account()

    while account_a == account_b:
        account_b = get_random_account()

    print(f"Compare A: {format_data(account_a)}.")
    print(art.vs)
    print(f"Against B: {format_data(account_b)}.")

    guess = input("Who has more followers? Type 'A' or 'B': ").lower()
    a_follower_count = account_a["follower_count"]
    b_follower_count = account_b["follower_count"]
    is_correct = check_answer(guess, a_follower_count, b_follower_count)
    clear()
    if is_correct:
        score += 1
        print(f"You're right! Current score: {score}.")
        game(score)
    else:
        game_should_continue = False
        print(f"Sorry, that's wrong. Final score: {score}")


game(score)
