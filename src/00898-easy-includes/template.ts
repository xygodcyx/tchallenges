type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (
    <T>() => T extends Y ? 1 : 2
  ) ?
    true
  : false;

// type Includes<T extends readonly any[], U> =
//   T extends [infer F, ...infer R] ?
//     Equal<U, F> extends true ?
//       true
//     : Includes<R, U>
//   : false;

type Includes<T extends readonly any[], U> =
  {
    [P in keyof T]: Equal<T[P], U>;
  } extends false[] ?
    false
  : true;

// type Includes<T extends readonly any[], U> =
//   true extends (
//     {
//       [P in keyof T]: Equal<T[P], U>;
//     }[number]
//   ) ?
//     true
//   : false;

type I<T extends readonly any[]> = T[number];

type i1 = Includes<[1, 2, 3, 5, 6, 7], 7>;
type i2 = Includes<[{}], { a: 'A' }>;
type i3 = Includes<[1 | 2], 1>;
type i4 = Includes<[true, 2, 3, 5, 6, 7], boolean>;
type i5 = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Dio'
>;

// function includes(T, U) {
//   T.forEach(t => {
//     if (t === U) {
//       return true;
//     }
//     return false;
//   });
// }
