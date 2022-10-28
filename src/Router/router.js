import {
    Routes,
    Route,
    BrowserRouter
  } from "react-router-dom";
import HomeSchedule from "../Pages/Form/Form";
import HomeIcons from "../Pages/Home/Home";
  
  
  const Router = () => {
  
      return (
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeIcons/>}></Route>
          </Routes>
          <Routes>
            <Route path="/agenda" element={<HomeSchedule/>}></Route>
          </Routes>
        </BrowserRouter>
      );
    }
  
  export default Router;