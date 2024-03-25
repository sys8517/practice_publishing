"use client";
import { useEffect, useRef, useState } from "react";
import style from "./typing.module.scss";
import Typing from "react-kr-typing-anim";
import TypingComponent from "@/components/TypingComponent";

export default function TypingPage() {
  const [text, setText] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);

  const pRef = useRef<HTMLParagraphElement>(null);
  const str = "이건 JavaScript를 이용한 방법이에요.";
  const split = str.split("");
  let i = 0;
  const typing = () => {
    let txt = split[i++];
    if (pRef.current) {
      pRef.current.innerText += txt;
      if (i > str.length) {
        i = 0;
        pRef.current.textContent = "";
      }
    }
  };
  const inter = setInterval(typing, 200);
  clearInterval(inter);

  return (
    <div className={style.wrap}>
      <div className={style.item}>
        <span className={style.type_txt}>Only css - width + steps()</span>
        <span className={style.hori_line}></span>
        <div className={style.container}>
          {/* https://new.atsit.in/18109/ */}
          <div className={style.text}>
            타이핑 효과 테스트 - css 만으로 만들기 (width 조정과 steps()을
            이용했어요.)
          </div>
        </div>
      </div>
      <div className={style.item}>
        {/* https://velog.io/@caecus/React-%ED%83%80%EC%9D%B4%ED%95%91-%ED%9A%A8%EA%B3%BC-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0 - js */}
        <span className={`${style.type_txt} ${style.sky}`}>
          JS - split & setTimeout
        </span>
        <span className={style.hori_line}></span>
        <TypingComponent text={"타이핑 Javascript와 React로 해보기"} />
      </div>
      <div className={style.item}>
        {/* https://velog.io/@harimad/typewriter-effect - 라이브러리 */}
        <span className={`${style.type_txt} ${style.green}`}>library</span>
        <span className={style.hori_line}></span>
        <Typing Tag="div" preDelay={1000} postDelay={1000} cursor fixedWidth>
          타이핑 라이브러리를 이용한 예시에요. (1회 실행 후 정지)
        </Typing>
      </div>
    </div>
  );
}
