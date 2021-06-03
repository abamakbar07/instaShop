// import { ProductContext } from "../../components/context/ProductContext";
import { instagramAPI } from "../api";

export const GetDataProduct = async () => {
   // const [product, dispatchProduct] = useContext(ProductContext)
   try {
      const param = {
         params: {
            fields: "id,media_type,caption,media_url,thumbnail_url",
            access_token:
            "IGQVJWYzBqX2M1YU9KTnpjZAm9nbDRMLVVJTVhHNnQ2TEkzeTdxUFJHa2ItODNTWlNnMW5tdUs4WUxJZAjl6N2YxYXFQSVVYbDlJVFNhXzFPYThkdTBLWG9tenNacjRpVk52SmVnbXJkRTgyT2MxQ3FfNQZDZD",
         },
      };
      const result = await instagramAPI.get('/me/media', param)
      const data = result.data.data

      return data
      
      // dispatchProduct({
      //    type: "GET_PRODUCTS",
      //    payload: {
      //       data,
      //    }
      // })
      
   } catch (error) {
      console.log(error)
   }
}