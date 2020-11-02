import styled from 'styled-components';

export const Field = styled.input<{ id?: string; error?: boolean }>`
    width: ${({ id }) => (id ? '5%' : '80%')};
    height: 40px;
    color: #7c7c7c5c;
    border-radius: 5px;
    border: ${({ error }) => (error ? '1px solid red' : 'none')};
    padding: 5px;
    cursor: ${({ id }) => (id ? 'pointer' : 'none')};
    background-color: #2626269c;
    &:focus {
        background-color: ${({ id }) => (id ? '#7c7c7c5c' : '80%')};
    }
`;

export const Label = styled.label`
    width: 100%;
    height: 20px;
    color: rgba(255, 252, 252, 0.36);
    cursor: pointer;
    padding-top: 3px;
    padding-left: 5px;
    font-size: 0.8em;
`;

export const GroupControlField = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: inherit;
`;

export const Button = styled.button<{ color: string }>`
    width: 80%;
    height: 40px;
    cursor: pointer;
    margin-top: 30px;
    color: white;
    font-weight: bold;
    background-color: ${({ color }) => color};
`;

export const ErrorTag = styled.div`
    margin: 1px 0 30px 0;
    font-size: 0.8em;
    color: red;
`;
