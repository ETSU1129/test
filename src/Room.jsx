import { useGLTF,useTexture,Float } from "@react-three/drei"

export function Model(props) {
  const { nodes } = useGLTF("/roommodel001.glb")
  
  const bakedTexture = useTexture('./bake_001.jpg')
  const bakedTexture2 = useTexture('./bake_003.jpg')
  bakedTexture.flipY = false
  bakedTexture2.flipY = false
  console.log(nodes);
  return <>
            <mesh geometry={ nodes.bakedmodel1.geometry }
            scale={0.2}
            rotation-y={-1}
            position-x={0}
            position-y={-0.5}>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>

            
            <mesh geometry={ nodes.bakedmodel2.geometry }
            scale={0.2}
            rotation-y={-1}
            position-x={0}
            position-y={-0.5}>
                <meshBasicMaterial map={ bakedTexture2 } />
            </mesh>
</>
}

useGLTF.preload("/roommodel001.glb")
