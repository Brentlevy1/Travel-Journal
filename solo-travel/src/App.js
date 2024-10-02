import './App.css';
import Navbar from "./components/Nav"
import Main from "./components/Main"
import TravelInfo from "./Data.js"


function App() {
  const locationData = TravelInfo.map(item => {

    return <Main 
            key = {item.id}
            item={item}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='mainContainer'>
        {locationData}
      </div>
    </div>
  );
}

export default App;

console.log(TravelInfo)
