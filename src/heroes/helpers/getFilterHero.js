import {heroes} from '../data/heroes';

export const getFilterHero = ( someText )=>{
   
    return heroes.filter(element=> {
       return  ( element.publisher.toLowerCase().includes(someText.toLowerCase() ) || element.superhero.toLowerCase().includes(someText.toLowerCase() ))
    });

}