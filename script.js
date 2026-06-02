
function loadData(){
renderMembers();
renderNazri();
renderMoney();
}

function addMember(){
let name=document.getElementById('memberName').value;
if(!name)return;
let members=JSON.parse(localStorage.getItem('members')||'[]');
members.push(name);
localStorage.setItem('members',JSON.stringify(members));
document.getElementById('memberName').value='';
renderMembers();
}

function renderMembers(){
let members=JSON.parse(localStorage.getItem('members')||'[]');
let ul=document.getElementById('members');
ul.innerHTML='';
members.forEach(m=>{
ul.innerHTML+=`<li>${m}</li>`;
});
}

function addNazri(){
let name=document.getElementById('nazriName').value;
let count=document.getElementById('nazriCount').value;
if(!name || !count)return;
let data=JSON.parse(localStorage.getItem('nazri')||'[]');
data.push(`${name} - ${count}`);
localStorage.setItem('nazri',JSON.stringify(data));
document.getElementById('nazriName').value='';
document.getElementById('nazriCount').value='';
renderNazri();
}

function renderNazri(){
let data=JSON.parse(localStorage.getItem('nazri')||'[]');
let ul=document.getElementById('nazriList');
ul.innerHTML='';
data.forEach(n=>{
ul.innerHTML+=`<li>${n}</li>`;
});
}

function addMoney(){
let title=document.getElementById('moneyTitle').value;
let amount=document.getElementById('moneyAmount').value;
let type=document.getElementById('moneyType').value;
if(!title || !amount)return;
let data=JSON.parse(localStorage.getItem('money')||'[]');
data.push(`${type==='income'?'درآمد':'هزینه'} : ${title} - ${amount}`);
localStorage.setItem('money',JSON.stringify(data));
document.getElementById('moneyTitle').value='';
document.getElementById('moneyAmount').value='';
renderMoney();
}

function renderMoney(){
let data=JSON.parse(localStorage.getItem('money')||'[]');
let ul=document.getElementById('moneyList');
ul.innerHTML='';
data.forEach(n=>{
ul.innerHTML+=`<li>${n}</li>`;
});
}

loadData();
