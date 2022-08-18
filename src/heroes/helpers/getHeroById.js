import {heroes} from '../data/heroes';

export const getHeroById = (heroid)=>{



    return heroes.find(element=> element.id == heroid );

}