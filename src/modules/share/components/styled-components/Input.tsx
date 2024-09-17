import styled from "styled-components";
interface Props {
    width: string
}
export const Input = styled.input<Props>`
    height: 55px;
    width: ${props => props.width ? props.width : '100%'};
    border-radius: 10px;
    background: #FFF;
    border: none;
    font-size: 1em;
    padding-left: 0.5em;
`