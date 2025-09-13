//Функція, яка приймає масив і рахує кількість елементів кожного типу (number, string, boolean).


const Array = [1, 'two', 3, 'four', true, 'hello', 5, 12, -200, false, 'word', -199,]
const Types = { number: 0, string: 0, boolean: 0 };
function countTypes(arr) {
    for (const item of arr) {
        const type = typeof item;
                if (type in Types) {
            Types[type]++;
        }
    }
}
countTypes(Array);
console.dir(Types);