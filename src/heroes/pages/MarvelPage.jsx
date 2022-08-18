import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {

 

  return (
    <div className='container'>
      <h1>DC MArvel</h1>
      <hr />
      <HeroList publisher={ "Marvel Comics"} />
    </div>
  )
}
