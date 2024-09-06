import ListCategoryProducts from "@/components/shared/Products/ListCategoriesProducts";
import ListingProductsSkeletonLoader from "@/components/shared/Products/ListingProductsSkeletonLoader";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { getProductsyCategoryConfig } from "@/lib/hooks/products/useProductsByCategoryQuery";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const queryClient = new QueryClient();

  const transformCategoryName = (category: string) => {
    switch (category) {
      case "kolaci":
        return "Kolači";
      case "slani-ketering":
        return "Slani Ketering";
      case "torte":
        return "Torte";
      case "poslastice":
        return "Poslastice";
      default:
        return category;
    }
  };

  const { queryKey, queryFn } = getProductsyCategoryConfig(params.category);

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title={transformCategoryName(category)} />
        <Suspense fallback={<ListingProductsSkeletonLoader />}>
          <ListCategoryProducts category={category} />
        </Suspense>
      </div>
    </div>
  );
}
