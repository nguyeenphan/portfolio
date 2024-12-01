import { useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
// import { useControls } from 'leva';
import { gsap } from "gsap";
import {useEffect, useRef} from "react";

const Candy = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('models/candy_cane.glb');

    useEffect(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.rotation, {
                x: "+=0.2",
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
}, []);

    // const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } = useControls('Candy', {
    //     positionX: { value: 0, min: -10, max: 10 },
    //     positionY: { value: 4, min: -10, max: 10 },
    //     positionZ: { value: 0, min: -10, max: 10 },
    //     rotationX: { value: -Math.PI / 8, min: -Math.PI, max: Math.PI },
    //     rotationY: { value: 6, min: -Math.PI, max: Math.PI },
    //     rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
    //     scale: { value: 0.3, min: 0.1, max: 10, step: 0.1 },
    // });

    return (
        <group ref={targetRef} {...props} dispose={null}>
            <group
                position={isMobile ? [2, 3, 0] : [-2.0, 3.6, -2.4]}
                rotation={[-0.51, -1.60, -0.24]}
                scale={isMobile ? 0.25 : 0.3}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_white_0.geometry}
                    material={materials.white}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_red_0.geometry}
                    material={materials.material}
                />
            </group>
        </group>
    );
};

useGLTF.preload('models/candy_cane.glb');
export default Candy;