import styles from './ListOfCategories.module.css'
import categories from '../../data/categories.jsx'
import ButtonAndIvent from './ButtonsAndIvents.jsx'
import { CartContext } from './CartContext.jsx'
import { useState } from 'react'

export default function ListOfCategories() {
  const [categoriesList, setCategories] = useState(categories)

  return (
    <ul>
      {categoriesList.map((category) => (
        <li key={category.id}>
          <p>{category.id}</p>
          <p>{category.name}</p>
          <CartContext.Provider value={{ categoriesList, setCategories, category }} key={category.id}>
            <ButtonAndIvent />
          </CartContext.Provider>
        </li>
      ))}
    </ul>)
}
