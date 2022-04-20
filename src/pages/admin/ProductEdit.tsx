import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductType } from "../../types/Product";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
type ProductEditProps = {
    onUpdate: (product: ProductType) => void;
};

type Inputs = {
    name: string;
    img: string;
    price: number;
    description: string;
};
const ProductEdit = (props: ProductEditProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(
                `http://localhost:3001/products/${id}`
            );
            reset(data);
        };
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.onUpdate(data);
        navigate("/admin/products");
    };
    return (
        <div className="m-4 md:mt-0 md:col-span-2 shadow rounded shadow-2xl y-8 px-16 py-8 w-2/3 m-auto">
            <h1 className="block w-full text-center text-gray-600 text-2xl font-bold mb-6">
                From Edit Product
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-4">
                    <label
                        className="mb-2 font-semibold text-lg text-indigo-800"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="border border-blue-500 py-2 px-3 text-grey-800 rounded focus:outline-blue-900"
                        type="text"
                        id="name"
                        {...register("name")}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        className="mb-2 font-semibold text-lg text-indigo-800"
                        htmlFor="img"
                    >
                        Image
                    </label>
                    <input
                        className="border border-blue-500 py-2 px-3 text-grey-800 rounded focus:outline-blue-900"
                        type="text"
                        id="img"
                        {...register("img")}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        className="mb-2 font-semibold text-lg text-indigo-800"
                        htmlFor="price"
                    >
                        Price
                    </label>
                    <input
                        className="border border-blue-500 py-2 px-3 text-grey-800 rounded focus:outline-blue-900"
                        type="number"
                        id="price"
                        {...register("price")}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        className="mb-2 font-semibold text-lg text-indigo-800"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="block w-full h-40 px-4 py-2 text-gray-700 border border-blue-500 py-2 px-3 text-grey-800 rounded focus:outline-blue-900"
                        id="description"
                        {...register("description")}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-8 rounded mx-auto block"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default ProductEdit;
