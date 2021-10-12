/**
 * @author wahyaumau
 * This class represents a binary tree with integer values
 */
class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(){}
    public TreeNode(int val){
        this.val = val;
    }
    public TreeNode(int val, TreeNode left, TreeNode right){
        this.val = val;
        this.left = left;
        this.right = right;
    }

    /**
     *
     * @param root: a tree root
     * @return boolean
     * A binary tree is symmetric if the root node’s left subtree is a mirror reflection of the right subtree
     * Example, this tree is symmetric
     *      1
     *    /   \
     *   2     2
     *  / \   / \
     * 3   4 4   3
     *
     */
    public static boolean isSymmetric(TreeNode root){
        if(root == null) return true;
        return isTreeMirrored(root.left, root.right);
    }

    public static boolean isTreeMirrored(TreeNode left, TreeNode right){
        if(left == null && right == null){
            return true;
        }
        if(left == null || right == null){
            return false;
        }
        return left.val == right.val && isTreeMirrored(left.left, right.right) && isTreeMirrored(left.right, right.left);
    }
}

public class BinaryTreeSymmetric {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        TreeNode left = new TreeNode(2);
        left.left = new TreeNode(3);
        left.right = new TreeNode(4);
        TreeNode right = new TreeNode(2);
        right.left = new TreeNode(4);
        right.right = new TreeNode(3);
        root.left = left;
        root.right = right;

        // True
        System.out.println(TreeNode.isSymmetric(root));

        root.right.val = 5;

        // False
        System.out.println(TreeNode.isSymmetric(root));

    }
}
