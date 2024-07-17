// creation
const creation = () => {
  let arr = [1, 2, 3, 4, 5]
  console.log(arr)
}

// merge
const merge = () => {
    let arr =[1,2,3,4,5]
  let arr2 = [6, 7, 8, 9, 10]
  let arr3 = [...arr, ...arr2]
  console.log(arr3)
}

// new array
const newarr = () => {
  let size = Number(prompt('Enter the size for the array'))
  let arr4 = []
  for (let i = 0; i < size; i++) {
    arr4[i] = Number(prompt('Enter the ' + Number(i + 1) + ' number :'))
  }
  console.log(arr4)
}

//pop
const pop = () => {
  let size = Number(prompt('Enter the size for the array'))
  let arr4 = []
  for (let i = 0; i < size; i++) {
    arr4[i] = Number(prompt('Enter the ' + Number(i + 1) + ' number :'))
  }
  console.log(arr4)
  arr4.pop()
  console.log(arr4)
}

//push
const push = () => {
  let arr = [1, 2, 3, 4, 5]
  console.log(arr)
  arr.push(Number(prompt()))
  console.log(arr)
}

//reverse
const reverse = () => {
  let arr = [1, 8, 3, 4, 5]
  console.log(arr)
  arr.reverse()
  console.log(arr)
}

//sort
const sort = () => {
  let arr = [3, 2, 5, 7, 1]
  console.log(arr)
  arr.sort()
  console.log(arr)
}

//unshift
const unshift = () => {
  let arr = [1, 2, 3, 4, 5]
  console.log(arr)
  arr.unshift(Number(prompt()))
  console.log(arr)
}

//shift
const shift = () => {
  let arr = [1, 2, 3, 4, 5]
  console.log(arr)
  arr.shift()
  console.log(arr)
}

//indexOf
const indexof = () => {
  let size = Number(prompt('Enter the size for the array'))
  let arr4 = []
  for (let i = 0; i < size; i++) {
    arr4[i] = Number(prompt('Enter the ' + Number(i + 1) + ' number :'))
  }
  console.log(
    arr4.indexOf(Number(prompt('Enter the number to find the index')))
  )
}

//find
const find = () => {
    let size = Number(prompt('Enter the size for the array'))
    let arr4 = []
    for (let i = 0; i < size; i++) {
      arr4[i] = Number(prompt('Enter the ' + Number(i + 1) + ' number :'))
    }
    console.log(
      arr4.find(check)
    )
    function check(arr){
        return arr>0;
    }
}

//includes
const includes = () => {
    let arr = [1, 2, 3, 4, 5]
    console.log(arr)
    console.log(arr.includes(Number(prompt())))
}

//filter
const filter = () => {
    let arr = [1, 2, 3, 4, 5]
    console.log(arr)
    console.log(arr.filter(check))
    function check(arr){
        return arr>2;
    }
}

//map
const map = () => {
    let arr = [1, 2, 3, 4, 5]
    console.log(arr)
    console.log(arr.map(check))
    function check(arr){
        return arr*arr
    }
}