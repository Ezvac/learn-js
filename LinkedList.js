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

    pushBack(value){
        let newTail = new Element(value, null)
        let currentTail = this.tail

        currentTail.next = newTail

        this.tail = newTail
    }

    last(){
        let elast = this.tail;
        
        while (elast.next != null){
            elast = elast.next;
        }

        return elast;
    }

    count(){
        let count = 0
        let current = this.head
        while(current != null){
            current = current.next
            count++
        }
        return count

    }

    max(){
        let current = this.head
        if(current == null)
           return null
        let max = current.value
        let maxFoundAt = 0

        while (current.next != null){
            current = current.next

            if (current.value > max)
             max = current.value
        }

        return max;

    }

    deletеAt(position){
        if(position == 0){
            this.head = this.head.next
        }
        
        
        let  previous = this.head
        
        let previousPosition = 0
        while (previous != null){
            if (previousPosition == position){
                previous.next = previous.next.next
                break
            }
             previous = previous.next
             previousPosition++
        }

        if(position = this.count())
            this.tail = previous
        
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
a.push(12);
a.push(25);
a.push(16);
a.push(3);
console.log(a.last());
a.pushBack(2);

console.log(a);
a.deletеAt(0);
console.log(a);
console.log('count:', a.count());
console.log('max:', a.max());



/*let sum = (a, b) => a + b
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

reverse("-")*/