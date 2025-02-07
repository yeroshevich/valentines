import HeartsRainLayout from "@/components/layouts/HeartsRain";
import LoveCards from "@/components/widgets/LoveCards";
import styles from "./index.module.scss";

export default async function Home() {
  return (
    <HeartsRainLayout>
      <main className={styles.main}>
        <LoveCards />
      </main>
    </HeartsRainLayout>
  );
}
