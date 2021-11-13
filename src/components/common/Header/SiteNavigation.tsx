import { Colors } from "@class101/ui";
import { FunctionComponent } from "react";
import styled from "styled-components";

const SiteNavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-right: 38px;
    font-size: 20px;
    font-weight: 700;
`;

const ClassNavigation = styled.span`
    color: ${Colors.orange500};
`;

const SiteNavigation: FunctionComponent = () => {
    return (
        <SiteNavigationWrapper>
            <ClassNavigation>클래스</ClassNavigation>
            <span>스토어</span>
        </SiteNavigationWrapper>
    );
};

export default SiteNavigation;
