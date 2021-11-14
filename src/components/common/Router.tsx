import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryNavigationBar from "./CategoryNavigationBar";
import { FunctionComponent } from "react";
import Header from "./Header";
import Search from "pages/Search";

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Header />
            <CategoryNavigationBar />
            <Routes>
                <Route path='/search' element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
