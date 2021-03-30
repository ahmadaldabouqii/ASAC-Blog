'use strict';

let form = document.getElementById('form');
let resultDiv = document.getElementById('leftSide');
let author_name = document.getElementById('AuthorName').value;
let author_title = document.getElementById('ArticleTitle').value;
let content = document.getElementById('content').value;
let select = document.getElementById('select');
let day = document.getElementById('day').value;
let month = document.getElementById('month').value;
let year = document.getElementById('year').value;

function randomID(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

function Data(auth_name, title, subject, content, numberOfLike){
  this.auth_name = auth_name;
  this.title = title;
  this.subject = subject;
  this.randomID();
  this.content = content;
  this.date = day +'-'+month+'-'+year;
  this.numberOfLike = numberOfLike;
  this.img_path = './img/asac_ltuc.jpg';

  Data.holder.push(this);
}

Data.holder = [];

// for(let i = 0; i < Data.holder.length; i++){
//   new Data.holder[i];
// }


form.addEventListener('submit', progress);

if(localStorage.getItem('article') === null){
  localStorage.setItem('article',JSON.stringify(Data.holder));
}else{
  Data.holder = localStorage.getItem('article');
}

function progress(event){

  if(document.getElementById('select') === 'Coding'){

  }
  else if(document.getElementById('select') === '3D printing'){

  }
  else if(document.getElementById('select') === 'Cyber security'){

  }else{

  }

  

  let obj = new Data();
}
