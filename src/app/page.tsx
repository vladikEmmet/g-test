
import styles from "./page.module.scss";
import {WelcomePopup} from "@/screens/WelcomePopup/WelcomePopup";
import {SelectType} from "@/screens/SelectType/SelectType";

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectType />
      <WelcomePopup />
    </main>
  );
}
