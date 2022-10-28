import styled from "styled-components";

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.5fr 0.2fr;
    background-color: #0485C7;
    min-height: 100vh;
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: end;
`

export const ContainerTitulo = styled.div`
    
    display: flex;
    align-items: center;
    margin-left: 20px;

    h1 {
        font-family: inter;
        font-weight: 900;
        font-size: 36px;
        color: #FFFFFF;
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
    border-top: 1px solid aliceblue;
    box-shadow: 0px 3px 3px 3px;

    h4 {
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 700;
        margin-top: 5px;
    }
    a{
        border: 1px solid;
        border-radius: 10px;
        padding: 5px;
        font-size: 12px;
        color: #FFFFFF;
        font-weight: 700;
        box-shadow: 1px 0px 3px 0px;
    }
    
`
export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    justify-self: end;
    margin-right: 30px;

`
export const PhoneWhats = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 85px;
    justify-content: flex-end;
    text-align: end;
`