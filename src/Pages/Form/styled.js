import styled from "styled-components";

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 0.3fr 1fr 0.5fr;
    background-color: #0485C7;
    min-height: 100vh;
    -webkit-text-size-adjust: none;

`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: end;
    padding-left: 35px;
    max-width: 100vw;
`
export const ContainerTitulo = styled.div`
    
    display: flex;
    align-items: center;
    margin-left: 20px;

    h1 {
        font-family: roboto;
        font-weight: 900;
        font-size: 28px;
        color: #FFFFFF;
        margin-top: 20px;
        text-align: center;
        letter-spacing: 3px;
    }
`

export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-top: 1.5rem;
    
    h3 {
        color: #FFFFFF;
        font-weight: 700;
        text-align: initial;
    }
`

export const ContainerTimePicker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 30px 30px 0px 0px;

    h3 {
        color: #FFFFFF;
        font-weight: 700;
        text-align: initial;
    }
`
export const ContainerFooter = styled.div`
    background-color: #1890D8;
    position: relative;
    max-height: 270px;
    
    a {
        position: relative;
        display: inline-block;
        color: black;
    }   
    h6 {
        font-size: 16px;
        color: #FFFFFF;
        font-weight: 700;
    }

    h6 {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.8);
        background-color: black;
        padding: 10px;
    }

    /* a{
        border: 1px solid;
        border-radius: 5px;
        padding: 5px;
        font-size: 10px;
        color: #FFFFFF;
        font-weight: 700;
        margin-top: 5px;
        //box-shadow: 1px 0px 3px 0px;
    } */
    
`
export const ImageFooterCss = styled.img`
    display: flex;
    justify-content: center;
    max-width: 414px;
    filter: blur(1px);
`
export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    justify-self: end;
    margin-right: 30px;

`
export const PhoneWhats = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: flex-end;
    text-align: end;
`