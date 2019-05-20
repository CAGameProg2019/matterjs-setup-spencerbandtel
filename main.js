// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine
});
Engine.run(engine);
Render.run(render);

var particleOptions = {
        friction: 0.10,
        frictionStatic: 0.1,
        render: { visible: true }
    };

 let ball=Bodies.circle(300, 200, 40);
 let ball2=Bodies.circle(500, 200, 40);
 //let myCar=Composites.car(390, 0, 100, 30, 40);
 //let chain = Composites.chain(myCar, 5, 5, 200, 200);
 let floor=Bodies.trapezoid(400,400,300,100,.9,{isStatic: true});
 Matter.Body.rotate(floor,(3.14));
let blanket = Composites.softBody(200,50, 20, 20, 2, 2, true, 10, particleOptions);
//let myCradle=Composites.newtonsCradle(200, 100, 5, 10, 160);
World.add(engine.world, [ball,ball2,blanket,floor]);


let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
