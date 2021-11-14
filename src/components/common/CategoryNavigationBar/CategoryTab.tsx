import { DropDownIcon } from "@class101/ui";
import { FunctionComponent } from "react";
import Tab from "./Tab";
import Tooltip from "./Tooltip";
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

    const closeTooltip = () => {
        setIsOpen(false);
    };

    return (
        <CategoryTabWrapper
            onMouseOver={handleMouseOver}
            onMouseOut={closeTooltip}
        >
            <CategoryTabButton bold={true}>
                전체 카테고리 <DropDownIcon />
            </CategoryTabButton>
            <Tooltip isOpen={isOpen} closeTooltip={closeTooltip} />
        </CategoryTabWrapper>
    );
};

export default CategoryTab;
