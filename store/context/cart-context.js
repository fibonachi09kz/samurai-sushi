import {createContext, useState} from "react";

export const CartContext = createContext({
	products: [],
	addProduct: (product, count) => {},
	editProduct: (product, count) => {},
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

	function editProduct(product, count) {
		setProducts((currentProducts) => {
			return currentProducts.map((item) => {
				if (item.product.id === product.id) {
					return { product, count };
				}
				return item;
			});
		});
	}

	function removeProduct(id) {
		setProducts((currentProducts) => currentProducts.filter((prod) => prod.product.id !== id ))
	}

	const value = {
		products: products,
		addProduct: addProduct,
		editProduct: editProduct,
		removeProduct: removeProduct
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;