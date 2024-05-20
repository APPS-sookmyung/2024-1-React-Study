export default function cartReducer(cart, action) {
    switch(action.type){
        case 'added':{
            const {category, name, price, quantity} = action;
            return {
                ...cart,
                products: [...cart.products, {category, name, price, quantity, id: cart.products.length+1}],
                totalPrice: cart.totalPrice + price * quantity,
                totalQuantity: cart.totalQuantity + quantity,
            };
        }

        case 'changed':{
            const {name, newPrice, newQuantity } = action;
            const newProducts = cart.products.map((product)=> {
                if(product.name === name){
                    return {...product, price: newPrice, quantity: newQuantity};
                }
                return product;
            });
            return {
                ...cart,
                products: newProducts,
                totalPrice : newProducts.reduce((total, product)=> total + product.price*product.quantity, 0),
                totalQuantity: newProducts.reduce((total, product)=> total+product.quantity, 0),
            };
        }

        case 'deleted':{
            return {
                ...cart,
                products: cart.products.filter((product)=> product.name !== action.name),
            };
        }

        case 'sorted':{
            const categories=[];
           for(const product of cart.products){
                categories.push(product.category);
           }
           categories.sort();

           const newProduct = [];
           for (const category of categories){
            for (const product of cart.products){
                if(product.category === category){
                    newProduct.push(product);
                }
            }
           }
            return{
                ...cart,
                products: newProduct,
           };
        }

        default:{
            throw Error(`알 수 없는 액션 타입입니다: ${action.type}`);
        }
    }

}