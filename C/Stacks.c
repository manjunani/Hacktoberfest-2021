#include<stdio.h>
#include<stdlib.h>

int main(){
int n;
printf("Enter Stack Size: ");
scanf("%d",&n);
int stack[n],ch=1,top=-1;
while(ch>=1&&ch<4){
    printf("\n 1:Push \n 2:Pop \n 3:Peek \n 4:Exit");
    printf("\nEnter choice : ");
    scanf("%d",&ch);
    switch(ch){
        case 1:{
        int a;
        if(top==n-1){
        printf("\nStack Overflow");
        break;
    }
    top++;
    printf("Enter value : ");
    scanf("%d",&a);
    stack[top]=a;
    break;}
        case 2:{
            int b;
    if(top==-1){
        printf("\nStack Underflow ");
        break;
    }
    b = stack[top];
    printf("Element Popped : %d ",b);
    top--;
        break;}
        case 3:{
            if(top==-1){
        printf("\nStack UnderFlow ");
        break;
    }
    for(int i=top;i>=0;i--)
    {
        printf("%d ",stack[i]);
    }
        break;}
    case 4:
    printf("\n Tata\n");

    break;
    default:
        printf("\nInvalid");
        break;        
    }
}
}
