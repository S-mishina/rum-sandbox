// app/product/[id]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const [product, setProduct] = useState<{ name: string; description: string; price: number; imageUrl: string; rating: number; reviews: { reviewer: string; date: string; text: string }[] } | null>(null);

    useEffect(() => {
        // Sample data to simulate product details
        const productData = {
            1: {
                name: "Product 1",
                description: "Detailed information about Product 1",
                price: 1200,
                imageUrl: "/images/product1.jpg",
                rating: 4.5,
                reviews: [
                    { reviewer: "Alice", date: "2024-01-01", text: "Great product! Exceeded my expectations." },
                    { reviewer: "Bob", date: "2024-01-15", text: "Solid quality, but could be improved in some areas." },
                    { reviewer: "Charlie", date: "2024-01-20", text: "Highly recommended for anyone looking for a good deal." }
                ]
            },
            2: {
                name: "Product 2",
                description: "Detailed information about Product 2",
                price: 3400,
                imageUrl: "/images/product2.jpg",
                rating: 4.0,
                reviews: [
                    { reviewer: "Dave", date: "2024-02-10", text: "Good quality and fast shipping." },
                    { reviewer: "Eve", date: "2024-02-18", text: "Happy with the purchase, would buy again." }
                ]
            },
            3: {
                name: "Product 3",
                description: "Detailed information about Product 3",
                price: 5600,
                imageUrl: "/images/product3.jpg",
                rating: 5.0,
                reviews: [
                    { reviewer: "Frank", date: "2024-03-05", text: "Amazing quality! Worth every penny." },
                    { reviewer: "Grace", date: "2024-03-12", text: "Exceeded expectations in every way." }
                ]
            }
        };

        setProduct(productData[parseInt(id)]);
    }, [id]);

    if (!product) return <p>Loading...</p>;

    // Helper function to display stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={styles.starRating}>
                    {i < Math.floor(rating) ? "★" : "☆"}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.productName}>{product.name}</h1>
            </header>
            <main>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>Price: ¥{product.price.toLocaleString()}</p>
                <button className={styles.addToCartButton}>Add to Cart</button>

                {/* Reviews and Ratings */}
                <section className={styles.reviews}>
                    <h2 className={styles.reviewTitle}>Customer Reviews</h2>
                    <div className={styles.starRating}>{renderStars(product.rating)}</div>
                    {product.reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.reviewerName}>{review.reviewer}</div>
                            <div className={styles.reviewDate}>{review.date}</div>
                            <p className={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
