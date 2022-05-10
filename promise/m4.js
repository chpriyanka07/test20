function Messages(){
    this.f1 = ()=>{
        console.log("Message-F1");
    }
    this.f2 = ()=>{
        console.log("Message-F2");
    }
    this.f3 = ()=>{
        console.log("Message-F3");
    }
}
module.exports = new Messages();

