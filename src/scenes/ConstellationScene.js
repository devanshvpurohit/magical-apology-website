import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BackgroundStars() {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.01;
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
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </points>
    </group>
  );
}

function ConstellationStar({ position, revealed, index }) {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (revealed && meshRef.current) {
      const targetOpacity = 1;
      meshRef.current.material.opacity = THREE.MathUtils.lerp(
        meshRef.current.material.opacity,
        targetOpacity,
        0.05
      );
      
      // Pulse animation
      const scale = 1 + Math.sin(time * 3 + index) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
      
      // Glow effect
      if (glowRef.current) {
        glowRef.current.material.opacity = 0.3 + Math.sin(time * 2 + index) * 0.2;
      }
    }
    
    // Gentle floating
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.05;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0}
        />
      </mesh>
      
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function ConstellationLines({ revealedStars }) {
  const lineRefs = useRef([]);
  
  const starPositions = useMemo(() => [
    [-3, 2, 0],
    [1, 3, -1],
    [-1, 0, 0],
    [3, 1, 1],
    [-2, -2, -0.5],
    [2, -1, 0.5],
  ], []);

  const connections = useMemo(() => [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3], [1, 4]
  ], []);

  useEffect(() => {
    if (revealedStars.length === 6) {
      // Animate lines appearing
      lineRefs.current.forEach((line, index) => {
        if (line) {
          setTimeout(() => {
            const animate = () => {
              if (line.material.opacity < 0.6) {
                line.material.opacity += 0.02;
                requestAnimationFrame(animate);
              }
            };
            animate();
          }, index * 200);
        }
      });
    }
  }, [revealedStars]);

  return (
    <>
      {connections.map(([start, end], index) => {
        const points = [
          new THREE.Vector3(...starPositions[start]),
          new THREE.Vector3(...starPositions[end]),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial
              ref={(ref) => (lineRefs.current[index] = ref?.parent)}
              color="#d4af37"
              transparent
              opacity={0}
            />
          </line>
        );
      })}
    </>
  );
}

function MagicalParticles() {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
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
      positions[i + 1] += 0.01;
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
          color="#d4af37"
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

function ConstellationScene({ revealedStars = [] }) {
  const starPositions = useMemo(() => [
    [-3, 2, 0],
    [1, 3, -1],
    [-1, 0, 0],
    [3, 1, 1],
    [-2, -2, -0.5],
    [2, -1, 0.5],
  ], []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} color="#1a1f35" />
        <BackgroundStars />
        {starPositions.map((pos, index) => (
          <ConstellationStar
            key={index}
            position={pos}
            revealed={revealedStars.includes(index)}
            index={index}
          />
        ))}
        <ConstellationLines revealedStars={revealedStars} />
        <MagicalParticles />
      </Canvas>
    </div>
  );
}

export default ConstellationScene;
