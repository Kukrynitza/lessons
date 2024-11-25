import products from '../../data/products.js'
import styles from './ProductList.module.css'

export default function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className={styles.product}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p className={styles.price}>
            {product.discount > 0 ? (
              <><span>%</span> {product.price * (1 - (product.discount / 100))}</>
            ) : (
              product.price
            )}
          </p>
        </li>
      ))}
    </ul>
  )
}
