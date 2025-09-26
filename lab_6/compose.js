const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const fn1 = compose(inc, twice, cube);
const fn2 = compose(inc, inc);
const fn3 = compose(inc, 7, cube);

function compose(...functions) {
  let calculate = (x) => {
    try {
      for (let fn of functions.reverse()) {
        if (typeof fn !== "function") {
          throw new TypeError("error");
        }
        x = fn(x);
      }
      return x;
    } catch (error) {
      return undefined;
    }
  };
  return calculate;
}
console.log(fn1(5));
console.log(fn2(7));
console.log(fn3(10));
