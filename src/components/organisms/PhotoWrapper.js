import React from "react";
import styled from "styled-components";

const PhotoWrapperContent = styled.section`
    width: 100%;
    height: 480px;
`;

const PhotoFullImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 40% 40%;
`;

export default function PhotoWrapper(props) {
    return (
        <PhotoWrapperContent>
            <PhotoFullImage src={props.img} alt={props.title} />
        </PhotoWrapperContent>
    )
}