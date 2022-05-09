function first(val,callback){
  console.log("First called..."+val);
  callback(val+2); // ye first ka callback call karega
}
function second(val,callback){
  console.log("Second called.."+val);
  callback(val+2);// ye second ka callback chalega
}
function third(val,callback){
  console.log("Third called..."+val);
  callback();// ye third ka callback chalega
}

first(10,function(n){
   second(n,function(n){
     third(n,function(){
       console.log("Finished....");
     })
   })
})