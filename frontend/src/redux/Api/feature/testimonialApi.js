import baseApi from "../baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       
        getTestimonial: builder.query({
            query: () => ({
                url: "/testimonial",
                method: "GET"
              
            })
        }),
    })
});

export const {useGetTestimonialQuery } = testimonialApi;