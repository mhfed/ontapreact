import React from "react";
import { ProductType } from "../types/Product";

type ProductsProps = {
    products: ProductType[];
};
const Products = ({ products }: ProductsProps) => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                        List Product
                    </h2>
                </div>

                <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
                    {products.map((product: ProductType) => (
                        <a
                            href="/product/build-your-own-drone"
                            className="relative block border border-gray-100"
                            key={product.id}
                        >
                            <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                className="object-contain w-full h-56"
                                src={product.img}
                            />

                            <div className="p-6">
                                <p className="text-sm font-medium text-gray-600">
                                    {product.price}
                                </p>

                                <h5 className="mt-1 text-lg font-bold">
                                    {product.name}
                                </h5>

                                <button
                                    name="add"
                                    type="button"
                                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span className="text-sm font-medium">
                                        Add to Cart
                                    </span>

                                    <svg
                                        className="w-5 h-5 ml-1.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
