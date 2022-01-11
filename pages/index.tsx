import type { NextPage } from 'next';
import styles from '../styles/Home.module.css'
import { startLoader, stopLoader } from '../utils/functions'

const Home: NextPage = () => {
  const handleStartLoader = () => {
    startLoader();
    setTimeout(()=>{
      stopLoader()
    },3000)
  }
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Calculator APP
        </h1>
        
        <div className="col-12 row container">
          <button onClick={handleStartLoader} className="btn btn-primary w-auto">
            Start Loader
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://jagan.pro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Jagan
        </a>
      </footer>
    </div>
  )
}

export default Home
