import { ChevronRightIcon, Colors } from "@class101/ui";
import {
    Dispatch,
    FunctionComponent,
    MouseEvent,
    SetStateAction,
    useState,
} from "react";

import { SECOND_CATEGORIES } from "assets/constants/Categories";
import styled from "styled-components";

export interface Category {
    name: string;
    children: string[];
}

interface ChildTooltipProps {
    categories: Category[];
}

interface FirstTooltipProps extends ChildTooltipProps {
    highlight: boolean;
    setSecondCategories: Dispatch<SetStateAction<Category[]>>;
}

interface SecondTooltipProps extends ChildTooltipProps {
    setHighlight: Dispatch<SetStateAction<boolean>>;
}

const ChildTooltipWrapper = styled.div`
    width: 230px;
    padding: 0 12px;
`;

const SecondTooltipWrapper = styled(ChildTooltipWrapper)`
    border-left: 1px solid ${Colors.gray200};
`;

const CategoryGroupWrapper = styled.div`
    padding-bottom: 25px;
`;

const RootCategory = styled.h2`
    font-size: 11px;
    font-weight: 700;
    color: ${Colors.gray600};
    margin-bottom: 6px;
    padding-left: 20px;
`;

const ChildCategory = styled.h3`
    font-size: 14px;
    line-height: 18px;
    padding: 8px 8px 8px 20px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: ${Colors.gray100};
    }
`;

const HighlightedCategory = styled(ChildCategory)`
    font-weight: 700;
`;

const StyledChevronRightIcon = styled(ChevronRightIcon)`
    height: 14px;
    width: 14px;
    float: right;
`;

export const FirstTooltip: FunctionComponent<FirstTooltipProps> = ({
    categories,
    highlight,
    setSecondCategories,
}) => {
    const [hovered, setHovered] = useState<string>("");

    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const hover = target.innerText;
        setHovered(hover);
        setSecondCategories(
            SECOND_CATEGORIES.filter((category) => category.name === hover)
        );
    };

    return (
        <ChildTooltipWrapper>
            {categories.map(({ name, children }) => (
                <CategoryGroupWrapper key={name} onMouseOver={handleMouseOver}>
                    <RootCategory>{name}</RootCategory>
                    {children.map((childCategory) =>
                        highlight && hovered === childCategory ? (
                            <HighlightedCategory key={childCategory}>
                                {childCategory}
                                <StyledChevronRightIcon />
                            </HighlightedCategory>
                        ) : (
                            <ChildCategory key={childCategory}>
                                {childCategory}
                            </ChildCategory>
                        )
                    )}
                </CategoryGroupWrapper>
            ))}
        </ChildTooltipWrapper>
    );
};

export const SecondTooltip: FunctionComponent<SecondTooltipProps> = ({
    categories,
    setHighlight,
}) => {
    const handleMouseOver = () => {
        setHighlight(true);
    };

    const handleMouseOut = () => {
        setHighlight(false);
    };

    return (
        <SecondTooltipWrapper
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {categories.map(({ name, children }) => (
                <CategoryGroupWrapper key={name}>
                    <RootCategory>{name}</RootCategory>
                    {children.map((childCategory) => (
                        <ChildCategory key={childCategory}>
                            {childCategory}
                        </ChildCategory>
                    ))}
                </CategoryGroupWrapper>
            ))}
        </SecondTooltipWrapper>
    );
};
