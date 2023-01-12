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
merge(pos,l2){
    if(l1==null && l1==null){    
        console.log("Unable to merge list as both are empty");
    }
    else{
        let temp = l1.head;
        for(let i=0;i<pos-1;i++){
            temp = temp.next;
        }
        let prev = temp.next;
        temp.next = l2.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        temp.next = prev;
    }
}

}
let l1 = new linkedList()
let l2 = new linkedList()
// let l3 = new linkedList()

l1.add(1)
l1.add(2)
l1.add(3)
l1.add(4)
l2.add(5)
l2.add(6)
l2.add(7)
let pos = 3
l1.merge(pos,l2)
l1.print()

// function merging(pos,l1,l2){
//     let count=0;
//     let prev;
//     let temp = l1.head
//     l3.next = temp;
//     console.log(l1.this.data);
//     let current = l3.head;
//     if(count<pos){
//         prev = current;
//         count++;
//         current = current.next;
//     }
//     prev = l2.head;
//     while(prev.next!=null){
//         prev = prev.next;
//     }
//     prev.next = current;
//     return l3;
// }


