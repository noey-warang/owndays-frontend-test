import { axiosInstance } from "@/lib/axios"
import { ApiResponse } from "@/types/api";
import { ProductItem } from "../types/product.types";

export const productAPI = {

    getALL: async () => {
        const response = await axiosInstance.get<ApiResponse<ProductItem[]>>('/products.json');
        return response.data
    }
}