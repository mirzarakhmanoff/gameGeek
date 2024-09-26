import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBrands: build.query({
      query: (params) => ({
        url: "/brands",
        params,
      }),
      providesTags: ["Brands"],
    }),
    getColors: build.query({
      query: (params) => ({
        url: "/colors",
        params,
      }),
      providesTags: ["Brands"],
    }),
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Brands"],
    }),

    getSinglePage: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        params: {},
      }),
      providesTags: ["Brands"],
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetProductsQuery,
  useGetSinglePageQuery,
} = categoryApi;
