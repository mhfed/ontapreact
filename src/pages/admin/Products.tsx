import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/Product";

type ProductsProps = {
    products: ProductType[];
    onRemove: (id: any) => void;
};

const Products = (props: ProductsProps) => {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-8">
                Product Lists
            </h1>
            <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                <table className="min-w-full text-base divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-4 py-2 font-semibold text-left text-gray-900 whitespace-nowrap">
                                Name
                            </th>
                            <th className="px-4 py-2 font-semibold text-left text-gray-900 whitespace-nowrap">
                                Image
                            </th>
                            <th className="px-4 py-2 font-semibold text-left text-gray-900 whitespace-nowrap">
                                Price
                            </th>
                            <th className="px-4 py-2 font-semibold text-left text-gray-900 whitespace-nowrap">
                                Description
                            </th>
                            <th className="px-4 py-2 font-semibold text-center text-gray-900 whitespace-nowrap">
                                <Link
                                    to="/admin/products/add"
                                    className="inline-block px-8 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                                >
                                    Add
                                </Link>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {props.products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-4 py-2 font-semibold text-gray-900 whitespace-nowrap">
                                    {product.name}
                                </td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        width="60px"
                                    />
                                </td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                    {product.price}
                                </td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                    {product.description}
                                </td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                                    <div className="flex justify-center items-center">
                                        <Link
                                            to={`/admin/products/${product.id}/edit`}
                                            className="px-4 py-2 font-semibold rounded bg-yellow-400"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                props.onRemove(product.id)
                                            }
                                            className="ml-4 px-4 py-2 font-semibold rounded bg-red-600 text-white"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
