import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (publisher)=>{
    const validPublisher = ['DC Comics','Marvel Comics'];
    if ( !validPublisher.includes(publisher) ){
        throw new Error (`${publisher} isnt valid`);
    }

    return heroes.filter(element=> element.publisher == publisher );

}