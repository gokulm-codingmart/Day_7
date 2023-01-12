const readline = require('readline-sync')
// creation of node part
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//linked list
class linkedList{
    constructor(){
        this.head = null;
    }

// Adding element to the end
add(head){

    let node = new Node(head); //creating instance of node box.

    let temp; //for storing head part if not null

    if(this.head==null){
        this.head = node;
    }
    else{
        temp = this.head;
        //Iterating to the end to add .
        while(temp.next){ 
            temp = temp.next;
        }
        temp.next = node 
    }
}
print(){
    let temp  = this.head;
    while(temp.next!=null){
        console.log(temp.data)
        temp = temp.next
    }
   console.log(temp.data)
}
deleteDuplicates() {
    let temp = this.head;
    while(temp.next!=null){
        if(temp.data == temp.next.data){
            temp.next = temp.next.next
        }
        else{
            temp = temp.next
        }
    }
};
}

let ll = new linkedList(); // Instance of new object

ll.add(1)
ll.add(1)
ll.add(2)
ll.add(4)
ll.add(4)

// let x; //input
// do{
//    x = readline.question("Enter the input")
//    if(x>=0){
//     ll.add(x)
//    }
// }while(x>0)
console.log("Before duplicates");
ll.print()
ll.deleteDuplicates()
console.log("After duplicates");
ll.print()
