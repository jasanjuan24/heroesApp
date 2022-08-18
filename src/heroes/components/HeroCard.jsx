import { Link } from "react-router-dom";


export const HeroCard = ({hero}) => {

    const urlImage = `/assets/heroes/${hero.id}.jpg`;
    const caractersByHero =  <p className="card-text">{ hero.characters }</p>;
    return (
        <>
            <div className="card" >
                <img src={urlImage} className="card-img-top" alt="Imagen"/>
                <div className="card-body">
                    <h5 className="card-title">{ hero.superhero }</h5>
                    <p className="card-text">{ hero.alter_ego }</p>
                    <p className="card-text">Publisher: { hero.publisher }</p>
                    { hero.characters != hero.alter_ego && caractersByHero }
                    <p className="card-text">
                        <small className="text.muted">{ hero.first_appearence }</small>
                    </p>
                    <Link className="btn btn-primary" to={ "/hero/"+hero.id } >
                        More information
                    </Link>
                </div>
            </div>
        </>
    )
}

/**
 * 
 *  'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne'
 */