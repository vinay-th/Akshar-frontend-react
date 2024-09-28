import React, { useState, useRef, useEffect } from 'react';

const Logo = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="20" fill="#007BFF" />
    <path
      d="M30 70L50 30L70 70"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const styles = {
  container: {
    display: 'flex',
    height: '90vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f8f9fa',
    borderRight: '1px solid #e9ecef',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarHeader: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e9ecef',
  },
  sidebarTitle: {
    marginLeft: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
  },
  sidebarItem: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  mainArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #e9ecef',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '24px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  chatArea: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
  },
  message: {
    display: 'flex',
    marginBottom: '10px',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '20px',
  },
  inputArea: {
    padding: '20px',
    borderTop: '1px solid #e9ecef',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ced4da',
    borderRadius: '20px',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};

export default function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        content: inputMessage,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          content: 'This is a simulated response from the chatbot.',
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <Logo size={32} />
          <span style={styles.sidebarTitle}>Akshar AI</span>
        </div>
        <div style={styles.sidebarContent}>
          {messages.slice(-5).map((msg) => (
            <div key={msg.id} style={styles.sidebarItem}>
              {msg.content.slice(0, 20)}...
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div style={styles.mainArea}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Chatbot</h1>
          <div style={styles.avatar}>U</div>
        </header>

        <div style={styles.chatArea}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.message,
                justifyContent: msg.isUser ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  ...styles.messageBubble,
                  backgroundColor: msg.isUser ? '#007BFF' : '#f1f3f5',
                  color: msg.isUser ? 'white' : '#333',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputArea}>
          <div style={styles.inputContainer}>
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message here..."
              style={styles.input}
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
