/* Գրել ֆունկցիա, որը որպես արգումենտ կստանա items, category_name: items-ը պարունակում է 
օբյեկտներ հետևյալ տեսքի՝ {category: 'books', price: 500}(as example): Վերադարձնել նշված 
category_name-ին համապատասխան իրերի արժույթների գումարը:*/


function foo(items, category_name) {
    let sum = 0;
    for (let item of items) {
        if (item.category === category_name) {
            sum = sum + item.price;
        }
    }
    return sum;
}
let items = [
    {category: 'books', price: 500},
    {category: 'electronics', price: 200},
    {category: 'books', price: 150},
];

console.log(foo(items, 'books')); 
