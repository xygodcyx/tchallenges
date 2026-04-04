type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface Model1 {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type p = PickByType<Model1, boolean>;

// function pickByType(T, U) {
//   const obj = {};
//   for (const key in T) {
//     if (!Object.hasOwn(T, key)) continue;
//     if (typeof T[key] === U) {
//       obj[key] = T[key];
//     }
//   }
//   return obj;
// }
