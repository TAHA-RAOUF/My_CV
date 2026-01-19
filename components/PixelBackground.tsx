import Image from "next/image";
import "./pixel-background.css";

export function PixelBackground() {
  return (
    <div className="pixel-scene" aria-hidden="true">
      <div className="pixel-sky">
        <Image
          src="/PTE.png"
          alt=""
          width={64}
          height={64}
          className="pixel-pte pte-a"
          priority
        />
        <Image
          src="/PTE.png"
          alt=""
          width={64}
          height={64}
          className="pixel-pte pte-b"
        />
        <Image
          src="/PTE.png"
          alt=""
          width={64}
          height={64}
          className="pixel-pte pte-c"
        />

        {/* Cloud Left */}
        <svg
          className="pixel-cloud cloud-left"
          viewBox="0 0 8 6"
          shapeRendering="crispEdges"
        >
          <rect x="2" y="1" width="3" height="1" />
          <rect x="1" y="2" width="6" height="1" />
          <rect x="0" y="3" width="8" height="1" />
          <rect x="1" y="4" width="6" height="1" />
          <rect x="2" y="5" width="3" height="1" />
        </svg>

        {/* Cloud Right */}
        <svg
          className="pixel-cloud cloud-right"
          viewBox="0 0 8 6"
          shapeRendering="crispEdges"
        >
          <rect x="2" y="1" width="3" height="1" />
          <rect x="1" y="2" width="6" height="1" />
          <rect x="0" y="3" width="8" height="1" />
          <rect x="1" y="4" width="6" height="1" />
          <rect x="2" y="5" width="3" height="1" />
        </svg>

        {/* Bird */}
        <svg
          className="pixel-bird"
          viewBox="0 0 5 3"
          shapeRendering="crispEdges"
        >
          <rect x="2" y="0" width="1" height="1" />
          <rect x="1" y="1" width="1" height="1" />
          <rect x="3" y="1" width="1" height="1" />
          <rect x="0" y="2" width="1" height="1" />
          <rect x="4" y="2" width="1" height="1" />
        </svg>
      </div>

      <div className="pixel-ground">
        <Image
          src="/dino.png"
          alt=""
          width={48}
          height={48}
          className="pixel-dino"
        />
      </div>
    </div>
  );
}
