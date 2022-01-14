import AppRouter from './app-router/AppRouter';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextPRovider from "./contexts/BlogContext";



function App() {
  return (
    <div className="App">
     <AuthContextProvider>
      <BlogContextPRovider>
    <AppRouter/>
    </BlogContextPRovider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
