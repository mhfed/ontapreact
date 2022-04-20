import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/admin/Products";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import PrivateRouter from "./components/PrivateRouter";
import LayoutAdmin from "./pages/layouts/LayoutAdmin";
import axios from "axios";
import { ProductType } from "./types/Product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("http://localhost:3001/products");
            setProducts(data);
        };
        getProducts();
    }, []);
    const handleRemove = async (id: number) => {
        const isRemove = window.confirm("Are you sure you want to remove");
        if (isRemove) {
            const { data } = await axios.delete(
                `http://localhost:3001/products/${id}`
            );
            setProducts(products.filter((item) => item.id !== id));
            toast.error("Đã xóa thành công");
        }
    };
    const handleAdd = async (product: ProductType) => {
        const { data } = await axios.post(
            `http://localhost:3001/products`,
            product
        );
        setProducts([...products, data]);
        toast.success("Đã Thêm thành công");
    };

    const handleUpdate = async (product: ProductType) => {
        try {
            const { data } = await axios.put(
                `http://localhost:3001/products/${product.id}`,
                product
            );

            setProducts(
                products.map((item) => (item.id !== data.id ? item : data))
            );
            toast.info("Đã cập nhật thành công");
        } catch (error) {}
    };
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
                <Route
                    path="admin"
                    element={
                        <PrivateRouter>
                            <LayoutAdmin />
                        </PrivateRouter>
                    }
                >
                    <Route
                        index
                        element={
                            <Products
                                products={products}
                                onRemove={handleRemove}
                            />
                        }
                    />
                    <Route path="products">
                        <Route
                            index
                            element={
                                <Products
                                    products={products}
                                    onRemove={handleRemove}
                                />
                            }
                        />
                        <Route
                            path="add"
                            element={<ProductAdd onAdd={handleAdd} />}
                        />
                        <Route
                            path=":id/edit"
                            element={<ProductEdit onUpdate={handleUpdate} />}
                        />
                    </Route>
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

export default App;
