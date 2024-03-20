"use client";
import style from "./typing.module.scss";

export default function TypingPage() {
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
          {/* https://velog.io/@annari07/Typing - js */}
          {/* https://velog.io/@harimad/typewriter-effect - 라이브러리 */}
        </div>
      </div>
    </div>
  );
}
