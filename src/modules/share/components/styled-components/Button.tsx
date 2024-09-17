import styled from "styled-components";
interface Props {
    width: string
}
export const Button = styled.button<Props>`
    height: 55px;
    width: ${props => props.width ? props.width : '100%'};
    border-radius: 10px;
    background: #23A878;
    color: #FFF;
    border: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
`