import styled from 'styled-components';

export const HeadDex = styled.div`
    height: 60px;
    background: #fff;
    width: 100%;
    text-align: center;
    font-size: 40px;
`

export const FooterAdd = styled.div`
    background: ${props => props.background};
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    display: flex;
    justify-content: center;
`
export const BtnAdd = styled.div`
    background: ${props => props.background};
    font-family: 'Atma',cursive;
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        transition: all .3s;
        box-shadow: 0 3px 8px #b54d4d;
        margin-bottom: 5px;
    }
`
export const AllCard = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
    height: 650px;
    padding: 20px;
    overflow-y: auto;
`
export const CardMonSelect = styled.div`
    background: #eee;
    display: inline-flex;
`
export const CardMon = styled.div`
    background: #eee;
    display: inline-flex;
    justify-content: space-between;
`
export const ImgMon = styled.div`

`
export const DetailMon = styled.div`
    padding-left: 15px;
`
export const AllCardMonModal = styled.div`
    display: grid;
    grid-gap: 15px;
    padding: 20px;
    margin-top: 30px;
    height: 630px;
    overflow-y: auto;
`