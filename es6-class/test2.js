class Test{
  constructor(a, b){
      this.a = a;
      this.b = b;
  }
  display(){
      console.log(this.a +"  "+this.b);
  }
}

let obj = new Test(20,10); // obj--> a=20,b=10
obj.display();