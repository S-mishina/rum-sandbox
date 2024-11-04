// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // グローバルスタイルがある場合に読み込み
import styles from './layout.module.css'; // layout用のCSSファイルを新規作成

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className={styles.header}>
                    <h1>EC Sample Site</h1>
                    <nav className={styles.navbar}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                    </nav>
                </header>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h3>Categories</h3>
                        <ul>
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.mainContent}>
                        {children}
                    </main>
                </div>

                <footer className={styles.footer}>
                    <p>&copy; sample page</p>
                </footer>
            </body>
        </html>
    );
}
