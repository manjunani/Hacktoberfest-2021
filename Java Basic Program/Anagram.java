import java.util.HashMap;
import java.util.Map;

class StringUtil{
    /**
     *
     * @param first: first string
     * @param second: second string
     * @return boolean: true if first and second string is anagram, otherwise return false
     *
     * An anagram is a word or phrase that's formed by rearranging the letters of another word or phrase
     * For example, string “elbow” can be turned into the anagram “below”
     * To check if two string is anagram, we need to check if every character in first string
     * is the same as every character in the second string
     */
    public static boolean isAnagram(String first, String second){
        if(first.length() != second.length()){
            return false;
        }
        Map<Character, Integer> charCountFirst = new HashMap<>();
        Map<Character, Integer> charCountSecond = new HashMap<>();
        for(int i = 0; i < first.length(); i++) {
            charCountFirst.put(first.toLowerCase().charAt(i), charCountFirst.getOrDefault(first.charAt(i), 1));
        }
        for(int i = 0; i < second.length(); i++){
            charCountSecond.put(second.toLowerCase().charAt(i), charCountSecond.getOrDefault(second.charAt(i), 1));
        }
        if(charCountFirst.size() != charCountSecond.size()){
            return false;
        }
        return charCountFirst.equals(charCountSecond);
    }
}
public class Anagram {
    public static void main(String[] args) {
        // True
        System.out.println(StringUtil.isAnagram("elbow", "below"));

        // False
        System.out.println(StringUtil.isAnagram("elbow", "belmw"));
        System.out.println(StringUtil.isAnagram("elbow", "beloww"));
    }
}
