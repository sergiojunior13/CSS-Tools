import { useEffect, useState } from "react";

export default function useIsMobile(maxWidth: number = 768) {
  useEffect(() => {
    const toMobile = () => setIsMobile(window.innerWidth < maxWidth);

    toMobile();

    window.addEventListener("resize", toMobile);

    return () => window.removeEventListener("resize", toMobile);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  return { isMobile };
}
