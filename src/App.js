import AppRouter from './app-router/AppRouter';
import AuthContextProvider from './contexts/AuthContext';
import { BlogContextProvider } from './contexts/BlogContext';


function App() {
  return (
    <div className="App">
     <AuthContextProvider>
       <BlogContextProvider>
         <AppRouter/>
       </BlogContextProvider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
