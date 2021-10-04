/*

Binary Search Algorithm
Time complexity : O(logn)
Space complexity : O(1)
where n = length of the array

Binary search follows divide and conquer approach in which, the list is divided into two halves
and the item is compared with the middle element of the list. If the match is found then, the location
of middle element is returned otherwise, we search into either of the halves depending upon the
result produced through the match.

-> NOTE: In order to search an element into some list by using Binary Search technique, we must ensure
         that the list is SORTED.

 */

public class BinarySearch {
    public static void main(String[] args) {
        // Array
        int[] array = { 1, 4, 6, 7, 9, 10, 14, 16 };

        // Target element that we are going to search in the array.
        int target = 9;

        System.out.println("Index of the given target is " + binarySearch(array, target));
    }

    // This function will return the index of the target by applying Binary Search.
    static int binarySearch(int[] array, int target) {
        int start = 0;
        int end = array.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1; // If we can't find the number in the array, return -1 because '-1' can never be
                   // an index of an element in an array.
    }
}
