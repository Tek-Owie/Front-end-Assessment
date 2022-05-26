import { client, Query} from "@tilework/opus";

const loadProduct = async (product) => {

    client.setEndpoint("http://localhost:4000/graphql");

    const query = new Query("product", true)
   .addArgument("id", "String!", product)   
   .addFieldList([
       "id", "name", "inStock", "gallery", 
       "description", "brand", "attributes {id, items {value, id}}", 
       "prices {amount}"
    ])

    return await client.post(query)
  }

export default loadProduct;