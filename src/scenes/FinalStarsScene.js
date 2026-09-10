import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DenseStarfield() {
  const ref = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
      
      const color = new THREE.Color();
      color.setHSL(0.6, 0.2, Math.random() * 0.5 + 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
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
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </points>
    </group>
  );
}

function ShootingStar({ startTime }) {
  const lineRef = useRef();
  const materialRef = useRef();
  
  const startPos = useMemo(() => ({
    x: (Math.random() - 0.5) * 20,
    y: Math.random() * 10 + 5,
    z: (Math.random() - 0.5) * 10,
  }), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const localTime = time - startTime;
    
    if (localTime > 0 && localTime < 0.5) {
      const progress = localTime * 2;
      
      if (lineRef.current) {
        const positions = lineRef.current.geometry.attributes.position.array;
        positions[0] = startPos.x;
        positions[1] = startPos.y;
        positions[2] = startPos.z;
        positions[3] = startPos.x - progress * 3;
        positions[4] = startPos.y - progress * 2;
        positions[5] = startPos.z - progress * 1;
        
        lineRef.current.geometry.attributes.position.needsUpdate = true;
        materialRef.current.opacity = 1 - progress;
      }
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        ref={materialRef}
        color="#ffffff"
        transparent
        opacity={0}
      />
    </line>
  );
}

function ShootingStars() {
  const shootingStarTimes = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => i * 3);
  }, []);

  return (
    <>
      {shootingStarTimes.map((time, index) => (
        <ShootingStar key={index} startTime={time} />
      ))}
    </>
  );
}

function FloatingEnvelope() {
  const groupRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    groupRef.current.position.y = 1 + Math.sin(time * 0.8) * 0.3;
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    
    if (lightRef.current) {
      lightRef.current.intensity = 1 + Math.sin(time * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 1, 2]}>
      <mesh>
        <boxGeometry args={[1, 0.7, 0.05]} />
        <meshStandardMaterial color="#f4e8d0" roughness={0.7} />
      </mesh>
      <pointLight
        ref={lightRef}
        intensity={1}
        distance={5}
        color="#ffd700"
      />
    </group>
  );
}

function MagicalParticles() {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
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

function FinalStarsScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} color="#1a1f35" />
        <DenseStarfield />
        <ShootingStars />
        <FloatingEnvelope />
        <MagicalParticles />
      </Canvas>
    </div>
  );
}

export default FinalStarsScene;
