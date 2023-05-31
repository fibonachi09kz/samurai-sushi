import {createContext, useState} from "react";

export const CartContext = createContext({
	products: [],
	addProduct: (product, count) => {},
	removeProduct: (id) => {}
});

function CartContextProvider({children}) {
	const [products, setProducts] = useState([])

	function addProduct(product, count) {
		const existingProductIndex = products.findIndex(item => item.product.id === product.id);
		if (existingProductIndex !== -1) {
			setProducts(currentProducts => {
				const updatedProducts = [...currentProducts];
				updatedProducts[existingProductIndex].count += count;
				return updatedProducts;
			});
		} else {
			setProducts(currentProducts => [...currentProducts, { product, count }]);
		}
	}

	function removeProduct(id) {
		setProducts((currentProducts) => currentProducts.filter((prod) => prod.product.id !== id ))
	}

	const value = {
		products: products,
		addProduct: addProduct,
		removeProduct: removeProduct
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;