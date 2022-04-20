import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type Inputs = {
    name: string;
    price: number;
    img: string;
    description: string;
};
type ProductAddProps = {
    onAdd: (product: Inputs) => void;
};
const ProductAdd = (props: ProductAddProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.onAdd(data);
        navigate("/admin/products");
    };

    return (
        <div className="m-4 md:mt-0 md:col-span-2 shadow rounded shadow-2xl y-8 px-16 py-8 w-2/3 m-auto">
            <h1 className="block w-full text-center text-gray-600 text-2xl font-bold mb-6">
                From Add Product
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
                        {...register("name", { required: true, minLength: 5 })}
                    />
                    {errors.name?.type === "required" && (
                        <span className="text-red-600">
                            Bắt buộc phải nhập trường này!
                        </span>
                    )}
                    {errors.name?.type === "minLength" && (
                        <span className="text-red-600">
                            Nhập ít nhất 5 ký tự!
                        </span>
                    )}
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
                    ADD
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;
