//XHR Is Use Before Fetch Come.

let card=document.getElementById('card');
let requestUrl = 'https://api.github.com/users/hiteshchoudhary';
let xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);

const carData=()=>{
    xhr.onreadystatechange=function(){
        let data = JSON.parse(this.responseText);//JSon.parse IS USe To Conver String To Object
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img src="https://avatars.githubusercontent.com/u/11613311?v=4" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.login}</h5>
    <p class="card-text">Follower:${data.followers}</p>
    <p class="card-text">Following:${data.following}</p>
    <p class="card-text">Location:${data.location}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    `
    }
    
    xhr.send();
}



let btn=document.getElementById('btn');

btn.addEventListener('click',carData);

