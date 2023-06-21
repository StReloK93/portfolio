import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, NodeMaterial, Color4, Color3, SceneLoader, PointLight, StandardMaterial, ShadowGenerator, DirectionalLight } from "@babylonjs/core"
import { toon, toonImage } from "./Materials/ToonMaterial"
import "@babylonjs/materials"
import "@babylonjs/loaders"
import "@babylonjs/inspector"
export function initScene(canvas) {

    const engine = new Engine(canvas, true)
    const scene = new Scene(engine)
    scene.ambientColor = new Color3(1, 1, 1)
    scene.clearColor = new Color4(1, 0.35, 0, 1)
    const camera = new ArcRotateCamera('MainCamera', -0.1, 1.2, 20, new Vector3(3, 0, -3), scene)
    camera.attachControl(canvas, true);
    const sun = new DirectionalLight("light", new Vector3(0.124, -0.831, 0.542), scene)
    sun.position = new Vector3(1.036, 32.993, -32.244)
    sun.diffuse = new Color3(1, 0.99, 0.87)
    sun.intensity = 100
    const shadowGenerator = new ShadowGenerator(512, sun, true);
    shadowGenerator.getShadowMap().renderList.push(scene.getMeshByName("Sphere.001"))
    shadowGenerator.setDarkness(0);
    shadowGenerator.filter = ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP
    sun.shadowMinZ = -10
    sun.shadowMaxZ = 55
    // shadowGenerator.contactHardeningLightSizeUVRatio = 0.4
    shadowGenerator.useKernelBlur = true
    shadowGenerator.blurKernel = 64
    shadowGenerator.depthScale = 100
    shadowGenerator.normalBias = 0.1
    shadowGenerator.blurScale = 1
    shadowGenerator.bias = 0.01


    // scene.debugLayer.show()
    SceneLoader.ImportMesh("", "/models/", "test.glb", scene, function (meshes, particleSystems, skeletons) {

        // do something with the meshes and skeletons
        meshes.forEach((mesh) => {
            NodeMaterial.ParseFromSnippetAsync("#N1W93B#45", scene).then((node) => {
                mesh.material = node
                shadowGenerator.getShadowMap().renderList.push(mesh);
                mesh.receiveShadows = true;
            });


            // if(mesh.name == 'keyboards'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.7, 0.7, 0.7),
            //         ambient: new Color3(0.3, 0.3, 0.3),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(0.4, 0.4, 0.4),
            //     })
            // }
            // else if(mesh.name == 'keyboard'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.6, 0.6, 0.6),
            //         ambient: new Color3(0.35, 0.35, 0.35),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'mouse'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.65, 0.65, 0.65),
            //         ambient: new Color3(0.3, 0.3, 0.3),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'monitor_black'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.05, 0.05, 0.05),
            //         ambient: new Color3(0.35, 0.35, 0.35),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'monitor'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.7, 0.7, 0.7),
            //         ambient: new Color3(0.35, 0.35, 0.35),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'monitor-str'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.6, 0.6, 0.6),
            //         ambient: new Color3(0.35, 0.35, 0.35),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'table_top' || mesh.name == 'table_down'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.8, 0.6, 0.3),
            //         ambient: new Color3(0.5, 0.5, 0.5),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(1, 1, 1),
            //     })
            // }
            // else if(mesh.name == 'wall'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.7, 0.5, 0.4),
            //         ambient: new Color3(0.4, 0.4, 0.4),
            //         // rimLight: new Color3(0.6, 0.4, 0.3),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(0, 0, 0),
            //     })
            // }
            // else if(mesh.name == 'floor'){
            //     mesh.material = toon({
            //         diffuse: new Color3(0.6, 0.6, 0.6),
            //         ambient: new Color3(0.3, 0.3, 0.3),
            //         rimLight: new Color3(0.025, 0.025, 0.025),
            //         specular: new Color3(0.025, 0.025, 0.025),
            //     })
            // }


            // else mesh.material = toon({
            //     diffuse: new Color3(Math.random(), Math.random(), Math.random()),
            //     ambient: new Color3(0.35, 0.35, 0.35),
            //     rimLight: new Color3(0.025, 0.025, 0.025),
            //     specular: new Color3(1, 1, 1),
            // })

        })

        // particleSystems are always null for glTF assets
    });
    engine.runRenderLoop(() => scene.render())
    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => engine.resize())

}