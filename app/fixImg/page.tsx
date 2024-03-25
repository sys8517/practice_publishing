"use client";
import style from "./fixImg.module.scss";

// 이미지를 배경에 고정시켜 화면전환 효과처럼 보이도록 함
// 참고 : https://gurtn.tistory.com/182
export default function FixImg() {
  return (
    <div className={style.wrap}>
      <div className={style.cat1}></div>
      <div className={style.text}>
        <h2>
          background-attachment <br />
          - scroll (기본) <br />
          - fixed (고정) <br />
          배경 이미지를 고정시킴
          <br />
        </h2>
      </div>
      <div className={style.cat2}></div>
      <div className={style.text}>
        <h2>
          background-attachment <br />
          - scroll (기본) <br />
          - fixed (고정) <br />
          배경 이미지를 고정시킴
          <br />
        </h2>
      </div>
      <div className={style.cat3}></div>
    </div>
  );
}
