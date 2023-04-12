const root = [1,2,3,4,5,6]

var countNodes = function(root) {
    let l=root,r=root
    // 记录左右子树的高度
    let hl = 0,hr = 0

    while(l!==null) {
        l = l.left
        h1++
    }
    while(r!==null) {
        r = r.right;
        hr++
    }
    // 如果左右子树相等,那么是一棵满二叉树 高度为2的N次方-1
    if(hl === hr) {
        return Math.pow(2,hl) -1;
    }

    // 如果左右高度不同，则按照普通二叉树的逻辑计算
    return 1+countNodes(root.left)+countNodes(root.right);

};