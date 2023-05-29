import React, { useEffect } from 'react';
import LogoSvg from '../../assets/logo.svg';
import BrandSvg from '../../assets/brand.svg';


import Animated, { 
    useSharedValue, 
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import {
    Container
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function Splash() {
    const navigation = useNavigation();
    const splashAnimation = useSharedValue(0);

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, 
                [0, 50], //tempo
                [1, 0]), //opacidade
                transform : [
                    {
                        translateX: interpolate(splashAnimation.value,
                            [0, 50],
                            [0, -50],
                            Extrapolate.CLAMP //n passa do tempo
                            )
                    }
                ]
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity : interpolate(splashAnimation.value, 
                [0, 25, 50], //tempo
                [0, .3, 1]), //opacidade
                transform: [
                    {
                        translateX: interpolate(splashAnimation.value,
                            [0, 50],
                            [-50, 0],
                            Extrapolate.CLAMP
                            )
                    }
                ]
        }
    });

    function startApp(){
        navigation.navigate('Home');
    }

    useEffect(() =>{
        splashAnimation.value = withTiming (50,{duration: 1000},
            () => { // função executada no final da animação
              'worklet'
              runOnJS(startApp)();
            }
            );
    },[]);

    return (
        <Container>
            <Animated.View style={[brandStyle, {position: 'absolute'}]}>
                <BrandSvg width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSvg width={180} height={20} />
            </Animated.View>
        </Container>
    );
}
