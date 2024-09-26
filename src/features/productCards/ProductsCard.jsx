import Accordionn from "@/components/accordion/Accordion";
import ProductCard from "@/components/productCard/ProductCard";
import {
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetProductsQuery,
} from "@/redux/api/filter-api";
import React from "react";

const ProductsCard = () => {
  const { data: brands, isLoading, error } = useGetBrandsQuery();
  const { data: colors, isLoading: loading } = useGetColorsQuery();
  const { data: products, isLoading: pending } = useGetProductsQuery();
  console.log(products);

  if (isLoading || loading || pending) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <>
      <div className="bg-[#D5F8CF] mb-5">
        <div className="flex justify-between py-6 mx-auto container">
          <div>
            <p>Filter by:</p>
          </div>
          <div>
            <select name="" id="">
              <option value="Sort by">Sort by</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center container mx-auto  gap-[50px] my-5">
        <div className="w-[300px] mb-6">
          {brands && <Accordionn options={brands} color={colors} />}
        </div>
        <div className="flex w-full  flex-wrap gap-4  ">
          {products?.slice(0, 9).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
