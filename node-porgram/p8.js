var x = [10,20,30,40,50];
console.log(x);
/*
for(let index in x){
   console.log(x[index]);   
}
*/
/*
for(let element of x)
  console.log(element);
 */ 
let customerList = [
    {id:1,cname:'cheeku'},
    {id:2,cname:'peeku'},
    {id:3,cname:'rinku'}
];
for(let customer of customerList)
    console.log(customer.id+" "+customer.cname);
