import { Category, FirstTooltip, SecondTooltip } from "./ChildTooltip";
import { FunctionComponent, useState } from "react";

import { Colors } from "@class101/ui";
import { FIRST_CATEGORIES } from "assets/constants/Categories";
import styled from "styled-components";

interface TooltipProps {
    isOpen: boolean;
}

const TooltipWrapper = styled.div<TooltipProps>`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    left: -20px;
    border: 1px solid ${Colors.gray200};
    padding-top: 20px;
`;

const Tooltip: FunctionComponent<TooltipProps> = ({ isOpen }) => {
    const [secondCategories, setSecondCategories] = useState<Category[]>([]);
    const [highlight, setHighlight] = useState<boolean>(false);

    const handleMouseLeave = () => {
        setSecondCategories([]);
    };

    return (
        <TooltipWrapper isOpen={isOpen} onMouseLeave={handleMouseLeave}>
            <FirstTooltip
                categories={FIRST_CATEGORIES}
                highlight={highlight}
                setSecondCategories={setSecondCategories}
            />
            {secondCategories.length !== 0 && (
                <SecondTooltip
                    categories={secondCategories}
                    setHighlight={setHighlight}
                />
            )}
        </TooltipWrapper>
    );
};

export default Tooltip;
