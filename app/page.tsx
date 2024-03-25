"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

/**적용하고자 하는 font*/

export default function Home() {
  const router = useRouter();
  return (
    <main className={`${styles.main} `}>
      <div>
        <div className={styles.swipe_section}>
          <section className={styles.panel_1}>
            <button
              onClick={() => {
                router.push(`/typing/`);
              }}
              className={styles.btn}
            >
              타이핑 효과
            </button>
            <button
              onClick={() => {
                router.push(`/fixImg/`);
              }}
              className={styles.btn}
            >
              이미지 고정
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
