import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  function identifyUser() {
    switch (user.role) {
      case "admin":
        return <AdminRoutes/>

      case "customer":
        return <CustomerRoutes/>

      case "sale":
        return <SaleRoutes/>

      default:
        return <CustomerRoutes/>
    }
  }

  return (
    <BrowserRouter>
      {user ? identifyUser() : <AuthRoutes />}
    </BrowserRouter>
  );
}