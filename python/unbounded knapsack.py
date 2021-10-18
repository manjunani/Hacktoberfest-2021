
#iterative approach
def uknapiter(w,wt,val,n):
    dp=[[-1 for x in range(w+1)] for x in range(n+1)]
    for i in range(n+1):
        for j in range(w+1):
            if i==0:
                dp[i][j] = 0
            elif j == 0:
                dp[i][j] = 0
            elif wt[i-1] > j:
                dp[i][j] = dp[i-1][j] 
            else:
                                                        #change
                dp[i][j] = max(dp[i-1][j], val[i-1] + dp[i][j-wt[i-1]])
                print(wt[i-1],i,j,dp[i][j])
    print(dp)
    return dp[n][w]
w=8
wt=[1,2,3,4,5]
n=len(wt)
val=[10,20,30,40,125]
print(uknapiter(w,wt,val,n))

#recursive
def uknaprec(w,wt,val,n):
    if n==0 or w==0:
        return 0
    if wt[n-1] > w:
        return uknaprec(w,wt,val,n-1) 
    else:
                                                                            #change
        return max(uknaprec(w,wt,val,n-1),val[n-1] + uknaprec(w-wt[n-1],wt,val,n))
w=8
wt=[1,2,3,4,5]
n=len(wt)
val=[10,20,30,40,125]
print(uknaprec(w,wt,val,n))