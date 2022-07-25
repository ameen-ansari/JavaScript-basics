// var name="ameen akbar"
// console.log(name);
// console.log("name");
// var temp=(6*9/5)+32
// console.log(temp);

// Ternary operators;
// num1=2
// num2=num1<2 || num1==2? 'less than 2' :'greater than 2';
// console.log(num2);

// Array Destruction;
// const array1=[1,2,3,4,5]
// const array2=['ameen','akbar','mohsan','ali',]
// const array3=[...array1,'inbetween',...array2 ]
// console.log(array3);
// var var2=array1[3]
// console.log(var2);
// var var1=array1.slice(0,3)
// console.log(var1);
// array2.push('ali','asghar')
// console.log(array2);
// let [first,second,third]=array1
// console.log(first);
// console.log(second);
// console.log(third);
// for(intof of array2)
// console.log(intof)
// for(intin in array2)
// {
//     console.log(array2[intin]);
// }

// object Destruction;
// obj1={
//     name:'ameen',
//     fname:'akbar',
//     class:'Software development',
// }
// obj2={
//     name:'mohsin',
//     fname:'ashraf',
//     class:'10',
// }
// obj3={
//     name:'ali',
//     fname:'asghar',
//     class:'pak airforce',
// }
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// obj4={...obj3,...obj1}
// console.log(obj4);
// obj3['hobby']='programming'
// console.log(obj3);

//About Functions;
// 1--(This Function tells me value is Even/Odd);
// const intval=(element)=>{
//     if(element % 2 === 0){
//         console.log('Number is Even');
//     }
//     else{
//         console.log('Number is Odd');
//     }
// }
// intval(34)
// intval(23)

// 2--(This Function tells me the third index of any String);
// const strfval = (element) => {
//   console.log(element[2]);
// };
// let one = [12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// strfval(one);

// 3--(This Function tells me the relative index);
// let string = "string";
// const indexfd = (string, index) => {
//   for (i = 0; i < 10; ) {
//     console.log(string[index]);
//     i++;
//     break;
//   }
// };
// indexfd(string, 4);
// indexfd(string, 2);
// array = ["ameen", "akbar", "mohsan", "ali"];
// indexfd(array, 2);

// for(i=0;i<10;){
// console.log('danna');i++;
// }

// 4--(About Functions in a Function)
// const func1=(a,b,c)=>{
//     console.log('func1');
//     var c=a+b
//     console.log(c);
//     func2=()=>{
//         console.log('func2');
//         return 'abc'
//     }
//     func2()
//     return func2
// }
// func1(1,9)
// func2()

// 5--(About Callback Functions)
// func3=(z)=>{
//     console.log('func3');
//     // console.log(z);
//     // z(5,5)
// }
// func4=(a,b,c)=>{
// console.log('func4');
// c=a+b
// console.log(c);
// }
// func3(func4)
// func4(3,4)
/**
 * @param {string} name
 */
// 6--About forEach Loop
// const array1=[1,2,3,4,5,6]
// const array2=['ameen','akbar','mohsin','ashraf','array2']
// console.log(array1);
// console.log(array2);
//(a) Case in forEach loop
// array2.forEach(
//     infunc=(name,index)=>{
//         console.log(`${index+1}:my name is ${name}`);
//     }
//     );
    
//(b) Case in other loops
//     outfunc=(name,index)=>{
//        console.log(`${index+1}:my name is ${name}`);
//    }
// for(i=0;i<array2.length;i++){
//     outfunc(array2[i],i)
// console.log('My name is',array2[i]);}

// (c)Objects in Array Case
// const objarray=[
//    {name:'ameen',} ,
//    {name:'ali',} ,
//    {name:'bajwa',} ,
//    {name:'zafar',} ,
//    {name:'qalsoom',} ,
//    {fname:'akbar',} ,
//    {fname:'umair',} 
// ] 
// console.log(objarray);
// obj1.forEach((element,index)=>{console.log(index+1,element.name);});

// (d)About Map 
// const maptype=array1.map((a)=>{console.log('in the map');return a+1})

// (e)about filter
// const filtertype=array1.filter((a)=>{
    //     if(a%2===0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
//     return a%2===0}) --->[return a array]


// (g)about some
// const sometype=array1.some((a)=>{
//     return a%2===0})

// (h)about every
// const everytype=array1.every((a)=>{
//     return a%2===0})

// (i)about Reduce
// const sum = array1.reduce((accumulator,currentValue)=>{
    //     return accumulator + currentValue;},0)
    // console.log(sum);
    
// (j)about sort
// array1.sort((a,b)=>{return a-b;}) --->[Assending Order]
// array1.sort((a,b)=>{return b-a;}) --->[Desendind Order]

// (k)fill method
// array3 = new Array(6).fill(9)
// array3.fill(0,2,5)

// (L)about splice
// array3=array1.splice(1,1)


// ---> Demo of __prototype__
//  dobj = {
//     country:'Pakistan',
//     religion:'Islam'
//  }

// const objcr = function(name,fname,item,location){
//     const customer = Object.create(dobj)
//     customer.name = name,
//     customer.fname = fname,
//     customer.item = item,
//     customer.address = location
//     return customer;
// }
// user1 = objcr("Ameen","Akbar","Apples","Faisalabad");
// console.log(user1.religion);

// --->Another __proto__ & good from privious method
// function proto(name,fname,address) {
//         this.name = name,
//         this.fname = fname,
//         this.address = address
//     }
//     proto.prototype = []
//     console.log(new proto('ameen','akbar','fsd'));
//     proto.prototype.abs = 'abc'
//     // proto.prototype.abs = 'abc' [--How to add protype--]
//     console.log(proto.prototype);

// --->Another --->Class Method<--- & good from privious method
// class fclass {
//     constructor(name,fname){
//         this.name = name
//         this.fname = fname
//     }
//     abs = 'abcd'
// }
// console.log( new fclass('ameen','akbar'));
// console.log(typeof new fclass('ameen','akbar'));