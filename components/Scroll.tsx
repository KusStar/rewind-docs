import React, { useState, useEffect, useRef } from 'react'
import Landing from "./Landing";
import { ChevronsDown } from 'react-feather';
import { motion } from 'framer-motion'
import useViewTransitionRouter from '../utils/useTransitionRouter';
import { COVERS } from '../utils/covers';
import BLURHASH_COVERS from '../utils/blurhash-covers.json';
import { blurhashToBase64 } from "blurhash-base64";
import clsx from 'clsx';

const Img = ({ imgKey }: { imgKey: keyof typeof COVERS }) => {
  const [imageSrc, setImageSrc] = useState<string>(() =>
    blurhashToBase64(BLURHASH_COVERS[imgKey]));
  useEffect(() => {
    const img = new Image();
    img.src = COVERS[imgKey];
    img.onload = () => {
      setImageSrc(COVERS[imgKey]);
    };
  }, [imgKey])
  return (
    <div className={clsx("tiles__line-img", "hover:scale-105 hover:shadow-lg hover:cursor-crosshair")} style={{ backgroundImage: `url(${imageSrc})` }}></div>
  )
}

const Scroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locoScrollRef = useRef<any>(null)
  const router = useViewTransitionRouter();

  useEffect(() => {
    if (scrollRef.current) {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        locoScrollRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          mobile: {
            breakpoint: 0,
            smooth: true,
            inertia: 0.8,
            getDirection: true,
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
            inertia: 0.8,
            getDirection: true,
          }
        });
      })
    }
  }, [])

  useEffect(() => {
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    }
  }, [])

  const toTop = () => {
    if (!locoScrollRef.current) return
    locoScrollRef.current.scrollTo(scrollRef.current)
  }

  return (
    <div ref={scrollRef} data-scroll-section>
      <Landing
        title="倒带"
        subtitle="简单的音乐播放器"
        keywords={["轻量", "简洁"]}
        buttons={[
          {
            content: "下载",
            onClick: () => router.push("/download"),
          },
          {
            content: "更多",
            type: "ghost",
            onClick: () => router.push("/home"),
          },
        ]}
        scrollBtn={
          <motion.div
            className='absolute bottom-12 cursor-pointer active:scale-105'
            initial={{ translateY: -18 }}
            animate={{ translateY: 18 }}
            transition={{
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            onClick={() => {
              locoScrollRef.current.scrollTo(scrollRef.current, {
                offset: window.innerHeight - 32
              })
            }}
          >
            <ChevronsDown size={36} />
          </motion.div>
        }
      />

      <section className="tiles tiles--rotated" id="grid2">
        <div className="tiles__wrap">
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <Img imgKey="inRainbows" />
            <Img imgKey="forEmma" />
            <Img imgKey="twinFantasy" />
            <Img imgKey="care" />
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <Img imgKey="care" />
            <Img imgKey="artAngles" />
            <Img imgKey="melodrama" />
            <Img imgKey="ballads1" />
            <Img imgKey="myBeautifulDarkTwistedFantasy" />
            <Img imgKey="care" />
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <Img imgKey="igor" />
            <Img imgKey="gsgMixtape" />
            <Img imgKey="nostalgiaUltra" />
            <Img imgKey="moonRiver" />
            <Img imgKey="blonde" />
            <Img imgKey="carrieAndLowell" />
            <Img imgKey="lustForLife" />
            <Img imgKey="igor" />
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <Img imgKey="kidA" />
            <Img imgKey="funeral" />
            <Img imgKey="awakeMyLove" />
            <Img imgKey="inRainbows" />
            <Img imgKey="bloom" />
            <Img imgKey="channelOrange" />
            <Img imgKey="kidA" />
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <Img imgKey="channelOrange" />
            <Img imgKey="artAngles" />
            <Img imgKey="ctrl" />
            <Img imgKey="care" />
            <Img imgKey="kidA" />
            <Img imgKey="channelOrange" />
          </div>
        </div>
      </section>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
        data-scroll data-scroll-speed="2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"/showcase.webp"}
          width="600px"
          alt="封面"
        />
      </section>
      <section className="content">
        <a
          className="backtop"
          data-scroll
          data-scroll-speed="4"
          onClick={toTop}
        >
          Rewind
        </a>
        <div className="frame frame--footer">
          <a href="https://github.com/KusStar" className="frame__author" target="__blank">@KusStar</a>
        </div>
      </section>
    </div>
  )
}

export default Scroll
