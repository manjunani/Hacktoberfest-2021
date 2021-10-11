# Python program to implement a phone directory using arrays

# Array to store Contacts
directory = []

# To create a contact
def create_contact():
    contact = []
    name = input("Enter Name: ")
    phone = int(input("Enter phone number: "))
    contact.append(name)
    contact.append(phone)
    directory.append(contact)

# To delete a contact
def delete_contact():
    delete_number = int(input("Enter the mobile number whose contact has to be deleted: "))
    for i in range(0, len(directory)):
        if directory[i][1] == delete_number:
            directory.pop(i)

# To search a contact
def search_contact():
    search_name = input("Enter Name to search for: ")
    for j in range(0, len(directory)):
        if directory[j][0] == search_name:
            print("Name: ", directory[j][0], "Contact Number: ", directory[j][1])

# To update a contact
def update_contact():
    update_number = int(input("Enter the number which you wanted to edit: "))
    for k in range(0, len(directory)):
        if directory[k][1] == update_number:
            a = input("Do you wnat to edit number? (y/n) ")
            if a == 'y' or a == 'Y':
                new_number = int(input("Enter new number: "))
                directory[k][1] = new_number
            b = input("Do you want to edit name? (y/n) ")
            if b == 'y' or b == 'Y':
                new_name = input("Enter new name: ")
                directory[k][0] = new_name
            print("Updated Contact", directory[k])
            break

# To show Directory
def show_directory():
    print(directory)


# Main
cont = "y" or "Y"
while cont.lower() == "y" or cont.upper() == "Y": 
    choice = int(input("Choose option: \n1. Add Contact \n2. Delete Contact \n3. Search Contact \n4. update Contact \n5. Show Directory \n"))
    if choice == 1:
        create_contact()
    elif choice == 2:
        delete_contact()
    elif choice == 3:
        search_contact()
    elif choice == 4:
        update_contact()
    elif choice == 5:
        show_directory()
    else:
        print("Choose correct option")
    cont = input("Do you want to continue? (y/n)")
    if cont == "n":
        break