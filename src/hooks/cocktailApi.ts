import {IDrinkDetails} from '../interfaces';
import {extractIngredientsAndMeasurements} from '../utils';

export const useCocktailAPi = () => {
  const getRandomCocktail = async (): Promise<{ imgUrl: string; title: string; id: string; }> => {
    const res = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    const data = await res.json();
    return { imgUrl: data.drinks[0].strDrinkThumb, title: data.drinks[0].strDrink, id: data.drinks[0].idDrink, };
  };

  const getCocktailDetails = async (id: string): Promise<IDrinkDetails> => {
    const res = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return { category: data.drinks[0].strCategory, imgUrl: data.drinks[0].strDrinkThumb, tags: data.drinks[0].strTags?.split(','),
      glass: data.drinks[0].strGlass,
      ingredients: extractIngredientsAndMeasurements(data.drinks[0]),
      name: data.drinks[0].strDrink,
    };
  };

  const searchCocktail = async ( searchStr: string ): Promise<{name: string; id: string}[] | undefined> => {
    const res = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`);
    const data = await res.json();
    return data?.drinks?.map((obj: any) => ({ name: obj?.strDrink, id: obj?.idDrink, }));
  };

  return {getRandomCocktail, getCocktailDetails, searchCocktail};
};
