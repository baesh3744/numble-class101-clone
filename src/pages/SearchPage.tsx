import CategoryMenu from "components/search/CategoryMenu";
import { FunctionComponent } from "react";
import NotFoundPage from "./NotFoundPage";
import queryString from "query-string";
import styled from "styled-components";
import { useLocation } from "react-router";

const SearchPageWrapper = styled.div`
    width: 100%;
    max-width: 1176px;
    margin: auto;
    margin-top: 32px;
`;

const SearchPage: FunctionComponent = () => {
    let location = useLocation();
    const params = queryString.parse(location.search);
    const category: string | string[] | null = params.category;

    if (Array.isArray(category) || category === null) {
        return <NotFoundPage />;
    }

    return (
        <SearchPageWrapper>
            <CategoryMenu searchedCategory={category} />
        </SearchPageWrapper>
    );
};

export default SearchPage;
