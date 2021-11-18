import { CATEGORY_EN2KO, SECOND_CATEGORIES } from "assets/constants/Categories";
import {
    Dispatch,
    FunctionComponent,
    MouseEvent,
    SetStateAction,
    useState,
} from "react";

import CategoryItem from "./CategoryItem";
import { Colors } from "@class101/ui";
import styled from "styled-components";

export interface Category {
    name: string;
    children: string[];
}

interface ChildTooltipProps {
    categories: Category[];
    closeTooltip: () => void;
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

export const FirstTooltip: FunctionComponent<FirstTooltipProps> = ({
    categories,
    highlight,
    closeTooltip,
    setSecondCategories,
}) => {
    const [hovered, setHovered] = useState<string>("");

    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.dataset.category) {
            const hover = target.dataset.category;
            setHovered(hover);
            setSecondCategories(
                SECOND_CATEGORIES.filter((category) => category.name === hover)
            );
        }
    };

    return (
        <ChildTooltipWrapper>
            {categories.map(({ name, children }) => (
                <CategoryGroupWrapper key={name} onMouseOver={handleMouseOver}>
                    <RootCategory>{CATEGORY_EN2KO[name]}</RootCategory>
                    {children.map((childCategory) => (
                        <CategoryItem
                            key={childCategory}
                            category={childCategory}
                            highlight={highlight && hovered === childCategory}
                            closeTooltip={closeTooltip}
                        />
                    ))}
                </CategoryGroupWrapper>
            ))}
        </ChildTooltipWrapper>
    );
};

export const SecondTooltip: FunctionComponent<SecondTooltipProps> = ({
    categories,
    closeTooltip,
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
                    <RootCategory>{CATEGORY_EN2KO[name]}</RootCategory>
                    {children.map((childCategory) => (
                        <CategoryItem
                            key={childCategory}
                            category={childCategory}
                            closeTooltip={closeTooltip}
                        />
                    ))}
                </CategoryGroupWrapper>
            ))}
        </SecondTooltipWrapper>
    );
};
