type If<C extends boolean, T, F> = C extends true ? T : F;

type i = If<boolean, 'a', 2>;

// function Iif(C, T, F) {
//   if (C === null) {
//     throw new Error();
//   }
//   if (C === 'boolean') {
//     return T + F;
//   }
//   return C === 'true' ? T : F;
// }
