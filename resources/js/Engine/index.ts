import { Engine, Scene, ArcRotateCamera, Vector3, NodeMaterial, Color4, Color3, SceneLoader, PointLight, StandardMaterial, ShadowGenerator, DirectionalLight, PBRMaterial } from "@babylonjs/core"
import { toon, toonImage } from "./Materials/ToonMaterial"
import "@babylonjs/materials"
import "@babylonjs/loaders"
import "@babylonjs/inspector"
export function initScene(canvas) {

    const engine = new Engine(canvas, true)
    const scene = new Scene(engine)
    scene.ambientColor = new Color3(1, 1, 1)
    scene.clearColor = new Color4(0.8, 0.8, 0.8, 1)

    const camera = new ArcRotateCamera('camera', 1.5745, 1.5816, 6.8, new Vector3(0, 3.3, 0), scene)
    
    camera.attachControl(canvas, true)
    camera.fov = 0.7


    // const sun = new DirectionalLight("light", new Vector3(-1, -1.4, 1.5), scene)
    // sun.intensity
    const light = new PointLight("light", new Vector3(-1, -1.4, 1.5), scene)


    light.position = new Vector3(0, 4.7, 0)
    light.intensity = 20


    const shadowGenerator = new ShadowGenerator(1024, light, true);
    shadowGenerator.usePercentageCloserFiltering = true
    shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_HIGH;

    SceneLoader.ImportMesh("", "/models/", "test.glb", scene, function (meshes, particleSystems, skeletons) {

        meshes.forEach((mesh) => {

            if(mesh.name == 'window_glass') {
                mesh.material.alpha = 0.3
                mesh.material.transparencyMode = 2
            }
            shadowGenerator.getShadowMap().renderList.push(mesh);
            mesh.receiveShadows = true
            const material = mesh.material as PBRMaterial
            if(material) material.ambientColor = new Color3(0.5,0.5,0.5)
        })

    });




    engine.runRenderLoop(() => scene.render())
    addEventListener("resize", () => engine.resize())
}



const colors = {
    wall: new Color3(0.93,0.9,1),
    floor: new Color3(1,0.95,0.95),
    table_top: new Color3(1,0.9,0.8),
    table_down: new Color3(1,0.9,0.8),
    mouse: new Color3(0.8,0.8,0.8),
    keyboards: new Color3(0.8,0.8,0.8),
    monitor_black: new Color3(0.1,0.1,0.1),
    monitor: new Color3(0.8,0.8,0.8),
    monitor_str: new Color3(0.8,0.8,0.8),
    luminaire_bottom: new Color3(0.3,0.6,1),
    luminaire_head: new Color3(0.3,0.6,1),
    cup: new Color3(1,0.1,0.1),
    cup_liquid: new Color3(0.1,0.1,0.1),
    main_book: new Color3(0.1,0.1,0.1),
    book_panel: new Color3(1,0.9,0.8),
    book_1: new Color3(0.4,0.7,0.4),
    book_2: new Color3(0.8,0.5,0.3),
    book_3: new Color3(0.5,0.5,1),
    book_4: new Color3(1,0.4,0.4),
    book_5: new Color3(1,0.95,0.95),
    book_6: new Color3(0.2,0.5,0.5),
    book_7: new Color3(1,0.95,0.95),
}