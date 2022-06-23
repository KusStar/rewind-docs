import { useState, useEffect, RefObject } from "react";
import imagesLoaded from 'imagesloaded';

export const useImagesLoaded = (ref: RefObject<HTMLElement>, selector = 'img') => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const eles = ref.current.querySelectorAll(selector)
      imagesLoaded(eles, { background: true }, () => {
        console.log('loaded')
        setStatus(true);
      });
    }
  }, [ref]);

  return status;
};