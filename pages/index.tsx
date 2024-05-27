import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const WebSocketPage = () => {
  const [message, setMessage] = useState('');
  // Specify the type of receivedMessages as an array of strings or ArrayBuffers
  const [receivedMessages, setReceivedMessages] = useState<(string | ArrayBuffer)[]>([]);
  
  // const client = new W3CWebSocket('ws://localhost:8084');
  const client = new W3CWebSocket('ws://103.127.133.115:8084');

  useEffect(() => {

    // client.onopen = () => {
    //   console.log('WebSocket Client Connected');
    // };

    // client.onmessage = (message: { data: string | ArrayBuffer; }) => {
    //   console.log('Received message:', message.data);
    //   // Use a type assertion to handle the data type properly
    //   setReceivedMessages(prevMessages => [...prevMessages, message.data as string | ArrayBuffer]);
    // };

    // return () => {
    //   client.close();
    // };

  }, []);

  // client.onmessage = (message) => {
  //   console.log('Received message:', message.data);
  //   // Use a type assertion to handle the data type properly
  //   setReceivedMessages(prevMessages => [...prevMessages, message.data as string | ArrayBuffer]);
  // };

  const handleSend = () => {
    // Send a message to the WebSocket server
    // You can define your own message format here
    // const messageToSend = { type: 'chatMessage', content: message };
    // client.send(JSON.stringify(messageToSend));
    // setMessage('');

    // client.onmessage = (message: { data: string | ArrayBuffer; }) => {
    //   console.log('Received message:', message.data);
    //   // Use a type assertion to handle the data type properly
    //   setReceivedMessages(prevMessages => [...prevMessages, message.data as string | ArrayBuffer]);
    // };

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
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg.toString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketPage;
