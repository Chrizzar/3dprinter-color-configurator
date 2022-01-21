function main() {
    const LOADER = document.getElementById('js-loader');

    const TRAY = document.getElementById('js-tray-slide');
    const DRAG_NOTICE = document.getElementById('js-drag-notice');

    var theModel;
    
    const MODEL_PATH = "models/trident/voron_trident_default.glb";
    
    var activeOption = '1_first_color';
    var loaded = false;

    const colors = [
    // --------------------- eSUN ABS --------------------- //
        
    // --- Black to White Colors (4) --- //
    // Black
    {
        color: '26282f',
        shininess: 100 },

    // Grey
    {
        color: '7c8398',
        shininess: 100 },

    // Silver
    {
        color: 'b0acba',
        shininess: 100 },

    // Cold White
    {
        color: 'fbfbfd',
        shininess: 100 },
    
    // --- Neutral colors (3) --- //
    // Brown
    {
        color: '5d402e',
        shininess: 100 },

    // Beige
    {
        color: 'e7b291',
        shininess: 100 },

    // Natural
    {
        color: 'ede9d6',
        shininess: 100 },
    
    // --- Red to Yellow Colors (7) --- //
    // Fire Engine Red
    {
        color: 'e1262e',
        shininess: 100 },

    // Red
    {
        color: 'e72e1e',
        shininess: 100 },

    // Magenta
    {
        color: 'e63d67',
        shininess: 100 },

    // Pink
    {
        color: 'fb7a8c',
        shininess: 100 },

    // Orange
    {
        color: 'fd6b3e',
        shininess: 100 },

    // Gold
    {
        color: 'dfa83c',
        shininess: 150 },

    // Yellow
    {
        color: 'fbcd27',
        shininess: 100 },
    
    // --- Green Colors (3) --- //
    // Green
    {
        color: '0b8d6f',
        shininess: 100 },

    // Pine Green
    {
        color: '367c56',
        shininess: 100 },

    // Peak Green
    {
        color: '6be067',
        shininess: 100 },

    // --- Blue Colors (3) --- //
    // Purple
    {
        color: '5d4088',
        shininess: 100 },

    // Blue
    {
        color: '345495',
        shininess: 100 },

    // Light Blue
    {
        color: '56cff6',
        shininess: 100 },
        
    // --------------------- KVP ABS --------------------- //
        
    // --- Black to White Colors (9) --- //
    // Black
    {
        color: '000109',
        shininess: 100 },
    
    // Galaxy Black
    {
        color: '322f2a',
        shininess: 100 },

    // Dark Gray
    {
        color: '54565a',
        shininess: 100 },

    // Battleship Gray
    {
        color: '62656a',
        shininess: 100 },

    // Industrial Gray
    {
        color: '898c8d',
        shininess: 100 },

    // Metallic Silver
    {
        color: 'b1b1b1',
        shininess: 100 },

    // Metallic Light Gray
    {
        color: 'b1b1b1',
        shininess: 100 },

    // Soft White
    {
        color: 'd9d8d6',
        shininess: 100 },

    // Polar White
    {
        color: 'f5f7f3',
        shininess: 100 },

    // --- Brown colors (3) --- //
    // Dark Brown
    {
        color: '855b2f',
        shininess: 100 },
    
    // Light Brown
    {
        color: '9b6f3f',
        shininess: 100 },

    // Bronze
    {
        color: 'b06532',
        shininess: 100 },

    // --- Purple colors (6) --- //
    // Accent Purple
    {
        color: '943a80',
        shininess: 100 },
    
    // Purple
    {
        color: '8862aa',
        shininess: 100 },

    // Pastel Purple 
    {
        color: 'ac96c6',
        shininess: 100 },

    // Magenta
    {
        color: 'ae3865',
        shininess: 100 },

    // Flourescent Pink 
    {
        color: 'f04b7f',
        shininess: 100 },

    // Hot Jade Pink
    {
        color: 'ef4f97',
        shininess: 100 },

    // --- Red to Yellow Colors (17) --- //
    // Crimson
    {
        color: '822b41',
        shininess: 100 },
    
    // Red
    {
        color: 'c31f32',
        shininess: 100 },

    // Voron Flourescent Red
    {
        color: 'dd1d35',
        shininess: 100 },

    // Coral
    {
        color: 'd15459',
        shininess: 100 },

    // Agate Orange
    {
        color: 'f04a23',
        shininess: 100 },

    // Safety Orange
    {
        color: 'f15322',
        shininess: 100 },
    
    // Orange
    {
        color: 'ee7625',
        shininess: 100 },
    
    // Flourescent Orange 
    {
        color: 'f58320',
        shininess: 100 },

    // Metallic Gold
    {
        color: 'd69928',
        shininess: 100 },

    // Golden Rod 
    {
        color: 'eaaa20',
        shininess: 100 },

    // Neon Orange
    {
        color: 'f8a05b',
        shininess: 100 },

    // Tan
    {
        color: 'e8b889',
        shininess: 100 },
    
    // Natural
    {
        color: 'f1e5b1',
        shininess: 100 },
    
    // Yellow (601.1, 459C)
    {
        color: 'ddcb62',
        shininess: 100 },

    // Yellow (616, 101C)
    {
        color: 'f3ea49',
        shininess: 100 },

    // Pastel Yellow
    {
        color: 'edec74',
        shininess: 100 },

    // Pale Yellow
    {
        color: 'eae599',
        shininess: 100 },

    // --- Green Colors (12) --- //
    // Olive Green 
    {
        color: '274633',
        shininess: 100 },
    
    // British Racing Green 
    {
        color: '0a4b45',
        shininess: 100 },

    // Forest Green
    {
        color: '034d43',
        shininess: 100 },

    // Forest Green
    {
        color: '006d47',
        shininess: 100 },

    // Grass Green
    {
        color: '23b24b',
        shininess: 100 },

    // Green (541.7, 7737C) 
    {
        color: '69a442',
        shininess: 100 },
    
    // Flourescent Green 
    {
        color: '57ba47',
        shininess: 100 },
    
    // Neon Green
    {
        color: '5bdd45',
        shininess: 100 },

    // Glow in the Dark Green
    {
        color: '6fc492',
        shininess: 100 },

    // Lulzbot Green
    {
        color: 'bfd430',
        shininess: 100 },

    // Flourescent yellow
    {
        color: 'cadb2a',
        shininess: 100 },

    // Glow in the Dark
    {
        color: 'cfdebc',
        shininess: 100 },

    // --- Blue Colors (7) --- //
    // Flourescent Blue
    {
        color: '0a3f8b',
        shininess: 100 },
    
    // Navy Blue 
    {
        color: '044d7c',
        shininess: 100 },

    // Navy Blue 
    {
        color: '00687f',
        shininess: 100 },

    // Blue
    {
        color: '0770ba',
        shininess: 100 },

    // Glow in the Blue
    {
        color: '408ac9',
        shininess: 100 },

    // Sea Blue
    {
        color: '38b3e4',
        shininess: 100 },

    // Teal
    {
        color: '00a2ae',
        shininess: 100 },
    ];

    // Init the scene and the renderer
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    
    var cameraFar = 2;
    const fov = 50;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    // Add a camerra (50 is the initial distance from the object)
    // var camera
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = cameraFar;
    camera.position.x = 0;
    
    // Init the scene
    const scene = new THREE.Scene();
    
    // Set background
    const BACKGROUND_COLOR = 0xf1f1f1;
    scene.background = new THREE.Color(BACKGROUND_COLOR);
    scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
    
    // Initial material
    const INITIAL_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xf1f1f1, 
        shininess: 10,
    });
    
    
    // Part materials
    const BED_TOP_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xff9900, 
        shininess: 150,
    });

    const FRAME_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x222324, 
        shininess: 150,
    });
    
    const PTFE_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xFCFBF8,
        shininess: 150,
        opacity: 0.9,
        transparent: true,
    });
    
    const BELTS_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xAD6342, 
        shininess: 50,
    });
    

    // Color materials
    const SILVER_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0, 
        shininess: 100,
    });
    
    const DARKSILVER_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xB8B8B8, 
        shininess: 100,
    });

    const GOLD_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xD4AF37, 
        shininess: 100,
    });

    const LIGHT_BLACK_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x585858, 
        shininess: 150,
    });

    const BLACK_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x222324, 
        shininess: 150,
    });

    const RED_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xF72F35, 
        shininess: 150,
    });
    
    const GREEN_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x24a25f, 
        shininess: 150,
    });

    const PEARLWHITE_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xF8F6F0, 
        shininess: 150,
    });


    const INITIAL_MAP = [
    { childID: "1_first_color", mtl: INITIAL_MTL },
    { childID: "2_second_color", mtl: INITIAL_MTL },
    { childID: "3_chains", mtl: INITIAL_MTL },
    { childID: "4_frame", mtl: FRAME_MTL },    
    { childID: "bed_bottom", mtl: SILVER_MTL },
    { childID: "bed_top", mtl: BED_TOP_MTL },
    { childID: "black", mtl: BLACK_MTL },
    { childID: "fans", mtl: BLACK_MTL },
    { childID: "feet", mtl: BLACK_MTL },
    { childID: "foam_and_vhb", mtl: BLACK_MTL },
    { childID: "gold", mtl: GOLD_MTL },
    { childID: "green", mtl: GREEN_MTL },
    { childID: "hotend", mtl: SILVER_MTL },
    { childID: "motors", mtl: BLACK_MTL },
    { childID: "nozzle", mtl: GOLD_MTL },
    { childID: "panels", mtl: LIGHT_BLACK_MTL },
    { childID: "ptfe", mtl: PTFE_MTL },
    { childID: "rails", mtl: SILVER_MTL },
    { childID: "red", mtl: RED_MTL },
    { childID: "rubber_belts", mtl: BELTS_MTL },
    { childID: "screws", mtl: LIGHT_BLACK_MTL },
    { childID: "silver", mtl: SILVER_MTL },
    { childID: "spring_assembly", mtl: SILVER_MTL },
    ];
    
    // Init the object loader
    var loader = new THREE.GLTFLoader();

    loader.load(MODEL_PATH, function (gltf) {
        theModel = gltf.scene;

        theModel.traverse(o => {
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
            }
        });

        // Set the models initial scale   
        theModel.scale.set(2, 2, 2);

        // Offset the y position a bit (change model spawn height)
        theModel.position.y = -1;

        // Set initial textures
        for (let object of INITIAL_MAP) {
            initColor(theModel, object.childID, object.mtl);
        }

        // Add the model to the scene
        scene.add(theModel);

        // Remove the loader
        LOADER.remove();

    }, undefined, function (error) {
        console.error(error);
    });

    // Function - Add the textures to the models
    function initColor(parent, type, mtl) {
        parent.traverse(o => {
            if (o.isMesh) {
                if (o.name.includes(type)) {
                    o.material = mtl;
                    o.nameID = type; // Set a new property to identify this object
                }
            }
        });
    }

    // Add lights
    var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
    hemiLight.position.set(0, 50, 0);
    // Add hemisphere light to scene   
    scene.add(hemiLight);

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
    dirLight.position.set(-8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    // Add directional Light to scene    
    scene.add(dirLight);

    // Floor
    var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
    var floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        shininess: 0 
    });

    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -0.5 * Math.PI;
    floor.receiveShadow = false;
    floor.position.y = -1; // Floor position
    scene.add(floor);
    
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    /*controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 3;*/
    controls.enableDamping = true;
    controls.enablePan = true;       // Right click-hold for control
    controls.dampingFactor = 0.1;
    controls.autoRotate = false;     // Toggle this if you'd like the chair to automatically rotate
    controls.autoRotateSpeed = 0.2;  // 30
    controls.target.set(0, -0.425, 0); // Model offset (focus at height)

    function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        if (theModel != null && loaded == false) {
            initialRotation();
            DRAG_NOTICE.classList.add('start');
        }
    }
    animate();
    
    // Resizing method - Handling HD-DPI displays
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width  = canvas.clientWidth  * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    
    // Render and remove flickering
    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    
    // Function - Build Colors
    function buildColors(colors) {
        for (let [i, color] of colors.entries()) {
            let swatch = document.createElement('div');
            swatch.classList.add('tray__swatch');

            if (color.texture)
            {
                swatch.style.backgroundImage = "url(" + color.texture + ")";
            } else
            {
                swatch.style.background = "#" + color.color;
            }
            swatch.setAttribute('data-key', i);
            TRAY.append(swatch);
        }
    }
    buildColors(colors);
    
    // Select Option
    const options = document.querySelectorAll(".optionTrident");

    for (const option of options) {
        option.addEventListener('click', selectOption);
    }

    function selectOption(e) {
        let option = e.target;
        activeOption = e.target.dataset.option;
        for (const otherOption of options) {
            otherOption.classList.remove('--is-active');
        }
        option.classList.add('--is-active');
    }

    // Swatches
    const swatches = document.querySelectorAll(".tray__swatch");

    for (const swatch of swatches) {
        swatch.addEventListener('click', selectSwatch);
    }

    function selectSwatch(e) {
        let color = colors[parseInt(e.target.dataset.key)];
        let new_mtl;

        if (color.texture) {
            let txt = new THREE.TextureLoader().load(color.texture);

            txt.repeat.set(color.size[0], color.size[1], color.size[2]);
            txt.wrapS = THREE.RepeatWrapping;
            txt.wrapT = THREE.RepeatWrapping;

            new_mtl = new THREE.MeshPhongMaterial({
                map: txt,
                shininess: color.shininess ? color.shininess : 100 // default 10
            });
        } else {
            new_mtl = new THREE.MeshPhongMaterial({
                color: parseInt('0x' + color.color),
                shininess: color.shininess ? color.shininess : 100 // default 10
            });
        }

        setMaterial(theModel, activeOption, new_mtl);
    }

    function setMaterial(parent, type, mtl) {
        parent.traverse(o => {
            if (o.isMesh && o.nameID != null) {
                if (o.nameID == type) {
                    o.material = mtl;
                }
            }
        });
    }

    // Function - Opening rotate
    let initRotate = 0;

    function initialRotation() {
        initRotate++;
        if (initRotate <= 120) {
            theModel.rotation.y += Math.PI / 60;
        } else {
            loaded = true;
        }
    }

    var slider = document.getElementById('js-tray'),sliderItems = document.getElementById('js-tray-slide'),difference;

    function slide(wrapper, items) {
        var posX1 = 0,
        posX2 = 0,
        posInitial,
        threshold = 20,
        posFinal,
        slides = items.getElementsByClassName('tray__swatch');

        // Mouse events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);


        function dragStart(e) {
            e = e || window.event;
            posInitial = items.offsetLeft;
            difference = sliderItems.offsetWidth - slider.offsetWidth;
            difference = difference * -1;

            if (e.type == 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }

        function dragAction(e) {
            e = e || window.event;

            if (e.type == 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }

            if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
                items.style.left = items.offsetLeft - posX2 + "px";
            }
        }

        function dragEnd(e) {
            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {

            } else if (posFinal - posInitial > threshold) {

            } else {
                items.style.left = posInitial + "px";
            }

            document.onmouseup = null;
            document.onmousemove = null;
        }                           
    }
    slide(slider, sliderItems);
}

main();