import { FunctionComponent } from "react";
import styled from "styled-components";

const UnAuthNavigatorWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
    font-size: 14px;
    letter-spacing: -0.15px;
`;

const UnAuthNavigator: FunctionComponent = () => {
    return (
        <UnAuthNavigatorWrapper>
            <span>크리에이터 지원</span>
            <span>기업교육</span>
            <span>로그인</span>
        </UnAuthNavigatorWrapper>
    );
};

export default UnAuthNavigator;
