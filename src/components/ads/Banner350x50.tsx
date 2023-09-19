import { useEffect, useRef } from "react";

export default function Banner350x50() {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "bb08305cc1b454da369135be17e06c40",
    format: "iframe",
    height: 50,
    width: 320,
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

  return <div ref={banner} className="py-2 w-full flex justify-center" />;
}
