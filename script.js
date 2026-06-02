function getData(key){
return JSON.parse(localStorage.getItem(key)||'[]');
}

function setData(key,data){
localStorage.setItem(key,JSON.stringify(data));
}

function updateStats(){
document.getElementById('memberCount').innerText=getData('members').length;
document.getElementById('nazriCount').innerText=getData('nazri').length;
document.getElementById('moneyCount').innerText=getData('money').length;
}

function addMember(){
let name=document.getElementById('memberName').value;
if(!name)return;
let members=getData('members');
members.push(name);
setData('members',members);
document.getElementById('memberName').value='';
renderMembers();
}

function renderMembers(){
let ul=document.getElementById('members');
ul.innerHTML='';
getData('members').forEach(m=>{
ul.innerHTML+=`<li>${m}</li>`;
});
updateStats();
}

function addNazri(){
let name=document.getElementById('nazriName').value;
let amount=document.getElementById('nazriAmount').value;
if(!name||!amount)return;
let data=getData('nazri');
data.push(`${name} - ${amount} پرس`);
setData('nazri',data);
document.getElementById('nazriName').value='';
document.getElementById('nazriAmount').value='';
renderNazri();
}

function renderNazri(){
let ul=document.getElementById('nazriList');
ul.innerHTML='';
getData('nazri').forEach(n=>{
ul.innerHTML+=`<li>${n}</li>`;
});
updateStats();
}

function addMoney(){
let title=document.getElementById('moneyTitle').value;
let value=document.getElementById('moneyValue').value;
let type=document.getElementById('moneyType').value;
if(!title||!value)return;
let data=getData('money');
data.push(`${type==='income'?'درآمد':'هزینه'} | ${title} | ${value} تومان`);
setData('money',data);
document.getElementById('moneyTitle').value='';
document.getElementById('moneyValue').value='';
renderMoney();
}

function renderMoney(){
let ul=document.getElementById('moneyList');
ul.innerHTML='';
getData('money').forEach(m=>{
ul.innerHTML+=`<li>${m}</li>`;
});
updateStats();
}

renderMembers();
renderNazri();
renderMoney();
