'use client';

import { Suspense, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Reflector } from '@react-three/drei';
import * as THREE from 'three';

function Loader({ onLoaded }: { onLoaded?: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded?.();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid rgba(0, 240, 255, 0.2)',
          borderTopColor: '#00f0ff',
          borderRadius: '50%',
          animation: 'spin 1s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Html>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[0, 8, 2]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0001}
        shadow-radius={4}
      />
      <pointLight position={[3, 3, 2]} intensity={0.6} color="#aaccff" />
      <pointLight position={[-3, 3, 2]} intensity={0.6} color="#ffccaa" />
      <pointLight position={[0, 2, 4]} intensity={0.4} color="#ffffff" />
      <pointLight position={[0, 1, 1.5]} intensity={0.3} color="#00f0ff" />
    </>
  );
}

function Floor() {
  return (
    <>
      <Reflector
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        resolution={512}
        mirror={0.35}
        blur={[300, 100]}
        mixBlur={0.8}
        mixStrength={0.4}
        depthScale={1}
        minDepthThreshold={0.7}
        maxDepthThreshold={1.2}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.51, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#050510" metalness={0.9} roughness={0.1} />
      </mesh>
    </>
  );
}

function Particles() {
  const count = 80;
  const meshRef = useRef<THREE.Points>(null);
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = Math.random() * 6 - 1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = Math.random() * 0.003 + 0.001;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    
    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const position = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      position[i * 3] += velocities[i * 3];
      position[i * 3 + 1] += velocities[i * 3 + 1];
      position[i * 3 + 2] += velocities[i * 3 + 2];
      
      if (position[i * 3 + 1] > 5) {
        position[i * 3 + 1] = -1;
        position[i * 3] = (Math.random() - 0.5) * 12;
        position[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00f0ff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function CameraController() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const scrollSmoothRef = useRef(0);
  const cameraYawRef = useRef(0);
  const cameraPitchRef = useRef(0);
  const localScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      localScrollRef.current = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (!cameraRef.current) return;
    const camera = cameraRef.current;
    const delta = state.clock.getDelta();
    
    const targetScroll = localScrollRef.current;
    const lerpFactor = 1 - Math.pow(0.001, delta);
    scrollSmoothRef.current += (targetScroll - scrollSmoothRef.current) * lerpFactor * 0.3;
    
    const scrollProgress = scrollSmoothRef.current;
    
    const zoomOffset = scrollProgress * 0.8;
    const tiltX = Math.sin(scrollProgress * Math.PI) * 0.1;
    const tiltY = scrollProgress * 0.15;
    
    cameraYawRef.current += (tiltY - cameraYawRef.current) * lerpFactor * 0.4;
    cameraPitchRef.current += (tiltX - cameraPitchRef.current) * lerpFactor * 0.4;
    
    const basePos = new THREE.Vector3(0, 0, 6);
    const targetPos = new THREE.Vector3(
      basePos.x + cameraYawRef.current * 0.5,
      basePos.y + cameraPitchRef.current * 0.3,
      basePos.z - zoomOffset
    );
    
    camera.position.lerp(targetPos, lerpFactor * 0.3);
    
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -cameraYawRef.current * 0.3, lerpFactor * 0.3);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, cameraPitchRef.current * 0.15, lerpFactor * 0.3);
  });

  return <perspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 6]} fov={50} />;
}

function Scene() {
  return (
    <>
      <CameraController />
      <Lights />
      <Environment preset="studio" background={false} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
        enableDamping
        dampingFactor={0.05}
      />
      <Particles />
    </>
  );
}

export default function TeslaRobotScene() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#05050f', cursor: 'none' }}>
      <Canvas
        shadows="soft"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#05050f']} />
        <fog attach="fog" args={['#05050f', 10, 30]} />
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}