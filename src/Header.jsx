import styled from "styled-components";
import LOGO from "./logo.png"

export default function Header() {
    
    const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
    `
    const GlobalNav = styled.div`
    width: 1000px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    font-weight: 700;
    `
    const SmallNav = styled.div`
    display: flex;
    justify-content: space-between;
    div, span {
        padding: 0 15px;
        cursor: pointer;
        &:hover {
        color: #1ed760;
        }
    }
    `

    return (
        <Container>
            <GlobalNav>
                <div><img src={LOGO} width="132px" alt="logo"/></div>
            <SmallNav>
                <div>Premium</div>
                <div>Support</div>
                <div>Download</div>
                <span>|</span>
                <div>Sign up</div>
                <div>Log in</div>
            </SmallNav>
            </GlobalNav>
        </Container>
    )
}