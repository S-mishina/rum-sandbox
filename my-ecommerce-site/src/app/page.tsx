// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
    const products = [
        { id: 1, name: "Product 1", description: "An Amazon-style product description", price: "¥1,200" },
        { id: 2, name: "Product 2", description: "An Amazon-style product description", price: "¥3,400" },
        { id: 3, name: "Product 3", description: "An Amazon-style product description", price: "¥5,600" },
    ];

    return (
        <section>
            <h2 className={styles.sectionTitle}>Recommended Products</h2>
            <ul className={styles.productList}>
                {products.map((product) => (
                    <li key={product.id} className={styles.productCard}>
                        <h3 className={styles.productName}>
                            <Link href={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className={styles.productDescription}>{product.description}</p>
                        <p className={styles.productPrice}>{product.price}</p>
                        <Link href={`/product/${product.id}`}>
                            <button className={styles.buyButton}>Add to Cart</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
