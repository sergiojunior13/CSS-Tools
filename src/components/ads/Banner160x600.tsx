import { useEffect, useRef } from "react";

export default function Banner160x600() {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "65bffcc2db9b2e4d70e570577c7e4235",
    format: "iframe",
    height: 600,
    width: 160,
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

  return <div ref={banner} className="flex justify-center" />;
}
