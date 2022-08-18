import React,{ useState } from 'react'
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { HeroCard } from '../components/HeroCard';
import { getFilterHero } from '../helpers/getFilterHero';
import { useForm } from '../hooks/useForm';
import { useMemo } from 'react';

export const SearchPage = () => {

  //const [txtbuscar, setTxtBuscar] = useState('');
 
  const navigate = useNavigate();
  const location = useLocation();

  const {q=''} = queryString.parse(location.search);
  const heroList = useMemo(()=>getFilterHero(q), [q]);

  const {txtbuscar, onInputChange} = useForm({
    txtbuscar : q 
  });

  const onSearch = ( event )=>{
    event.preventDefault();
    if( txtbuscar.trim().length < 3 ) return;
    navigate(`?q=${txtbuscar.trim().toLowerCase()}`);
  }

  const searchHeroes = (heronName)=>{
    setHeroList( getFilterHero(heronName) );
  }

    return (
      <>
        <form onSubmit={ onSearch }>
          <div className="mb-3">
            <label  className="form-label">Super hero</label>
            <input type="text" value={txtbuscar} className="form-control" onChange={(e) =>onInputChange(e)} id="txtbuscar" name="txtbuscar" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Type your superhero</div>
          </div>
          <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroList.map(hero=>{
                    return <HeroCard key={  hero.id } hero={ hero } />
                })
            }
        </div>
      </>
    )
}
