const promt= require('prompt-sync')();
console.log('***This is my time pass Calculater***')
const name = promt('Enter your name: ');
console.log('Hello, '+name);
console.log('This is our menu :1. Addition \n2. subtraction\n3. Multiplication\n 4. Divison');
const n1 = promt('Enter your first number: ');
const n2 = promt('Enter your second number: ');
const ch = promt('Enter your choice of operation: ');
if (ch=1){
  console.log('sum ='n1 + n2);  
}
else if (ch=2){
    console.log('Subtraction = 'n1-n2);
}
else if (ch=3){
    console.log('Product= ' n1*n2);
}
else (){
    console.log('division = 'n1/n2);
}