import React from 'react'
import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    const { id } = useParams();
    
    //const hero = getHeroById(id);// Como actualmente lo hago
    const hero = useMemo( ()=> getHeroById(id), [id] );

    const navigate = useNavigate();

    const onBack = ()=>{
      if(hero.publisher == 'DC Comics')
      {
        navigate('/dc', {
          replace: true
        });
      }
      else
      {
        navigate('/marvel', {
          replace: true
        });
      }
      
    }

    if(!hero){
      return <Navigate to="/marvel" />
    }

    const urlImage = `/assets/heroes/${hero.id}.jpg`;

    return (
      <>
        <div className="card mb-3 mt-5" >
          <div className="row g-0">
            <div className="col-md-4 ">
              <img src={  urlImage } className="img-fluid rounded-start animate__animated  animate__slideInLeft" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ hero.superhero }</h5>
                <p className="card-text">{ hero.alter_ego }</p>
                <p className="card-text">Publisher: { hero.publisher }</p>
                <p className="card-text">First Appearence:<small className="text-muted">{ hero.first_appearance }</small></p>
                <p className="card-text">Characters:<small className="text-muted">{ hero.characters }</small></p>
                <button className='btn btn-secondary' onClick={ onBack }> { "<< Regresar" }</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
