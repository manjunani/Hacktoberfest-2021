import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] findTwoSum(int[] numbers, int target){
        Map<Integer, Integer> nextTargetIndex = new HashMap<>();
        for (int i = 0; i < numbers.length; i++) {
            if(nextTargetIndex.containsKey(numbers[i])){
                return new int[]{nextTargetIndex.get(numbers[i]), i};
            }else{
                nextTargetIndex.put(target - numbers[i], i);
            }
        }
        return new int[2];
    }
    public static void main(String[] args) {
        // [0, 1]
        System.out.println(Arrays.toString(findTwoSum(new int[]{2, 7, 11, 15}, 9)));
        // [1, 2]
        System.out.println(Arrays.toString(findTwoSum(new int[]{3, 2, 4}, 6)));
        // [0, 1]
        System.out.println(Arrays.toString(findTwoSum(new int[]{3, 3}, 6)));
        // [1, 3]
        System.out.println(Arrays.toString(findTwoSum(new int[]{1, 2, 3, 4}, 6)));
        // [0, 2]
        System.out.println(Arrays.toString(findTwoSum(new int[]{2, 3, 8, 9}, 10)));
        // [1, 2]
        System.out.println(Arrays.toString(findTwoSum(new int[]{9, 8, 1, 4}, 9)));
    }
}
