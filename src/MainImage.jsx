import styled from "styled-components";


export default function MainImage() {

    const ContainerImage = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
                        // after에 만들어서 블러 같은 효과를 준다.
    &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(41, 65, 171);
    }
    `

    const MainImages = styled.img`
    position: relative;
    top: 200px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 50;
    `

    const MainTitle = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    left: 50%;
    z-index: 99;
    margin-top: 20px;

    font-size: 146px;
    color: #1ed760;
    font-weight: 900;
    `

    const SubTitle = styled.div`
    padding-left: 10px;
    font-size: 18px;
    margin-top: 20px;
    color: #1ed760;
    `

    const Left = styled.div`
    position: relative;
    left: -1.5em;
    `

    return ( 
        <ContainerImage>
            <MainImages src="https://www-growth.scdn.co/static/home/bursts.svg" alt="메인이미지"/>
            <MainTitle>
                <Left>Listening is</Left>
                <div>everything</div>
                <SubTitle>Millions of songs and podcasts. No credit card needed.</SubTitle>
            </MainTitle>
            
        </ContainerImage>
    )
}