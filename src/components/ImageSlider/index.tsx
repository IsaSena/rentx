import React, { useState, useRef } from "react";

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage
} from './styles';
import { FlatList, ViewToken } from "react-native";

interface Props{
    imagesUrl: string[];
}

interface ChangeImageProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl } : Props){
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info : ChangeImageProps) => {
        const index = info.viewableItems[0].index!; //nao pode ser nulo
        setImageIndex(index);
    }); //quando muda o item vincula aqui no registro, gera um objeto ao mudar a imagem

    return (
        <Container>
            <ImageIndexes>
                {
                    imagesUrl.map(( _ , index ) => ( //ignora o valor do item e pega a posição
                        <ImageIndex 
                            key={String(index)}
                            active={index === imageIndex}
                        />
                    ))
                }
                
            </ImageIndexes>

                <FlatList
                data={imagesUrl}
                keyExtractor={key => key}
                renderItem={({ item }) =>(
                <CarImageWrapper>
                    <CarImage
                    source ={{ uri: item }}
                    resizeMode="contain"
                    /> 
                </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
                />

        </Container>
    )
}