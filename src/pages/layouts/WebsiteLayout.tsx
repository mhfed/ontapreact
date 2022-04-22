import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header className="shadow-sm">
                <div className="max-w-screen-xl p-4 mx-auto">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                        <div className="flex lg:w-0 lg:flex-1 items-center">
                            <span className="p-[10px] bg-gray-200 rounded-lg">
                                Logo
                            </span>
                        </div>

                        <nav className="hidden space-x-8 text-sm font-semibold text-base md:flex">
                            <Link
                                className="text-gray-600 p-[10px] hover:bg-indigo-700 hover:text-white rounded ease-linear duration-300"
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="text-gray-500 text-gray-600 p-[10px] hover:bg-indigo-700 hover:text-white rounded ease-linear duration-300"
                                to="/products"
                            >
                                Products
                            </Link>
                            <Link
                                className="text-gray-500 text-gray-600 p-[10px] hover:bg-indigo-700 hover:text-white rounded ease-linear duration-300"
                                to=""
                            >
                                Contact
                            </Link>
                            <Link
                                className="text-gray-500 text-gray-600 p-[10px] hover:bg-indigo-700 hover:text-white rounded ease-linear duration-300"
                                to="/admin
                            "
                            >
                                Admin
                            </Link>
                        </nav>

                        <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                            <Link
                                className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg border hover:bg-indigo-700 hover:text-white ease-linear duration-300"
                                to="/signin"
                            >
                                Sign in
                            </Link>

                            <Link
                                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:opacity-70 ease-linear duration-300"
                                to="/signup"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default WebsiteLayout;
