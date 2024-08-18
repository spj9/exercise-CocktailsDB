import {useEffect, useState} from 'react';
import {CocktailList} from '../components';
import {useCocktailAPi} from '../hooks/cocktailApi';
import _ from 'lodash';
import '../css/SearchPage.css';

export function SearchPage() {
  const {searchCocktail} = useCocktailAPi();
  const [listData, setListData] = useState<{name: string; id: string}[]>();
  const [loading, setLoading] = useState(false);

  const debouncedSearch: _.DebouncedFunc<React.ChangeEventHandler<HTMLInputElement>> = _.debounce(e => {
    if (e.target.value) 
    { setLoading(true);
        searchCocktail(e.target.value).then(data => setListData(data)).then(() => setLoading(false));
    }
  }, 600);

  useEffect(() => { return () => { debouncedSearch.cancel(); }; }, []);
  return (
    <section className='search-page'>
      <div className='input-container'>
        <label htmlFor='search'>Search for cocktails</label>
        <input id='search' className='input' autoFocus onChange={debouncedSearch} />
      </div>
      <CocktailList loading={loading} data={listData} />
    </section>
  );
}
