import { Canvas } from '@react-three/fiber'
export default function App() {

    return (
        <>
            <div className='h-full w-full'>
                <Canvas>
                    <Scene />
                </Canvas>
            </div>
        </>
    )
}

function Scene(){
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere />
        </>
    )
}

function Sphere()
{
    return (
        <>
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}
