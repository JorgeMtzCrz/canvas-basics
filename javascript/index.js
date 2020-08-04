let canvas= document.querySelector('#canvas')
let ctx= canvas.getContext('2d')

 ctx.fillRect(100, 100, 200, 200)

// ctx.fillStyle='crimson'
// ctx.strokeStyle='crimson'
// ctx.clearRect(0, 0, canvas.width, canvas.height)
// ctx.strokeRect(200,200,200,200)

// Iniciamos el trazo
// ctx.beginPath()
// // // colocamos nuestra pluma en un punto inicial
// ctx.moveTo(5, 5)
// // // A partir del punto inicial dibujamos una linea
// ctx.lineTo(100,100)
// ctx.lineTo(100,50)
// // // ejecutamos el dibujo, en este caso, un trazo
// ctx.fill()

// //ctx.moveTo(250,100)
// //ctx.lineTo(400,300)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(200,200,75,139, Math.PI*2)
// ctx.lineWidth = 15
// ctx.fill()
// ctx.closePath() 

//LOGO
// ctx.beginPath()
// ctx.fillStyle='orange'
// ctx.fillRect(50,50, 300, 300)
// ctx.fillStyle='white'
// ctx.arc(120,280, 40, 0, Math.PI*2)
// ctx.fill()
// ctx.closePath()
// ctx.beginPath() 
// ctx.lineWidth=25
// ctx.strokeStyle='white' 
// ctx.arc(110, 280, 95, 44.2, 55,true)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.lineWidth=25
// ctx.arc(110, 290, 189, 0, 55,true)
// ctx.stroke()

// //Codigo para botón para dibujar
// let drawButton = document.querySelector('#start-game-button')

// drawButton.onclick = () => draw(0,0)

// function draw(x,y){
//   ctx.fillStyle = "green";
//   ctx.clearRect(0,0, canvas.width, canvas.height)

//     // creates rectangle => ctx.fillRect(x, y, width, height);
//     ctx.fillRect(x, 0, 50, 50);


//     // changes position of X coordinate
//     x += 3;

//     // calls itself every 30ms
//     setTimeout(`draw(${x}, ${y})`, 30);
// }