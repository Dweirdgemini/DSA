class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; 
    }

    
    push(item) {
        this.data[this.length] = item; 
        this.length++; 
        return this.length; 
    }
}

const myNewArray = new MyArray();
console.log(myNewArray.push('meatball')); 
console.log(myNewArray);