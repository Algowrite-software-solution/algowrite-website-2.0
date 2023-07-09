import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJSContainer = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, boxMesh;

    const container = containerRef.current;

    // Create a scene
    scene = new THREE.Scene();

    // Create a camera
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create a box geometry
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);
    // boxMesh.rotation.z = 20;
    // boxMesh.rotation.x = 20;

    const pointLight = new THREE.PointLight(0xffffff);
    const ambiantLight = new THREE.AmbientLight(0xffffff);
    pointLight.position.set(15, 5, 5);
    scene.add(pointLight, ambiantLight);

    // Create orbit controls
    let controls = new OrbitControls(camera, renderer.domElement);

    // Load the glTF model
    const loader = new GLTFLoader();
    loader.load(
      "../assets/data/coockie.gltf",
      (gltf) => {
        // // Assign textures and materials to the model
        // gltf.scene.traverse((child) => {
        //   if (child.isMesh) {
        //     // Create Three.js materials based on Blender materials
        //     const materials = createMaterialsFromBlender(child.material);

        //     // Assign the materials to the mesh
        //     child.material = materials;

        //     // Apply any transformations, scaling, or positioning if necessary
        //     child.scale.set(1, 1, 1);
        //   }
        // });

        // Add the model to the scene
        scene.add(gltf.scene);
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened : \n" + error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the camera aspect ratio and renderer size on window resize
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (container.clientWidth !== camera.aspect * container.clientHeight) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }

      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const createMaterialsFromBlender = (blenderMaterial) => {
    // Create Three.js materials and map Blender material properties to Three.js properties
    const materials = [];

    // Example: Create a basic material with color
    const material = new THREE.MeshBasicMaterial({
      color: blenderMaterial.color,
    });

    materials.push(material);

    return materials;
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "700px", overflow: "hidden" }}
    >
      <div className="absolute w-[100%] bg-red-500 h-[500px] -z-10"></div>
      <div className="z-50">
        <div ref={canvasRef} />
      </div>
    </div>
  );
};

export default ThreeJSContainer;
