import SpeedSvg from '../assets/speed.svg'
import AccelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'

import GasolineSvg from '../assets/gasoline.svg'
import EnergySvg from '../assets/energy.svg'
import HybridSvg from '../assets/hybrid.svg'

import ExchangeSvg from '../assets/exchange.svg'
import PeopleSvg from '../assets/people.svg'

export function getAcceessoryIcon ( type : string){
    switch(type){
        case 'speed':
            return SpeedSvg;

        default:
             break;
    }
}

