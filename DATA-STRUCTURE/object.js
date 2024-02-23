


const obj = {
    name: 'saleel',
    age: 25,
    'saelel is a good boy': true,
    hay: function () {
        console.log(this.name);
    }
}
obj.hobby = 'kali'



console.log(obj);
obj.hay()
console.log(obj['saelel is a good boy']);