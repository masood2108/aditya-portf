import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  Text,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* ---------------- MONITOR ---------------- */

function Monitor() {
  const screenRef = useRef();

  useFrame((state) => {
    if (!screenRef.current) return;

    screenRef.current.emissiveIntensity =
      0.45 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
  });

  return (
    <group position={[1.15, 1.55, -0.15]}>
      {/* Monitor body */}
      <RoundedBox
        args={[2.8, 1.75, 0.16]}
        radius={0.12}
        smoothness={6}
      >
        <meshStandardMaterial
          color="#111116"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[2.52, 1.47]} />

        <meshStandardMaterial
          ref={screenRef}
          color="#08070c"
          emissive="#48258a"
          emissiveIntensity={0.45}
          roughness={0.3}
        />
      </mesh>

      {/* Screen UI */}
      <group position={[0, 0, 0.13]}>
        <mesh position={[0, 0.58, 0]}>
          <planeGeometry args={[2.2, 0.025]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        <mesh position={[-0.92, 0, 0]}>
          <planeGeometry args={[0.18, 1.05]} />
          <meshBasicMaterial color="#18131f" />
        </mesh>

        <mesh position={[0.1, 0.08, 0]}>
          <planeGeometry args={[1.45, 0.72]} />
          <meshBasicMaterial color="#15101d" />
        </mesh>

        <mesh position={[0.1, 0.08, 0.01]}>
          <circleGeometry args={[0.22, 32]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        <mesh position={[0.12, -0.5, 0]}>
          <planeGeometry args={[1.75, 0.06]} />
          <meshBasicMaterial color="#27202f" />
        </mesh>

        <mesh position={[-0.28, -0.5, 0.01]}>
          <planeGeometry args={[0.42, 0.055]} />
          <meshBasicMaterial color="#7c3aed" />
        </mesh>

        <mesh position={[0.35, -0.5, 0.01]}>
          <planeGeometry args={[0.28, 0.055]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>

        <mesh position={[0.68, -0.5, 0.01]}>
          <planeGeometry args={[0.18, 0.055]} />
          <meshBasicMaterial color="#4c1d95" />
        </mesh>
      </group>

      {/* Stand */}
      <mesh position={[0, -1.02, 0]}>
        <boxGeometry args={[0.18, 0.42, 0.12]} />

        <meshStandardMaterial
          color="#15151a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <RoundedBox
        args={[0.9, 0.08, 0.35]}
        radius={0.03}
        smoothness={4}
        position={[0, -1.25, 0]}
      >
        <meshStandardMaterial
          color="#141419"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
    </group>
  );
}

/* ---------------- HUMAN ---------------- */

function Human() {
  const humanRef = useRef();
  const headRef = useRef();
  const armRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (humanRef.current) {
      humanRef.current.position.y =
        -0.18 + Math.sin(t * 1.1) * 0.012;
    }

    if (headRef.current) {
      headRef.current.rotation.z =
        Math.sin(t * 0.7) * 0.018;

      headRef.current.rotation.y =
        -0.12 + Math.sin(t * 0.55) * 0.025;
    }

    if (armRef.current) {
      armRef.current.rotation.z =
        -0.62 + Math.sin(t * 3.2) * 0.025;
    }
  });

  return (
    <group
      ref={humanRef}
      position={[-0.75, -0.18, 0.05]}
    >
      {/* CHAIR */}
      <group position={[-0.65, 0.2, -0.35]}>
        <RoundedBox
          args={[1.15, 0.16, 0.95]}
          radius={0.08}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#15131b"
            roughness={0.5}
            metalness={0.35}
          />
        </RoundedBox>

        <RoundedBox
          args={[1.05, 1.45, 0.16]}
          radius={0.1}
          smoothness={5}
          position={[0, 0.7, -0.4]}
          rotation={[-0.04, 0, 0]}
        >
          <meshStandardMaterial
            color="#17151e"
            roughness={0.5}
            metalness={0.35}
          />
        </RoundedBox>

        <mesh position={[0, -0.62, 0]}>
          <cylinderGeometry
            args={[0.07, 0.1, 1.3, 12]}
          />

          <meshStandardMaterial
            color="#25232b"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[0, -1.25, 0]}>
          <cylinderGeometry
            args={[0.58, 0.7, 0.08, 6]}
          />

          <meshStandardMaterial
            color="#111017"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* TORSO */}
      <group position={[-0.35, 0.82, 0]}>
        <RoundedBox
          args={[0.82, 1.15, 0.5]}
          radius={0.18}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#24212c"
            roughness={0.65}
            metalness={0.15}
          />
        </RoundedBox>

        {/* Hoodie collar */}
        <mesh
          position={[0, 0.57, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry
            args={[0.2, 0.045, 10, 24]}
          />

          <meshStandardMaterial
            color="#111016"
            roughness={0.65}
          />
        </mesh>

        {/* Shirt detail */}
        <mesh position={[0, 0.05, 0.255]}>
          <boxGeometry args={[0.025, 0.5, 0.02]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>

      {/* HEAD */}
      <group
        ref={headRef}
        position={[-0.35, 1.68, 0.02]}
      >
        {/* Neck */}
        <mesh position={[0, -0.42, 0]}>
          <cylinderGeometry
            args={[0.14, 0.16, 0.3, 16]}
          />

          <meshStandardMaterial
            color="#9b6c5d"
            roughness={0.8}
          />
        </mesh>

        {/* Face */}
        <mesh scale={[0.9, 1, 0.88]}>
          <sphereGeometry args={[0.39, 32, 32]} />

          <meshStandardMaterial
            color="#a97967"
            roughness={0.72}
            metalness={0}
          />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.37, 0, 0]}>
          <sphereGeometry args={[0.075, 16, 16]} />

          <meshStandardMaterial
            color="#956557"
            roughness={0.8}
          />
        </mesh>

        <mesh position={[0.37, 0, 0]}>
          <sphereGeometry args={[0.075, 16, 16]} />

          <meshStandardMaterial
            color="#956557"
            roughness={0.8}
          />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 0.23, -0.01]}>
          <sphereGeometry
            args={[
              0.405,
              32,
              20,
              0,
              Math.PI * 2,
              0,
              Math.PI * 0.52,
            ]}
          />

          <meshStandardMaterial
            color="#121116"
            roughness={0.55}
          />
        </mesh>

        {/* Hair sides */}
        <mesh position={[-0.31, 0.1, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />

          <meshStandardMaterial
            color="#121116"
            roughness={0.55}
          />
        </mesh>

        <mesh position={[0.31, 0.1, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />

          <meshStandardMaterial
            color="#121116"
            roughness={0.55}
          />
        </mesh>

        {/* Nose */}
        <mesh
          position={[0, -0.02, 0.365]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneGeometry args={[0.045, 0.14, 12]} />

          <meshStandardMaterial
            color="#8d5d50"
            roughness={0.8}
          />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.13, 0.06, 0.35]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#111016" />
        </mesh>

        <mesh position={[0.13, 0.06, 0.35]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#111016" />
        </mesh>

        {/* Beard */}
        <mesh
          position={[0, -0.22, 0.32]}
          scale={[0.55, 0.28, 0.12]}
        >
          <sphereGeometry args={[0.25, 20, 16]} />

          <meshStandardMaterial
            color="#3b3030"
            roughness={0.9}
          />
        </mesh>
      </group>

      {/* BACK ARM */}
      <group
        position={[-0.02, 1.02, -0.04]}
        rotation={[0, 0, -0.48]}
      >
        <mesh>
          <capsuleGeometry
            args={[0.105, 0.58, 10, 16]}
          />

          <meshStandardMaterial
            color="#292631"
            roughness={0.58}
          />
        </mesh>

        <mesh
          position={[0.02, -0.37, 0]}
          rotation={[0, 0, -0.25]}
        >
          <capsuleGeometry
            args={[0.095, 0.48, 10, 16]}
          />

          <meshStandardMaterial
            color="#292631"
            roughness={0.58}
          />
        </mesh>
      </group>

      {/* WORKING ARM */}
      <group
        ref={armRef}
        position={[-0.05, 1.02, 0.12]}
      >
        {/* Upper arm */}
        <mesh
          position={[0.25, -0.2, 0]}
          rotation={[0, 0, -0.82]}
        >
          <capsuleGeometry
            args={[0.11, 0.58, 10, 16]}
          />

          <meshStandardMaterial
            color="#292631"
            roughness={0.58}
          />
        </mesh>

        {/* Elbow */}
        <mesh position={[0.49, -0.45, 0]}>
          <sphereGeometry args={[0.115, 16, 16]} />

          <meshStandardMaterial
            color="#9b6c5d"
            roughness={0.8}
          />
        </mesh>

        {/* Forearm */}
        <mesh
          position={[0.72, -0.38, 0]}
          rotation={[0, 0, -1.45]}
        >
          <capsuleGeometry
            args={[0.095, 0.58, 10, 16]}
          />

          <meshStandardMaterial
            color="#292631"
            roughness={0.58}
          />
        </mesh>

        {/* Hand */}
        <mesh position={[0.96, -0.62, 0]}>
          <sphereGeometry args={[0.105, 20, 20]} />

          <meshStandardMaterial
            color="#9b6c5d"
            roughness={0.8}
          />
        </mesh>

        {/* Fingers */}
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[
              1.01 + i * 0.045,
              -0.67,
              0,
            ]}
            rotation={[0, 0, -0.2]}
          >
            <capsuleGeometry
              args={[0.025, 0.12, 6, 10]}
            />

            <meshStandardMaterial
              color="#9b6c5d"
              roughness={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* LEGS */}
      <group position={[-0.35, -0.05, 0.05]}>
        {/* Left thigh */}
        <mesh
          position={[-0.22, -0.42, 0]}
          rotation={[0, 0, 0.08]}
        >
          <capsuleGeometry
            args={[0.15, 0.65, 10, 16]}
          />

          <meshStandardMaterial
            color="#15141b"
            roughness={0.75}
          />
        </mesh>

        {/* Right thigh */}
        <mesh
          position={[0.22, -0.42, 0]}
          rotation={[0, 0, -0.08]}
        >
          <capsuleGeometry
            args={[0.15, 0.65, 10, 16]}
          />

          <meshStandardMaterial
            color="#15141b"
            roughness={0.75}
          />
        </mesh>

        {/* Left lower leg */}
        <mesh position={[-0.22, -0.9, 0.02]}>
          <capsuleGeometry
            args={[0.12, 0.55, 10, 16]}
          />

          <meshStandardMaterial
            color="#111017"
            roughness={0.75}
          />
        </mesh>

        {/* Right lower leg */}
        <mesh position={[0.22, -0.9, 0.02]}>
          <capsuleGeometry
            args={[0.12, 0.55, 10, 16]}
          />

          <meshStandardMaterial
            color="#111017"
            roughness={0.75}
          />
        </mesh>

        {/* Shoes */}
        <RoundedBox
          args={[0.32, 0.14, 0.52]}
          radius={0.06}
          smoothness={4}
          position={[-0.22, -1.2, 0.12]}
        >
          <meshStandardMaterial
            color="#09090c"
            roughness={0.5}
            metalness={0.2}
          />
        </RoundedBox>

        <RoundedBox
          args={[0.32, 0.14, 0.52]}
          radius={0.06}
          smoothness={4}
          position={[0.22, -1.2, 0.12]}
        >
          <meshStandardMaterial
            color="#09090c"
            roughness={0.5}
            metalness={0.2}
          />
        </RoundedBox>
      </group>
    </group>
  );
}

/* ---------------- DESK ---------------- */

function Desk() {
  return (
    <group position={[0, -0.35, 0]}>
      <RoundedBox
        args={[4.8, 0.18, 1.55]}
        radius={0.08}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#111116"
          metalness={0.65}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Purple desk light */}
      <mesh position={[0, 0.1, 0.76]}>
        <boxGeometry args={[4.35, 0.025, 0.025]} />
        <meshBasicMaterial color="#7c3aed" />
      </mesh>

      {/* Legs */}
      {[-2, 2].map((x) => (
        <mesh key={x} position={[x, -1.05, 0]}>
          <boxGeometry args={[0.12, 2, 0.12]} />

          <meshStandardMaterial
            color="#16161b"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Keyboard */}
      <RoundedBox
        args={[1.3, 0.06, 0.42]}
        radius={0.025}
        smoothness={3}
        position={[0.55, 0.14, 0.38]}
      >
        <meshStandardMaterial
          color="#1b1920"
          metalness={0.5}
          roughness={0.4}
        />
      </RoundedBox>

      {/* Keyboard glow */}
      <mesh position={[0.55, 0.18, 0.38]}>
        <boxGeometry args={[1, 0.012, 0.02]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Mouse */}
      <RoundedBox
        args={[0.22, 0.13, 0.32]}
        radius={0.08}
        smoothness={5}
        position={[1.42, 0.17, 0.38]}
      >
        <meshStandardMaterial
          color="#25232b"
          metalness={0.5}
          roughness={0.35}
        />
      </RoundedBox>
    </group>
  );
}

/* ---------------- FLOATING PANELS ---------------- */

function FloatingPanel({ position, title, value }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.position.y =
      position[1] +
      Math.sin(
        state.clock.elapsedTime * 0.8 + position[0]
      ) *
        0.06;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.08}
      floatIntensity={0.15}
    >
      <group ref={ref} position={position}>
        <RoundedBox
          args={[1.15, 0.58, 0.08]}
          radius={0.07}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#121018"
            metalness={0.5}
            roughness={0.3}
            emissive="#32145f"
            emissiveIntensity={0.2}
          />
        </RoundedBox>

        <Text
          position={[0, 0.1, 0.06]}
          fontSize={0.09}
          color="#8b7ca8"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          {title}
        </Text>

        <Text
          position={[0, -0.1, 0.06]}
          fontSize={0.17}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {value}
        </Text>
      </group>
    </Float>
  );
}

/* ---------------- SCENE ---------------- */

function Scene() {
  const sceneRef = useRef();

  useFrame((state) => {
    if (!sceneRef.current) return;

    const targetX = state.pointer.x * 0.08;
    const targetY = state.pointer.y * 0.05;

    sceneRef.current.rotation.y =
      THREE.MathUtils.lerp(
        sceneRef.current.rotation.y,
        targetX,
        0.035
      );

    sceneRef.current.rotation.x =
      THREE.MathUtils.lerp(
        sceneRef.current.rotation.x,
        -targetY,
        0.035
      );
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[1, 2, 2]}
        color="#8b5cf6"
        intensity={4}
        distance={6}
      />

      <pointLight
        position={[-3, 2, 2]}
        color="#2563eb"
        intensity={2}
        distance={5}
      />

      <pointLight
        position={[3, 0, 2]}
        color="#ec4899"
        intensity={1.2}
        distance={4}
      />

      <Float
        speed={0.55}
        rotationIntensity={0.015}
        floatIntensity={0.04}
      >
        <Desk />
        <Monitor />
        <Human />
      </Float>

      {/* Timeline */}
      <FloatingPanel
        position={[-2.35, 2.2, 0]}
        title="TIMELINE"
        value="03:42"
      />

      {/* Frames */}
      <FloatingPanel
        position={[2.45, 2.25, 0]}
        title="FRAMES"
        value="24 FPS"
      />

      {/* Export */}
      <FloatingPanel
        position={[2.55, -0.05, 0]}
        title="EXPORT"
        value="4K"
      />
    </group>
  );
}

/* ---------------- CANVAS ---------------- */

function ContactScene() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] md:block lg:w-[64%]">
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0.7, 7],
          fov: 42,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <Environment preset="night" />

        <group
          position={[0.25, -0.05, 0]}
          scale={0.72}
        >
          <Scene />
        </group>
      </Canvas>
    </div>
  );
}

export default ContactScene;