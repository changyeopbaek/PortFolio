import { useState, useEffect, useRef } from "react";

export const useTypingEffect = (
  text: string,
  speed: number = 100,
  delay: number = 1000,
  deleteSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const isDeletingRef = useRef(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentText = text;
      const isDeleting = isDeletingRef.current;
      let charIndex = charIndexRef.current;

      if (!isDeleting && charIndex < currentText.length) {
        // 타이핑 중
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndexRef.current = charIndex + 1;
        timeout = setTimeout(type, speed);
      } else if (!isDeleting && charIndex === currentText.length) {
        // 타이핑 완료 - 잠시 대기 후 삭제 시작
        timeout = setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, pauseDuration);
      } else if (isDeleting && charIndex > 0) {
        // 삭제 중
        charIndexRef.current = charIndex - 1;
        setDisplayedText(currentText.slice(0, charIndex - 1));
        timeout = setTimeout(type, deleteSpeed);
      } else if (isDeleting && charIndex === 0) {
        // 삭제 완료 - 다시 타이핑 시작
        isDeletingRef.current = false;
        charIndexRef.current = 0;
        timeout = setTimeout(() => {
          type();
        }, delay);
      }
    };

    const initialDelay = setTimeout(() => {
      type();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay, deleteSpeed, pauseDuration]);

  return { displayedText };
};
