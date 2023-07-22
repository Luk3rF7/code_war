const arr = [1,5.2,4,0,-1]
const arrZero = []
function sum (numbers) {
  return numbers.reduce((total,acc) => total + acc ,0)
}
console.log(sum(arrZero))