import Image from 'next/image'
import styles from './page.module.css'
import Linecharts from '@/components/Linechart/Linechart'
import Piecharts from '@/components/Piechart/Piecharts'
import Profiletop from '@/components/ProfileTop/profiletop'

export default function Home() {
  return (
    <main className={styles.main}>
      LOG in Page
      <Profiletop/>
      {/* <Linecharts/> */}
      {/* <Piecharts/> */}
    </main>
  )
}
