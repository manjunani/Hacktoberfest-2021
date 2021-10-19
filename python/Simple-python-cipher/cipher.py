#program to perform ceaser cipher

ch='y'
while ch=='y' or ch=='Y':
    
    print("Menu:")                      #menu for asking choice
    print("1.Cipher a message")
    print("2.Decipher a message")
    choice=int(input("Enter your choice: "))
    if choice==1:
        string=input("Enter the string: ")
        k=int(input("Enter the key for ciphering: "))
        print("Creating cipher")
        code=""
        for x in string:
            code=code+chr(ord(x)+k)
        print("The code is ",code)
    elif choice==2:
        string=input("Enter the string: ")
        k=int(input("Enter the key for deciphering: "))
        print("Deciphering code")
        message=""
        for x in string:
            message=message+chr(ord(x)-k)
        print("The message is ",message)
    else:
        print("Wrong choice")
    ch=input("Do you wish to continue?(y/n):")      #asking to continue or not
