// components/Logo.tsx
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <span className={styles.logoText}>
        <span className={styles.letterO}>o</span>
        <span className={styles.letterK}>k</span>
        <span className={styles.letterG1}>g</span>
        <span className={styles.letterG2}>g</span>
        <span className={styles.dot}>.</span>
        <span className={styles.by}>by</span>
      </span>
    </div>
  )
}
