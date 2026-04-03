type TupleToObject<
  T extends readonly (string | number | symbol)[],
> = {
  [P in T[number]]: P;
};

// function tupleToObject(tuple) {
//   const obj: any = {};
//   for (const key in tuple) {
//     obj[tuple[key]] = tuple[key];
//   }
//   return obj;
// }
