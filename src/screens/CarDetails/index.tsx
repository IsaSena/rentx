import React from "react";
import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
} from './styles';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'


import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

export function CarDetails(){
    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <CarImages>
                <ImageSlider 
                imagesUrl={[ 'https://www.pngmart.com/files/22/Audi-RS5-PNG-HD.png' ]} 
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>BMW</Brand>
                        <Name>Pega fogo</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 600</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name="380km/h" icon={speedSvg}/>
                    <Acessory name="3.2s" icon={accelerationSvg}/>
                    <Acessory name="800 HP" icon={forceSvg}/>
                    <Acessory name="Gasolina" icon={gasolineSvg}/>
                    <Acessory name="Auto" icon={exchangeSvg}/>
                    <Acessory name="2 pessoas" icon={peopleSvg}/>
                </Acessories>

                <About>
                    Um carro maravilhoso pra fazer um churrasco na sua casa, na rua, em qualquer lugar! Você pode estar se divertindo no shopping e seu carro em chamas!
                </About>
            </Content>

            <Footer>
                <Button title="Confirmar"/>
            </Footer>

        </Container>
    )
}