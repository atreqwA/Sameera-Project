import React from 'react'
import "../styles/chat.css";

const Chat = () => {
  return (
    <>
    <h2> CODING CHALLENGE <br/> CHAT INTERFACE </h2>
    <img src="1am.svg" />
    <div class="chat-container">
        <ul class="chats">
            <li class="msg bot">
                <p>Hi! I'm GPT</p>
            </li>
            <li class="msg user">
                <p>Hello GPT! Sameera here</p>
            </li>
            <li class="msg bot">
                <p>Please feel free to ask me anything buddy!</p>
            </li>
            <li class="msg user">
                <p>sure. can you explain me working of a backend?</p>
            </li>
            <li class="msg bot">
                <p>The backend is the server-side part of an application that handles data storage, processing, and logic. It communicates with the database, processes user requests via APIs, and ensures proper data management and security. Technologies like Node.js, Express, and MongoDB are often used to build backend systems, which power the frontend's functionality.</p>
            </li>
            <li class="msg user">
                <p>In much simpler way?</p>
            </li>
            <li class="msg bot">
                <p>The backend is like the "brain" of an app that works behind the scenes. It stores data, processes requests, and sends the right information to the frontend (what you see). It helps make sure everything runs smoothly and securely.</p>
            </li>
            <li class="msg user">
                <p>Thanks GPT! you are Cool</p>
            </li>
        </ul>  
        <input type="text" class="text-input" placeholder="Message GPT" />

    </div>
    <footer>
        <p>
            Created with <i class="heart"></i>
            by
            <a target="_blank" href="https://1AMCreators.com" >1AM-Creators</a>
            For Their Capstone Project At 
            <a target="_blank" href="https://codeforindia.com">Code For India Foundation</a>
        </p>
    </footer>
    </>
  )
}

export default Chat
