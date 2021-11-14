import CategoryTooltipContainer from "./Tooltip";
import { DropDownIcon } from "@class101/ui";
import { FunctionComponent } from "react";
import Tab from "./Tab";
import styled from "styled-components";
import { useState } from "react";

const CategoryTabWrapper = styled.div`
    position: relative;
`;

const CategoryTabButton = styled(Tab)`
    display: flex;
`;

const CategoryTab: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMouseOver = () => {
        setIsOpen(true);
    };

    const handleMouseOut = () => {
        setIsOpen(false);
    };

    return (
        <CategoryTabWrapper
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <CategoryTabButton bold={true}>
                전체 카테고리 <DropDownIcon />
            </CategoryTabButton>
            <CategoryTooltipContainer isOpen={isOpen} />
        </CategoryTabWrapper>
    );
};

export default CategoryTab;
