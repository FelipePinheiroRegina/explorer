import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';

import { AuthRoutes } from './auth.routes';
import { useEffect } from 'react';
import { api } from '../services/api';

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('users/validated').catch(error => {
      if(error.response?.status === 401) { //esse ( error.response?.status ) quer dizer que se o erro tiver response verifique se o status dentro é igual 401
        signOut()
      }
    })
  }, [])

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