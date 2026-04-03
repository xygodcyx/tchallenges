// type First<T extends any[]> =T['length'] extends 0 ? never: T[0];

// type First<T extends any[]> = T extends [] ? never : T[0];

type First<T extends any[]> =
  T extends [infer F, ...any[]] ? F : never;

function first(arr: any[]) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (arr.length === 0) {
    return 'never';
  } else {
    return arr[0];
  }
}
