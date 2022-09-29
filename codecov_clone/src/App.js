
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './NavbarPages/Navbar';
import AllRoute from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    
     
      {/* <Navbar/> */}
      <AllRoute/>
      <HomePage/>
    </div>
  );
}

export default App;
