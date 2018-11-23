class mylist{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value){
        let aHead = this.head;
        let newElement = new Element(value, aHead);

        if (this.head == null){
            this.tail = newElement;
        }
        
        this.head = newElement;
    }

    last(){
        let elast = this.head;
        
        while (elast.next != null){
            elast = elast.next;
        }

        return elast;
    }
    max(){
        let current = this.head
        if(current != null)
           return null
        let max = current.value
        maxFoundAt = 0
        
        while (current.value != null){
            current = current.next

            if (current.value > max)
             max = current.value
        }

    }
    deletеAt(position){
        position = position -1
        let  current = this.head
        
        let currentPosition = 0
        while (current != null){
            if (currentPosition == position){
                let oldcurrent = current
                current = oldcurrent.next
                oldcurrent.next = current.next
            }
             current = current.next
             currentPosition++
        }


    }

    pushBack(value){
        let newTail = new Element(value, null);
        let currentTail = this.tail;

        currentTail.next = newTail; 

        this.tail = newTail;
    }
}

class Element{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

a = new mylist();
a.push(1);

a.last('keke');

a.push(3);
a.pushBack(2);

console.log(a);
a.deletеAt(1);
console.log(a);


let sum = (a, b) => a + b
let plusOne = (num) => sum(num, 1)

let result = ""

let writeLetter = (letter, output) => output + letter
let write = (letter) => { 
    result = writeLetter(letter, result)
}

write("hello ")
write("hello ")
write("how you doing? ")

console.log(result)




function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--) {
        o += s[i];
        console.log(3)
    }

    return o;
  }

reverse("-")