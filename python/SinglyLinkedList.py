"""SINGLY LINKED LIST"""


class Node:
    def __init__(self, data=None, next=None) -> None:
        self.data = data
        self.next = next


class SinglyLinkedList:
    def __init__(self) -> None:
        self.head = None


    def visualizeList(self):
        if self.head is None:
            print("Linked List is Empty!")
        else:
            current = self.head
            ll = ""

            while current is not None:
                ll = ll + str(current.data) + "-->"
                current = current.next
            print(ll)


    def listLength(self) -> int:
        count = 0
        current = self.head

        while current is not None:
            current = current.next
            count += 1
        return count


    def insertAtBeginining(self, data):
        newNode = Node(data, None)

        if self.head is None:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode


    def insertAtEnd(self, data):
        newNode = Node(data, None)
        if self.head is None:
            self.head = newNode
        else:
            current = self.head
            
            while current.next is not None:
                current = current.next
                
            current.next = newNode
            newNode.next = None


    def insertAtPosition(self, data, position: int):
        newNode = Node(data, None)

        if position < 0 or position > self.listLength():
            print('Invalid Index! List is either empty or index is either negative or out of range')
        elif position == 0:
            self.insertAtBeginining(data)
        elif position == self.listLength():
            self.insertAtEnd(data)     
        else:
            current = self.head
            count = 0

            while current is not None:
                if count == position - 1:
                    newNode.next = current.next
                    current.next = newNode
                    break
                
                current = current.next
                count += 1


    def deleteFromBegining(self):
        if self.head is None:
            print('Can not delete! Linked List is Empty!')
        else:
            self.head = self.head.next
    
    
    def deleteFromEnd(self):
        if self.head is None:
            print('Can not delete! Linked List is Empty!')
        else:
            current = self.head
            previous = self.head

            while current.next is not None: 
                previous = current
                current = current.next
                
            previous.next = None


    def deleteFromPosition(self, position: int):
        if position < 0 or position >= self.listLength():
            print('Invalid Index! List is either empty or index is either negative or out of range')
        elif position == 0:
            self.deleteFromBegining()
        elif position == self.listLength() - 1:
            self.deleteFromEnd()
        else:
            count = 0
            current = self.head

            while current.next is not None:
                if count == position - 1:
                    current.next = current.next.next
                    break

                count += 1
                current = current.next 


    def insertMultipleNodes(self: object, nodesData: list):
        self.head = None
        for data in nodesData:
            self.insertAtEnd(data)