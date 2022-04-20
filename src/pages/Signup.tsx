import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type TypeInputs = {
    name: string;
    email: string;
    password: string;
};

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        const { data: user } = await axios.post(
            "http://localhost:3001/signup",
            data
        );
        if (user) {
            toast.success("Đăng ký thành công");
            navigate("/signin", {
                state: {
                    email: data.email,
                    password: data.password,
                },
            });
        }
    };
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mt-4"
                            placeholder="Name"
                            {...register("name", {
                                required: true,
                                minLength: 5,
                            })}
                        />
                        {errors.name?.type === "required" && (
                            <span className="text-red-600">
                                Vui lòng nhập tên
                            </span>
                        )}
                        {errors.name?.type === "minLength" && (
                            <span className="text-red-600">
                                Ít nhất 5 ký tự
                            </span>
                        )}
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mt-4"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mt-4"
                            placeholder="Password"
                            {...register("password")}
                        />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-500 hover:bg-green-dark focus:outline-none my-1 mt-4"
                        >
                            Create Account
                        </button>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <a
                        className="no-underline border-b border-blue text-blue"
                        href="../login/"
                    >
                        Log in
                    </a>
                    .
                </div>
            </div>
        </div>
    );
};

export default Signup;
