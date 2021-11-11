import { FunctionComponent } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";

const Form = styled.form`
    width: 420px;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 30px;
    background-color: var(--color-gray100);
    padding: 13px 60px 13px 16px;
    line-height: 20px;
    font-size: 14px;
`;

const Icon = styled(IoSearchOutline)`
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 20px;
`;

const Search: FunctionComponent = () => {
    return (
        <Form>
            <Input type='search' placeholder='찾으시는 취미가 있으신가요?' />
            <Icon />
        </Form>
    );
};

export default Search;
