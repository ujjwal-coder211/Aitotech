'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/** A stylised low-poly house on a platform with a small surrounding development. */
function House({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (animate) {
      group.current.rotation.y += delta * 0.25;
      group.current.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    }
    // gentle pointer parallax
    const { x, y } = state.pointer;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.15, 0.05);
  });

  const buildings: [number, number, number, number][] = [
    // [x, z, width, height]
    [-2.4, -1.2, 0.9, 1.8],
    [2.3, -1.4, 1.0, 2.4],
    [-2.7, 0.9, 0.8, 1.3],
    [2.6, 0.8, 0.9, 1.6],
  ];

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* ground platform */}
      <mesh position={[0, -1.15, 0]} receiveShadow>
        <cylinderGeometry args={[3.1, 3.3, 0.35, 48]} />
        <meshStandardMaterial color="#334155" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, -0.98, 0]}>
        <cylinderGeometry args={[3.1, 3.1, 0.02, 48]} />
        <meshStandardMaterial color="#1e293b" roughness={1} />
      </mesh>

      {/* main house body */}
      <mesh position={[0, -0.15, 0]} castShadow>
        <boxGeometry args={[2, 1.5, 1.7]} />
        <meshStandardMaterial color="#f4ede1" roughness={0.7} metalness={0.05} />
      </mesh>

      {/* roof (4-sided pyramid) */}
      <mesh position={[0, 0.95, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.75, 1.05, 4]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} metalness={0.2} />
      </mesh>
      {/* roof ridge accent */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
      </mesh>

      {/* door */}
      <mesh position={[0, -0.5, 0.86]}>
        <boxGeometry args={[0.42, 0.8, 0.06]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* lit windows (front) */}
      {[-0.6, 0.6].map((x) => (
        <mesh key={`fw${x}`} position={[x, 0.05, 0.87]}>
          <boxGeometry args={[0.36, 0.36, 0.05]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.9} />
        </mesh>
      ))}
      {/* lit windows (side) */}
      {[-0.4, 0.4].map((z) => (
        <mesh key={`sw${z}`} position={[1.01, 0.05, z]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.34, 0.34, 0.05]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.7} />
        </mesh>
      ))}

      {/* surrounding development */}
      {buildings.map(([x, z, w, h], i) => (
        <group key={i} position={[x, -1.15 + h / 2, z]}>
          <mesh castShadow>
            <boxGeometry args={[w, h, w]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.15} />
          </mesh>
          {/* a couple of lit windows per building */}
          <mesh position={[0, h * 0.15, w / 2 + 0.01]}>
            <boxGeometry args={[w * 0.5, 0.12, 0.02]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}

      {/* two trees */}
      {[[-1.5, 1.1], [1.6, -0.9]].map(([x, z], i) => (
        <group key={`t${i}`} position={[x, -0.98, z]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.4, 8]} />
            <meshStandardMaterial color="#78350f" roughness={1} />
          </mesh>
          <mesh position={[0, 0.55, 0]}>
            <icosahedronGeometry args={[0.32, 0]} />
            <meshStandardMaterial color="#15803d" roughness={0.9} flatShading />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function AryaHouseScene({ animate = true }: { animate?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [3.2, 2.4, 5.2], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={animate ? 'always' : 'demand'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 7, 4]} intensity={1.1} color="#fff4e0" />
      <pointLight position={[-4, 2, 3]} intensity={0.6} color="#f59e0b" />
      <pointLight position={[0, 3, -4]} intensity={0.4} color="#60a5fa" />
      <House animate={animate} />
    </Canvas>
  );
}
