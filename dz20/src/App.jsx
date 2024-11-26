import Greeting from './components/Greeting/Greeting.jsx'
import ProductList from './components/ProductList/ProductList.jsx'
import UserStatus from './components/UserStatus/UserStatus.jsx'

export default function App() {
  return (
    <>
      <Greeting name="Олег" />
      <UserStatus isOnline />
      <ProductList />
    </>
  )
}
