

# Program to enter a number and display it's hex and octal equivalent
# and it's square root 
print("Program to enter a number and display it's hex and octal equivalent and it's square root\n\n\n")
num=int(input("Enter any number:"))
print("Hexadecimal value of " + str(num) + " is " + hex(num))
print("Octal value of " + str(num) + " is " + oct(num))
print("Square Root of " + str(num) + " is " + str(num**(1/2)))
input()
