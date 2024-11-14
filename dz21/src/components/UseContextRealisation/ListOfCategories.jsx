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
        <CartContext.Provider value={{ categoriesList, setCategories, category }} key={category.id}>
          <li key={category.id}>
            <p>{category.id}</p>
            <p>{category.name}</p>
            <ButtonAndIvent
              categoriesList ={categoriesList}
              setCategories={setCategories}
              category={category}
            />
          </li>
        </CartContext.Provider>
      ))}
    </ul>)
}
