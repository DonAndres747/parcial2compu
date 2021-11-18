function main() {
    const scene= new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.z = 20;
     
    


 ///////////////Controles/////////////
 var velocidad= 0.2;
 var direction= "alto";

 document.addEventListener("keydown", onDocumentKeyDown, false);
 function onDocumentKeyDown(event) {

     var keyCode = event.which;
     //Izquierda
     if (keyCode == 37) {
       if (direction=="left"){
         direction= "right";
     } else if (direction=="alto"){
       direction= "right";
     }
     // Derecha
     } else if (keyCode == 39) {
   
    if (direction=="right"){
        direction= "left";
      } else if (direction=="alto"){
        direction= "left";
      }
    }
 };

/////////////geometrias////////////////

    const jugador = new THREE.Mesh(new THREE.BoxGeometry( 10, 2, 2), new THREE.MeshBasicMaterial({color:"blue"}));
    jugador.position.y=-10;

    const machine = new THREE.Mesh(new THREE.BoxGeometry( 10, 2, 2), new THREE.MeshBasicMaterial({color:"red"}));
    machine.position.y=10;

    const bola = new THREE.Mesh(new THREE.BoxGeometry( 1.5, 1.5, 1.5), new THREE.MeshBasicMaterial({color:"green"}));
    bola.position.y=0;

    scene.add(jugador, machine, bola);


    
    
    
    
   
//////////////////////////////////////  
 
x=-10;
    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      
      if(keyCode=null){
         jugador.position.x=jugador.position.x;
      }else{
        if(direction=="right"){
          jugador.position.x -= velocidad;  
          
        } else if (direction=="left"){
          jugador.position.x += velocidad;
          
        } else {
          jugador.position.x= velocidad;
          
        }
      }
      
      
      /*while (x<10){
        x+=1;
        bola.position.x=x;
        if(x=9){
          x=-10 
          break
        };
      };*/     
      

      machine.position.x=jugador.position.x*-1;
    }
    
    animate();
  }
  
main();
