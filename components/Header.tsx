"use client";
import { useRouter } from "next/navigation";
import style from "./Header.module.scss";
import { TiHome } from "react-icons/ti";
export default function Header() {
  const router = useRouter();
  return (
    <div className={style.header_box}>
      <button
        className={style.home_btn}
        onClick={() => {
          router.push("/");
        }}
      >
        <TiHome size={36} color="var(--gray-100)" />
      </button>
    </div>
  );
}
