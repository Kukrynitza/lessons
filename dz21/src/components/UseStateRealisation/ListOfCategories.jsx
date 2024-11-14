import styles from './ListOfCategories.module.css'
import categories from '../../data/categories.jsx'
import ButtonAndIvent from './ButtonsAndIvents.jsx'
import { useState } from 'react'

export default function ListOfCategories() {
  const [categoriesList, setCategories] = useState(categories)

  return (
    <ul>
      {categoriesList.map((category) => (
        <li key={category.id}>
          <p>{category.id}</p>
          <p>{category.name}</p>
          <ButtonAndIvent
            categoriesList ={categoriesList}
            setCategories={setCategories}
            category={category}
          />
        </li>
      ))}
    </ul>)
}
