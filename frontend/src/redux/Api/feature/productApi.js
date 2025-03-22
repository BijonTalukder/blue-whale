import baseApi from "../baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getProduct: builder.query({
            query: () => ({
                url: "/product",
                method: "GET"
              
            })
        }),

        getProductBySlug:builder.query({
            query:(slug)=>({
                url:`/product/product-by-slug/${slug}`,
                method:"GET"
            })
        })
    })
});

export const { useGetProductQuery ,useGetProductBySlugQuery} = productApi;
