import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const sphere = inSphere(new Float32Array(5000), { radius: 1.5 });




  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.1;
    ref.current.rotation.y = time * 0.15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-pink-700 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.2)_0%,rgba(0,0,0,0)_100%)]" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}

export default Background;