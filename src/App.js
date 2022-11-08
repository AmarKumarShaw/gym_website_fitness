import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import WhyUs from './Why Us/WhyUs';
import Card from './cards/Card';
import Polygon from './Polygon/Polygon';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    <WhyUs />
    <Card/>
    <Polygon/>
    </>
  );
}

export default App;
