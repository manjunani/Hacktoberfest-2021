# for reference check the image that uploaded in this folder


# 3 water jugs capacity -> (x,y,z) where x>y>z
# initial state (12,0,0)
# final state (6,6,0)

capacity=(12,8,5)
# maximum capacity of 3 jugs -> x,y,z 
x=capacity[0]
y=capacity[1]
z=capacity[2]

# to mark visited states
memory={}
#store solution patch 
ans=[] 

def get_all_states(state):
    # let the 3 jugs be called a,b,c 
    a=state[0]
    b=state[1]
    c=state[2]
    
    if (a==6 and b==6):
        ans.append(state)
        return True
# if currenet state is already visited earlier 
    if(a,b,c) in memory:
        return False

    memory[(a,b,c)]=1
    # empty jug a 
    if (a>0):
        # empty a into b 
        if (a+b<=y):
            if(get_all_states((0,a+b,c))):
                ans.append(state)
                return True
        else:
            if(get_all_states((a-(y-b),y,c))):
                ans.append(state)
                return True
        # empty a into c 
        if (a+c<=z):
            if(get_all_states((0,b,a+c))):
                ans.append(state)
                return True
        else:
            if(get_all_states((a-(z-c),b,z))):
                ans.append(state)
                return True
    # empty jug b  
    if (b>0):
        # empty b into a
        if(a+b<=x):
            if(get_all_states((a+b,0,c))):
                ans.append(state)
                return True
        else:
            if(get_all_states((x,b-(x-a),c))):
                ans.append(state)
                return True
        # empty b into c
        if(b+c<=z):
            if(get_all_states((a,0,b+c))):
                ans.append(state)
                return True
        else:
            if(get_all_states((a,b-(z-c),z))):
                ans.append(state)
                return True
    # empty jug c  
    if (c>0):
        # empty c into a
        if(a+c<=x):
            if(get_all_states((a+c,b,0))):
                ans.append(state)
                return True
        else:
            if(get_all_states((x,b,c-(x-a)))):
                ans.append(state)
                return True
        # empty c into b
        if(b+c<=y):
            if(get_all_states((a,b+c,0))):
                ans.append(state)
                return True
        else:
            if(get_all_states((a,y,c-(y-b)))):
                ans.append(state)
                return True
    return False

initial_state=(12,0,0)
print("starting work...\n")
get_all_states(initial_state)
ans.reverse()
for i in ans:
    print(i)
    
    
# ---output here ---

# starting work...

# (12, 0, 0)
# (4, 8, 0)
# (0, 8, 4)
# (8, 0, 4)
# (8, 4, 0)
# (3, 4, 5)
# (3, 8, 1)
# (11, 0, 1)
# (11, 1, 0)
# (6, 1, 5)
# (6, 6, 0)

