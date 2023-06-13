import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder , Color4} from "@babylonjs/core"
import { Inspector } from '@babylonjs/inspector';

export function initScene(canvas) {

    const engine = new Engine(canvas, true)
    const scene = new Scene(engine)
    scene.clearColor = new Color4(1,0.35,0,1)
    const camera = new ArcRotateCamera('MainCamera', 1, 1, 6, new Vector3(1, 1, 1), scene)
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
    sphere.position.y = 1;
    const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 6 }, scene);
    // Inspector.Show(scene, {})

    engine.runRenderLoop( () => scene.render())
    // Watch for browser/canvas resize events
    window.addEventListener("resize",  () => engine.resize())

}