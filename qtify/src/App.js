// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
      {/* <div className="cardContainer">
      {topAlbumData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> */}
    </div>
  );
}

export default App;