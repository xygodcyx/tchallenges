type MyExclude<T, U> = T extends U ? never : T;

type e = MyExclude<'a' | 'b' | 'c', 'a' | 'c'>;

// function exclude(all, keys) {
//   const arr = [];
//   all.forEach(element => {
//     if (!keys.includes(element)) {
//       arr.push(element);
//     }
//   });
//   return arr;
// }
