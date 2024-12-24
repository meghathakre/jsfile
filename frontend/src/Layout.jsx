import { Outlet } from "react-router-dom"

import TopMenu from "./components/TopMenu"
import Header from "./components/Header";


const Layout=()=>{
    return(
        <>
    <div id="headerPart">
    <Header/>
         <TopMenu/>
         </div>
          <Outlet/>        

        
        </>
    )
}
export default Layout;