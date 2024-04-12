'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import LinkCard from '@/components/LinkCard';
// 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperInit from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { headerState } from '@/recoil/headerState';
/**적용하고자 하는 font*/

interface menu {
    link: string;
    previewUrl: string;
    title: string;
}

export default function Home() {
    const router = useRouter();

    const fullpageRef = useRef(null);
    const [remove, setRemove] = useRecoilState<boolean | ''>(headerState);
    const [fullpageIdx, setFullpageIdx] = useState<number>(0);

    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);
    useEffect(() => {
        const scrollUpEvent = (event: any) => {
            if (event.deltaY < 0) {
                //위로 스크룰
                setFullpageIdx(4);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        const scrollDownEvent = (event: any) => {
            if (event.deltaY > 0) {
                // 아래로 스크룰

                setFullpageIdx(5);
                window.scrollTo({ top: 500, behavior: 'smooth' });
            } else {
                // 위로 스크룰
                setRemove(true);
            }
        };
        //푸터에서 휠 사용 시 슬라이드 안 넘어가게 하기
        if (fullpageRef.current) {
            if (fullpageIdx === 5) {
                // @ts-ignore
                fullpageRef.current.swiper.mousewheel.disable();
            } else {
                // @ts-ignore
                fullpageRef.current.swiper.mousewheel.enable();
            }
        }
        //헤더 및 푸터 컨트롤
        if (fullpageIdx === 0) {
            setRemove('');
            window.addEventListener('wheel', (e) => {
                if (e.deltaY > 0) {
                    setRemove(false);
                } else {
                    setRemove('');
                }
            });
            return () =>
                window.removeEventListener('wheel', (e) => {
                    setRemove('');
                });
        } else if (fullpageIdx === 1) {
            window.addEventListener('wheel', (e) => {
                if (e.deltaY < 0) {
                    setRemove('');
                }
            });
            return () =>
                window.removeEventListener('wheel', (e) => {
                    setRemove('');
                });
        } else if (fullpageIdx === 4) {
            //마지막 슬라이드 인덱스에서 푸터로 스크롤
            window.addEventListener('wheel', scrollDownEvent);
            return () => window.removeEventListener('wheel', scrollDownEvent);
        } else if (fullpageIdx === 5) {
            // 푸터에서 마지막 인덱스 슬라이드로 스크롤

            window.addEventListener('wheel', scrollUpEvent);
            return () => window.removeEventListener('wheel', scrollUpEvent);
        } else {
            window.addEventListener('wheel', (e) => {
                if (e.deltaY > 0) {
                    setRemove(false);
                } else {
                    setRemove(true);
                }
            });
            return () =>
                window.removeEventListener('wheel', (e) => {
                    setRemove('');
                });
        }
    }, [fullpageIdx]);
    const mainVisualRef = useRef(null);
    const [isPlay, setIsPlay] = useState(true);
    // 퀵 뷰 열기
    const [quickOpen, setQuickOpen] = useState<boolean>(false);
    const [quickTab, setQuickTab] = useState<number>(0);
    useEffect(() => {
        if (fullpageRef.current !== null) {
            if (quickOpen) {
                // @ts-ignore
                fullpageRef.current.swiper.mousewheel.disable();
            } else {
                // @ts-ignore
                fullpageRef.current.swiper.mousewheel.enable();
            }
        }
    }, [quickOpen]);
    // 뉴스----------------------------------------------------------------
    // 탭 클릭
    const [tabClick, setTabClick] = useState<string>('notice');
    const menu: menu[] = [
        {
            link: '/typing',
            previewUrl: '/typing-preview.gif',
            title: '타이핑 효과',
        },
        {
            link: '/fixImg',
            previewUrl: '/fix-img-preview.gif',
            title: '이미지 고정',
        },
    ];

    // section 2 - 별 및 별똥별 구현

    const windowWidth = screen.width;
    const windowHeight = screen.height;
    function getRandomArbitrary(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

    return (
        <main className={`${styles.main} `}>
            <div>
                <Swiper
                    ref={fullpageRef}
                    onActiveIndexChange={(idx: SwiperInit) => {
                        setFullpageIdx(idx.activeIndex);
                    }}
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={0}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                        el: '.fullpage_pagination',
                    }}
                    draggable={false}
                    touchRatio={0}
                    modules={[Mousewheel, Pagination]}
                    className="fullpage_swiper_wrap"
                    style={{ width: '100%', height: 'calc(100vh - 80px)' }}
                >
                    <SwiperSlide>
                        {' '}
                        <div className={styles.swipe_section}>
                            <section className={styles.panel_1}>
                                {menu.map((m) => (
                                    <div className={styles.card} key={m.link}>
                                        <LinkCard
                                            key={m.link}
                                            link={m.link}
                                            previewUrl={m.previewUrl}
                                            title={m.title}
                                        />
                                    </div>
                                ))}
                            </section>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <div className={styles.swipe_section}>
                            <section className={styles.panel_2}>
                                <div className={`stars ${styles.stars}`}>
                                    {Array.from({ length: 100 }).map((item, idx) => {
                                        const st = 'style' + getRandomArbitrary(4);
                                        const op = 'opacity' + getRandomArbitrary(4);
                                        const tk = 'twinkle' + getRandomArbitrary(5);
                                        return (
                                            <span
                                                key={idx}
                                                className={`${styles.star} ${styles[st]} ${styles[op]} ${styles[tk]}`}
                                                style={{
                                                    animationDelay: `.${getRandomArbitrary(9)}s`,
                                                    left: `${getRandomArbitrary(windowWidth)}px`,
                                                    top: `${getRandomArbitrary(windowHeight)}px`,
                                                }}
                                            >
                                                {idx}
                                            </span>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <ul>
                    <li>
                        <button> </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}
