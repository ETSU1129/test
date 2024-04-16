import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, PresentationControls, Sky, PerformanceMonitor,OrbitControls,Html,PerspectiveCamera } from "@react-three/drei"


import { easing } from "maath"
import { Model as Room } from "./Room"

export default function App() {
  return (
      <Canvas>
      <color attach="background" args={["#121e2b"]} />
      <fog attach="fog" args={["#d0d0d0", 1, 17]} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <PresentationControls
                  global={true}
                  rotation={ [ 0, 0, 0 ] }
                  polar={ [ - 0.4, 0.2 ] }
                  azimuth={ [ - 0.75, 1] }
                  config={ { mass: 2, tension: 100 } }
                  snap={ { mass: 4, tension: 100 } }
      >
      <Html>
        <body>
         <div id="root">pokemonnn</div>
        </body>
      </Html>
      <Room/>
      </PresentationControls>
      </Canvas> 
  )
}