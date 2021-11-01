arr = [25, 11, 7, 87, 56];     
        
max = arr[0];    
         
for i in range(0, len(arr)):        
   if(arr[i] > max):    
       max = arr[i];    
           
print("Largest element present in given array: " + str(max));   
