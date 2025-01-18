import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const WorkExperience = () => {

    const [animationName, setAnimationName] = useState('victory');

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experiences</h3>

        <div className="work-container flex flex-col lg:flex-row gap-10">
          {/* Canvas Section */}
          <div className="work-canvas flex-1">
            <Canvas>
              {/* Placeholder for 3D content */}
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1}/>

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* Work Experience Content */}
          <div className="work-content flex-1">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(({ id, name, pos, duration, icon, title, animation }) => (
                <div
                  key={id}
                  className="work-content_container group rounded-lg shadow-lg p-5 mb-5"
                  onClick={() => {
                    setAnimationName(animation.toLowerCase());
                  }}
                  onPointerOver={() => {
                    setAnimationName(animation.toLowerCase());
                  }}
                  onPointerOut={() => {
                    setAnimationName('idle');
                  }}
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    {/* Company Logo */}
                    <div className="work-content_logo w-16 h-16 mb-4">
                      <img
                        src={icon}
                        alt={`${name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="work-content_bar w-full h-1" />
                  </div>

                  {/* Work Details */}
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{name}</p>
                    <p className="text-sm mb-3 text-gray-400">
                      {pos} ~~ {duration}
                    </p>
                    <p className="group-hover:text-white transition ease-in-out duration-500 text-gray-300">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
