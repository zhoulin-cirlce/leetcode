//定义node节点
function Node(data, left, right) {  //1.定义一个对象表示节点数据结构
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
//show方法用来显示保存在节点的数据
function show() {
    return this.show()
}

function BST() {        //2.定义一个对象包含：节点，插入方法等
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}
//插入节点:左小右大的原则
function insert(data) {                         //3.定义插入数据方法
    var n = new Node(data, null, null);                        
    if (this.root == null) {
        this.root = n;                          //3.1如果根节点为空，new一个节点类型数据，根为data，左右为空
    } else {                                    
        var current = this.root;                //3.2根点节不为空时：设current=根节点
        var parent;
        while (current) {                       //3.3循环：是否存在current
            parent = current;                   //3.4设置父节点为current
            if (data < current.data) {
                current = current.left;         //3.5设置下次循环父节点参数.current为左节点
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

//初始数据代码
var nums = new BST();
nums.insert(23);   
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);


//中序
function inOrder(node) {
    if (!node == null) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}