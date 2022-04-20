import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <div className="flex">
            <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                    <Link to="/">Home</Link>
                </h2>

                <div className="relative mt-6">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </span>

                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        placeholder="Search"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link
                            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                            to="/"
                        >
                            <span className="mx-4 font-medium">Dashboard</span>
                        </Link>

                        <Link
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            to="/admin/products"
                        >
                            <span className="mx-4 font-medium">Products</span>
                        </Link>

                        <Link
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            to="/"
                        >
                            <span className="mx-4 font-medium">Settings</span>
                        </Link>

                        <hr className="my-6 border-gray-200 dark:border-gray-600" />
                    </nav>

                    <div className="flex items-center px-4 -mx-2">
                        <img
                            className="object-cover mx-2 rounded-full h-9 w-9"
                            src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/277574466_693882015396825_1605585002847833182_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7OUrD4ss9HIAX-DUtuE&tn=mLWy6iCmunBuHV2J&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_2FY5lA6gMKXFpcUxs7txNzgzjzSBbepYBR3HIfn3C-w&oe=626155D0"
                            alt="avatar"
                        />
                        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                            Admin
                        </h4>
                    </div>
                </div>
            </div>
            <div className="flex-1 m-[40px]">
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutAdmin;
