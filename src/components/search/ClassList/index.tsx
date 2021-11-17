import CheckboxList from "./CheckboxList";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface ClassListProps {
    isRootCategory: boolean;
}

const ClassListWrapper = styled.div`
    width: 100%;
`;

const ADCard = styled.img`
    width: 100%;
    margin-bottom: 35px;
`;

const ClassList: FunctionComponent<ClassListProps> = ({ isRootCategory }) => {
    return (
        <ClassListWrapper>
            <ADCard src='https://picsum.photos/1000/210' />
            <CheckboxList isRootCategory={isRootCategory} />
        </ClassListWrapper>
    );
};

export default ClassList;
