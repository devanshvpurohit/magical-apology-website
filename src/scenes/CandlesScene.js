import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Candle({ position, floatSpeed, floatOffset, flickerSpeed }) {
  const groupRef = useRef();
  const lightRef = useRef();
  const spriteRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    groupRef.current.position.y = position[1] + Math.sin(time * floatSpeed + floatOffset) * 0.3;
    groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    
    // Flicker effect
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(time * flickerSpeed) * 0.5;
    }
    if (spriteRef.current) {
      spriteRef.current.material.opacity = 0.8 + Math.sin(time * flickerSpeed) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Candle body */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
        <meshStandardMaterial color="#f4e8d0" roughness={0.8} />
      </mesh>
      
      {/* Flame light */}
      <pointLight
        ref={lightRef}
        position={[0, 0.3, 0]}
        intensity={2}
        distance={5}
        color="#ffb347"
      />
      
      {/* Flame sprite */}
      <sprite ref={spriteRef} position={[0, 0.3, 0]} scale={[0.3, 0.4, 1]}>
        <spriteMaterial
          color="#ffb347"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
    </group>
  );
}

function FloatingCandles() {
  const candles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        Math.random() * 4 + 3,
        (Math.random() - 0.5) * 8,
      ],
      floatSpeed: Math.random() * 0.5 + 0.3,
      floatOffset: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      {candles.map((candle, i) => (
        <Candle key={i} {...candle} />
      ))}
    </>
  );
}

function MagicalParticles() {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame(() => {
    const positions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += 0.02;
      if (positions[i + 1] > 10) positions[i + 1] = -10;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={ref} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#ffd700"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function CandlesScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        <fog attach="fog" args={['#1a1f35', 5, 15]} />
        <ambientLight intensity={0.3} color="#2d3561" />
        <FloatingCandles />
        <MagicalParticles />
      </Canvas>
    </div>
  );
}

export default CandlesScene;
