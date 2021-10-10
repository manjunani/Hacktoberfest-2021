import time
import math
import numpy as np


def timed(function):
    def wrapper(*args, **kwargs):
        before = time.time()

        return_value = function(*args, **kwargs)
        after = time.time()

        duration = after - before
        fname = function.__name__
        print(f"{fname} result is {return_value}")
        print(f"{fname} duration is {duration}")
        return return_value

    return wrapper


# bubble sort
@timed
def bubble_sort():
    list = [58, 69, 54, 8, 8, 7, 96, 5, 2, 36, 47, 78]
    for i in range(len(list) - 1):
        for j in range(len(list) - 1):
            if list[j] > list[j + 1]:
                x = list[j + 1]
                list[j + 1] = list[j]
                list[j] = x
            else:
                pass
    return list


# selection_sort

@timed
def selection_sort():
    list1 = [89, 47, 6, 85, 5, 4, 69, 2, 14, 36, 258]
    min = list1[0]
    y = len(list1) - 1

    for j in range(y):
        for i in range(j, y):
            if min > list1[i] and list1[i] != list1[j - 1]:
                min = list1[i]
        x = list1[list1.index(min)]
        list1[list1.index(min)] = list1[j]
        list1[j] = x
        # print(min)
        # print(list1)
        min = list1[j + 1]

    return list1


@timed
def insertion_sort():
    list2 = [5, 89, 4, 5, 76, 2, 28, 15, 99, 999, 8]

    for i in range(len(list2) - 1):
        if list2[i] >= list2[i + 1]:
            temp = list2[i + 1]
            list2[i + 1] = list2[i]
            list2[i] = temp
            y = i
            while (y > 0):
                if list2[y] < list2[y - 1]:
                    temp2 = list2[y]
                    list2[y] = list2[y - 1]
                    list2[y - 1] = temp2
                y = y - 1
        # print(list2)
    return list2


list3 = [56, 89, 44, 21, 77, 523, 652, 93, 1455, 93333, 2485, 8]

print(len(list3))
final_arr = list()


def merge_sort(arr_list):
    i = 0
    j = 0
    first_part = list()
    second_part = list()

    if len(arr_list) > 1:
        middle = len(arr_list) // 2
        print(middle)
        # 1st half
        print("first part")
        first_part = arr_list[:middle]
        print(first_part)
        print("divide")
        # 2nd_half
        print("second part")
        second_part = arr_list[middle:]
        print(second_part)

        merge_sort(first_part)
        merge_sort(second_part)

        while i < len(first_part) and j < len(second_part):
            if first_part[i] > second_part[j]:
                temp = second_part[j]
                second_part[j] = first_part[i]
                first_part[i] = temp
                j += 1
                final_arr.append()


            else:
                final_arr.append(first_part[i])

            print(final_arr)


bubble_sort()
selection_sort()
insertion_sort()
x = merge_sort(list3)
