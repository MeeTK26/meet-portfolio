/**
 * BackgroundOrbits: global moving blobs + subtle grid behind everything.
 * Sits behind LiquidCursor and main content.
 */

export default function BackgroundOrbits() {
  return (
    <div className="bg-orbits-layer" aria-hidden="true">
      <div className="bg-orbits-layer__grid" />
      <div className="bg-orbits-layer__blob bg-orbits-layer__blob--1" />
      <div className="bg-orbits-layer__blob bg-orbits-layer__blob--2" />
      <div className="bg-orbits-layer__blob bg-orbits-layer__blob--3" />
    </div>
  );
}

