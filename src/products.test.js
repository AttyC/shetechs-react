import productsPresenter from "./Products/ProductsPresenter"
import httpGateway from "./Shared/HttpGateway"

it ('should load 15 itens into the viewModel when the products API is called by the gateway', async () => {
    let viewModel = null

    // get the data
    httpGateway.get = jest.fn().mockImplementation(() => {
        return Promise.resolve([
            {
              "item_code": "RNA1",
              "name": "Custom Product",
              "colours": {
                "White": "https://images.teemill.com/<image-url>",
                "Black": "https://images.teemill.com/<image-url>",
                "Bright Blue": "https://images.teemill.com/<image-url>"
              },
              "design_placement": {
                "x": 0.318608287724785,
                "y": 0.23588410104011887,
                "w": 0.35887412040656763,
                "h": 0.4550520059435364
              }
            },
            {
              "item_code": "RNB1",
              "name": "Women's T-shirt",
              "colours": {
                "White": "https://images.teemill.com/<image-url>",
                "Black": "https://images.teemill.com/<image-url>",
                "Bright Blue": "https://images.teemill.com/<image-url>"
              },
              "design_placement": {
                "x": 0.318608287724785,
                "y": 0.23588410104011887,
                "w": 0.35887412040656763,
                "h": 0.4550520059435364
              }
            },
            {
              "item_code": "RNC1",
              "name": "Kid's T-shirt",
              "colours": {
                "White": "https://images.teemill.com/<image-url>",
                "Black": "https://images.teemill.com/<image-url>",
                "Bright Blue": "https://images.teemill.com/<image-url>"
              },
              "design_placement": {
                "x": 0.318608287724785,
                "y": 0.23588410104011887,
                "w": 0.35887412040656763,
                "h": 0.4550520059435364
              }
            }
          ])
    })

    // put the data into the viewModel

    await productsPresenter.load(generatedViewModel => {
        return viewModel = generatedViewModel;
    })

    // check the Gateway was called
    expect(httpGateway.get).toHaveBeenCalledWith('https://teemill.com/omnis/v3/product/options')

    // check the viewModel has the right data in it
    expect(viewModel.length).toBe(15)
    expect(viewModel[0].name).toBe('Custom Product')
    expect(viewModel[0].item_code).toBe('RNA1')
    expect(viewModel[1].name).toBe(`Women's T-shirt`)
    expect(viewModel[1].item_code).toBe('RNB1')

})