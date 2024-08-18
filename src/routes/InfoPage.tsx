import {useParams} from 'react-router-dom';
import {useCocktailAPi} from '../hooks/cocktailApi';
import {useEffect, useState} from 'react';
import {IDrinkDetails} from '../interfaces';
import {Loader} from '../components';
import '../css/InfoPage.css';

export function InfoPage() { const {cocktailId} = useParams(); const {getCocktailDetails} = useCocktailAPi();
  const [drinkDetails, setDrinkDetails] = useState<IDrinkDetails>();

  useEffect(() => {
    if (cocktailId) {
      getCocktailDetails(cocktailId).then(drinkDetails => setDrinkDetails(drinkDetails)
      );
    }
  }, [cocktailId]);

  if (!drinkDetails) {
    return (
      <section className='info-page'><Loader /></section>
    );
  }

  return (
    <section className='info-page'>
      <article className='container'>
        <div className='img' style={{backgroundImage: `url(${drinkDetails.imgUrl})`}} />
        <div className='info'>
          <h1 className='header'>{drinkDetails.name}</h1>
          <h4 className='sub-header'>Ingredients</h4>
            {drinkDetails.ingredients?.map((ingr, idx) => (<div className='ingr-container' key={`${ingr.ingr}-${idx}`}>
                <p className='ingredient'>{ingr.ingr}</p><p className='measurement'>{ingr.msr || ''}</p></div>
            ))}
          <h4 className='sub-header'>Glass</h4>
            <p className='glass'>{drinkDetails.glass}</p>
          <h4 className='sub-header'>Tags</h4>
            <div className='tag-container'>
              {drinkDetails.tags?.map((t, idx) => (<p key={`${t}-${idx}`} className='tag'>{t}</p>))}
            </div>
          <h4 className='sub-header'>Category</h4>
          <p className='category'>{drinkDetails.category}</p>
        </div>
      </article>
    </section>
  );
}
