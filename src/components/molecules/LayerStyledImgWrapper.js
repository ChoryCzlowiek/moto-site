import React from 'react';
import styled from 'styled-components';

const WrapperLayer = styled.div`
    position: relative;
    z-index: 100;
    height: 100%;
`;

const ContainerLayer = styled.div`
    height: 100%;
`;

const BlockLayer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
`;

const WhiteApla = styled.div`
    background: rgba(255, 255, 255, 0.4);
    color: #001b49;
    font-size: 32px;
    font-weight: 700;
    max-width: 500px;
    padding: 15px 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
`;

const Brands = styled.div`
    padding: 15px 30px;
`;

const BrandsHeader = styled.h2`
    color: #001b49;
`;

const BrandsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
    margin-top: 0.5rem;
`;

const BrandLogo = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    opacity: 0.7;
`;

export default function LayerStyledImgWrapper(props) {
    return (
        <WrapperLayer>
            <ContainerLayer>
                <BlockLayer>
                    <WhiteApla>{props.header}</WhiteApla>
                    <Brands>
                        <BrandsHeader>
                            {props.brands}
                        </BrandsHeader>
                        <BrandsContainer>
                            <BrandLogo img={props.logo1} />
                            <BrandLogo img={props.logo2} />
                        </BrandsContainer>
                    </Brands>
                </BlockLayer>
            </ContainerLayer>
        </WrapperLayer>
    )
}