import { Product } from "@/lib/types";
import { Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListProducts({ products }: ListAllProductsProps) {
  return (
    <div className="relative w-screen py-16 h-full md:py-24 text-lightMode-text dark:text-darkMode-text bg-lightMode-surface dark:bg-darkMode-surface">
      <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
        <div className="grid gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Svi Proizvodi</h1>
          <div className="w-full max-w-[90%] mx-auto px-1 md:px-2 lg:px-3 h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full h-80 font-semibold rounded-t-lg overflow-hidden group">
                <Image
                  src={
                    product.images.length > 0
                      ? product.images[0].imageUrl
                      : "/placeholder-image-url"
                  }
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover opacity-95 transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 w-full flex flex-col items-center">
                <Heading
                  fontSize={{ base: "lg", md: "xl" }}
                  className="text-lightMode-text dark:text-darkMode-text font-bold mb-2"
                >
                  {product.name}
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  className="text-gray-600 dark:text-gray-300 mb-2"
                >
                  {product.description}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  className="text-blue-500 font-semibold mb-4"
                >
                  {product.price
                    ? `${product.price.toFixed(2)} dinara`
                    : "150 dinara"}
                </Text>
                <Button colorScheme="blue" variant="solid" width="full">
                  Add to cart
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
