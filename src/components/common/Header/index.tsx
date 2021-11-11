import { FunctionComponent } from "react";
import Search from "./Search";
import SiteNavigator from "./SiteNavigator";
import UnAuthNavigator from "./UnAuthNavigator";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1176px;
    margin: auto;
    padding: 20px 0;
`;

const Logo = styled.span`
    font-family: "Pretendard-Black";
    font-size: 23px;
    margin-right: 30px;
    letter-spacing: -0.5px;
`;

const Header: FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <Logo>CLASS1O1</Logo>
            <SiteNavigator />
            <Search />
            <UnAuthNavigator />
        </HeaderWrapper>
    );
};

export default Header;
