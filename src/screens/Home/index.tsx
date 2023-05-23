import React, { useEffect, useState } from "react";
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { api } from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'
import Logo from '../../assets/logo.svg'

import { 
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";

export function Home(){
    const [ cars, setCars ] = useState<CarDTO[]>([]);
    const [ loading, setLoading ] = useState(true);
    const navigation = useNavigation<any>();

    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
    
        rent: {
            period: 'Ao dia',
            price: 120,
        },
    
        thumbnail: 'https://www.pngmart.com/files/22/Audi-RS5-PNG-HD.png'
    }

    function handleCarDetails(){
        navigation.navigate('CarDetails');
    }

    useEffect(() =>{
        async function  fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars()
    }, []);

    return (
    <Container>

        <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />

        <Header>
            <HeaderContent>
            <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
            />
            <TotalCars>
                Total de 12 carros
            </TotalCars>
            </HeaderContent>
        </Header>

        <CarList
            data={cars}
            keyExtractor={(item: CarDTO) => item.id}
            renderItem={({ item }: { item: CarDTO }) => <Car data={item} onPress={handleCarDetails} />}
/>
    </Container>
    )
}