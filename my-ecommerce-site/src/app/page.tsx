// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
    const products = [
        { id: 1, name: "Product 1", description: "An Amazon-style product description", price: 1200 },
        { id: 2, name: "Product 2", description: "An Amazon-style product description", price: 3400 },
        { id: 3, name: "Product 3", description: "An Amazon-style product description", price: 5600 },
    ];

    return (
        <section>
            <h2 className={styles.sectionTitle}>Recommended Products</h2>
            <ul className={styles.productList}>
                {products.map((product) => (
                    <li key={product.id} className={styles.productCard}>
                        <Link href={`/product/${product.id}`}>
                            <div>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productDescription}>{product.description}</p>
                                <p className={styles.productPrice}>¥{product.price.toLocaleString()}</p>
                                <button className={styles.buyButton}>Add to Cart</button>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
