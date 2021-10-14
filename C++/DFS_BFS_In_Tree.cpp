 #include<bits/stdc++.h>
using namespace std;
struct Tree
{
    int data;
    Tree *left;
    Tree *right;
};
Tree* newNode(int num){
    Tree *node = new Tree;
    node->data = num;
    node->left = NULL;
    node->right = NULL;
    return node;
}
Tree* createTree(Tree* root, int num){
    if(!root){
        Tree *temp = newNode(num);
        root = temp;
        return root;
    }
    if(root->data > num ){
        root->left = createTree(root->left, num);
    }
    else{
        root->right = createTree(root->right, num);
    }
    return root;
}
void dfs(Tree *curr){
    if(!curr)
        return;
    dfs(curr->left);
    cout << curr->data << " ";
    dfs(curr->right);
}
void bfs(Tree *root){
    queue<Tree *> q;
    q.push(root);
    while(!q.empty()){
        int len = q.size();
        while(len--){
            Tree *curr = q.front();
            q.pop();
            cout << curr->data << " ";
            if(curr->left)
                q.push(curr->left);
            if(curr->right)
                q.push(curr->right);
        }
    }
}
int main(){
    Tree *root = NULL;
    int num;
    cout << "Enter your first node in tree=";
    cin >> num;
    root = createTree(root, num);
    char choice = 'y';
    while(choice=='y'){
        cout << "Do you want to enter more nodes?\n Press 'y' for yes or 'n' to exit\n";
        cin >> choice;
        if(choice=='y'){
            cout << "Enter next node=";
            cin >> num;
            root = createTree(root, num);
        }
    }
    cout << "Depth first search: ";
    dfs(root);
    cout << "\n";
    cout << "Breadth first search: ";
    bfs(root);
    cout << "\n";
}