import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight , Color4,Color3, SceneLoader, PointLight } from "@babylonjs/core"
import "@babylonjs/loaders"
import { Inspector } from '@babylonjs/inspector';

export function initScene(canvas) {

    const engine = new Engine(canvas, true)
    const scene = new Scene(engine)
    scene.ambientColor = new Color3(1,1,1)
    scene.clearColor = new Color4(1,0.35,0,1)
    const camera = new ArcRotateCamera('MainCamera', 4, 1.2, 15, new Vector3(1, 1, 1), scene)
    camera.attachControl(canvas, true);
    const hemis = new HemisphericLight("light", new Vector3(0.284, 0.681, -0.675), scene);
    hemis.intensity =  0.6
    const point = new PointLight('point', new Vector3(0.284, 0.681, -0.675), scene)
    point.position.y = 3
    point.intensity = 40
    Inspector.Show(scene, {})
    SceneLoader.ImportMesh("", "/models/", "low.glb", scene, function (meshes, particleSystems, skeletons) {
        // do something with the meshes and skeletons
        meshes.forEach((mesh) => {
            console.log(mesh);
            
        })
        
        // particleSystems are always null for glTF assets
      });
    engine.runRenderLoop( () => scene.render())
    // Watch for browser/canvas resize events
    window.addEventListener("resize",  () => engine.resize())

}