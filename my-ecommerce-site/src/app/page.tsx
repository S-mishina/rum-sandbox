// app/page.tsx
"use client";

import Link from 'next/link';
import styles from './page.module.css';
import { getFaroInstance } from './lib/initializeFaro';
import { useEffect } from 'react';

export default function HomePage() {
    const products = [
        { id: 1, name: "Product 1", description: "An Amazon-style product description", price: "¥1,200" },
        { id: 2, name: "Product 2", description: "An Amazon-style product description", price: "¥3,400" },
        { id: 3, name: "Product 3", description: "An Amazon-style product description", price: "¥5,600" },
    ];

    useEffect(() => {
        async function sendErrorLog() {
            const faro = await getFaroInstance(); // Faro初期化を待機
            if (faro) {
                faro.api.pushError(new Error("Test error for Faro"));
            } else {
                console.error("Faro instance not initialized");
            }
        }
        sendErrorLog();
    }, []); // 初回レンダリング時にのみ実行

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
