"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

/**적용하고자 하는 font*/

export default function Home() {
  const router = useRouter();
  return (
    <main className={`${styles.main} `}>
      <div>
        <button
          onClick={() => {
            router.push(`/typing/`);
          }}
          className={styles.btn}
        >
          타이핑 효과
        </button>
        {/* <p className={styles.btn}>타이핑 효과</p> */}
      </div>
    </main>
  );
}
