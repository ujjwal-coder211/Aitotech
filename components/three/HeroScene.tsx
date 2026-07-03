'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Floating abstract AI core: outer wireframe icosahedron, faceted inner
 * solid, and a particle shell — all in brand violet. Kept deliberately
 * light: no post-processing, no drei, capped DPR.
 */
function AICore({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  const particleGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 3), []);

  useFrame((state, delta) => {
    if (!group.current) return;

    if (animate) {
      group.current.rotation.y += delta * 0.08;
      if (shell.current) shell.current.rotation.z += delta * 0.02;
      if (inner.current) inner.current.rotation.y -= delta * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    // Subtle pointer parallax — eased so it never feels twitchy
    const { x, y } = state.pointer;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.2, 0.04);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x * 0.35, 0.04);
  });

  return (
    <group ref={group}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#5e6ad2"
          emissive="#5e6ad2"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      <mesh ref={inner} scale={0.52}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#101014"
          metalness={0.85}
          roughness={0.25}
          emissive="#2f3680"
          emissiveIntensity={0.25}
          flatShading
        />
      </mesh>

      <points geometry={particleGeometry}>
        <pointsMaterial color="#9ba2ec" size={0.02} sizeAttenuation transparent opacity={0.4} />
      </points>
    </group>
  );
}

export default function HeroScene({ animate = true }: { animate?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={animate ? 'always' : 'demand'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={0.9} color="#b9bef2" />
      <pointLight position={[-6, -4, -4]} intensity={0.5} color="#5e6ad2" />
      <AICore animate={animate} />
    </Canvas>
  );
}
