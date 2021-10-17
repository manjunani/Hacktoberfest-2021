class Solution {
    List<String> ans= new ArrayList();
    public List<String> letterCasePermutation(String s) { 
        int start=0;
        backtrack(s.toCharArray(),start);
        return ans;
    }
    public void backtrack(char strArr[],int start){
        ans.add(new String(strArr));
        for(int i=start;i<strArr.length;i++){
           
            if(Character.isLetter(strArr[i])){
                if(Character.isUpperCase(strArr[i])){
                    strArr[i]=Character.toLowerCase(strArr[i]);
                    backtrack(strArr,i+1);
                    strArr[i]=Character.toUpperCase(strArr[i]);
                    
                }
                else{
                    strArr[i]=Character.toUpperCase(strArr[i]);
                    backtrack(strArr,i+1);
                    strArr[i]=Character.toLowerCase(strArr[i]);
                }
            }
        
        }
    }
}
