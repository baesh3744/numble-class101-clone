import { Colors, Divider } from "@class101/ui";
import { Fragment, FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryNavigationBar from "./CategoryNavigationBar";
import Header from "./Header";
import SearchPage from "pages/SearchPage";
import { useMatch } from "react-router-dom";

const AppRoutes: FunctionComponent = () => {
    const matched = useMatch("/products/:id");

    return (
        <Fragment>
            <Header />
            {!matched && <CategoryNavigationBar />}

            <Divider color={Colors.gray200} />

            <Routes>
                <Route path='/search' element={<SearchPage />} />
            </Routes>
        </Fragment>
    );
};

export default AppRoutes;
