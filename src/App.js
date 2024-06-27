import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Sidebar from "./components/sidebar/sidbar";
import Home from "./pages/Home/Home";
import Telugu from "./pages/Telugu/telugu";
import Hinanna from "./pages/Hinanna/hinanna";
import Hindi from "./pages/Hindi/hindi";
import Login from "./pages/Login/login";
import { Info } from "./Helper/helper";
import { useState } from "react";
import Logout from "./pages/Logout/logout";
const App = ()=>{
    const [allInf,setAllInf] = useState({
        username:'',
        email:'',
        status:''
      });
    return(
        <div>
             <BrowserRouter>
                 <Info.Provider value={{allInf,setAllInf}}><Sidebar/></Info.Provider >
                 <Routes>
                    <Route path="/" element={<Info.Provider value={{allInf,setAllInf}}><Home/></Info.Provider>} />
                    <Route path="/login" element={<Info.Provider value={{allInf,setAllInf}}><Login/></Info.Provider>} />
                    <Route path="/hinanna" element = {<Info.Provider value={{allInf,setAllInf}}><Hinanna/></Info.Provider>} />
                    <Route path="/tollywoodhits" element={<Info.Provider value={{allInf,setAllInf}}><Telugu/></Info.Provider>} />
                    <Route path="/bollywoodhits" element={<Info.Provider value={{allInf,setAllInf}}><Hindi/></Info.Provider>} />
                    <Route path="/logout" element={<Info.Provider value={{allInf,setAllInf}}><Logout/></Info.Provider>} />
                 </Routes>
             </BrowserRouter>
        </div>
    );
}

export default App;