import { BrowserRouter } from "react-router-dom";
import CategoryNavigationBar from "./CategoryNavigationBar";
import { FunctionComponent } from "react";
import Header from "./Header";

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Header />
            <CategoryNavigationBar />
        </BrowserRouter>
    );
};

export default Router;
