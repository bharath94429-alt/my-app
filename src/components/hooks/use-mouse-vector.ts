import { useState, useEffect, RefObject } from "react";

export function useMouseVector(ref?: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [vector, setVector] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastTime = performance.now();
    let lastPos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      
      let x = e.clientX;
      let y = e.clientY;

      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
      }

      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      
      setPosition({ x, y });
      if (dt > 0) {
        setVector({ x: dx / dt, y: dy / dt });
      }

      lastPos = { x, y };
      lastTime = currentTime;
    };

    const target = ref?.current || window;
    target.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [ref]);

  return { position, vector };
}
