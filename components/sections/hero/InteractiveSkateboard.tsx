"use client";
import { Skateboard } from "@/components/Skateboard";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface InteractiveSkateboardProps {}

const InteractiveSkateboard = ({}: InteractiveSkateboardProps) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-240 w-full"
        camera={{ position: [1.5, 1, 1.4], fov: 50 }}
      >
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

function Scene() {
  return (
    <group>
      <Environment files={"/hdr/warehouse-256.hdr"} />
      <OrbitControls />
      <Skateboard
        wheelTextureURL="/skateboard/SkateWheel1.png"
        boltColor="#6F6E6A"
        deckTextureURL="/skateboard/Deck.webp"
        truckColor="#6F6E6A"
        constantWheelSpin={true}
        pose="upright"
        wheelTextureURLs={[
          "/skateboard/SkateWheel1.png",
          "/skateboard/SkateWheel1.png",
        ]}
        deckTextureURLs={["/skateboard/Deck.webp", "/skateboard/Deck.webp"]}
      />
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
    </group>
  );
}

export default InteractiveSkateboard;
