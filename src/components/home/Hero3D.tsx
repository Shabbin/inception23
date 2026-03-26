'use client';

import React, { useEffect, useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    Float,
    Stars,
    Sparkles,
    MeshTransmissionMaterial,
    Environment,
    OrbitControls,
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { useAppStore } from '@/lib/store';
import { ArrowRight } from 'lucide-react';

const homeContent = {
    slides: [
        {
            id: 'strategy',
            title: {
                en: 'Business & Strategy Advisory',
                bn: 'ব্যবসা এবং কৌশলগত পরামর্শ',
            },
            sub: {
                en: 'Strategic consulting, company registration, and scaling frameworks to guide business growth.',
                bn: 'ব্যবসায়িক বৃদ্ধি নিশ্চিত করতে কৌশলগত পরামর্শ এবং কোম্পানি নিবন্ধন।',
            },
        },
        {
            id: 'legal',
            title: {
                en: 'Corporate Legal Support',
                bn: 'কর্পোরেট আইনি সহায়তা',
            },
            sub: {
                en: 'Comprehensive legal assistance, compliance management, and corporate protection.',
                bn: 'সমন্বিত আইনি সহায়তা, কমপ্লায়েন্স ব্যবস্থাপনা এবং কর্পোরেট সুরক্ষা।',
            },
        },
        {
            id: 'tech',
            title: {
                en: 'Software & IT Solutions',
                bn: 'সফটওয়্যার এবং আইটি সলিউশন',
            },
            sub: {
                en: 'Dynamic websites, ERPs, apps, and digital platforms built strictly for scale.',
                bn: 'স্কেলিংয়ের জন্য ডিজাইন করা ডাইনামিক ওয়েবসাইট, ইআরপি এবং অ্যাপস।',
            },
        },
    ],
};

const BRAND = {
    bg: '#181b2c',
    bgSoft: '#20253a',
    textGlow: '#f8fafc',
    teal: '#14b8a6',
    tealSoft: '#2dd4bf',
    cyan: '#38bdf8',
    blue: '#60a5fa',
    gold: '#d4af37',
    goldSoft: '#f6e7a1',
    slate: '#94a3b8',
    slateDark: '#334155',
    orange: '#f59e0b',
};

function lerp(current: number, target: number, ease: number) {
    return current + (target - current) * ease;
}

function SceneRig() {
    const { camera, pointer } = useThree();

    useFrame(() => {
        const targetX = pointer.x * 0.35;
        const targetY = pointer.y * 0.18;
        camera.position.x = lerp(camera.position.x, targetX, 0.03);
        camera.position.y = lerp(camera.position.y, targetY, 0.03);
        camera.lookAt(0.6, 0.1, 0);
    });

    return null;
}

function SceneLighting() {
    return (
        <>
            <color attach="background" args={[BRAND.bg]} />
            <fog attach="fog" args={[BRAND.bg, 10, 24]} />

            <ambientLight intensity={0.65} color="#dbeafe" />
            <hemisphereLight
                intensity={0.75}
                color="#dbeafe"
                groundColor="#0f172a"
            />

            <directionalLight
                position={[4, 5, 6]}
                intensity={1.5}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[-5, 2, -4]}
                intensity={0.45}
                color="#60a5fa"
            />
            <pointLight position={[2, 0, 6]} intensity={1.4} color="#2dd4bf" />
            <pointLight position={[-6, 1, 2]} intensity={0.8} color="#818cf8" />
        </>
    );
}

const StrategyCore = React.memo(function StrategyCore({
    active,
}: {
    active: boolean;
}) {
    const group = useRef<THREE.Group>(null);
    const gear = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * (active ? 0.2 : 0.08);
        }
        if (gear.current) {
            gear.current.rotation.z = -state.clock.elapsedTime * (active ? 0.9 : 0.3);
        }
    });

    return (
        <Float
            speed={active ? 1.1 : 0.7}
            rotationIntensity={active ? 0.06 : 0.02}
            floatIntensity={active ? 0.35 : 0.15}
        >
            <group ref={group} position={[0, -0.45, 0]}>
                <mesh position={[0, -1, 0]} receiveShadow>
                    <cylinderGeometry args={[2.5, 2.5, 0.2, 64]} />
                    <meshStandardMaterial
                        color={BRAND.bgSoft}
                        roughness={0.8}
                        metalness={0.15}
                    />
                </mesh>

                <group position={[0, 0.82, -0.5]}>
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[3.2, 2.2, 0.2]} />
                        <meshStandardMaterial
                            color={BRAND.slateDark}
                            roughness={0.65}
                            metalness={0.18}
                        />
                    </mesh>

                    <mesh position={[0, 0, -0.05]} castShadow>
                        <boxGeometry args={[3.36, 2.36, 0.14]} />
                        <meshStandardMaterial
                            color={BRAND.cyan}
                            roughness={0.35}
                            metalness={0.5}
                        />
                    </mesh>

                    <group position={[-0.8, -0.2, 0.15]}>
                        <mesh position={[-0.4, 0.3, 0]}>
                            <boxGeometry args={[0.2, 0.6, 0.1]} />
                            <meshStandardMaterial color={BRAND.orange} roughness={0.3} />
                        </mesh>
                        <mesh position={[0, 0.4, 0]}>
                            <boxGeometry args={[0.2, 0.8, 0.1]} />
                            <meshStandardMaterial color={BRAND.orange} roughness={0.3} />
                        </mesh>
                        <mesh position={[0.4, 0.65, 0]}>
                            <boxGeometry args={[0.2, 1.3, 0.1]} />
                            <meshStandardMaterial color={BRAND.orange} roughness={0.3} />
                        </mesh>

                        <mesh position={[0.15, 0.9, 0.1]} rotation={[0, 0, Math.PI / 4]}>
                            <cylinderGeometry args={[0.03, 0.03, 1.4, 8]} />
                            <meshStandardMaterial
                                color={BRAND.tealSoft}
                                emissive={BRAND.teal}
                                emissiveIntensity={active ? 0.9 : 0.35}
                            />
                        </mesh>
                        <mesh position={[0.65, 1.4, 0.1]} rotation={[0, 0, -Math.PI / 4]}>
                            <coneGeometry args={[0.1, 0.2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.tealSoft}
                                emissive={BRAND.teal}
                                emissiveIntensity={active ? 0.9 : 0.35}
                            />
                        </mesh>
                    </group>

                    <group ref={gear} position={[-0.8, 0.6, 0.15]}>
                        <mesh>
                            <torusGeometry args={[0.3, 0.1, 16, 32]} />
                            <meshStandardMaterial
                                color="#cbd5e1"
                                roughness={0.35}
                                metalness={0.7}
                            />
                        </mesh>
                        {[...Array(6)].map((_, i) => (
                            <mesh
                                key={i}
                                rotation={[0, 0, (i * Math.PI) / 3]}
                                position={[
                                    Math.cos((i * Math.PI) / 3) * 0.35,
                                    Math.sin((i * Math.PI) / 3) * 0.35,
                                    0,
                                ]}
                            >
                                <boxGeometry args={[0.15, 0.15, 0.15]} />
                                <meshStandardMaterial
                                    color="#cbd5e1"
                                    roughness={0.35}
                                    metalness={0.7}
                                />
                            </mesh>
                        ))}
                    </group>

                    <mesh position={[0.8, 0.5, 0.15]}>
                        <boxGeometry args={[1.2, 0.4, 0.05]} />
                        <meshStandardMaterial color={BRAND.slate} roughness={0.4} />
                    </mesh>
                    <mesh position={[0.8, -0.1, 0.15]}>
                        <boxGeometry args={[1.2, 0.4, 0.05]} />
                        <meshStandardMaterial color={BRAND.slate} roughness={0.4} />
                    </mesh>
                </group>

                <group position={[-1.2, -0.5, 0.8]} rotation={[0, Math.PI / 4, 0]}>
                    <mesh position={[0, -0.4, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                        <meshStandardMaterial color={BRAND.orange} roughness={0.45} />
                    </mesh>
                    <mesh position={[0, 0.2, -0.2]} rotation={[-Math.PI / 8, 0, 0]}>
                        <boxGeometry args={[0.8, 0.6, 0.05]} />
                        <meshStandardMaterial color="#0f172a" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.8, 0.05, 0.5]} />
                        <meshStandardMaterial color="#cbd5e1" />
                    </mesh>
                    <mesh position={[0, 0.2, -0.17]}>
                        <planeGeometry args={[0.7, 0.5]} />
                        <meshStandardMaterial
                            color={BRAND.cyan}
                            emissive={BRAND.cyan}
                            emissiveIntensity={active ? 0.7 : 0.2}
                        />
                    </mesh>
                </group>

                <group position={[1.2, -0.5, 0.8]} rotation={[0, -Math.PI / 4, 0]}>
                    <mesh position={[0, -0.4, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                        <meshStandardMaterial color={BRAND.orange} roughness={0.45} />
                    </mesh>
                    <mesh position={[0, 0.2, -0.2]} rotation={[-Math.PI / 8, 0, 0]}>
                        <boxGeometry args={[0.8, 0.6, 0.05]} />
                        <meshStandardMaterial color="#0f172a" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.8, 0.05, 0.5]} />
                        <meshStandardMaterial color="#cbd5e1" />
                    </mesh>
                    <mesh position={[0, 0.2, -0.17]}>
                        <planeGeometry args={[0.7, 0.5]} />
                        <meshStandardMaterial
                            color={BRAND.cyan}
                            emissive={BRAND.cyan}
                            emissiveIntensity={active ? 0.7 : 0.2}
                        />
                    </mesh>
                </group>

                <group position={[0, -0.6, 1.5]}>
                    <mesh position={[0, -0.2, 0]}>
                        <cylinderGeometry args={[0.3, 0.2, 0.4, 16]} />
                        <meshStandardMaterial
                            color={BRAND.cyan}
                            metalness={0.45}
                            roughness={0.35}
                        />
                    </mesh>
                    <mesh position={[0, 0.1, 0]}>
                        <sphereGeometry args={[0.3, 16, 16]} />
                        <meshStandardMaterial color="#22c55e" roughness={0.95} />
                    </mesh>
                    <mesh position={[-0.1, 0.3, 0.1]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#22c55e" roughness={1} />
                    </mesh>
                    <mesh position={[0.2, 0.2, -0.1]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#22c55e" roughness={1} />
                    </mesh>
                </group>
            </group>
        </Float>
    );
});

const RealisticScales = React.memo(function RealisticScales({
    active,
}: {
    active: boolean;
}) {
    const group = useRef<THREE.Group>(null);
    const beam = useRef<THREE.Group>(null);
    const leftPan = useRef<THREE.Group>(null);
    const rightPan = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * (active ? 0.17 : 0.06);
        }
        if (beam.current && leftPan.current && rightPan.current) {
            const rock = Math.sin(state.clock.elapsedTime * (active ? 1.7 : 1.1)) * 0.12;
            beam.current.rotation.z = rock;
            leftPan.current.rotation.z = -rock;
            rightPan.current.rotation.z = -rock;
        }
    });

    return (
        <Float
            speed={active ? 1 : 0.6}
            rotationIntensity={active ? 0.08 : 0.02}
            floatIntensity={active ? 0.28 : 0.12}
        >
            <group ref={group} position={[0, -0.45, 0]} scale={[0.62, 0.62, 0.62]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.3, 4, 64]} />
                    <meshStandardMaterial
                        color={BRAND.gold}
                        metalness={0.95}
                        roughness={0.22}
                    />
                </mesh>
                <mesh position={[0, -2, 0]}>
                    <cylinderGeometry args={[1, 1.2, 0.4, 64]} />
                    <meshStandardMaterial
                        color={BRAND.gold}
                        metalness={0.95}
                        roughness={0.25}
                    />
                </mesh>
                <mesh position={[0, 2, 0]}>
                    <sphereGeometry args={[0.3, 48, 48]} />
                    <meshStandardMaterial
                        color={BRAND.goldSoft}
                        metalness={1}
                        roughness={0.12}
                        emissive={BRAND.gold}
                        emissiveIntensity={active ? 0.2 : 0.05}
                    />
                </mesh>

                <group ref={beam} position={[0, 1.6, 0]}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.08, 0.08, 5, 64]} />
                        <meshStandardMaterial
                            color={BRAND.gold}
                            metalness={0.98}
                            roughness={0.18}
                        />
                    </mesh>

                    <group ref={leftPan} position={[-2.4, 0, 0]}>
                        <mesh position={[0, -1, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[-0.4, -1, 0]} rotation={[0, 0, -0.2]}>
                            <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[0.4, -1, 0]} rotation={[0, 0, 0.2]}>
                            <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[0, -2, 0]}>
                            <sphereGeometry
                                args={[0.9, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]}
                            />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={0.98}
                                roughness={0.12}
                                side={THREE.DoubleSide}
                            />
                        </mesh>
                    </group>

                    <group ref={rightPan} position={[2.4, 0, 0]}>
                        <mesh position={[0, -1, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[-0.4, -1, 0]} rotation={[0, 0, -0.2]}>
                            <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[0.4, -1, 0]} rotation={[0, 0, 0.2]}>
                            <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={1}
                                roughness={0.12}
                            />
                        </mesh>
                        <mesh position={[0, -2, 0]}>
                            <sphereGeometry
                                args={[0.9, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]}
                            />
                            <meshStandardMaterial
                                color={BRAND.gold}
                                metalness={0.98}
                                roughness={0.12}
                                side={THREE.DoubleSide}
                            />
                        </mesh>
                    </group>
                </group>
            </group>
        </Float>
    );
});

const NeuralMatrix = React.memo(function NeuralMatrix({
    active,
}: {
    active: boolean;
}) {
    const group = useRef<THREE.Group>(null);
    const particles = useRef<THREE.Group>(null);

    const particleData = useMemo(
        () =>
            Array.from({ length: 18 }, (_, i) => {
                const radius = 2.4 + Math.random() * 1.1;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.sin(phi) * Math.sin(theta);
                const z = radius * Math.cos(phi);
                const scale = 0.05 + Math.random() * 0.11;

                return {
                    id: i,
                    position: [x, y, z] as [number, number, number],
                    rotation: [
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0,
                    ] as [number, number, number],
                    scale,
                };
            }),
        []
    );

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = state.clock.elapsedTime * (active ? 0.1 : 0.04);
            group.current.rotation.y = state.clock.elapsedTime * (active ? 0.18 : 0.07);
        }
        if (particles.current) {
            particles.current.rotation.y = -state.clock.elapsedTime * (active ? 0.12 : 0.05);
            particles.current.rotation.x = state.clock.elapsedTime * (active ? 0.06 : 0.02);
        }
    });

    return (
        <Float
            speed={active ? 1.15 : 0.65}
            rotationIntensity={active ? 0.12 : 0.04}
            floatIntensity={active ? 0.45 : 0.15}
        >
            <group>
                <group ref={group}>
                    <mesh>
                        <icosahedronGeometry args={[1.16, 2]} />
                        <MeshTransmissionMaterial
                            samples={4}
                            thickness={1.1}
                            roughness={0.08}
                            color={BRAND.cyan}
                            anisotropy={0.6}
                            chromaticAberration={0.06}
                            distortion={0.1}
                            distortionScale={0.24}
                        />
                    </mesh>

                    <mesh>
                        <icosahedronGeometry args={[0.92, 1]} />
                        <meshStandardMaterial
                            color="#020617"
                            wireframe
                            emissive={BRAND.cyan}
                            emissiveIntensity={active ? 1.1 : 0.35}
                        />
                    </mesh>

                    <pointLight
                        intensity={active ? 6 : 2}
                        color={BRAND.cyan}
                        distance={7}
                    />
                </group>

                <group ref={particles}>
                    {particleData.map((particle) => (
                        <mesh
                            key={particle.id}
                            position={particle.position}
                            rotation={particle.rotation}
                        >
                            <boxGeometry
                                args={[particle.scale, particle.scale * 3, particle.scale]}
                            />
                            <meshStandardMaterial
                                color="#dbeafe"
                                metalness={0.85}
                                roughness={0.18}
                                emissive={BRAND.blue}
                                emissiveIntensity={active ? 0.65 : 0.18}
                            />
                        </mesh>
                    ))}
                </group>

                {active && (
                    <Sparkles
                        count={90}
                        scale={6}
                        size={1.8}
                        speed={0.35}
                        opacity={0.55}
                        color={BRAND.cyan}
                    />
                )}
            </group>
        </Float>
    );
});

function SlideWrapper({
    index,
    activeIndex,
    children,
}: {
    index: number;
    activeIndex: number;
    children: React.ReactNode;
}) {
    const group = useRef<THREE.Group>(null);
    const { viewport } = useThree();

    const offset = (index - activeIndex + 3) % 3;

    useFrame((_, delta) => {
        if (!group.current) return;

        const isMobile = viewport.width < 5;
        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;
        let targetScale = 1;
        let targetRotationY = 0;

        if (offset === 0) {
            targetX = isMobile ? 0.25 : 2.35;
            targetY = isMobile ? -0.25 : -0.45;
            targetZ = isMobile ? 1.7 : 2.3;
            targetScale = isMobile ? 0.66 : 0.96;
            targetRotationY = isMobile ? -0.15 : -0.22;
        } else if (offset === 1) {
            targetX = isMobile ? 1.85 : 6.2;
            targetY = isMobile ? 1.25 : 1.05;
            targetZ = -3.4;
            targetScale = isMobile ? 0.34 : 0.42;
            targetRotationY = -0.65;
        } else {
            targetX = isMobile ? -1.55 : -2.9;
            targetY = isMobile ? 1.3 : 1.0;
            targetZ = -3.8;
            targetScale = isMobile ? 0.34 : 0.46;
            targetRotationY = 0.5;
        }

        group.current.position.lerp(
            new THREE.Vector3(targetX, targetY, targetZ),
            delta * 3.8
        );
        group.current.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, targetScale),
            delta * 3.8
        );

        group.current.rotation.y = lerp(
            group.current.rotation.y,
            targetRotationY,
            delta * 3.6
        );
    });

    return <group ref={group}>{children}</group>;
}

function SceneObjects({ activeSlide }: { activeSlide: number }) {
    return (
        <group>
            <SlideWrapper index={0} activeIndex={activeSlide}>
                <StrategyCore active={activeSlide === 0} />
            </SlideWrapper>
            <SlideWrapper index={1} activeIndex={activeSlide}>
                <RealisticScales active={activeSlide === 1} />
            </SlideWrapper>
            <SlideWrapper index={2} activeIndex={activeSlide}>
                <NeuralMatrix active={activeSlide === 2} />
            </SlideWrapper>
        </group>
    );
}

export default function Hero3D() {
    const { activeSlide, setSlide, lang, theme } = useAppStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((activeSlide + 1) % 3);
        }, 8000);

        return () => clearInterval(interval);
    }, [activeSlide, setSlide]);

    const current = homeContent.slides[activeSlide];

    return (
        <section className="relative h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-[rgb(24,27,44)]">
            <div className="absolute inset-0 z-0 bg-[rgb(24,27,44)]">
                <Canvas
                    shadows
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0, 10], fov: 42 }}
                    gl={{ antialias: true, alpha: false }}
                >
                    <Suspense fallback={null}>
                        <SceneLighting />
                        <SceneRig />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={0.35}
                            minPolarAngle={Math.PI / 2.2}
                            maxPolarAngle={Math.PI / 1.85}
                            minAzimuthAngle={-0.45}
                            maxAzimuthAngle={0.45}
                        />

                        <Suspense fallback={null}>
                            <Environment preset="city" />
                        </Suspense>

                        <SceneObjects activeSlide={activeSlide} />

                        <Sparkles
                            count={70}
                            scale={10}
                            size={1.6}
                            speed={0.2}
                            opacity={0.25}
                            color="#94a3b8"
                        />

                        {theme === 'dark' && (
                            <Stars
                                radius={55}
                                depth={26}
                                count={900}
                                factor={2.2}
                                saturation={0}
                                fade
                                speed={0.2}
                            />
                        )}
                    </Suspense>
                </Canvas>

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,27,44,0.98)_0%,rgba(24,27,44,0.84)_36%,rgba(24,27,44,0.34)_64%,rgba(24,27,44,0.12)_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(45,212,191,0.08),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(56,189,248,0.10),transparent_24%)] pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(24,27,44,0.92)] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[rgba(24,27,44,1)] to-transparent pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pointer-events-none grid grid-cols-1 md:grid-cols-2">
                <div className="pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        staggerChildren: 0.04,
                                        staggerDirection: -1,
                                    },
                                },
                            }}
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { ease: 'easeOut', duration: 0.7 },
                                    },
                                    exit: { opacity: 0, y: -16 },
                                }}
                                className="flex items-center gap-4 mb-8 pt-28 md:pt-32"
                            >
                                <div className="h-0.5 w-16 bg-brand-500 shadow-[0_0_18px_rgba(20,184,166,0.45)]" />
                                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-300">
                                    {lang === 'en' ? 'Core Expertise' : 'মূল দক্ষতা'}
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                        transition: { ease: 'easeOut', duration: 0.8 },
                                    },
                                    exit: { opacity: 0, y: -24, filter: 'blur(4px)' },
                                }}
                                className="text-5xl lg:text-8xl font-serif font-bold leading-[1.04] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400 pb-2"
                            >
                                {lang === 'en' ? current.title.en : current.title.bn}
                            </motion.h1>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { ease: 'easeOut', duration: 0.8 },
                                    },
                                    exit: { opacity: 0, y: -18 },
                                }}
                                className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed mb-12 border-l-2 border-brand-400/70 pl-6 shadow-[inset_2px_0_0_0_rgba(45,212,191,0.12)]"
                            >
                                {lang === 'en' ? current.sub.en : current.sub.bn}
                            </motion.p>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { ease: 'easeOut', duration: 0.8 },
                                    },
                                    exit: { opacity: 0, y: -18 },
                                }}
                                className="flex flex-wrap gap-4"
                            >
                                <button className="relative group bg-brand-600 hover:bg-brand-500 text-white px-10 py-4 rounded-sm font-bold transition-all flex items-center gap-3 uppercase tracking-widest text-xs overflow-hidden shadow-lg shadow-brand-900/30">
                                    <div className="absolute inset-0 bg-white/15 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        {lang === 'en' ? 'Explore' : 'দেখুন'}
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </span>
                                </button>

                                <button className="relative group px-10 py-4 rounded-sm font-bold border border-white/20 text-white transition-all uppercase tracking-widest text-xs overflow-hidden hover:border-brand-400/40">
                                    <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 block group-hover:-translate-y-0.5 transition-transform duration-300">
                                        {lang === 'en' ? 'Insights' : 'অন্তর্দৃষ্টি'}
                                    </span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}