import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';

import { useAuth } from '../../hooks/auth';

export function Home() {
  const { user } = useAuth()

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />

        {user.role === 'admin' && <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />}

        {['admin','sale'].includes(user.role) && <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />}
        
        
      </main>
    </Container>
  )
}