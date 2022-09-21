import Home from './homepage-components/home/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactHome from './contact-page/contact-Home/contactHome';
import InsightHome from './Insights&research/Insight-home/insight-home';
import ProductsHome from './ourproducts/productsHome/productsHome';
import Odinhome from './ourproducts/product/odin-product/odin-home';
import Ivarifyhome from './ourproducts/product/i-verify-product/iverify-home';
import DegitalPHome from './ourproducts/product/digitalproduct/digitalP-home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<ContactHome/>}/>
    <Route path='/insight' element={<InsightHome/>}/>
    <Route path='/product' element={<ProductsHome/>}/>
    <Route path='/odin' element={<Odinhome/>}/>
    <Route path='/iverify' element={<Ivarifyhome/>}/>
    <Route path='/digital' element={<DegitalPHome/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
