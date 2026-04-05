type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: infer U) => any ? U : never

function foo(arg1: string, arg2: number): void {}

type m = MyParameters<typeof foo>
