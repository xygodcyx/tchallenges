type Push<T extends any[], U> = [...T, U]

// function push(T, U) {
//   const result = []
//   T.forEach((element) => {
//     result.push(element)
//   })
//   result.push(U)
//   return result
// }
