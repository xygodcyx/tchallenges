type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// function omit(todo, keys) {
//   const obj = {};
//   for (const key in keys) {
//     if (!(key in todo)) {
//       obj[key] = todo[key];
//     }
//   }
//   return obj;
// }
