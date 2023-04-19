var isPalindrome = function(head) {
    left = head
    return traverse(head)
};

function traverse(right){
    if(right === null) return true
    var res = traverse(right.next)
    // 后续位置
    res = res && (right.val === left.val) 
    left = left.next
    return res
}