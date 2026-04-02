import { useRef, useState, useEffect } from "react";
import CustomTooltip from "./CustomTooltip";

/* ============================================================
   OVERFLOW TOOLTIP
   - Detects overflow
   - Shows "Read more"
   - Self-contained tooltip (no parent dependency)
============================================================ */

function OverflowTooltip({
  value,
}: {
  value: string;
}) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  /* ------------------------------------------------------------
     OVERFLOW DETECTION (ResizeObserver-based)
  ------------------------------------------------------------- */

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const checkOverflow = () => {
      const parent = element.parentElement;
      if (!parent) return;

      setIsOverflowing(
        element.scrollWidth > parent.clientWidth
      );
    };

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(element);

    requestAnimationFrame(checkOverflow);

    return () => observer.disconnect();
  }, [value]);

  /* ------------------------------------------------------------
     RENDER
  ------------------------------------------------------------ */

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        width: "100%",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* MAIN TEXT */}
      <span
        ref={textRef}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          flex: 1,
          minWidth: 0,
        }}
      >
        {value}
      </span>

      {/* READ MORE WITH TOOLTIP */}
      {isOverflowing && (
        <CustomTooltip title={value} placement="top">
          <span
            style={{
              color: "#1976d2",
              fontSize: "0.8rem",
              fontWeight: 400,
              cursor: "default",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Read more
          </span>
        </CustomTooltip>
      )}
    </div>
  );
}

export default OverflowTooltip;