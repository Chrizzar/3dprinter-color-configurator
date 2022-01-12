function main() {
    const LOADER = document.getElementById('js-loader');

    const TRAY = document.getElementById('js-tray-slide');
    const DRAG_NOTICE = document.getElementById('js-drag-notice');

    var theModel;
    
    const MODEL_PATH = "models/Voron_2-4_Default_with_screws.glb";
    //const MODEL_PATH = "models/Voron_2-4_Default.glb";
    
    var activeOption = 'first_color';
    var loaded = false;

    const colors = [
    // Black
    {
      color: '26282f' },
        
    // White
    {
      color: 'fbfbfd' },

    // Red
    {
      color: 'e72e1e' },

    // Green
    {
      color: '0b8d6f' },

    // Blue
    {
      color: '345495' },

    // Purple
    {
      color: '5d4088' },
        
    // Orange
    {
      color: 'fd6b3e' },
        
    // Yellow
    {
      color: 'fbcd27' },
        
    // Light Green
    {
      color: '6be067' },
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
    
    // Initial materials
    const INITIAL_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xf1f1f1, 
        shininess: 10 
    });

    const BED_TOP_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xff9900, 
        shininess: 150
    });

    const FRAME_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x222324, 
        shininess: 150
    });

    const SILVER_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xd8d8d8, 
        shininess: 100
    });

    const GOLD_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xD4AF37, 
        shininess: 100
    });

    const LIGHT_BLACK_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x585858, 
        shininess: 150
    });

    const BLACK_MTL = new THREE.MeshPhongMaterial({ 
        color: 0x222324, 
        shininess: 150
    });

    const RED_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xF72F35, 
        shininess: 150
    });

    const WHITE_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xFCFBF8, 
        shininess: 150
    });

    const BELTS_MTL = new THREE.MeshPhongMaterial({ 
        color: 0xAD6342, 
        shininess: 50
    });


    const INITIAL_MAP = [
    { childID: "first_color", mtl: INITIAL_MTL },
    { childID: "second_color", mtl: INITIAL_MTL },
    { childID: "belts", mtl: INITIAL_MTL },   // ADDED
    { childID: "panels", mtl: LIGHT_BLACK_MTL },
    { childID: "frame", mtl: FRAME_MTL },
    { childID: "fans", mtl: BLACK_MTL },
    { childID: "feet", mtl: BLACK_MTL },
    { childID: "motors", mtl: BLACK_MTL },
    { childID: "hotend", mtl: SILVER_MTL },
    { childID: "nozzle", mtl: GOLD_MTL },
    { childID: "rails", mtl: SILVER_MTL },
    { childID: "rubber_belts", mtl: BELTS_MTL },
    { childID: "bowden", mtl: WHITE_MTL },
    { childID: "bed_top", mtl: BED_TOP_MTL },
    { childID: "bed_bottom", mtl: SILVER_MTL },
    { childID: "silver", mtl: SILVER_MTL },
    { childID: "black", mtl: BLACK_MTL },
    { childID: "red", mtl: RED_MTL },
    { childID: "gold", mtl: GOLD_MTL },
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
    controls.enablePan = false;       // Right click-hold for control
    controls.dampingFactor = 0.1;
    controls.autoRotate = false;     // Toggle this if you'd like the chair to automatically rotate
    controls.autoRotateSpeed = 0.2;  // 30
    controls.target.set(0, -0.5, 0); // Model offset (focus at height)

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
    const options = document.querySelectorAll(".optionV2");

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