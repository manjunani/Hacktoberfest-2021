# MD5 encryption cracker
import argparse
import hashlib

"""Creating parser to get  multiple arguments from command line"""
parser = argparse.ArgumentParser(description='MD5 Cracker')

"""Adding arguments to the parse """

# Adding first argument '-md5'
parser.add_argument('-md5', dest='hash', help='md5 hash', required=True)

# Adding second argument '-w'
parser.add_argument('-w', dest='wordlist', help='word list', required=True)

# Parsing the arguments
parse_args = parser.parse_args()


def Main():
    hash_cracked = ''

    with open(parse_args.wordlist) as file:
        for line in file:
            line = line.strip()

            if hashlib.md5(bytes(line, encoding='utf-8')).hexdigest() == parse_args:
                hash_cracked = line
                print('\mD5 hash has been cracked successfully. The value is %s.' % line)
    if hash_cracked == '':
        print('\n Failed to Crack the hash. Try using a different bigger dictionary')


if __name__ == '__main__':
    Main()
