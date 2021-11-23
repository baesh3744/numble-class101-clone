import CheckboxList from "./CheckboxList";
import ClassList from "./ClassList";
import { FunctionComponent } from "react";
import { RANDOM_IMAGE_URL } from "assets/constants/Urls";
import styled from "styled-components";

interface ClassContentsProps {
    category: string;
}

const ClassContentsWrapper = styled.div`
    width: 100%;
`;

const ADCard = styled.img`
    width: 100%;
    margin-bottom: 35px;
`;

const ClassContents: FunctionComponent<ClassContentsProps> = ({ category }) => {
    return (
        <ClassContentsWrapper>
            <ADCard src={RANDOM_IMAGE_URL} />
            <CheckboxList category={category} />
            <ClassList category={category} />
        </ClassContentsWrapper>
    );
};

export default ClassContents;
