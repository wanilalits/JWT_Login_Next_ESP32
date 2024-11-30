'use client'
import React, {useState, useEffect} from 'react';

const page = () => {
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState(null);
    const [clientId, setClientId] = useState('');
   

    useEffect(() => {
        const websocket = new WebSocket('wss://nodejswebsocket.onrender.com/');

        websocket.onopen = () => {
            console.log('WebSocket is connected');
            // Generate a unique client ID
            const id = Math.floor(Math.random() * 1000);
            setClientId(id);
        };

        websocket.onmessage = (evt) => {
            const message = (evt.data);
            setMessages((prevMessages) =>
                [...prevMessages, message]
        );
        
       
        var temp = message
        //setWbessage(JSON.parse(evt.data.slice(8)).payload)
         console.log(JSON.parse(temp.slice(8)))
        };

        websocket.onclose = () => {
            console.log('WebSocket is closed');
        };

       
        setWs(websocket);

        return () => {
            websocket.close();
        };
    }, []);

    const sendMessage = () => {
        if (ws) {
            ws.send(JSON.stringify({
                type: 'message',
                 message,
                clientId: clientId
            }));
            setMessage('');
        }
    };

    const handleInputChange = (event) => {
        setMessage( event.target.value);
    };

    return (
        <div>
            <h1>
                Real-time Updates with WebSockets
                and React Hooks - Client {clientId}
            </h1>
          
           {messages.map((message, index) =>
            <p key={index}>{message}</p>)}
           
            <input type="text" value={message}  onChange={handleInputChange} /> 
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default page;

// {messages}