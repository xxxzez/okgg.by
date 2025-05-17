// components/Logo.tsx
import Image from 'next/image'
import styles from './NewsItem.module.css'

export default function NewsItem({ title, content }) {
  return (
    <div className={styles.newsBlockItem}>
      <h2>{title}</h2>
      <Image
        src={'/s1mple.jpg'}
        alt="News img"
        width={200}
        height={100}
        style={{
          objectFit: 'contain', // сохраняет пропорции
          width: '100%', // адаптивная ширина
          height: 'auto', // высота рассчитывается автоматически
        }}
      />
      <div className={styles.content}>{content}</div>
    </div>
  )
}
