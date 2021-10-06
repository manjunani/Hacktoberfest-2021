# A program to implement insertion sort

def insertionSort(arr):

    for i in range(1, len(arr)): 

        key = arr[i] 
        j = i-1 # j = index no of sorted element 
        while j >=0 and key < arr[j] : # if element of unsorted list is less than sorted one, it will swap
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key 

n = int(input('enter number of elements : ')) 
arr = [] 
for i in range(0,n): 
    # to take input n no of times 
    element = int(input()) 
    # to add the elements to the list 
    arr.append(element)   

# to display the list to the user given by him/her
print(f'list you entered is {arr}') 
# function is called 
insertionSort(arr) 
# to print the array
print ("Sorted array is:")
for i in range(len(arr)): 
    print (arr[i])