const r1 = require("readline").createInterface({
  input: process.stdin,
  output:process.stdout
})
r1.question("enter name :",
  (answer)=>{
    console.log(`You entered ${answer}`)
    r1.close()
  }
)