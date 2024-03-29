"use client";
import { useRouter } from "next/navigation";
import style from "./LinkCard.module.scss";

interface LinkCardProps {
  link: string;
  previewUrl: string;
  title: string;
}

export default function LinkCard({ link, previewUrl, title }: LinkCardProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(link);
      }}
      className={style.btn}
    >
      <span className={style.img_wrap}>
        <img src={previewUrl}></img>
      </span>
      <p className={style.title_txt}>{title}</p>
    </button>
  );
}
