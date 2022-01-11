import '../App.css';
import Dashboard from '../pages/Dashboard';
import Footer from '../components/Footer';
// import { AuthContext } from "../context/AuthContext";

function Home() {

  return (
    <div className="App">
    <Dashboard/>
    <Footer/>
    </div>
  );
}

export default Home;
