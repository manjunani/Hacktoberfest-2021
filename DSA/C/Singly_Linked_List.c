#include<stdio.h>
#include<stdlib.h>    // this is put for the exit function.
struct node
{
    int data;
    struct node *next;
};
struct node *head;  
void create();
void insert_beg();   
void insert_end();
void insert_pos(); 
void begin_delete();  
void last_delete();  
void delete_pos();  
void display();  
void search();  
void main ()  
{  
    int choice;  
    while(1)   
    {  
        printf("*Linked list operations*\n");  
        printf("Choose one option\n");
        printf("1.create.\n2.Insert at begining\n3.Insert at end\n4.Insert at any pos\n5.Delete from Beginning\n6.Delete from last\n7.Delete node specified location\n8.Show\n9.Exit\n");  
        printf("Enter choice?\n");         
        scanf("%d",&choice);  
        switch(choice)  
        {  
            case 1:
            create();
            break;
            case 2:  
            insert_beg();      
            break; 
            case 3:  
            insert_end();         
            break; 
            case 4:  
            insert_pos();       
            break;  
            case 5:  
            begin_delete();       
            break;  
            case 6:  
            last_delete();        
            break;  
            case 7:  
            delete_pos();
            break;  
            case 8:  
            display();        
            break;  
            case 9:  
            exit(1);  
            break;  
            default:  
            printf("invalid choice\n"); 
        }  
    }  
}
void create()
{
    struct node *newnode,*temp;
    head = NULL;
    int choice;
    while(choice)
    {
    newnode = (struct node*)malloc(sizeof(struct node));
    printf("enter the date of the new node created\n");
    scanf("%d",&newnode->data);
    newnode ->next = NULL;
    if(head == NULL)
    {
        head = newnode;
        temp=newnode;
    }
    else
    {
        temp->next = newnode;
        temp=newnode;
    }
    printf("do you want to continue give 1 for yes and 0 for no ???");
    scanf("%d",&choice);
    }
}
void insert_beg()
{
    struct node *newnode;
    newnode = (struct node*)malloc(sizeof(struct node));
    printf("enter the data you want to store in the new node you created \n");
    scanf("%d",&newnode->data);
    newnode->next = head;
    head = newnode;
}
void insert_end()
{
    struct node *ptrlast,*temp=head;
    ptrlast = (struct node*)malloc(sizeof(struct node));
    printf("enter the data you want to store in the new node you created \n");
    scanf("%d",&ptrlast->data);
    ptrlast->next = NULL;
    while(temp->next!=NULL)
    {
        temp=temp->next;
    }
    temp->next = ptrlast;
}
void insert_pos()
{
    int i,pos,item;   
    struct node *ptr, *temp;  
    ptr = (struct node *) malloc (sizeof(struct node));  
    if(ptr == NULL)
    {  
        printf("overflow\n");  
    }  
    else  
    {  
        printf("enter element value you want to enter\n");  
        scanf("%d",&item);  
        ptr->data = item;  
        printf("enter the location after which you want to insert ");  
        
        scanf("%d",&pos);  
        temp=head;  
        for(i=0;i<pos;i++)  
        {  
            temp = temp->next;  
            if(temp == NULL)  
            {  
                printf("can't insert\n");  
                return;  
            }  
          
        }  
        ptr ->next = temp ->next;   
        temp ->next = ptr;   
        printf("Node inserted\n");  
    }  
}
void begin_delete()  
{  
    struct node *temp;  
    if(head == NULL)  
    {  
        printf("\nList is empty\n");  
    }  
    else   
    {  
        temp = head;  
        head = temp->next;  
        free(temp);  
        printf("Node deleted from the begining ...\n");  
    }  
}  
void last_delete()  
{  
    struct node *pretemp1,*temp;  
    if(head == NULL)  
    {  
        printf("list is empty\n");  
    }  
    else if(head -> next == NULL)  
    {  
        head = NULL;  
        free(head);  
        printf("Only node of the list deleted ...\n");  
    }  
          
    else  
    {  
        temp = head;   
        while(temp->next != NULL)  
        {  
            pretemp1= temp;  
            temp = temp ->next;  
        }  
        pretemp1->next = NULL;  
        free(temp);  
        printf("Deleted Node from the last ...\n");  
    }     
} 
void delete_pos()
{
    struct node *temp,*nexttemp1;  
    int pos,i;    
    printf("Enter the location of the node after which you want to perform deletion \n");  
    scanf("%d",&pos);  
    temp=head;  
    for(i=0;i<pos;i++)  
    {  
        nexttemp1 = temp;       
        temp = temp->next;  
              
        if(temp == NULL)  
        {  
            printf("Can't delete\n");  
            return;  
        }  
    }  
    nexttemp1 ->next = temp ->next;  
    free(temp);  
    printf("Deleted node %d ",pos+1); 
}
void display()
{
    struct node *temp;
    int  count=0;
    temp = head;
    printf("ELEMENTS ARE\n");
    while(temp!=NULL)
    {
        printf("%d\n",temp->data);
        temp=temp->next;
        count++;
    }
    printf("count is: %d",count);
}

