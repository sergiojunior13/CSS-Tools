import { useEffect, useRef } from "react";

export default function Banner300x250() {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "e3427d6d433fb686375a12a71cf50238",
    format: "iframe",
    height: 250,
    width: 300,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const configuration = document.createElement("script");
      const adScript = document.createElement("script");
      adScript.type = "text/javascript";
      adScript.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`;
      configuration.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(configuration);
      banner.current.append(adScript);
    }
  }, [banner]);

  return <div ref={banner} className="flex justify-center py-3" />;
}
