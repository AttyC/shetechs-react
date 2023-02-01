class HttpGateway {
    apiUrl = ''

    getOptions = {method: 'GET', headers: {'Content-Type': 'application/json'}};

    get = async (path, getOptions) => {
      const response = await fetch(path, getOptions)
      const productsDto = response.json()
      return productsDto
    }
}
let httpGateway = new HttpGateway();
export default httpGateway;