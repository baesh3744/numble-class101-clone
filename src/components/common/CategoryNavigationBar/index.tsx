import { Colors, DropDownIcon } from "@class101/ui";

import { FunctionComponent } from "react";
import styled from "styled-components";

const CategoryNavigationBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    width: 100%;
    max-width: 1176px;
    margin: auto;
`;

const Tab = styled.button<{ bold: boolean }>`
    position: relative;
    font-size: 16px;
    font-weight: ${(props) => (props.bold ? "700" : "400")};
    letter-spacing: -0.3px;
    line-height: 24px;
    padding: 8px 0 20px;

    &:hover {
        font-weight: 700;
    }

    &:hover::after {
        position: absolute;
        content: "";
        bottom: 12px;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: ${Colors.black};
    }
`;

const CategoryTab = styled(Tab)`
    display: flex;
`;

const NewTab = styled(Tab)`
    display: flex;
`;

const NewBadge = styled.div`
    width: 4px;
    height: 4px;
    background-color: ${Colors.red600};
    margin-left: 6px;
`;

const Divider = styled.div`
    width: 2px;
`;

const CategoryNavigationBar: FunctionComponent = () => {
    return (
        <CategoryNavigationBarWrapper>
            <CategoryTab bold={true}>
                전체 카테고리 <DropDownIcon />
            </CategoryTab>
            <NewTab bold={true}>
                11월 가입혜택
                <NewBadge />
            </NewTab>
            <Tab bold={true}>이벤트</Tab>
            <Tab bold={true}>바로 수강</Tab>
            <Tab bold={true}>신규 클래스</Tab>
            <Tab bold={true}>오픈 예정</Tab>
            <Divider />
            <Tab bold={false}>시그니처</Tab>
            <Tab bold={false}>키즈</Tab>
            <Tab bold={false}>원포인트 클래스</Tab>
        </CategoryNavigationBarWrapper>
    );
};

export default CategoryNavigationBar;
