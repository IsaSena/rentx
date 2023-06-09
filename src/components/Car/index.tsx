import React from 'react';
import { CarDTO } from "../../dtos/CarDTO";
import GasolineSvg from '../../assets/gasoline.svg'

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles'
import { TouchableOpacityProps } from 'react-native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Props extends TouchableOpacityProps{
    data : CarDTO;
}

export function Car({ data, ...rest } : Props){
    const MotorIcon = getAccessoryIcon(data.fuel_type); /*faz na seleção aparecer o tipo de motor*/
    return (
        <Container {...rest} >
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
                
                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price} `}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>

            <CarImage source={{ uri: data.thumbnail}} 
            resizeMode="contain"
            />
        </Container>
    )
}