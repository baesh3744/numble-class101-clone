import { BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import Header from "./Header";

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};

export default Router;
