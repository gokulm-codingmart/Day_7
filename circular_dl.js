const readline = require('readline-sync') 

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Cdl{
    constructor(head){
        this.head = null;
        this.size = 0;
    }

insert(head){
    let node = new Node(head);
    let temp;
    if(this.head==null){
        this.head = node;
        node.right = this.head;
        node.left = this.head;
        this.size++;
    }
    else{ 
        temp = this.head;
         while(temp.right!=this.head){
            temp = temp.right;
         }
        temp.right = node;
        node.left = temp;
        node.right = this.head;
        this.head.left = node;
        this.size++;
    }
  //  console.log(node.data);    
}

//displaying
display(){
    let temp = this.head;
    if(this.head==null){
        console.log("There are no nodes");
    }
    else {
        let dummy;
        do{
            console.log(temp.data);
            temp = temp.right;
        }while(temp!=this.head);
    }
}
displayrev(){
    let temp = this.head.left;
    if(this.head==null){
        console.log("There are no nodes");
    }
    else {
        let dummy;
        do{
            console.log(temp.data);
            temp = temp.left;
        }while(temp!=this.head.left);
    }
}

//insert at a given position
insertAt(data,pos){
    if(pos==this.size){
        this.insert(data)
    }
    else if(pos<=0 || pos>this.size){
        console.log("Operation invalid");
    }
    else if(pos<=this.size){
        let count = 0;
        let prev;
        let current = this.head;
        let node = new Node(data);
        while(count<pos){
            prev = current;
            count++;
            current = current.right;
        }
        node.right = current;
        prev.right = node;
        this.size++;
    }
    //console.log(this.size);
}
    //delete at a given position
deleteAt(pos){
    if(pos==0 || pos>this.size){
        console.log("Operation Invalid");
    }
    else if(pos==this.size){
        this.head = null
    }
    else{
        let temp;
        let prev;
        let current = this.head;
        let count = 0;
        while(count<pos){
            count++;
            current = current.right;
        }
        prev = current.right.right;
        prev.left = temp;
        current.right = current.right.right;
    }
}
    //Insert at beginning
insertAtBegin(head){
    if(this.size==0){
        this.insert(head);
    }
    else{
        let node = new Node(head);
        node.left = this.head.left;
        this.head.left.right = node;
        this.head.left = node;
        node.right = this.head;
        this.head = node;
    }
}
    //Delete at the end
delete(){
    if(this.head==null){
        console.log("Empty list");
    }
    else if(this.size==1){
        this.head = null;
    }
    else{
        let temp = this.head;
        while(temp.right!=this.head){
            temp = temp.right;
        }
        temp.left.right = this.head;
        this.head = temp.left.right;
        temp = null;
    }
}
}
let cdl = new Cdl()
cdl.insert(20)
cdl.insert(12)
cdl.insert(13)
cdl.insert(45)
let x = readline.question(`Enter one for Insert at a given position \n
Enter two for delete at a given position \n
Enter three for insert at a beginning \n
Enter four for delete at a end`);
// console.log(x);

switch(parseInt(x)){
    case 1:
        {
        // do{
        //     y = readline.question("Enter the number");
        //     if(y>=0){
        //         cll.add(x)
        //     }
        // }while(y>0)
        let val = readline.question("Enter the number");
        let pos = readline.question("Enter the position");
        cdl.insertAt(val,pos);
        break;
    }
    case 2:
        {
            let pos = readline.question("Enter the position");
            cdl.deleteAt(pos)
            break;
        }
    case 3:
        {
            let y = readline.question("Enter the number");
            cdl.insert(y);
            break;
        }
    case 4:{
        cdl.delete();
        break;
    }
    default:{
                console.log("Vanakam da mapla");
    }
}
// let x = readline.question("Enter");
// cdl.insert(14)   //has some problem
// cdl.insert(1)
// // cdl.insertAt(45,2)
// cdl.insertAtBegin(3)
// cdl.delete()
cdl.display()

//double century 