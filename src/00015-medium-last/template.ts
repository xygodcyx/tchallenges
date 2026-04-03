type Last<T extends any[]> =
  T extends [...any[], infer L] ? L : never;

type l = Last<[2, 1]>;

function last(arr) {
  if (arr.length === 0) {
    return 'never';
  } else {
    return arr[arr.length - 1];
  }
}
