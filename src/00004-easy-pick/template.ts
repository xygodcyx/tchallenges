type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
};


// 刷题思路，先写JS函数，再翻译成TS类型
// function myPick(todo, keys) {
//   const obj = {};
//   keys.forEach(key => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });
//   return obj;
// }

/**
 * 1. 返回对象
 * 2. 遍历 keys mapped
 * 4. 判断 key 是否存在与 todo.keys()
 * 3. 赋值
 */