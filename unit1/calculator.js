const calculator =()=> ({
  add: (a,b) => a+b,
  sub: (a,b) => a-b,
  mul: (a,b) => a*b,
  div: (a,b) => (b==0)?"error aa gyi": a/b,
})

console.log(calculator().add(3,2))
console.log(calculator().sub(3,2))
console.log(calculator().mul(3,3))
console.log(calculator().div(3,3))
