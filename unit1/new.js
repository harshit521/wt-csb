const user = {
  name:"aj",
  age:32,
  welcome:()=>{
    console.log(this.name)
    console.log(this)
  }
}
user.welcome()
user.name = "ajay"
user.welcome()