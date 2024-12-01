import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import {useMediaQuery} from "react-responsive";

const Target = (props) => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('models/croissant.glb');

    // Animation using GSAP
    useEffect(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.7,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <group ref={targetRef} {...props} dispose={null} scale={0.1}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Box011__0.geometry}
                material={materials['Scene_-_Root']} // Ensure this matches your GLTF material name
                position={isMobile ? [10, -15, 0] : [0, 12, 0]} // Adjust as needed
                rotation={[-Math.PI / 2, 0, 0]} // Correct orientation
                scale={15} // Adjust to fit the scene
            />
        </group>
    );
};

useGLTF.preload('models/croissant.glb');

export default Target;
