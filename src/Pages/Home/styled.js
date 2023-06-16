import styled from "styled-components"
import imageFundo from "../../Assets/image-fundo.jpeg"

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    background-color: #0485C7;
    background-image: url('../../Assets/image-fundo.jpeg');
    background-size: "cover";
    background-repeat: "no-repeat";
    min-height: 100vh;
`

export const ContainerTitulo = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 28px;

    img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
    }

    h4 {
        font-family: roboto;
        font-weight: 700;
        font-size: 32px;
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
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 415px){
        background-image: url(${imageFundo});
        //background-size: "cover";
        background-repeat: no-repeat;
        box-shadow: 25px 22px 61px 10px white;
        margin: 8px;
        border-radius: 45px;
    }


    button {
        :active &:hover {
            background: "#efefef";
            box-shadow: 1px 2px 1px 0px whitesmoke;
        }
    }
    
`


export const Image = styled.img`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    height: 67px;
    border: 2px solid #FFFFFF;
    border-radius: 20px;

    :active&:hover {
        box-shadow: 1px 2px 1px 0px whitesmoke;
    }
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