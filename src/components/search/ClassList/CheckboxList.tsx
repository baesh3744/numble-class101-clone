import { Button, Colors, DropDownIcon, Modal } from "@class101/ui";

import { FunctionComponent } from "react";
import styled from "styled-components";

interface CheckboxListProps {
    isRootCategory: boolean;
}

const CheckboxListWrapper = styled.div`
    display: flex;
    gap: 14px;
`;

const CheckboxButton = styled(Button)`
    background-color: ${Colors.white};
    border: 1px solid ${Colors.gray300};

    &:hover {
        background-color: ${Colors.white};
    }
`;

const CheckboxList: FunctionComponent<CheckboxListProps> = ({
    isRootCategory,
}) => {
    return (
        <CheckboxListWrapper>
            <CheckboxButton>바로 수강</CheckboxButton>
            <CheckboxButton>얼리버드</CheckboxButton>
            <CheckboxButton>오픈 예정</CheckboxButton>
            <Modal
                opener={
                    <CheckboxButton rightIcon={<DropDownIcon />}>
                        클래스 종류
                    </CheckboxButton>
                }
            />
            {isRootCategory && (
                <Modal
                    opener={
                        <CheckboxButton rightIcon={<DropDownIcon />}>
                            세부 카테고리
                        </CheckboxButton>
                    }
                />
            )}
            <Modal
                opener={
                    <CheckboxButton rightIcon={<DropDownIcon />}>
                        추천순
                    </CheckboxButton>
                }
            />
        </CheckboxListWrapper>
    );
};

export default CheckboxList;
