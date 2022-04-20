import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
    children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user } = JSON.parse(localStorage.getItem("user") as string);

    if (user.id !== 1) {
        return <Navigate to="/signin" />;
    }
    return props.children;
};

export default PrivateRouter;
