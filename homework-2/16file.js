/*Գրել օբյեկտ, որը պարունակում է product-ներ և մեթոդներ, որոնց միջոցով կկարողանանք կատարել 
հետևյալը՝
Վերադարձնել այն product-ները որոնց ժամկետը անցած չէ
Վերադարձնել այն product-ների price-երի գումարը, որոնց ժամկետը անցած չէ, և որի category-ն 
համապատասխանում է փոխանցված արգումենտի արժեքին */

const store = {
    products: [
        { name: 'apple', expiration: '2023-10-01', price: 2, category: 'fruits' },
        { name: 'banana', expiration: '2023-09-20', price: 1, category: 'fruits' },
        { name: 'milk', expiration: '2023-09-25', price: 3, category: 'dairy' },
    ],
    getNonExpiredProducts: function() {
        let goodProducts = [];
        const today = '2023-09-24';
        
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].expiration > today) {
                goodProducts.push(this.products[i]);
            }
        }
        
        return goodProducts;
    },
    
    getSumOfNonExpiredByCategory: function(category) {
        let total = 0;
        const today = '2023-09-24';
        
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].expiration > today && this.products[i].category === category) {
                total += this.products[i].price;
            }
        }
        
        return total;
    }
};
const goodProducts = store.getNonExpiredProducts();
console.log(goodProducts); 

const totalPriceOfFruits = store.getSumOfNonExpiredByCategory('fruits');
console.log(totalPriceOfFruits); 