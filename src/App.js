import MyNav from './components/MyNavbar';
import './App.css';
import Dashboard from './pages/Dashboard';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <div className="App">
    <MyNav/>
    <BlogForm/>
    <Dashboard/>
    </div>
  );
}

export default App;
