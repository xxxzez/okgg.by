import Logo from '@/components/Logo'
import styles from './page.module.css'
import NewsItem from '@/components/NewsItem'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Logo />
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>News</div>
          <div className={styles.menuItem}>Events</div>
          <div className={styles.menuItem}>Live</div>
          <div className={styles.menuItem}>Ranking</div>
          <div className={styles.menuItem}>Statistic</div>
          <div className={styles.menuItem}>Streams</div>
          <div className={styles.menuItem}>Matchmaking</div>
        </div>
        <div className={styles.profileContainer}>Tommy</div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.newsBlockContainer}>
          {cs2News.map((news) => (
            <NewsItem key={news.id} title={news.title} content={news.content} />
          ))}
        </div>
      </div>

      <h1>Катя привет!!!!!!!!!!!!!!</h1>

      <div className={styles.footer}>
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>T&C</div>
          <div className={styles.menuItem}>Events</div>
          <div className={styles.menuItem}>Live</div>
          <div className={styles.menuItem}>Ranking</div>
          <div className={styles.menuItem}>Statistic</div>
          <div className={styles.menuItem}>Streams</div>
          <div className={styles.menuItem}>Matchmaking</div>
        </div>
        <div className={styles.profileContainer}>OKGG inc.</div>
      </div>
    </div>
  )
}

const cs2News = [
  {
    id: 1,
    title: 'VALVE анонсировала Counter-Strike 2',
    content:
      'Компания Valve официально представила Counter-Strike 2 - масштабное обновление CS:GO с переходом на движок Source 2. Основные изменения включают переработанную систему дыма, улучшенную графику и физику, а также доработанный матчмейкинг.',
  },
  {
    id: 2,
    title: 'Обновление карт в CS2',
    content:
      'Valve полностью переработала 7 классических карт для CS2, включая Dust II, Mirage и Inferno. Карты получили новые текстуры, улучшенное освещение и оптимизацию под движок Source 2.',
  },
  {
    id: 3,
    title: 'Новая система рейтингов в CS2',
    content:
      'В Counter-Strike 2 представлена полностью переработанная система рейтингов с региональными лидерами и улучшенным подбором игроков. Теперь ранги будут обновляться после каждой игры.',
  },
  {
    id: 4,
    title: 's1mple переходит в NAVI',
    content:
      'Легендарный украинский игрок s1mple официально подписал контракт с Natus Vincere на следующие 2 года. В своем заявлении он отметил, что хочет привести команду к победе на следующем Major.',
  },
  {
    id: 5,
    title: 'ESL анонсировала турнирную серию по CS2',
    content:
      'ESL объявила о старте ESL Pro Tour по CS2 с призовым фондом $5 млн. В серию войдут 4 крупных турнира и финал в Кёльне в конце года.',
  },
  {
    id: 6,
    title: 'Новый скин-кейс в CS2',
    content:
      "Valve выпустила новый кейс 'Revolution' с 17 новыми скинами для оружия, включая легендарный AWP 'Dragon Lore 2.0'. Кейс уже доступен в игре.",
  },
  {
    id: 7,
    title: 'Faze Clan выиграла IEM Katowice 2024',
    content:
      'Команда Faze Clan стала чемпионом IEM Katowice 2024, обыграв в финале Team Vitality со счетом 3:1. Это первая крупная победа команды в CS2.',
  },
  {
    id: 8,
    title: 'Изменения в экономике CS2',
    content:
      'Разработчики внесли существенные изменения в экономическую систему CS2. Теперь проигрышные серии приносят больше денег, а награда за убийство с пистолета увеличена.',
  },
  {
    id: 9,
    title: "Новый режим 'Arms Race' в CS2",
    content:
      "В CS2 добавлен обновленный режим 'Arms Race' с новыми картами и системой прокачки оружия. Режим поддерживает до 16 игроков одновременно.",
  },
  {
    id: 10,
    title: 'Рекорд онлайна CS2',
    content:
      'Counter-Strike 2 побил рекорд онлайна, достигнув отметки в 1.8 млн одновременных игроков. Это самый высокий показатель среди всех игр в Steam.',
  },
  {
    id: 11,
    title: 'Обзор нового AWP в CS2',
    content:
      'Разработчики изменили поведение AWP в CS2. Теперь у снайперской винтовки уменьшена скорость передвижения с оружием, но увеличена точность при стрельбе с места.',
  },
  {
    id: 12,
    title: 'Team Spirit подписывает новый состав по CS2',
    content:
      'Российская организация Team Spirit объявила о подписании нового международного состава по CS2. В команду вошли бывшие игроки Gambit и Virtus.pro.',
  },
  {
    id: 13,
    title: 'Новая карта Anubis в официальном пуле',
    content:
      'Карта Anubis добавлена в официальный соревновательный пул карт CS2 вместо Ancient. Разработчики отметили, что карта получила существенные изменения.',
  },
  {
    id: 14,
    title: 'Изменения в системе дыма в CS2',
    content:
      'Дымовые гранаты в CS2 теперь динамически реагируют на освещение и выстрелы. Пули и взрывы временно рассеивают дым, создавая новые тактические возможности.',
  },
  {
    id: 15,
    title: 'Blast Premier 2024 анонсирован',
    content:
      'Организаторы Blast Premier объявили даты и места проведения турниров 2024 года. Призовой фонд серии составит $4.5 млн, финал пройдет в Копенгагене.',
  },
  {
    id: 16,
    title: 'Новый античит в CS2',
    content:
      'Valve внедрила новую систему VAC Live, которая в реальном времени банит читеров прямо во время матча. По заявлению разработчиков, система использует ИИ-алгоритмы.',
  },
  {
    id: 17,
    title: 'Рекордный трансфер в CS2',
    content:
      'Команда G2 Esports выкупила контракт игрока m0NESY за $1.2 млн - это рекордная сумма трансфера в истории Counter-Strike.',
  },
  {
    id: 18,
    title: 'Изменения в физике гранат',
    content:
      'В CS2 полностью переработана физика броска гранат. Теперь траектория полета более предсказуема, а отскоки от поверхностей выглядят реалистичнее.',
  },
  {
    id: 19,
    title: 'Новый чемпионат СНГ по CS2',
    content:
      'ESL анонсировала отдельный чемпионат для СНГ-региона с призовым фондом $500 тыс. В турнире приму участие 16 лучших команд региона.',
  },
  {
    id: 20,
    title: 'Обновление звуков в CS2',
    content:
      'Все звуки в CS2 были перезаписаны с использованием новой технологии. Теперь можно точно определять направление и расстояние до источника звука.',
  },
]
