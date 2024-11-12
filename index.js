// data
const chat = document.getElementById('chat-box');
const stat = document.getElementById('status-box');
const calls = document.getElementById('calls-box');

const chatContainer = document.getElementById('chat-container');
const statusContainer = document.getElementById('status-container');
const callsContainer = document.getElementById('calls-container');

const navBar = document.getElementById('nav-bar');
const chatPage = document.getElementById('chat-page');
const backBtn = document.getElementById('back');
const message = document.querySelectorAll('.chat-box');




// fuction

stat.onclick = ()=>{
   stat.classList.add('show');
   calls.classList.remove('show');
   chat.classList.remove('show');

   chatContainer.style.display='none';
   statusContainer.style.display='block';
   callsContainer.style.display="none";
}

calls.onclick = ()=>{
    calls.classList.add('show');
    chat.classList.remove('show')
    stat.classList.remove('show');

    chatContainer.style.display='none';
   statusContainer.style.display='none';
   callsContainer.style.display="block";
}
chat.onclick = ()=>{
    chat.classList.add('show');
    calls.classList.remove('show');
    stat.classList.remove('show');

    chatContainer.style.display='block';
   statusContainer.style.display='none';
   callsContainer.style.display="none";
}
backBtn.onclick = ()=>{
    navBar.style.display="block";
    chatContainer.style.display = "block";
    chatPage.style.display = "none";
}





// Action

message.forEach((msg)=>{

    msg.addEventListener('click', ()=>{
        
        chatContainer.style.display='none';
        statusContainer.style.display='none';
        callsContainer.style.display="none";
        navBar.style.display = "none";

        chatPage.style.display = "block"



    } )
})