import styled from "styled-components/native";

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View`
    width: 100% ;
`;

export const ImageIndexes = styled.View`

`;

export const ImageIndex = styled.View<ImageIndexProps>`

`;

export const CarImageWrapper = styled.View`

`;

export const CarImage = styled.Image`
    width: 280px;
    height: 132px;
`;