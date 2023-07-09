import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import MainTopic from "../components/MainTopic.js";

export default function OurTeam() {
  const sceneMount = useRef(null);

  useEffect(() => {
    // scene
    let scene = new THREE.Scene();

    // camera
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // renderer
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sceneMount.current.innerHeight, 700);
    sceneMount.current.appendChild(renderer.domElement);

    // Create a box
    const boxGeometry = new THREE.BoxGeometry(3, 5, 6);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x000f00 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    boxMesh.position.z = 100;

    // Create orbit controls
    let controls = new OrbitControls(camera, renderer.domElement);

    // Render function
    const render = () => {
      renderer.render(scene, camera);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      render();
    };

    // Start the animation loop
    animate();

    return () => {
      sceneMount.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="flex justify-center">
      <div className="container">
        <MainTopic
          text="OUR TEAM"
          className="text-secondary"
          subTopic="something abour the team"
          subTopicClassName="text-secondary"
        />

        <div className="" ref={sceneMount}>
        </div>
      </div>
    </section>
  );
}
