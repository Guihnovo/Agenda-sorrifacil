import styled from "styled-components"


export const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.15fr;
    background-color: #0485C7;
    min-height: 100vh;
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
        text-align: initial;
        letter-spacing: 2px;
    }
`
export const ContainerCards = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`
export const ContainerLink = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StyleLink = styled.div`
    display: flex;
    border: 1px solid black;
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