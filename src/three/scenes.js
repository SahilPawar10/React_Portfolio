import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const INK = 0x0a0d12;
const AMBER = 0xffb938;
const TEAL = 0x4fd6c2;
const CORAL = 0xff7a59;
const STEEL = 0x7d8a9c;
const PAPER = 0xdde4ec;

const dummy = new THREE.Object3D();

function fibonacciSphere(count, radius) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - ((i + 0.5) / count) * 2;
    const r = Math.sqrt(1 - y * y);
    return new THREE.Vector3(Math.cos(golden * i) * r, y, Math.sin(golden * i) * r).multiplyScalar(radius);
  });
}

function textSprite(text, color, height) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const font = '500 44px "IBM Plex Mono", monospace';
  ctx.font = font;
  canvas.width = Math.ceil(ctx.measureText(text).width) + 24;
  canvas.height = 64;
  ctx.font = font; // resizing a canvas resets its context
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";
  ctx.fillText(text, 12, 34);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map, color, transparent: true, depthWrite: false })
  );
  sprite.userData.ratio = canvas.width / canvas.height;
  sprite.scale.set(sprite.userData.ratio * height, height, 1);
  return sprite;
}

// Built facing -z with its wheels on y = 0.
function motorcycle() {
  const model = new THREE.Group();
  const add = (geometry, color, y, z, rotation = [0, 0]) => {
    const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color, roughness: 0.4 }));
    mesh.position.set(0, y, z);
    mesh.rotation.set(rotation[0], rotation[1], 0);
    model.add(mesh);
  };
  const wheel = () => new THREE.TorusGeometry(0.1, 0.02, 8, 24);
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  const ball = (r) => new THREE.SphereGeometry(r, 12, 10);

  add(wheel(), STEEL, 0.132, -0.25, [0, Math.PI / 2]);
  add(wheel(), STEEL, 0.132, 0.25, [0, Math.PI / 2]);
  add(box(0.07, 0.09, 0.36), AMBER, 0.22, 0);
  add(box(0.12, 0.1, 0.16), AMBER, 0.3, -0.06);
  add(box(0.1, 0.04, 0.18), 0x1a212c, 0.3, 0.12);
  add(box(0.03, 0.26, 0.03), STEEL, 0.255, -0.205, [0.33, 0]);
  add(box(0.26, 0.025, 0.025), PAPER, 0.38, -0.16);
  add(ball(0.04), 0xfff1c4, 0.33, -0.23);
  add(box(0.07, 0.04, 0.02), CORAL, 0.27, 0.2);
  add(box(0.13, 0.2, 0.1), TEAL, 0.44, 0.04, [-0.35, 0]);
  add(ball(0.07), PAPER, 0.58, -0.01);

  return model;
}

// A graph of services with packets walking its edges, and a motorcycle riding over it.
function hero({ scene, camera, pointer, on, input }) {
  scene.fog = new THREE.Fog(INK, 8.5, 14);
  camera.position.z = 10.5;
  const group = new THREE.Group();
  scene.add(group);

  const nodes = fibonacciSphere(150, 3);
  const links = nodes.map((a, i) =>
    nodes
      .map((b, j) => [a.distanceToSquared(b), j])
      .filter(([, j]) => j !== i)
      .sort((x, y) => x[0] - y[0])
      .slice(0, 4)
      .map(([, j]) => j)
  );

  const edges = links.flatMap((list, i) => list.flatMap((j) => [nodes[i], nodes[j]]));
  group.add(
    new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(edges),
      new THREE.LineBasicMaterial({ color: TEAL, transparent: true, opacity: 0.24 })
    )
  );

  const nodeMesh = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(0.035, 1),
    new THREE.MeshBasicMaterial({ color: PAPER }),
    nodes.length
  );
  nodes.forEach((p, i) => {
    dummy.position.copy(p);
    dummy.scale.setScalar(i % 9 === 0 ? 2.4 : 1);
    dummy.updateMatrix();
    nodeMesh.setMatrixAt(i, dummy.matrix);
  });
  group.add(nodeMesh);

  const packets = Array.from({ length: 80 }, () => {
    const from = Math.floor(Math.random() * nodes.length);
    return { from, to: links[from][0], at: Math.random(), speed: 0.5 + Math.random() * 0.9 };
  });
  const packetMesh = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(0.05, 1),
    new THREE.MeshBasicMaterial({ color: AMBER }),
    packets.length
  );
  packetMesh.frustumCulled = false;
  group.add(packetMesh);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x223044, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 2);
  sun.position.set(-2, 4, 8);
  scene.add(sun);

  const rig = new THREE.Group();
  const model = motorcycle();
  rig.add(model);
  group.add(rig);

  const at = new THREE.Vector3(-0.2, 0.3, 1).normalize();
  const heading = new THREE.Vector3(1, 0, 0.2).normalize();
  const front = new THREE.Vector3();
  const toward = new THREE.Vector3();
  const axis = new THREE.Vector3();
  const side = new THREE.Vector3();
  const back = new THREE.Vector3();
  const spot = new THREE.Vector3();
  const basis = new THREE.Matrix4();
  const inverse = new THREE.Quaternion();

  const TRAIL = 80;
  const trailPositions = new Float32Array(TRAIL * 3);
  const trailColors = new Float32Array(TRAIL * 3);
  const shade = new THREE.Color();
  const ink = new THREE.Color(INK);
  spot.copy(at).multiplyScalar(3.03);
  for (let i = 0; i < TRAIL; i++) {
    spot.toArray(trailPositions, i * 3);
    shade.set(AMBER).lerp(ink, i / (TRAIL - 1)).toArray(trailColors, i * 3);
  }
  const trailGeometry = new THREE.BufferGeometry();
  trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
  trailGeometry.setAttribute("color", new THREE.BufferAttribute(trailColors, 3));
  const trail = new THREE.Line(trailGeometry, new THREE.LineBasicMaterial({ vertexColors: true }));
  trail.frustumCulled = false;
  group.add(trail);

  const { held } = input; // the on-screen steering buttons write here too
  on(window, "keydown", (e) => {
    if (e.key in held) held[e.key] = 1;
  });
  on(window, "keyup", (e) => {
    if (e.key in held) held[e.key] = 0;
  });

  let turn = 0;
  let sinceTrail = 0;
  let last = 0;
  let ridingZ = 10.5;

  input.onReady();

  const ride = (t, dt) => {
    camera.position.z += ((input.riding ? ridingZ : 10.5) - camera.position.z) * Math.min(1, dt * 4);
    scene.fog.near = camera.position.z - 2;
    scene.fog.far = camera.position.z + 3.5;
    model.scale.setScalar((0.75 * camera.position.z) / 10.5); // same size on screen at any zoom

    inverse.copy(group.quaternion).invert();
    front.copy(camera.position).sub(group.position).applyQuaternion(inverse).normalize();

    const steering = held.ArrowLeft - held.ArrowRight;
    let goal;
    if (steering && at.dot(front) > 0.55) {
      goal = steering * 1.9;
    } else if (steering || at.dot(front) < 0.7) {
      // Drifting out of sight: curve back toward the side facing the camera.
      toward.copy(front).addScaledVector(at, -at.dot(front)).normalize();
      axis.crossVectors(heading, toward);
      goal = THREE.MathUtils.clamp(Math.atan2(at.dot(axis), heading.dot(toward)) * 3, -2.4, 2.4);
    } else {
      goal = input.riding ? 0 : Math.sin(t * 0.7) * 0.5 + Math.sin(t * 0.31) * 0.4;
    }
    turn += (goal - turn) * Math.min(1, dt * 5);

    heading.applyAxisAngle(at, turn * dt);
    axis.crossVectors(at, heading).normalize();
    at.applyAxisAngle(axis, 0.26 * dt).normalize();
    heading.applyAxisAngle(axis, 0.26 * dt);
    heading.addScaledVector(at, -heading.dot(at)).normalize();

    rig.position.copy(at).multiplyScalar(3.01);
    side.crossVectors(heading, at);
    back.copy(heading).negate();
    rig.quaternion.setFromRotationMatrix(basis.makeBasis(side, at, back));
    model.rotation.z = turn * 0.3;

    sinceTrail += dt;
    if (sinceTrail > 0.05) {
      sinceTrail = 0;
      trailPositions.copyWithin(3, 0, (TRAIL - 1) * 3);
    }
    spot.copy(at).multiplyScalar(3.03).toArray(trailPositions, 0);
    trailGeometry.attributes.position.needsUpdate = true;
  };

  return {
    resize(aspect) {
      group.position.x = aspect > 1.15 ? Math.min(3.4, aspect * 1.6) : 0;
      ridingZ = Math.max(10.5, 3.2 / (0.364 * aspect)); // far enough to fit the globe's width
    },
    update(t) {
      const dt = Math.min(t - last, 0.05);
      last = t;
      group.rotation.y = t * 0.06 + pointer.x * 0.25;
      group.rotation.x = pointer.y * 0.15 + window.scrollY * 0.0005;
      ride(t, dt);
      dummy.scale.setScalar(1); // dummy is shared with the other scenes
      packets.forEach((p, i) => {
        p.at += dt * p.speed;
        if (p.at >= 1) {
          p.at = 0;
          p.from = p.to;
          const next = links[p.from];
          p.to = next[Math.floor(Math.random() * next.length)];
        }
        dummy.position.lerpVectors(nodes[p.from], nodes[p.to], p.at);
        dummy.updateMatrix();
        packetMesh.setMatrixAt(i, dummy.matrix);
      });
      packetMesh.instanceMatrix.needsUpdate = true;
    },
  };
}

// Records flow queue -> worker -> database; every sixth one fails at the
// worker, loops back to the queue, and goes through again.
function pipeline({ scene, camera }) {
  const START = -10;
  const END = 10;
  const QUEUE = -5;
  const WORKER = 0;
  const STORE = 5;
  const ARC = 7; // length of the retry detour, in path units

  scene.add(new THREE.HemisphereLight(0xffffff, 0x223044, 2.2));
  const sun = new THREE.DirectionalLight(0xffffff, 2);
  sun.position.set(2, 6, 5);
  scene.add(sun);

  const grid = new THREE.GridHelper(28, 28, 0x2a3442, 0x1a212c);
  grid.position.y = -1.9;
  scene.add(grid);

  const labels = [];
  const addLabel = (text, color, x, y) => {
    const sprite = textSprite(text, color, 0.3);
    sprite.position.set(x, y, 0);
    scene.add(sprite);
    labels.push(sprite);
  };
  [
    [QUEUE, STEEL, "RABBITMQ"],
    [WORKER, TEAL, "TEMPORAL"],
    [STORE, AMBER, "MYSQL"],
  ].forEach(([x, color, text]) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.15, 0.02, 8, 72),
      new THREE.MeshBasicMaterial({ color })
    );
    ring.rotation.y = Math.atan2(8.2, x) - 0.55; // same open oval from the camera at every x
    ring.position.x = x;
    scene.add(ring);
    addLabel(text, color, x, -1.55);
  });
  addLabel("RETRY", CORAL, (QUEUE + WORKER) / 2, 1.3);

  const boxes = Array.from({ length: 60 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * 0.75;
    return {
      retry: i % 6 === 0,
      at: Math.random(),
      y: Math.sin(angle) * radius,
      z: Math.cos(angle) * radius,
    };
  });
  const mesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.26, 0.26, 0.26),
    new THREE.MeshStandardMaterial({ roughness: 0.45 }),
    boxes.length
  );
  mesh.frustumCulled = false;
  mesh.setColorAt(0, new THREE.Color(STEEL));
  scene.add(mesh);

  const steel = new THREE.Color(STEEL);
  const teal = new THREE.Color(TEAL);
  const coral = new THREE.Color(CORAL);
  const amber = new THREE.Color(AMBER);
  const toWorker = WORKER - START;

  return {
    resize(aspect) {
      camera.position.set(0, 1.3, Math.max(8.2, 20 / aspect));
      camera.lookAt(0, 0.45, 0);
      labels.forEach((s) => {
        const height = aspect < 2 ? 0.46 : 0.3;
        s.scale.set(s.userData.ratio * height, height, 1);
      });
    },
    update(t) {
      boxes.forEach((b, i) => {
        const length = END - START + (b.retry ? ARC + (WORKER - QUEUE) : 0);
        const s = (t * 1.15 + b.at * length) % length;
        let x;
        let y = b.y;
        let color;
        if (b.retry && s > toWorker && s < toWorker + ARC) {
          const a = (s - toWorker) / ARC;
          x = WORKER + (QUEUE - WORKER) * a;
          y += Math.sin(a * Math.PI) * 2.3;
          color = coral;
        } else {
          x = b.retry && s >= toWorker + ARC ? QUEUE + s - toWorker - ARC : START + s;
          color = x > STORE ? amber : x > WORKER ? teal : steel;
        }
        dummy.position.set(x, y, b.z);
        dummy.rotation.set(t * 0.4 + i, t * 0.3 + i * 2, 0);
        dummy.scale.setScalar(Math.max(0.001, Math.min(1, (x - START) / 1.5, (END - x) / 1.5)));
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, color);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
    },
  };
}

// Skill names on a draggable sphere; hovering a group in the list lights it up.
function skills({ scene, camera, host, on, pointer, input }) {
  const RADIUS = 2.7;
  camera.position.z = 11.5;
  const group = new THREE.Group();
  scene.add(group);

  const tags = input.groups.flatMap((g, index) =>
    g.items.slice(0, 5).map((text) => ({ text, index }))
  );
  const spots = fibonacciSphere(tags.length, RADIUS);
  const sprites = tags.map(({ text, index }, i) => {
    const sprite = textSprite(text, PAPER, 0.36);
    sprite.position.copy(spots[i]);
    sprite.userData.index = index;
    group.add(sprite);
    return sprite;
  });

  let yaw = 0;
  let spin = 0;
  let dragX = null;
  let last = 0;
  on(host, "pointerdown", (e) => {
    dragX = e.clientX;
    host.setPointerCapture(e.pointerId);
  });
  on(host, "pointermove", (e) => {
    if (dragX === null) return;
    spin = (e.clientX - dragX) * 0.008;
    yaw += spin;
    dragX = e.clientX;
  });
  const release = () => {
    dragX = null;
  };
  on(host, "pointerup", release);
  on(host, "pointercancel", release);

  const paper = new THREE.Color(PAPER);
  const amber = new THREE.Color(AMBER);
  const world = new THREE.Vector3();

  return {
    update(t) {
      const dt = Math.min(t - last, 0.05);
      last = t;
      if (dragX === null) {
        spin *= 0.94;
        yaw += spin + dt * 0.22;
      }
      group.rotation.y = yaw;
      group.rotation.x = 0.2 + pointer.y * 0.12;
      group.updateMatrixWorld();
      sprites.forEach((sprite) => {
        sprite.getWorldPosition(world);
        const depth = (world.z + RADIUS) / (2 * RADIUS);
        const lit = input.active === sprite.userData.index;
        const dim = input.active !== null && !lit;
        const goal = (0.08 + 0.92 * depth * depth) * (dim ? 0.3 : 1);
        sprite.material.opacity += (goal - sprite.material.opacity) * 0.15;
        sprite.material.color.lerp(lit ? amber : paper, 0.15);
      });
    },
  };
}

// A gold star, after the one on the trophy.
function award({ scene, camera, renderer, pointer }) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  room.dispose();
  pmrem.dispose();
  camera.position.z = 7.5;

  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.72 : 1.7;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    shape[i ? "lineTo" : "moveTo"](Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.14,
    bevelSize: 0.1,
    bevelSegments: 5,
  });
  geometry.center();
  const gold = new THREE.MeshStandardMaterial({ color: AMBER, metalness: 1, roughness: 0.24 });
  const star = new THREE.Mesh(geometry, gold);
  scene.add(star);

  const rings = [2.25, 2.55].map((radius, i) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.018, 12, 120), gold);
    ring.rotation.x = 1.2 + i * 0.5;
    scene.add(ring);
    return ring;
  });

  return {
    update(t) {
      star.rotation.y = Math.sin(t * 0.7) * 0.75 + pointer.x * 0.35; // sways, so its face stays visible
      star.rotation.x = Math.sin(t * 0.6) * 0.12 + pointer.y * 0.2;
      rings[0].rotation.z = t * 0.5;
      rings[1].rotation.y = t * 0.35;
    },
  };
}

const scenes = { hero, pipeline, skills, award };

export function mount(host, name, input) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return () => {}; // no WebGL: the scene is decoration, the page still works
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  const pointer = { x: 0, y: 0 };
  const cleanups = [];
  const on = (target, type, fn) => {
    target.addEventListener(type, fn);
    cleanups.push(() => target.removeEventListener(type, fn));
  };

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);

  const { update, resize } = scenes[name]({ scene, camera, renderer, pointer, host, on, input });
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const draw = () => {
    update(still ? 8 : performance.now() / 1000);
    renderer.render(scene, camera);
  };
  const fit = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    if (resize) resize(camera.aspect);
    camera.updateProjectionMatrix();
    draw();
  };

  on(window, "pointermove", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  const resizer = new ResizeObserver(fit);
  resizer.observe(host);
  const watcher = new IntersectionObserver(([entry]) => {
    renderer.setAnimationLoop(entry.isIntersecting && !still ? draw : null);
  });
  watcher.observe(host);

  return () => {
    renderer.setAnimationLoop(null);
    resizer.disconnect();
    watcher.disconnect();
    cleanups.forEach((fn) => fn());
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (o.material.map) o.material.map.dispose();
        o.material.dispose();
      }
    });
    if (scene.environment) scene.environment.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
