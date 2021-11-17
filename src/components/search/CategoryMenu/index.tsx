import { Fragment, FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { Colors } from "@class101/ui";
import { Link } from "react-router-dom";
import { SECOND_CATEGORIES } from "assets/constants/Categories";

interface CategoryMenuProps {
    searchedCategory: string;
}

interface ChildMenuProps {
    searchedCategory: string;
    categories: string[];
}

interface highlightProps {
    highlight: boolean;
}

const CategoryMenuWrapper = styled.div`
    min-width: 180px;
    width: 180px;
`;

const categoryCss = css<highlightProps>`
    color: ${(props) => props.highlight && Colors.orange500};
    cursor: pointer;

    &:hover {
        color: ${Colors.orange500};
    }
`;

const Category = styled.h2<highlightProps>`
    ${categoryCss}
    font-size: 16px;
    font-weight: 700;
    padding: 12px 0;
`;

const ChildMenuWrapper = styled.div`
    border-bottom: 1px solid ${Colors.gray200};
    padding-bottom: 15px;
    margin-bottom: 10px;
`;

const ChildCategory = styled.h3<highlightProps>`
    color: ${Colors.gray800};
    ${categoryCss}
    font-size: 14px;
    padding: 10px 0;
`;

const ChildMenu: FunctionComponent<ChildMenuProps> = ({
    searchedCategory,
    categories,
}) => {
    return (
        <ChildMenuWrapper>
            {categories.map((category) => (
                <Link to={`/search?category=${category}`}>
                    <ChildCategory
                        key={category}
                        highlight={category === searchedCategory}
                    >
                        {category}
                    </ChildCategory>
                </Link>
            ))}
        </ChildMenuWrapper>
    );
};

const CategoryMenu: FunctionComponent<CategoryMenuProps> = ({
    searchedCategory,
}) => {
    return (
        <CategoryMenuWrapper>
            {SECOND_CATEGORIES.map(({ name, children }) => {
                const isSpread: boolean =
                    name === searchedCategory ||
                    children.includes(searchedCategory);

                return (
                    <Fragment key={name}>
                        <Link to={`/search?category=${name}`}>
                            <Category highlight={name === searchedCategory}>
                                {name}
                            </Category>
                        </Link>

                        {isSpread && (
                            <ChildMenu
                                searchedCategory={searchedCategory}
                                categories={children}
                            />
                        )}
                    </Fragment>
                );
            })}
        </CategoryMenuWrapper>
    );
};

export default CategoryMenu;
