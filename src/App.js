import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "./Components/home/home";
import Search from "./Components/search/search";
import Login from "./Components/login/login";
import Createblock from "./Components/CreateBlock/Createblock";
import Displaycertif from "./Components/Displaycertif/displaycertif";
import MinerPage from "./Components/MinerPage/MinerPage";
import Testing from "./Components/testing/Testing";
import Testkenza from "./Components/testing/testkenza";
import CreateDiplomaFactory from "./Components/CreateDiplomaFactory/CreateDiplomaFactory"
import { Components } from "antd/lib/date-picker/generatePicker";

function App() {
  /*const [data,setdata]= useState([{}])
  
  useEffect(()=>{
  fetch("/test").then(
   
    res => res.json()
  ).then(
    data => {
      setdata(data)
    }
  )
  },[])

  

*/

  return (
    <>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/SearchDegree" element={<Search />} />
            <Route exact path="/CreateBlock" element={<Createblock />} />
            <Route exact path="/displaycertif" element={<Displaycertif />} />
            <Route exact path="/minerpage" element={<MinerPage />} />
            <Route exact path="/testing" element={<Testing />} />
            <Route exact path="/testkenza" element={<Testkenza />} />
            <Route exact path="/CreateDiplomaFactory" element={<CreateDiplomaFactory />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default App;
