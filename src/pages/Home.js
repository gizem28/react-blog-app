import '../App.css';
import SearchBar from '../components/SearchBar';
import Dashboard from '../pages/Dashboard';
// import { AuthContext } from "../context/AuthContext";

function Home() {

  return (
    <div className="App">
      <SearchBar/>
    <Dashboard/>
    </div>
  );
}

export default Home;
