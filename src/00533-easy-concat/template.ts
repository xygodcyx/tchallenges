type Concat<
  T extends readonly any[],
  U extends readonly any[],
> = [...T, ...U];

const tuple = [1] as const;

type c1 = Concat<[], []>;
type c2 = Concat<['1', 2, '3'], [false, boolean, '4']>;
type c3 = Concat<typeof tuple, typeof tuple>;

type t1 = typeof tuple;

// function concat(T, U) {
//   const result = [];
//   [...T, ...U].forEach(element => {
//     result.push(element);
//   });
//   return result;
// }
