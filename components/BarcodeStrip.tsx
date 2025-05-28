import React from "react";

type BarcodeStripProps = {
  logoWidth?: number;
  logoHeight?: number;
};

const BLOCK_ROWS = 6;
const BLOCK_COLS = 112;
const STRIPE_MIN = 4;
const STRIPE_MAX = 7;
const RED = "#ff3b3b";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function BarcodeStrip({ logoWidth = 48, logoHeight = 24 }: BarcodeStripProps) {
  // Generate random stripes and gaps
  const leftStripes = React.useMemo(() => Array.from({ length: randomInt(STRIPE_MIN, STRIPE_MAX) }, () => randomFloat(0.8, 1.5)), []);
  const leftGaps = React.useMemo(() => Array.from({ length: leftStripes.length - 1 }, () => randomFloat(0.5, 2)), [leftStripes]);
  const rightStripes = React.useMemo(() => Array.from({ length: randomInt(STRIPE_MIN, STRIPE_MAX) }, () => randomFloat(0.8, 1.5)), []);
  const rightGaps = React.useMemo(() => Array.from({ length: rightStripes.length - 1 }, () => randomFloat(0.5, 2)), [rightStripes]);

  // Generate random barcode blocks
  const blocks = React.useMemo(() => Array.from({ length: BLOCK_ROWS }, () =>
    Array.from({ length: BLOCK_COLS }, () => Math.random() > 0.5)
  ), []);

  // Layout constants
  const blockWidth = 1.5; // px
  const blockHeight = 3; // px

  // Calculate barcode width (no gap between adjacent filled blocks)
  const barcodeWidth = BLOCK_COLS * blockWidth;

  // Calculate stripes width with varying gaps
  const stripesWidth = (stripes: number[], gaps: number[]) =>
    stripes.reduce((sum, w) => sum + w, 0) + gaps.reduce((sum, g) => sum + g, 0);

  const totalWidth =
    logoWidth +
    stripesWidth(leftStripes, leftGaps) +
    barcodeWidth +
    stripesWidth(rightStripes, rightGaps) +
    32; // extra margin

  return (
    <div style={{ display: "flex", alignItems: "center", width: totalWidth }}>
      {/* Logo */}
      <div
        style={{
          width: logoWidth,
          height: logoHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 4,
        }}
      >
        <img
          src="/barcode.svg"
          alt="Barcode Logo"
          style={{ width: logoWidth, height: logoHeight, objectFit: "contain", display: "block" }}
        />
      </div>
      {/* Barcode and stripes, vertically centered to logo */}
      <div style={{ display: "flex", alignItems: "center", height: logoHeight, transform: "translateY(0.15px)" }}>
        {/* Left stripes with varying gaps */}
        <div style={{ display: "flex", alignItems: "center", marginRight: 4, height: blockHeight * BLOCK_ROWS }}>
          {leftStripes.map((w, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  width: w,
                  height: blockHeight * BLOCK_ROWS,
                  background: RED,
                  borderRadius: 1,
                }}
              />
              {i < leftGaps.length && (
                <div style={{ width: leftGaps[i] }} />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Barcode blocks with no gap between adjacent filled blocks */}
        <svg
          width={barcodeWidth}
          height={blockHeight * BLOCK_ROWS}
          style={{ display: "block" }}
        >
          {blocks.map((row, y) => {
            let segments = [];
            let x = 0;
            while (x < BLOCK_COLS) {
              if (row[x]) {
                // Start of a filled segment
                let start = x;
                while (x + 1 < BLOCK_COLS && row[x + 1]) x++;
                // Draw one rect for the segment
                segments.push(
                  <rect
                    key={`${start}-${y}`}
                    x={start * blockWidth}
                    y={y * blockHeight}
                    width={(x - start + 1) * blockWidth}
                    height={blockHeight}
                    fill={RED}
                  />
                );
              }
              x++;
            }
            return segments;
          })}
        </svg>
        {/* Right stripes with varying gaps */}
        <div style={{ display: "flex", alignItems: "center", marginLeft: 4, height: blockHeight * BLOCK_ROWS }}>
          {rightStripes.map((w, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  width: w,
                  height: blockHeight * BLOCK_ROWS,
                  background: RED,
                  borderRadius: 1,
                }}
              />
              {i < rightGaps.length && (
                <div style={{ width: rightGaps[i] }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
} 