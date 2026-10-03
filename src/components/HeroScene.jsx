import { Canvas, useFrame } from "@react-three/fiber";

import {
  Float,
  RoundedBox,
  Text,
  Environment,
} from "@react-three/drei";

import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremiere,
} from "react-icons/tb";

import { useEffect, useMemo, useRef, useState } from "react";

import * as THREE from "three";

const software = [
  {
    name: "PHOTOSHOP",
    short: "Ps",
    Icon: TbBrandAdobePhotoshop,
  },
  {
    name: "AFTER EFFECTS",
    short: "Ae",
    Icon: TbBrandAdobeAfterEffect,
  },
  {
    name: "ILLUSTRATOR",
    short: "Ai",
    Icon: TbBrandAdobeIllustrator,
  },
  {
    name: "PREMIERE PRO",
    short: "Pr",
    Icon: TbBrandAdobePremiere,
  },
];

const nodePositions = [
  [-2.35, 1.35, 0.3],
  [2.35, 1.35, 0.3],
  [-2.35, -0.95, 0.35],
  [2.35, -0.95, 0.35],
];

function SoftwareNode({ item, position, active }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.55 + position[0]) * 0.025;

    group.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.05;
  });

  return (
    <group ref={group} position={position}>
      <pointLight
        color="#7c5cff"
        intensity={active ? 2.5 : 0.3}
        distance={2}
      />

      <RoundedBox
        args={[1.35, 0.98, 0.24]}
        radius={0.15}
        smoothness={6}
      >
        <meshStandardMaterial
          color="#151321"
          roughness={0.2}
          metalness={0.7}
          emissive="#302050"
          emissiveIntensity={active ? 0.6 : 0.1}
        />
      </RoundedBox>

      <RoundedBox
        args={[1.12, 0.74, 0.04]}
        radius={0.09}
        smoothness={5}
        position={[0, 0, 0.15]}
      >
        <meshStandardMaterial
          color="#100e18"
          roughness={0.25}
          metalness={0.6}
        />
      </RoundedBox>

      <Text
        position={[0, 0.06, 0.21]}
        fontSize={0.42}
        color={active ? "#ffffff" : "#8c879d"}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {item.short}
      </Text>

      <Text
        position={[0, -0.32, 0.21]}
        fontSize={0.075}
        color={active ? "#d7d2ff" : "#625e72"}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        {item.name}
      </Text>

      <mesh position={[0, 0.47, 0]}>
        <boxGeometry args={[0.62, 0.02, 0.24]} />

        <meshBasicMaterial
          color="#8b6cff"
          transparent
          opacity={active ? 0.75 : 0.12}
        />
      </mesh>
    </group>
  );
}

function NeonTube({ start, end, active }) {
  const curve = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);

    const mid = new THREE.Vector3(
      (s.x + e.x) * 0.5,
      (s.y + e.y) * 0.5,
      0.8
    );

    return new THREE.CatmullRomCurve3([
      s,
      new THREE.Vector3(
        s.x * 0.72,
        s.y * 0.72,
        0.65
      ),
      mid,
      new THREE.Vector3(
        e.x * 0.72,
        e.y * 0.72,
        0.65
      ),
      e,
    ]);
  }, [start, end]);

  return (
    <group>
      <mesh>
        <tubeGeometry
          args={[curve, 64, 0.055, 10, false]}
        />

        <meshStandardMaterial
          color={active ? "#d7b8ff" : "#44356d"}
          emissive={active ? "#a855f7" : "#30204f"}
          emissiveIntensity={active ? 5 : 1.2}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      <mesh>
        <tubeGeometry
          args={[curve, 64, 0.11, 10, false]}
        />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={active ? 0.1 : 0.025}
        />
      </mesh>
    </group>
  );
}

function EnergyParticle({ start, end, delay, active }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const progress =
      (state.clock.elapsedTime * 0.35 + delay) % 1;

    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);

    ref.current.position.lerpVectors(
      s,
      e,
      progress
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry
        args={[active ? 0.065 : 0.03, 12, 12]}
      />

      <meshBasicMaterial
        color={active ? "#ffffff" : "#9b7cff"}
      />
    </mesh>
  );
}

function StudioPlatform() {
  return (
    <group position={[0, -1.72, -0.45]}>
      <RoundedBox
        args={[5.8, 0.18, 2.8]}
        radius={0.13}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#0e0d15"
          roughness={0.28}
          metalness={0.75}
        />
      </RoundedBox>

      <mesh position={[0, 0.11, 0]}>
        <boxGeometry
          args={[4.9, 0.02, 2.2]}
        />

        <meshBasicMaterial
          color="#5b3ea8"
          transparent
          opacity={0.08}
        />
      </mesh>

      {[-2, 0, 2].map((x) => (
        <mesh
          key={x}
          position={[x, 0.12, 0]}
        >
          <boxGeometry
            args={[0.8, 0.02, 0.02]}
          />

          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Monitor({ activeIndex }) {
  const active = software[activeIndex];

  return (
    <Float
      speed={0.7}
      rotationIntensity={0.06}
      floatIntensity={0.12}
      floatingRange={[-0.035, 0.035]}
    >
      <group position={[0, 0.18, 0.8]}>
        <RoundedBox
          args={[2.4, 1.62, 0.17]}
          radius={0.13}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#121019"
            roughness={0.18}
            metalness={0.8}
          />
        </RoundedBox>

        <mesh position={[0, 0.02, 0.11]}>
          <planeGeometry args={[2.14, 1.35]} />

          <meshStandardMaterial
            color="#060609"
            emissive="#151022"
            emissiveIntensity={0.55}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[0, 0.56, 0.125]}>
          <boxGeometry
            args={[1.85, 0.025, 0.01]}
          />

          <meshBasicMaterial
            color="#7654c5"
            transparent
            opacity={0.55}
          />
        </mesh>

        <Text
          position={[0, 0.03, 0.14]}
          fontSize={0.55}
          color="#d7ccff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {active.short}
        </Text>

        <mesh position={[-0.48, -0.45, 0.14]}>
          <boxGeometry
            args={[0.62, 0.025, 0.01]}
          />

          <meshBasicMaterial color="#53437d" />
        </mesh>

        <mesh position={[0.25, -0.45, 0.14]}>
          <boxGeometry
            args={[0.42, 0.025, 0.01]}
          />

          <meshBasicMaterial color="#33294d" />
        </mesh>

        <mesh position={[0, -0.94, 0]}>
          <boxGeometry
            args={[0.14, 0.42, 0.12]}
          />

          <meshStandardMaterial
            color="#17151f"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <RoundedBox
          args={[0.78, 0.07, 0.28]}
          radius={0.03}
          smoothness={4}
          position={[0, -1.16, 0]}
        >
          <meshStandardMaterial
            color="#15131d"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Scene() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % software.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const monitorTarget = [
    0,
    0.4,
    0.8,
  ];

  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={2}
      />

      <pointLight
        position={[0, 0, 3]}
        color="#8b5cf6"
        intensity={3}
        distance={7}
      />

      <pointLight
        position={[-3, 2, 1]}
        color="#3b82f6"
        intensity={2}
        distance={5}
      />

      <pointLight
        position={[3, -1, 1]}
        color="#ec4899"
        intensity={1.5}
        distance={5}
      />

      <StudioPlatform />

      {nodePositions.map((position, index) => {
        const start = [
          position[0] * 0.82,
          position[1] * 0.82,
          0.4,
        ];

        return (
          <group key={index}>
            <NeonTube
              start={start}
              end={monitorTarget}
              active={index === activeIndex}
            />

            <EnergyParticle
              start={start}
              end={monitorTarget}
              delay={index * 0.25}
              active={index === activeIndex}
            />
          </group>
        );
      })}

      {software.map((item, index) => (
        <SoftwareNode
          key={item.name}
          item={item}
          position={nodePositions[index]}
          active={index === activeIndex}
        />
      ))}

      <Monitor activeIndex={activeIndex} />
    </>
  );
}

function HeroScene() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-0
        top-[38%]
        z-0
        block
        h-[430px]
        w-full

        md:inset-y-0
        md:right-0
        md:top-0
        md:h-auto
        md:w-[60%]

        lg:w-[63%]
      "
    >
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0.1, 8],
          fov: 48,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <Environment preset="night" />

        <group
          position={[0.1, 0.12, 0]}
          scale={0.58}
        >
          <Scene />
        </group>
      </Canvas>
    </div>
  );
}

export default HeroScene;