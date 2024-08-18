import {useNavigate} from 'react-router-dom';
import _ from 'lodash';
import {useState} from 'react';
import {Pagination} from './Paginate';
import {Loader} from '../Loader';
import '../../css/List.css';

interface ICocktailListProps { data: {name: string; id: string}[] | undefined; loading: boolean; }

export function CocktailList({data, loading}: ICocktailListProps) {
  const navigate = useNavigate();
  const [activeDataSet, setActiveDataSet] = useState(0);
  const dataSets = _.chunk(data, 10);
  const paginate = (arg: number) => setActiveDataSet(prev => Math.max(0, Math.min(prev + arg, dataSets.length - 1)) );

  if (loading) {
    return ( <div className='list-container loading'><Loader /></div>);
  }

  return (
    <div className='list-container'>{dataSets?.[activeDataSet]?.map(drink => ( <p className='drink-title' onClick={() => navigate(`/info/${drink.id}`)} key={drink.id}> {drink.name} </p> ))}
      <Pagination maxPage={dataSets.length - 1} paginate={paginate} activeDataSet={activeDataSet} />
    </div>
  );
}
