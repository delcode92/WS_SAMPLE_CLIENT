import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const WebSocketPage = () => {
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState<(string | ArrayBuffer)[]>([]);
  const client = new W3CWebSocket('ws://localhost:8080');

  useEffect(() => {

    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      console.log('Received message:', message.data);
      setReceivedMessages(prevMessages => [...prevMessages, message.data as string | ArrayBuffer]);
    };

    // return () => {
    //   // client.close();
    // };
  }, []);

  const handleSend = () => {
    // Send a message to the WebSocket server
    // You can define your own message format here
    const messageToSend = { type: 'chatMessage', content: message };
    client.send(JSON.stringify(messageToSend));
    setMessage('');
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </div>
      <div>
        <h2>Received Messages</h2>
        <ul>
          {receivedMessages.map((mesg, index) => (
            <li key={index}>{mesg.toString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketPage;
