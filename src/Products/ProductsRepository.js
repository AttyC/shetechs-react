import httpGateway from "../Shared/HttpGateway";
import Observable from "../Shared/Observable";

class ProductsRepository {
    gateway = null
    programmersModel = new Observable([])

    constructor() {
        this.gateway = httpGateway;
    }

    getProducts = async (callback) => {
        this.programmersModel.subscribe(callback);
        await this.loadApiData();
        this.programmersModel.notify();
    }

    loadApiData = async () => {
        const productsDto = await this.gateway.get('https://teemill.com/omnis/v3/product/options')
        this.programmersModel.value = productsDto.data.map(productDto => {
            return productDto;
        })
    }
}

const productsRepository = new ProductsRepository();
export default productsRepository; 