#include<stdlib.h>
#include<stdio.h>
struct Queue_element{
  int a;
  struct Queue_element *p;
};
struct Queue_element *front,*rear;
void show();
void nq(int);
void dq();
void main(){
  nq(2);
  nq(3);
  nq(4);
  printf("\n queue is:\n");
  show();
  printf("\n after deletion\n");
  dq();
  show();

}
void nq(int t){
  struct Queue_element *temp;
  temp=malloc(sizeof(struct Queue_element));
  temp->a=t;
  if(front==NULL){
    rear=front=temp;
    return ;
  }
  else{
    rear->p=temp;
    rear=temp;
    temp->p=NULL;
  }

}
void dq(){
  if(front==NULL){
    printf("Queue underflow\n");
    return;
  }
  if(front==rear){
    front=rear=NULL;
    return;
  }
  front=front->p;
}
void show(){
  struct Queue_element *temp=front;
  while (temp!=NULL) {
    /* code */
    printf("%d--",temp->a);
    temp=temp->p;
  }
}
