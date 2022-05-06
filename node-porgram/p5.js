console.log("At the start...");
for(let request=1; request<=10; request++){
   setTimeout(function(){
       console.log("Request Processed : "+request);
   },3000);
}

console.log("At the end....");