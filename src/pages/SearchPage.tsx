import CategoryMenu from "components/search/CategoryMenu";
import ClassList from "components/search/ClassList";
import { FunctionComponent } from "react";
import NotFoundPage from "./NotFoundPage";
import { SECOND_CATEGORIES } from "assets/constants/Categories";
import queryString from "query-string";
import styled from "styled-components";
import { useLocation } from "react-router";

const SearchPageWrapper = styled.div`
    display: flex;
    gap: 120px;
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

    const isRootCategory =
        SECOND_CATEGORIES.filter(({ name }) => name === category).length !== 0;

    return (
        <SearchPageWrapper>
            <CategoryMenu searchedCategory={category} />
            <ClassList isRootCategory={isRootCategory} />
        </SearchPageWrapper>
    );
};

export default SearchPage;
