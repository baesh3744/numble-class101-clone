import { Colors } from "@class101/ui";
import styled from "styled-components";

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

export default Tab;
