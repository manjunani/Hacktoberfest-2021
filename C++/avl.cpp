#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

class ANode{
public:
	int data;
	int height;
	ANode* left;
	ANode* right;
	ANode(){
		data =0;height=1;left=nullptr;right=nullptr;
	}
	ANode(int x){
		data =x;height=1;left=nullptr;right=nullptr;
	}
};

pair<ANode*, int> generateTree(vector<int> a, int l, int r){
	if(l>r){
		return {nullptr, 0};
	}
	int mid = (l+r)/2;
	ANode* root = new ANode(a[mid]);
	pair<ANode*, int> lc = generateTree(a, l, mid-1);
	pair<ANode*, int> rc = generateTree(a, mid+1, r);
	root->left = lc.first;
	root->right = rc.first;
	root->height = max(lc.second, rc.second)+1;

	return {root, max(lc.second, rc.second)+1};
}

void preOrder(ANode* root){
	if(root==nullptr)
		return;

	cout << "( " << root->data << ", " << root->height << ") ";
	preOrder(root->left);
	preOrder(root->right); 
}
void inOrder(ANode* root){
	if(root==nullptr)
		return;

	inOrder(root->left);
	cout << "( " << root->data << ", " << root->height << ") ";
	inOrder(root->right); 
}

int heightNode(ANode* root){
	if(root==nullptr)
		return 0;
	int hl = root->left?root->left->height:0;
	int hr = root->right?root->right->height:0;

	return max(hl, hr)+1;
}

int BalanceFactor(ANode* root){
	if(root==nullptr)
		return 0;
	int hl = root->left?root->left->height:0;
	int hr = root->right?root->right->height:0;

	return hl - hr;
}

ANode* LLRotation(ANode* root){
	if(root==nullptr)
		return nullptr;

	ANode* rootl = root->left;
	ANode* rootlr = rootl->right;
	rootl->right = root;
	root->left = rootlr;
	root->height = heightNode(root);
	rootl->height = heightNode(rootl);

	return rootl;
}
ANode* LRRotation(ANode* root){
	if(root==nullptr)
		return nullptr;
	ANode* rootl = root->left;
	ANode* rootlr = rootl->right;
	ANode* rootlrl = rootl->right->left;
	ANode* rootlrr = rootl->right->right;

	rootlr->right = root;
	rootlr->left = rootl;
	rootl->right = rootlrl;
	root->left = rootlrr;

	root->height = heightNode(root);
	rootl->height = heightNode(rootl);
	rootlr->height = heightNode(rootlr);

	return rootlr;

}
ANode* RRRotation(ANode* root){
	if(root==nullptr)
		return nullptr;

	ANode* rootr = root->right;
	ANode* rootrl = rootr->left;
	rootr->left = root;
	root->right = rootrl;
	root->height = heightNode(root);
	rootr->height = heightNode(rootr);

	return rootr;
}
ANode* RLRotation(ANode* root){
	return root;
}

ANode* insert(ANode* root, int val){
	if(root==nullptr){
		ANode* node = new ANode(val);
		return node;
	}
	if(root->data == val){
		return root;
	}

	if(root->data > val){
		root->left = insert(root->left, val);
	}
	if(root->data < val){
		root->right = insert(root->right, val);
	}
	root->height = heightNode(root);

	if(BalanceFactor(root)==2 and BalanceFactor(root->left)==1)
		return LLRotation(root);

	else if(BalanceFactor(root)==2 and BalanceFactor(root->left)==-1)
		return LRRotation(root);

	else if(BalanceFactor(root)==-2 and BalanceFactor(root->left)==-1)
		return RRRotation(root);

	else if(BalanceFactor(root)==-2 and BalanceFactor(root->left)==1)
		return RLRotation(root);

	return root;
}

int main(){
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i=0;i<n;i++){
		cin >> a[i];
	}
	sort(a.begin(), a.end());
	ANode* root = generateTree(a, 0, n-1).first;
	cout << endl;
	inOrder(root);
	cout << endl << endl << endl;
	preOrder(root);
	cout << endl;

	return 0;
}
