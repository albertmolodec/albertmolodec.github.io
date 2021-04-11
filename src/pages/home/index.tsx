import styles from './style.module.css'

import avatar from './me.png'

export default function Home() {
  return (
    <>
      <img src={avatar} className={styles.avatar} alt="My low poly photo" />
      <h1>Hello, I'm Albert Abdulmanov.</h1>
      <p>This is my little corner on the World Wide Web.</p>
      <p>
        I'm open for conversation on{' '}
        <a href="https://twitter.com/albertmolodec/">Twitter</a> or{' '}
        <a href="mailto:hello@albert.works">hello@albert.works</a>.
      </p>
    </>
  )
}
