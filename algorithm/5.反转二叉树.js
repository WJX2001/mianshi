var mirrorTree = function(root) {
    traverse(root)
    return root
};

function traverse(root) {
    if(root === null){
        return 
    }

    // 前序位置，交换节点
    let tmp = root.left
    root.left = root.right
    root.right = tmp

    // 遍历框架
    traverse(root.left)
    traverse(root.right)
}