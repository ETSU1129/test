import { useRef, useState ,useEffect} from "react"
import { Canvas, useFrame ,useThree} from "@react-three/fiber"
import { SoftShadows, PresentationControls, Sky, PerformanceMonitor,OrbitControls,Html,PerspectiveCamera,ScrollControls,Scroll } from "@react-three/drei"
import{useControls} from "leva"
import { Interface } from "./Interface"
import { easing } from "maath"
import { Model as Room } from "./Room"






export default function App() {
  return (
    
      <Canvas>
      <fog attach="fog" args={["#d0d0d0", 1, 17]} />
      <PerspectiveCamera makeDefault position={[-0.1, 0.1, 6]} />
      <PresentationControls
                  global={true}
                  rotation={ [ 0, 0, 0 ] }
                  polar={ [ - 0.4, 0.2 ] }
                  azimuth={ [ - 0.75, 1] }
                  config={ { mass: 2, tension: 100 } }
                  snap={ { mass: 4, tension: 100 } }
      ><ScrollControls pages={4} damping={0.1}>
      <Scroll html>
        <Interface />
      </Scroll>
      </ScrollControls>
      <Room />
      </PresentationControls>
      </Canvas> 
  )
}
