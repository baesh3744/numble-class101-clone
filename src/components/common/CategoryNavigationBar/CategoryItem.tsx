import { ChevronRightIcon, Colors } from "@class101/ui";

import { CATEGORY_EN2KO } from "assets/constants/Categories";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CategoryItemProps {
    category: string;
    highlight?: boolean;
    closeTooltip: () => void;
}

const Item = styled.h3`
    font-size: 14px;
    line-height: 18px;
    padding: 8px 8px 8px 20px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: ${Colors.gray100};
    }
`;

const HighlightedItem = styled(Item)`
    font-weight: 700;
`;

const StyledChevronRightIcon = styled(ChevronRightIcon)`
    height: 14px;
    width: 14px;
    float: right;
`;

const CategoryItem: FunctionComponent<CategoryItemProps> = ({
    category,
    highlight = false,
    closeTooltip,
}) => {
    return (
        <Link to={`/search?category=${category}`} onClick={closeTooltip}>
            {highlight ? (
                <HighlightedItem key={category} data-category={category}>
                    {CATEGORY_EN2KO[category]}
                    <StyledChevronRightIcon />
                </HighlightedItem>
            ) : (
                <Item key={category} data-category={category}>
                    {CATEGORY_EN2KO[category]}
                </Item>
            )}
        </Link>
    );
};

export default CategoryItem;
