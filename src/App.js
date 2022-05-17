import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0)
  const url = `https://hn.algolia.com/api/v1/search?query=${search}&page=${page}`;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNews(data.hits);
        setIsLoading(false);
        console.log(data)
      })
  }, [page, search]);

  return(
    <>
      <SearchForm setSearch={setSearch}/>
      <Buttons page={page} setPage={setPage}/>
      {isLoading && 
      (<div className='spinner-container'> <div className='loading'></div> </div>)}
      {!isLoading && (
        <Stories news={news}/>
      )}
    </>
  )
}

export default App;