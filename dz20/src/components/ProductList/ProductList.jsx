import products from '../../data/Products.jsx'
import styles from './ProductList.module.css'
export default function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className={styles.li}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.discount > 0
            ? (
              <>
                <span>%</span> {product.price * (1 - (product.discount / 100))}
              </>
            )
            : product.price
          }</p>
          <img src={product.image} alt={product.title} />
        </li>
      ))}
    </ul>
  )
}
