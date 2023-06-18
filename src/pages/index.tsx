import styles from '../styles/Home.module.css'
import InputTestComponent from "../components/InputTestComponent/InputTestComponent";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const { theme } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <InputTestComponent localStorageKey={"test"} initialValue={"tester"} />
      </main>
    </div>
  )
}
