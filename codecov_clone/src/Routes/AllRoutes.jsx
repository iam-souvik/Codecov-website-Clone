
import {  Route, Routes } from "react-router-dom"
// import Contact from "../NavbarPages/Contact"
// import Customer from "./NavbarPages/Customer"
// import Docomentation from "../NavbarPages/Docomentation"


// import Logo from "../NavbarPages/Logo"
// import Pricing from "../NavbarPages/Pricing"
// import ProductPage from "../NavbarPages/ProductPage"
// import Resources from "../NavbarPages/Resources"
import Logo from "../NavbarPages/Logo"
import ProductPage from "../NavbarPages/ProductPage"
import Docomentation from "../NavbarPages/Docomentation"
import Customer from "../NavbarPages/Customer"
import Resources from "../NavbarPages/Resources"
import Pricing from "../NavbarPages/Pricing"
import Contact from "../NavbarPages/Contact"
 import Login from "../NavbarPages/Login"
 import GetDemo from "../NavbarPages/Get_Demo"




function AllRoute() {
    return <div>



        <Routes>

        <Route path="/logo" element={<Logo />} >    </Route>
            <Route path="/" element={<ProductPage />} >    </Route>
            <Route path="/doco" element={<Docomentation />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/get_demo" element={<GetDemo />}></Route>
        </Routes>


        
    </div>

}
export default AllRoute