"use client";
import { useEffect, useState } from "react";
import style from "./Typing.module.scss";

export default function TypingComponent({ text }: { text: string }) {
  const [viewText, setViewText] = useState<string>("");
  const [idx, setIdx] = useState<number>(0);
  const [isPause, setIsPause] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isPause) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsPause(false);
          setIdx(0);
          setViewText("");
        }, 5000);
        return;
      }
      if (idx >= text.length) {
        setIsPause(true);
        return;
      }
      const nextChar = text[idx];
      setViewText((old) => old + nextChar);
      if (nextChar === "\n") {
        setIdx((old) => old + 2);
      } else {
        setIdx((old) => old + 1);
      }
    }, 200);
    return () => clearInterval(typingInterval);
  }, [viewText, idx, isPause]);
  return (
    <>
      <p className={style.text}>{viewText}</p>
    </>
  );
}
