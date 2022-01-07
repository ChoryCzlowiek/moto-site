import React from "react";
import styled from "styled-components";

export default function FeaturesBlock(props) {
    const FeaturesBlockWrapper = styled.section`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        @media (max-width: 768px) {
            flex-flow: column nowrap;
        }
        @media (min-width: 768px) {
            position: relative;
            z-index: 9999;
        }
    `;

    const PhotoBlock = styled.img`
        width: calc(100% / 2);
        aspect-ratio: 16 / 9;
        object-fit: cover;
        @media (max-width: 768px) {
            width: 100%;
        }
    `;
    const ContentBlock = styled.div`
        width: calc(100% / 2);
        padding: 2rem;
        display: flex;
        flex-flow: column nowrap;
        gap: 15px;
        justify-content: center;
    `;

    const ContentHeader = styled.h2`
        font-family: "Lato";
        letter-spacing: 3px;
        font-size: 2.5rem;
        color: rgb(226,65,21);
    `;

    const ContentAbout = styled.p`
        font-family: Roboto;
        color: rgb(19,24,44);
        font-size: 1rem;
        line-height: 1.7rem;
    `;

    const ContentButton = styled.a`
        max-width: 10rem;
        padding: 0.9rem 1rem;
        font-size: 1rem;
        font-family: Lato;
        color: rgb(19,24,44);
        border: 2px solid rgb(226,65,21);
        border-radius: 0rem;
        background-color: rgb(226,65,21);
        cursor: pointer;
        text-align: center;
        text-decoration: none;
    `;

    const CenteredBlock = styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        width: 100%;
    `;

    const PhotoBackground = styled.img`
        width: 100%;
        height: 480px;
        object-fit: cover;
    `;

    const ContentFullBlock = styled.div`
        max-width: 992px;
        margin: 0 auto;
        padding: 50px 15px;
        position: relative;
        z-index: 10;
        margin-top: -240px;
        background-color: rgba(19,24,44,.8);
        color: white;
    `;

    const ContentGrid = styled.div`
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        gap: 15px;
        margin-top: 15px;
        position: relative;
        z-index: 20;
    `;

    const ItemGrid = styled.div`
        width: calc(50% - 15px);
        @media (max-width: 768px) {
            width: 100%;
        }
    `;

    const Icon = styled.img`
        height: 60px;
        aspect-ratio: 1;
        object-fit: contain;
        margin-bottom: 18px;
    `;

    const TextBlock = styled.div`
        padding-bottom: 18px;
    `;

    const TextBlockHeader = styled.h4``;

    const TextBlockContent = styled.p``;

    return (
        <>
            {props.position.includes("left") &&
                (
                    <FeaturesBlockWrapper>
                        <PhotoBlock src={props.image} alt={props.title} />
                        <ContentBlock>
                            <ContentHeader>{props.header}</ContentHeader>
                            <ContentAbout>{props.about}</ContentAbout>
                            {/* <ContentButton href={props.link}>{props.button}</ContentButton> */}
                        </ContentBlock>
                    </FeaturesBlockWrapper>
                )
            }
            {props.position.includes("right") &&
                (
                    <FeaturesBlockWrapper>
                        <ContentBlock>
                            <ContentHeader>{props.header}</ContentHeader>
                            <ContentAbout>{props.about}</ContentAbout>
                            {/* <ContentButton href={props.link}>{props.button}</ContentButton> */}
                        </ContentBlock>
                        <PhotoBlock src={props.image} alt={props.title} />
                    </FeaturesBlockWrapper>
                )
            }
            {props.position.includes("center") && 
                (
                    <FeaturesBlockWrapper style={{ zIndex: 999 }}>
                        <CenteredBlock>
                            <PhotoBackground src={props.image} alt={props.title} />
                            <ContentFullBlock>
                                <ContentHeader style={{ color: 'white', marginBottom: 20 }}>{props.header}</ContentHeader>
                                <ContentAbout style={{ color: 'white' }}>{props.about}</ContentAbout>
                                <ContentGrid>
                                    <ItemGrid>
                                        <Icon src={props.icon1} alt={props.content1Header} />
                                        <TextBlock>
                                            <TextBlockHeader>{props.content1Header}</TextBlockHeader>
                                            <TextBlockContent>{props.content1Content}</TextBlockContent>
                                        </TextBlock>
                                    </ItemGrid>
                                    <ItemGrid>
                                        <Icon src={props.icon2} alt={props.content2Header} />
                                        <TextBlock>
                                            <TextBlockHeader>{props.content2Header}</TextBlockHeader>
                                            <TextBlockContent>{props.content2Content}</TextBlockContent>
                                        </TextBlock>
                                    </ItemGrid>
                                    <ItemGrid>
                                        <Icon src={props.icon3} alt={props.content3Header} />
                                        <TextBlock>
                                            <TextBlockHeader>{props.content3Header}</TextBlockHeader>
                                            <TextBlockContent>{props.content3Content}</TextBlockContent>
                                        </TextBlock>
                                    </ItemGrid>
                                    <ItemGrid>
                                        <Icon src={props.icon4} alt={props.content4Header} />
                                        <TextBlock>
                                            <TextBlockHeader>{props.content4Header}</TextBlockHeader>
                                            <TextBlockContent>{props.content4Content}</TextBlockContent>
                                        </TextBlock>
                                    </ItemGrid>
                                </ContentGrid>
                            </ContentFullBlock>
                        </CenteredBlock>
                    </FeaturesBlockWrapper>
                )
            }
        </>
    );
}