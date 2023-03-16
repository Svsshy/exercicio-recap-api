
//let forEach = (array, callback) => {

   // for (let index = 0; index < array.length; index++) {
   //     const element = array[index];
  //      callback(element, index, array)
  //  }
    

//}
// os argumentos do callback são: Elemento, indice, Array. 





//[2, 4, 6, 8, 10].forEach(element => {
//     console.log(element*2)
//});


//forEach([2, 4, 6, 8, 10], (element, indice, array) => {
 //   console.log(element*2, indice, array)
//})



//let result = array.map((element) => {
//    return element * 2
//})

let array = [1, 2, 3, 4]


let map = (array, função) => {

    let newArray = []

    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(função(element, index, array))
    }

    return newArray
}



let novaArray = map(array, (element) => {
      return console.log(element * 2)
})



let lolArray = array.map((element) => {
    return console.log(element * 2)
})


console.log(lolArray)