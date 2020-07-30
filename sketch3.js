const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint
var engine,world
var marker
var drawing,currentpath,userdefinedstroke=2
function setup()
{
    var canvas=createCanvas(displayWidth,displayHeight)
    canvas.mousePressed(startPath)
    engine = Engine.create();
    world = engine.world;
    drawing = []
    currentPath = []
}
function draw()
{
    background("white")
    if(mouseIsPressed)
    {
        var position = {
            x:mouseX,y:mouseY
        }
        currentPath.push(position)
    }
    stroke (0)
    strokeWeight(userdefinedstroke)
    noFill()
    for(var i = 0;i<drawing.length;i++)
    {
        var path = drawing[i]
        beginShape()
        for(var j = 0;j<path.length;j++)
        {
            vertex(path[j].x,path[j].y)
        }
        endShape();
    }
    drawSprites();
    console.log(mouseX+","+mouseY)
}
function startPath()
{
    currentPath=[]
    drawing.push(currentPath)
}