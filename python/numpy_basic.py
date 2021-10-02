# --- NumPy Basic ---
# NumPy is one of the Python libraries that is widely used in the data analysis process because of its great features
# NumPy is almost like List in Python but more powerful. There are several advantages of NumPy over List such as size, performance and functionally
# NumPy data structure requires a smaller size than List but has faster performance

# --- requirement ---
# pip instal numpy

# --- import module ---
import numpy as np

# --- make array using numpy ---
array1 = np.array([1, 2, 3 ,4, 5])
print(array1)
# Result:
    # [1 2 3 4 5]

# --- create an array with a value of 0 as much as 5 ---
array2 = np.zeros(5)
print(array2)
# Result:
    # [0. 0. 0. 0. 0.]

# --- create an array with a value of 1 as much as 5 ---
array3 = np.ones(5)
print(array3)
# Result:
    # [1. 1. 1. 1. 1.]

# --- create an array with values in range, arange(start, stop, step) ---
array4 = np.arange(1, 10, 2)
print(array4)
# Result:
    # [1 3 5 7 9]

# --- create an array with values in interval, linespace(start, stop, number) ---
array5 = np.linspace(1, 10, 2)
print(array5)
# Result:
    # [ 1. 10.]

# --- creates an array with Base10 log values in interval, logspace(start, stop, number) ---
array6 = np.logspace(1, 10, 2)
print(array6)
# Result:
    # [1.e+01 1.e+10]

# --- Multidimensional Array ---
array7 = np.array([[1,2,3,4,5], [2,4,6,8,10]])
print(array7)
# Result:
    # [[ 1  2  3  4  5]
    #  [ 2  4  6  8 10]]
