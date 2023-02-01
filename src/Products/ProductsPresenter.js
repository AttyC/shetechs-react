import productsRepository from "./ProductsRepository"

class ProductsPresenter {
    // apiUrl = 'https://teemill.com/omnis/v3/product/options'
    //create and return the viewModel
    load = async (callback) => {
        await productsRepository.getProducts((productsPm) => {
            const productsVm = productsPm.map(productPm => {

                // console.log('productsPm.length', productsPm.length)
                return {
                    name: productPm.name, 
                    item_code: productPm.item_code, 
                    colours: productPm.colours
                }

            
            })
            console.log('productsVm', productsVm)
            callback(productsVm)
        })
    }
}

let productsPresenter = new ProductsPresenter();
export default productsPresenter;