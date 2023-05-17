class Product {
	constructor( id, title, description, price, categoryIds, subCategoryIds, imageUrl ) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.categoryIds = categoryIds;
		this.subCategoryIds = subCategoryIds;
		this.imageUrl = imageUrl;
	}
}

export default Product;