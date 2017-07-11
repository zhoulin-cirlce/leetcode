/* Q:The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
        Given two integers x and y, calculate the Hamming distance.
    Note:
    0 ≤ x, y < 2(31).
    Input: x = 1, y = 4

    Output: 2

    Explanation:
    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑   ↑

    The above arrows point to positions where the corresponding bits are different.

    翻译：求汉明距离。汉明距离：两个整数化为二进制，从右往左对应位的不同值一共多少个？
*/

//A:
var hammingDistance = function(x, y) {
   return (x^y).toString(2).split('1').length-1;  //位异或运算:二进制一一对比,不同为1,相同为0
};
