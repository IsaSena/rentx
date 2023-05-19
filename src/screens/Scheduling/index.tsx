import React from "react";
import { useTheme } from "styled-components";
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue
} from './styles';
import { BackButton } from "../../components/BackButton";
import ArrowSvg from '../../assets/arrow.svg'
export function Scheduling(){
    const theme = useTheme();
    return(
        <Container>
            <Header>
                <BackButton 
                onPress={() => {}}
                color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e  {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>
                            18/06/2023
                        </DateValue>
                    </DateInfo>
                

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>
                            18/06/2023
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>

            </Header>
        </Container>
    )
}