import './App.css';
import Search from './components/search/search';

function App() {
  const handleOnSearchChange = (searcData) =>{
    console.log(searcData);
  }
  return (
    <div className="container">
      <Search onSearchData={handleOnSearchChange}/>
    </div>
  );
}

export default App;
