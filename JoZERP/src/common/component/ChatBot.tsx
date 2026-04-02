import React, { useState, useEffect, useRef } from "react";
import "../../styles/ChatBot.css";

/* ================= IMPORTS ================= */
import chatbot_icon from "../images/chatbot/chatbot-icon.png";
import chatbot_close from "../images/chatbot/chatbot-close.png";
import chatbot_send from "../images/chatbot/chatbot-send.png";
import chatbot_shine from "../images/chatbot/chatbot-shine.png";
import chatbot_logo from "../images/chatbot/chatbot-logo.png";
import chatbot_plus from "../images/chatbot/chatbot-plus.png";

import { chatbotData } from "../data/chatbotData/chatbotData";
import { Strings } from "../../utils/Strings";

/* ================= TYPES ================= */

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

type Message = {
  type: "user" | "bot";
  text: string;
  time: string;
};

/* ================= STATIC DATA ================= */

const suggestions = ["Attendance", "Summarize", "Fee Report", "Approvals"];

/* ================= COMPONENT ================= */

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {

  /* ================= STATE ================= */

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false); // controls skeleton loader

  /* ================= REFS ================= */

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* ================= SCROLL LOCK ================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  /* ================= HELPER ================= */

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  /* ================= SEND MESSAGE ================= */

  const handleSend = () => {
    if (!input.trim()) return;

    /* Add user message */
    const userMessage: Message = {
      type: "user",
      text: input,
      time: getTime()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    /* Reset textarea height */
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    /* Show skeleton loader */
    setIsTyping(true);

    /* Simulate bot response delay */
    setTimeout(() => {
      const found = chatbotData.find(
        (item) =>
          item.question.toLowerCase() === userMessage.text.toLowerCase()
      );

      const botMessage: Message = {
        type: "bot",
        text: found
          ? found.answer
          : "Sorry, I don't understand that yet.",
        time: getTime()
      };

      setMessages((prev) => [...prev, botMessage]);

      /* Hide loader */
      setIsTyping(false);
    }, 3000);
  };

  /* ================= NEW CHAT ================= */

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
    setIsTyping(false);
  };

  /* ================= UI ================= */

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-container">

        {/* ================= HEADER ================= */}
        <div className="chatbot-header">

          <div className="chatbot-header-left">
            <img src={chatbot_icon} className="chatbot-logo" alt="chatbot-logo" />

            <div className="chatbot-header-left-title">
              <div className="chatbot-title">
                {Strings.CHATBOT_TAB.CHATBOT_HEADER.chatbot_title}
              </div>

              <div className="chatbot-subtitle">
                <span className="status-dot"></span>
                {Strings.CHATBOT_TAB.CHATBOT_HEADER.chatbot_subtitle}
              </div>
            </div>
          </div>

          <div className="chatbot-header-right">

            {/* New Chat */}
            <button className="new-chat-btn" onClick={handleNewChat}>
              {Strings.CHATBOT_TAB.CHATBOT_HEADER.chatbot_newchat_button}
              <img src={chatbot_plus} alt="chatbot-plus" />
            </button>

            {/* Close */}
            <img
              src={chatbot_close}
              className="chatbot-close"
              onClick={onClose}
              alt="close chatbot"
            />
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="chatbot-body">

          {messages.length === 0 ? (
            /* Empty state */
            <div className="chatbot-center">
              <img src={chatbot_logo} alt="chatbot-logo" />
              <p>{Strings.CHATBOT_TAB.CHATBOT_BODY.chatbot_center}</p>
            </div>
          ) : (
            /* Chat messages */
            <div className="chatbot-messages">

              {messages.map((msg, index) => (
                <div key={index} className={`msg-wrapper ${msg.type}`}>
                  <div className={`msg-bubble ${msg.type}`}>
                    {msg.text}
                  </div>
                  <div className="msg-time">{msg.time}</div>
                </div>
              ))}

              {/* ================= SKELETON LOADER ================= */}
              {isTyping && (
                <div className="bot-loading">
                  <div className="loading-bar long"></div>
                  <div className="loading-bar medium"></div>
                  <div className="loading-bar short"></div>
                </div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />

            </div>
          )}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="chatbot-footer">

          {/* Suggestions */}
          <div className="chatbot-suggestions">
            {suggestions.map((text, index) => (
              <button key={index} onClick={() => setInput(text)}>
                {text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <img src={chatbot_shine} className="shine-icon" alt="chatbot-shine" />

            <textarea
              ref={textareaRef}
              value={input}
              placeholder="What would you like to create today?"
              rows={1}
              onChange={(e) => {
                setInput(e.target.value);

                const el = textareaRef.current;
                if (el) {
                  el.style.height = "auto";
                  el.style.height = el.scrollHeight + "px";
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />

            <button onClick={handleSend}>
              <img src={chatbot_send} alt="chatbot-send" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatBot;