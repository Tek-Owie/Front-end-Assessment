import { client, Query, Field} from "@tilework/opus";

const loadListOfCategories = async () => {

    client.setEndpoint("http://localhost:4000/graphql");

    const queryCategoriesList = new Query("category", true)    
    .addField(new Field("products", true).addFieldList(["category"]))    

    return await client.post(queryCategoriesList)
  }

export default loadListOfCategories;