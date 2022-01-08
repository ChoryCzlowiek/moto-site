import React from "react";
import styled from "styled-components";

const JoinUsBlockWrapper = styled.section`
    width: 100%;
    margin: 3rem 0;
`;

const Wrapper = styled.div`
    padding: 4rem 0rem;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
`;

const PartnerWrapper = styled(Wrapper)`
    &::before {
        background-color: #fb2f2f;
        color: white;
        clip-path: polygon(0 0, 75% 0, 65% 100%, 0% 100%);
        width: 100%;
        position: absolute;
        height: 100%;
        content: "";
        z-index: 1;
        margin-bottom: 2rem;
        margin-top: -4rem;
    }
`;

const ServiceWrapper = styled(Wrapper)``;

const GradientWrapper = styled(Wrapper)`
    &::before {
        background: linear-gradient(-90deg, #c0381c, #0d093f);
        width: 100%;
        position: absolute;
        height: 100%;
        content: "";
        z-index: 1;
        margin-bottom: 2rem;
        margin-top: -4rem;
    }
`;

const PartnerContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: 768px) {
        flex-flow: column nowrap;
    }
    gap: 15px;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    overflow: visible;
    position: relative;
    z-index: 10;
`;

const TextBlock = styled.div`
    width: calc(100% / 3);
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;
    justify-content: center;
`;

const Header = styled.h2`
    color: white;
    @media (max-width: 768px) {
        color: inherit;
    }
    font-size: 28px;
    line-height: 36px;
`;

const Content = styled.p`
    color: white;
    @media (max-width: 768px) {
        color: inherit;
    }
    font-size: 20px;
    line-height: 28px;
`;

const PhotoBlock = styled.div`
    width: calc(100% / 3 * 2);
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const ImageItem = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
`;

export default function JoinUsBlock({ slide1, slide2, slide3, header, content, photo }) {
    return (
        <JoinUsBlockWrapper>
            {slide1 && (
                <PartnerWrapper>
                    <PartnerContainer>
                        <TextBlock>
                            <Header>{header}</Header>
                            <Content>{content}</Content>
                        </TextBlock>
                        <PhotoBlock>
                            <ImageItem
                                src={photo}
                                alt={header}
                            />
                        </PhotoBlock>
                    </PartnerContainer>
                </PartnerWrapper>
            )}
            {slide2 && (
                <ServiceWrapper>
                    <PartnerContainer>
                        <TextBlock>
                            <Header style={{ color: 'inherit' }}>{header}</Header>
                            <Content style={{ color: 'inherit' }}>{content}</Content>
                        </TextBlock>
                        <PhotoBlock>
                            <ImageItem
                                src={photo}
                                alt={header}
                                style={{ boxShadow: '15px -15px 0px #fb2f2f'}}
                            />
                        </PhotoBlock>
                    </PartnerContainer>
                </ServiceWrapper>
            )}
            {slide3 && (
                <GradientWrapper>
                    <PartnerContainer>
                        <TextBlock>
                            <Header>{header}</Header>
                            <Content>{content}</Content>
                        </TextBlock>
                        <PhotoBlock>
                            <ImageItem
                                src={photo}
                                alt={header}
                            />
                        </PhotoBlock>
                    </PartnerContainer>
                </GradientWrapper>
            )}
        </JoinUsBlockWrapper>
    )
}