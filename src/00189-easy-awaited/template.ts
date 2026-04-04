type MyAwaited<T> =
  T extends (
    {
      then: (onfulfilled: (arg: infer U) => any) => any;
    }
  ) ?
    MyAwaited<U>
  : T;
  
type X = Promise<Promise<string>>;

type T = {
  then: (onfulfilled: (arg: number) => any) => any;
};
type a = Awaited<X>;
