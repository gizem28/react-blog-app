import MyNav from '../components/MyNavbar';
import '../App.css';
import Dashboard from '../pages/Dashboard';
import BlogForm from '../components/BlogForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
    <MyNav/>
    <BlogForm/>
    <Dashboard/>
    <Footer/>
    </div>
  );
}

export default Home;
