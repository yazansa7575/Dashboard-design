import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/Products_page/ProductsPage.jsx"
import OrdersPage from './pages/Orders-page/OrdersPage.jsx';
import CustomersPage from './pages/Customers-page/CustomersPage.jsx';
import Transactions from './pages/Transactions-page/TransactionsPage.jsx'
import Messages from './pages/messages-page/MessagesPage.jsx'
import DashboardPage from './pages/Dashboard-Page/DashboardPage.jsx'
import SidBar from './component/SidBar';
import MainNav from './component/MainNav';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='h-[100vh] overflow-hidden flex flex-row'>
          <SidBar />
          <div className='w-9/12 overflow-auto'>
            <MainNav />
            <Routes>
              <Route index element={< DashboardPage />} />
              <Route path="/ProductsPage" element={<ProductsPage />} />
              <Route path="/OrdersPage" element={<OrdersPage />} />
              <Route path="/CustomersPage" element={<CustomersPage />} />
              <Route path="/Transactions" element={<Transactions />} />
              <Route path="/Messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
