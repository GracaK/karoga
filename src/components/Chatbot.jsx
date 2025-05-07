import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const chatbotPairs = [
  { pattern: /hi|hello|hey/i, responses: [
    "Hello there! Welcome to Pawprint! How can I help you and your furry friend today?",
    "Hi! Looking for something special for your pet?"
  ]},
  { pattern: /how are you/i, responses: [
    "I'm doing wonderfully, thank you for asking! How can I assist you at Pawprint today?"
  ]},
  { pattern: /yes/i, responses: [
    "Great! Let's proceed with your request.",
    "Wonderful! What would you like to do next?"
  ]},
  { pattern: /name/i, responses: [
    "I'm Pawprint's helpful assistant!"
  ]},
  { pattern: /location/i, responses: [
    "Pawprint is located at Kamuthi House along Northern Bypass. We'd love for you to visit us!",
    "You can find Pawprint at Kamuthi House along Northern Bypass. We're open on Weekends."
  ]},
  { pattern: /food/i, responses: [
    "Sorry, we only deal with accessories, but you can reach us through our social media platforms and we can make you a reference."
  ]},
  { pattern: /toys/i, responses: [
    "We have a fantastic range of toys for dogs and cats!",
    "Looking for fun toys? We have something for every playful pet!"
  ]},
  { pattern: /leash|collar/i, responses: [
    "We offer a variety of leashes and collars in different sizes, materials, and styles.",
    "You'll find a great selection of durable and stylish leashes and collars at Pawprint."
  ]},
  { pattern: /treats/i, responses: [
    "Spoil your pet with our delicious selection of treats! We have options for dogs, cats, and small animals.",
    "We have many tasty treats to reward your furry friend!"
  ]},
  { pattern: /grooming/i, responses: [
    "We carry a range of grooming supplies such as brushes, shampoos, and nail clippers to keep your pet looking their best.",
    "Need grooming tools? We have everything you need for a well-groomed pet."
  ]},
  { pattern: /bed/i, responses: [
    "Give your pet a comfy place to rest with our selection of cozy beds in various sizes.",
    "We have comfortable beds to suit pets of all sizes."
  ]},
  { pattern: /buy/i, responses: [
    "You can purchase items in-store or inquire about specific products, and we can check availability for you.",
    "Are you interested in buying something specific today?"
  ]},
  { pattern: /order/i, responses: [
    "After you complete your purchase, we’ll follow up with delivery details.",
    "How can we help you with your purchase today?"
  ]},
  { pattern: /cost|price/i, responses: [
    "The price depends on the specific item. Could you tell me which product you're interested in?",
    "The cost varies depending on the product. Which item are you looking at?"
  ]},
  { pattern: /delivery/i, responses: [
    "Deliveries are made on weekends. You will receive your tracking number on Friday at 6:00 pm. Any inquiries should be made on the same day to enhance our services."
  ]},
  { pattern: /advice/i, responses: [
    "Our knowledgeable staff can offer advice on pet care and product selection. What are you looking for guidance on?",
    "We're happy to provide advice to help you care for your pet!"
  ]},
  { pattern: /vaccination|shots/i, responses: [
    "For vaccinations and other veterinary services, we recommend contacting your local vet. We focus on providing quality pet supplies.",
    "We don't offer veterinary services directly, but we can help you find the right products for your pet's needs."
  ]},
  { pattern: /thank you/i, responses: [
    "You're very welcome! We're happy to help at Pawprint. Have a wonderful day!",
    "It was a pleasure assisting you! Feel free to visit us again soon."
  ]},
  { pattern: /goodbye|bye/i, responses: [
    "Goodbye! We hope to see you and your pet again soon at Pawprint!",
    "Farewell! Take care!"
  ]}
];

const PawprintChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your helper. Type 'quit' to end the conversation." }
  ]);
  const [userInput, setUserInput] = useState('');

  const getBotResponse = (input) => {
    for (let pair of chatbotPairs) {
      if (pair.pattern.test(input)) {
        const response = pair.responses[Math.floor(Math.random() * pair.responses.length)];
        return response;
      }
    }
    return "Sorry, I'm not sure I understand. Could you please ask about our products, location, or how we can help your pet?";
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);

    if (userInput.toLowerCase() === 'quit') {
      setMessages(prev => [...prev, { sender: 'bot', text: "Goodbye! Have a nice day." }]);
    } else {
      const botMessage = { sender: 'bot', text: getBotResponse(userInput) };
      setMessages(prev => [...prev, botMessage]);
    }

    setUserInput('');
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#ff6f61',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          color: 'white',
          fontSize: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          zIndex: 1000
        }}
        aria-label="Toggle chatbot"
      >
        <FaComments />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '450px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ padding: '0.5em', borderBottom: '1px solid #ddd', backgroundColor: '#ff6f61', color: 'white', fontWeight: 'bold' }}>
            Pawprint Chat
            <button
              onClick={() => setIsOpen(false)}
              style={{
                float: 'right',
                background: 'none',
                color: 'white',
                border: 'none',
                fontSize: '1.2em'
              }}
            >
              ×
            </button>
          </div>

          {/* Chat messages */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '0.5em' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === 'bot' ? 'left' : 'right',
                  margin: '0.5em 0'
                }}
              >
                <strong>{msg.sender === 'bot' ? 'Pawprint' : 'You'}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {/* Input area */}
          <div style={{ display: 'flex', padding: '0.5em', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '0.5em' }}
            />
            <button onClick={handleSend} style={{ padding: '0.5em 1em' }}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PawprintChatWidget;
