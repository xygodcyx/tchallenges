type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
type r2 = MyReadonly2<Todo1, 'title' | 'description'>
type r3 = MyReadonly2<Todo1>
