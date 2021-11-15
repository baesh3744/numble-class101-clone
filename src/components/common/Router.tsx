import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryNavigationBar from "./CategoryNavigationBar";
import { FunctionComponent } from "react";
import Header from "./Header";
import SearchPage from "pages/SearchPage";

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Header />
            <CategoryNavigationBar />
            <Routes>
                <Route path='/search' element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
