import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewFurnOrderPage from '../NewFurnOrderPage/NewFurnOrderPage';
import PurchaseHistoryPage from '../PurchaseHistoryPage/PurchaseHistoryPage';
// import * as ordersAPI from '../../utilities/orders-api'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/orders/new" element={<NewFurnOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<PurchaseHistoryPage user={user} setUser={setUser}/>} />
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
