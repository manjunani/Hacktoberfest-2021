X = [[1,2,3],  
       [4,5,6],  
       [7,8,9]]  
  
Y = [[10,11,12],  
       [13,14,16],  
       [16,17,20]]  
  
Result = [[0,0,0],  
                [0,0,0],  
                [0,0,0]]    
for i in range(len(X)):   
   for j in range(len(X[0])):  
       result[i][j] = X[i][j] + Y[i][j]  
for r in result:  
   print(r)  
