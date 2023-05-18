import React from "react";
import { 
    Container,
    Header
} from './styles';

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

export function CarDetails(){
    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <ImageSlider 
            imagesUrl={[ 'https://www.pngmart.com/files/22/Audi-RS5-PNG-HD.png' ]} 
            />

        </Container>
    )
}