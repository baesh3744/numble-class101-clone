import AppRoutes from "components/common/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "components/common/GlobalStyle";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
