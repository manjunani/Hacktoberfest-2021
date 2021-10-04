# problem statement: Given an array, find the total number of inversions of it. If (i < j) and (A[i] > A[j]), then pair (i, j) is called an inversion of an array A. We need to count all such pairs in the array.

# Function to find inversion count of a given list
def findInversionCount(A):
 
    inversionCount = 0
    for i in range(len(A) - 1):
        for j in range(i + 1, len(A)):
            if A[i] > A[j]:
                inversionCount = inversionCount + 1
 
    return inversionCount
 
 
if __name__ == '__main__':
 
    A = [1, 9, 6, 4, 5]
    print("Inversion count is", findInversionCount(A))
