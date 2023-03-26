import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // set the duration for animations
      once: true, // animation only happens once
      easing: "ease-in-out", // set the easing function for animations
    });
  }, []);
  return <Component {...pageProps} />
}


