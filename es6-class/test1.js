class Test{
    m1(){
        console.log("m1-called....");
    }
    static m2(){
        console.log("m2-called.....");
    }
}

let obj = new Test();
obj.m1();

Test.m2();


