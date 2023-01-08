import styled from "styled-components"


export const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 0.3fr 1fr;
    background-color: #0485C7;
    min-height: 100vh;
`

export const ContainerTitulo = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #E48100;
    margin-bottom: 28px;
    border-bottom: 1px solid white;
    /* margin-left: 20px; */
    img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
    }

    h4 {
        font-family: sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        text-align: center;
        letter-spacing: 2px;
        margin: 10px 0px 10px 15px;
    }
    span {
        font-family: sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: #FFFFFF;
        text-align: initial;
        letter-spacing: 2px;
        margin: 0px 10px 0px 10px;
    }
`
export const ContainerCards = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
    /* display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    gap: 70px;
    /* justify-content: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const StyleLink = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 0px;
`

export const ContainerFooter = styled.div`
    

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