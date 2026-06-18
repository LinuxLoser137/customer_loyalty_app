const demoUser = { name: "Jordan Customer", points: 1250, tier: "Gold", email: "customer@example.com" };
function byId(id){return document.getElementById(id)}
function updatePoints(delta){const el=byId('points'); if(!el) return; const current=parseInt(el.dataset.points||demoUser.points,10); const next=current+delta; el.dataset.points=next; el.textContent=next.toLocaleString();}
function redeemReward(name,cost){const el=byId('message'); if(el){el.textContent=`${name} selected. ${cost} points will be deducted during checkout.`; el.className='notice';}}
function showLogin(){const msg=byId('loginMessage'); if(msg){msg.textContent='Demo login successful. Use customer@example.com / Password123! for testing.'; msg.className='notice';}}
function saveProfile(){const msg=byId('profileMessage'); if(msg){msg.textContent='Profile changes saved in the demo prototype.'; msg.className='notice';}}
function sendNotification(){const msg=byId('adminMessage'); if(msg){msg.textContent='Promotion notification queued for demo users.'; msg.className='notice';}}
