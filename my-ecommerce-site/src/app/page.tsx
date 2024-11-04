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
        <div>
            <header>
                <h1>Amazon-Style Homepage</h1>
                <nav className={styles.navbar}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/categories" className={styles.navLink}>Categories</Link>
                    <Link href="/deals" className={styles.navLink}>Deals</Link>
                    <Link href="/help" className={styles.navLink}>Help</Link>
                </nav>
            </header>

            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <h3>Categories</h3>
                    <ul>
                        <li>Electronics</li>
                        <li>Books</li>
                        <li>Fashion</li>
                        <li>Home Goods</li>
                        <li>Groceries</li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
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
                </main>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
