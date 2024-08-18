import {IDrinkDetails} from './interfaces';

export const extractIngredientsAndMeasurements = (obj: object): IDrinkDetails['ingredients'] => {
  const ingrArr = Object.entries(obj) .filter(value => value[0].includes('strIngredient') && value[1] !== null) .map(value => value[1]);
  const msrArr = Object.entries(obj)  .filter(value => value[0].includes('strMeasure')) .slice(0, ingrArr.length) .map(value => value[1]);
  return ingrArr.map((ingr, idx) => ({ingr, msr: msrArr[idx]}));
};
