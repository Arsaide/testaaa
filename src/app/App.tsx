import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./home/page";
import ProductListPage from "./product-list/page";
import ProductIdPage from "./product-list/product-id/ProductIdPage";
import CreateProductPage from "./create-product/page";
import AnalyticsPage from "./analytics/page";
import ClientsPage from "./clients/page";
import NotAuthPage from "./not-auth/page";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={'/'} element={<HomePage/>}/>
       <Route path={'/auth'} element={<NotAuthPage/>}/>
       <Route
           path={'/products-list'}
           element={<ProductListPage />}
       />
       <Route
           path={'/products-list/:id'}
           element={<ProductIdPage />}
       />
       <Route
           path={'/create-product'}
           element={<CreateProductPage />}
       />
       <Route
           path={'/analytics'}
           element={<AnalyticsPage />}
       />
       <Route path={'/clients'} element={<ClientsPage />} />
     </Routes>
    </div>
  );
}

export default App;
