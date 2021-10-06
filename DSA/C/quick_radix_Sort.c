#include<stdio.h>
int largest(int a[]);  
int radix_sort(int a[]);
int partition(int a[],int start,int end);
int quick_sort(int a[],int start,int end);
void radix();
void quick();
void main()
{
    int operation;
    printf("\n1.Quicksort\n2.Radix sort\n");
    scanf("%d",&operation);
    switch(operation)
    {
        case 1:
        radix();
        break;

        case 2:
        quick();
        break;

        default:
        printf("unkown operation\n");
    }
}
void radix()
{ 
    int a[100],n,i;
    printf("enter the size of array\n");
    scanf("%d",&n);
    printf("enter the elements of array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }     
    radix_sort(a);    
    printf("\n The sorted array is: \n");  
    for(i=0;i<n;i++)
    {
        printf(" %d\t", a[i]);
    }
}
  
int largest(int a[])  
{     
    int larger=a[0], i;   
    for(i=1;i<10;i++)  
    {  
        if(a[i]>larger)  
        larger = a[i];  
    }  
    return larger;  
}  
int radix_sort(int a[])  
{  
    int bucket[10][10], bucket_count[10];  
    int i, j, k, remainder, NOP=0, divisor=1, larger, pass;  
    larger = largest(a);  
    while(larger>0)  
    {  
        NOP++;  
        larger/=10;  
    }  
    for(pass=0;pass<NOP;pass++) 
    {  
        for(i=0;i<10;i++)  
        bucket_count[i]=0;  
        for(i=0;i<10;i++)  
        {  
            
            remainder = (a[i]/divisor)%10;  
            bucket[remainder][bucket_count[remainder]] = a[i];  
            bucket_count[remainder] += 1;  
        }  
        
        i=0;  
        for(k=0;k<10;k++)  
        {  
            for(j=0;j<bucket_count[k];j++)  
            {  
                a[i] = bucket[k][j];  
                i++;  
            }  
        }  
        divisor *= 10;  
    }  
}
void quick()
{
    int a[100],i,n;
    printf("enter the size of array\n");
    scanf("%d",&n);
    printf("enter the elements of array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    quick_sort(a,0,n-1);
    printf("the sorted array is\n");
    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}
int partition(int a[],int start,int end)
{
    int left,right,pivot,temp,p;
    pivot = left = start;
    right = end;
    p=0;
    while(p!=1)
    {
        while((a[pivot]<= a[right])&&(pivot != right))
        {
            right--;
        }
        if(pivot ==right){
            p=1;
        }
        else if((a[pivot] > a[right]))
        {
          temp = a[pivot];
          a[pivot] = a[right];
          a[right] = temp;
          pivot = right;
        }
        if(p!=1)
        {
            while((a[pivot]>=a[left])&&(pivot!=left))
            {
                left++;
            }
            if(pivot = left)
            {
                p = 1;
            }
            else if(a[pivot]<a[right])
            {
                temp = a[pivot];
                a[pivot] = a[left];
                a[left] = temp;
                pivot = left;
            }
        }
    }return pivot;
}
int quick_sort(int a[], int start,int end)
{
    int pivot;
    if(start < end)
    {
        pivot = partition(a,start,end);
        quick_sort(a,start,pivot-1);
        quick_sort(a,pivot+1,end);
    } 

}
