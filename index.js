//console.log('Hola mundo!');

// let doubleAsync = (x) =>{
//  return new Promise(resolve => {
//    setTimeout(()=>{
//      resolve(x*2);
//    },2000)
//  })
// }



let data={};

let app = document.querySelector('#app');
let list = app.querySelector('ul');
let prev = app.querySelector('#prev');
let next = app.querySelector('#next');



prev.addEventListener('click',()=>{
  fetchCharacters(data.previous).then(()=>{
    render();
  })
});
next.addEventListener('click',()=>{
  fetchCharacters(data.next).then(()=>{
    render();
  })
});



const render = () =>{
  list.innerHTML='';
  const {results} = data;
  results.forEach(character =>{

    // let item = document.createElement('li');
    // item.textContent = character.name;
    // list.appendChild(item);

    
    let item = document.createElement('li');

    item.innerHTML = `<h2 id="${character.name}" onclick="clickNombre(this);">Name: ${character.name}</h2>
    <div id="ficha_personaje_${character.name}" class="ficha_personaje">
    <img src="profile.png" width="42" height="42">
    <ul>
    <li>Height: ${character.height}</li>
    <li>Mass: ${character.mass}</li>
    <li>Hair Color: ${character.hair_color}</li>
    <li>Skin Color: ${character.skin_color}</li>
    <li>Eye Color: ${character.eye_color}</li>
    <li>Birth Year: ${character.birth_year}</li>
    <li>Gender: ${character.gender}</li>
    </ul>
    <br>
    </div>`;
    list.appendChild(item);

    var ficha_p = document.getElementById(`ficha_personaje_${character.name}`);
    console.log(ficha_p);
    //ficha_p.style.display = "block"
    
    // list.addEventListener('click',(evt)=>{
    //   console.log(evt.target.nodeName);
    //   if(evt.target.nodeName=='H2'){
    //     debugger;
    //     console.log('OUCH');
    //     //ficha_p.style.display = "block";
       
    //     document.getElementById(`ficha_personaje_${evt.target.id}`).style.display = "block";
    //   }
    // })


  });
}



const fetchCharacters = async(url='https://swapi.co/api/people') => {
  let request = await fetch(url);
  data = await request.json();
}

fetchCharacters().then(() =>{
  render();
})

// let ficha_personaje = app.querySelector('#ficha_personaje');
// var ficha_p = document.getElementById("ficha_personajeLuke Skywalker");
// alert(ficha_p);

/*
list.addEventListener('click',(evt)=>{
  console.log(evt.target.nodeName);
  if(evt.target.nodeName=='H2'){
    debugger;
    console.log('OUCH');
    //ficha_p.style.display = "block";
  }
})
*/