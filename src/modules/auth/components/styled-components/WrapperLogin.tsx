import styled from "styled-components";
// interface Props {
//     width: string
// }
export const WrapperLogin = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(113deg, #0575A5 0%, #001959 100%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div{
        height: 25em;
        width: 30em;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.50);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;

        button{
            margin-top: 1em;
        }
    }
`