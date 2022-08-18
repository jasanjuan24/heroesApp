import React from 'react'
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    //const lista = getHeroesByPublisher(publisher);
    const lista = useMemo(()=> getHeroesByPublisher(publisher), [publisher]) ;
   

  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                lista.map(hero=>{
                    return <HeroCard key={  hero.id } hero={ hero } />
                })
            }
        </div>
    </>
  )
}
