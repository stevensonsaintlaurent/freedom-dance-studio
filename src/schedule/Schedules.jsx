import React, { useEffect, useRef } from "react";

const MindbodySchedulesWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Avoid injecting the script multiple times
    const scriptId = "mindbody-schedules-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className="mindbody-widget"
      data-widget-type="Schedules"
      data-widget-id="cf48702ca3e"
      style={{ minHeight: 400 }}
    />
  );
};

export default MindbodySchedulesWidget;
