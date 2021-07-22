//complex map exercise
const products=[{name:'itel', price:20},
{name:'samsung', price:40},
{name:'Lg', price:30},
{name:'xaomi', price:10},
{name:'iphone', price:50}]

const saleProducts= products.map((product)=>{
    if(product.price>30){
        return{ name:product.name, price:product.price/2};
    }
    else
    return product;
})
console.log(saleProducts);


//map method
// const prices=[10,30,15,25,50,50,40,5];
//  const salePrices= prices.map((price)=>{
//      return price/2;
//  }) 
//  console.log(salePrices);