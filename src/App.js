import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Searchbar } from './components/Searchbar/Searchbar';
import { RentPage } from './Pages/Rent page/RentPage';

function App() {
  return (
    <div className="App">
     <Nav/>
     <RentPage/>
    </div>
  );
}

export default App;
