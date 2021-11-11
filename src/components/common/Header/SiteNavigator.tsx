import { FunctionComponent } from "react";
import styled from "styled-components";

const SiteNavigatorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-right: 38px;
    font-size: 20px;
    font-weight: 700;
`;

const ClassNavigator = styled.span`
    color: var(--color-orange500);
`;

const SiteNavigator: FunctionComponent = () => {
    return (
        <SiteNavigatorWrapper>
            <ClassNavigator>클래스</ClassNavigator>
            <span>스토어</span>
        </SiteNavigatorWrapper>
    );
};

export default SiteNavigator;
