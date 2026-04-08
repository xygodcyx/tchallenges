type MyReturnType<T extends (...params: any[]) => any> =
  T extends (...params: any[]) => infer R ? R : never

const fn = (v: boolean) => (v ? 1 : 2)

function fn2(number1: number, number2: number) {
  //dsjkajd
  return 1 + 1
}
type r = MyReturnType<typeof fn2>
