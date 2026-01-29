function pritage(){
  this.age = 25;
  setTimeout(function(){
    console.log(this.age)
  },1000)
}
console.log("hii")
pritage();