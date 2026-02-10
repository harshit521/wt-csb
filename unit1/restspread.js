// function sum(...numbers){
//  let total = 0;
//  for(let i of numbers){
//   total = total+numbers[i];
//  }
//  return total
// }
// console.log(sum(1,2,3))


// let a = [1,2,34,45,56,67]
// let last = [...a];
// console.log(last);

// function test(...args){
//   console.log(args);
// }
// let arr = [1,2,3,4]
// test(...arr)


const isEven= (a)=>{
  if(a%2==0) console.log("even")
  else console.log("odd")
}

isEven(46)

const reverseString = (args)=>{
  return args.split("").reverse().join("")
}
console.log(reverseString("hello"));

const avgMarks = (...marks) =>{
  let avg = 0;
  for(let i in marks){
    avg = avg+marks[i];
  }
  let avgMark = avg/marks.length
  if(avgMark>40){
    return "pass"
  }
  return "fail"
}
console.log(avgMarks(23,45,23,43,21))