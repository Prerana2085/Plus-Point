// import React, { useState } from "react";
// import axios from "axios";

// const API_KEY = "AIzaSyBw2BfD_-gXTGcQqnIBSbcwXy6kz1fXCvw";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Function to send message to Gemini API
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "admin", text: input };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           contents: [{ parts: [{ text: input }] }],
//         }
//       );

//       const botMessage = {
//         role: "bot",
//         text: response.data.candidates[0]?.content.parts[0]?.text || "No response",
//       };

//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages([...messages, userMessage, { role: "bot", text: "Error fetching response" }]);
//     }

//     setInput("");
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.messagesContainer}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.message,
//               backgroundColor: msg.role === "user" ? "#007bff" : "#28a745",
//               alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
//             }}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//           style={styles.input}
//         />
//         <button onClick={sendMessage} style={styles.button}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// // Styles for chatbot UI
// const styles = {
//   chatContainer: {
//     width: "300px",
//     height: "400px",
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   messagesContainer: {
//     flex: 1,
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     overflowY: "auto",
//   },
//   message: {
//     padding: "8px",
//     margin: "5px",
//     borderRadius: "5px",
//     color: "#fff",
//     maxWidth: "80%",
//   },
//   inputContainer: {
//     display: "flex",
//     padding: "10px",
//     borderTop: "1px solid #ddd",
//   },
//   input: {
//     flex: 1,
//     padding: "8px",
//     border: "none",
//     outline: "none",
//   },
//   button: {
//     padding: "8px 10px",
//     border: "none",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     cursor: "pointer",
//     marginLeft: "5px",
//   },
// };

// export default Chatbot;



// from chatgpt 

import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { FaRobot, FaTimes } from "react-icons/fa"; // Importing icons for chatbot

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

// Disease Categories with actions
const diseaseCategories = {
  "infections": {
    generalInfo: "Infections can be caused by bacteria, viruses, or other pathogens. Symptoms may include fever, chills, body aches, cough, or sore throat.",
    symptoms: ["fever", "chills", "cough", "sore throat", "fatigue", "body aches"],
    action: "If you're experiencing any of these symptoms, it's a good idea to rest, hydrate, and consult a healthcare provider if symptoms worsen. Seek medical care if symptoms persist or worsen over time."
  },
  
  "chronic_conditions": {
    generalInfo: "Chronic conditions like diabetes, hypertension, bp, asthma, and arthritis require ongoing management and regular checkups. Symptoms often vary, but early signs may include fatigue, difficulty breathing, or unusual thirst.",
    symptoms: ["fatigue", "breathing issues", "thirst", "blurred vision", "irregular heartbeat", "joint pain", "swelling"],
    action: "For chronic conditions, regular monitoring and lifestyle changes are key. If you're feeling unwell or experiencing symptoms that worsen, please contact your healthcare provider for guidance."
  },
  
  "mental_health": {
    generalInfo: "Mental health concerns, such as anxiety, depression, or stress, can greatly affect your quality of life. It's important to address these issues with care and seek support when needed.",
    symptoms: ["feeling down", "lack of energy", "difficulty sleeping", "loss of interest in activities", "feeling anxious", "mood swings", "isolation"],
    action: "If you're feeling overwhelmed, consider speaking to a therapist or counselor. If the symptoms are severe, helplines are available for immediate support. Would you like help finding a mental health professional?"
  },

  "cardiovascular": {
    generalInfo: "Cardiovascular diseases, including heart disease, stroke, and hypertension, affect the heart and blood vessels. Symptoms may include chest pain, shortness of breath, fatigue, and dizziness.",
    symptoms: ["chest pain", "shortness of breath", "dizziness", "fatigue", "swelling in legs", "irregular heartbeat"],
    action: "If you're experiencing any of these symptoms, please seek immediate medical attention. Early diagnosis and treatment can prevent serious health complications."
  },

  "respiratory": {
    generalInfo: "Respiratory diseases affect the lungs and breathing. Common conditions include asthma, bronchitis, and pneumonia. Symptoms may include wheezing, shortness of breath, and persistent coughing.",
    symptoms: ["wheezing", "shortness of breath", "persistent cough", "tightness in the chest", "difficulty breathing"],
    action: "If you're having trouble breathing or experiencing severe symptoms, contact a healthcare provider right away. Respiratory conditions often require medication and monitoring."
  },

  "gastrointestinal": {
    generalInfo: "Gastrointestinal diseases affect the digestive system. Conditions like acid reflux, irritable bowel syndrome (IBS), or food poisoning can cause discomfort and affect daily life.",
    symptoms: ["stomach pain", "nausea", "vomiting", "diarrhea", "bloating", "heartburn", "constipation"],
    action: "If you're experiencing persistent gastrointestinal issues, it's important to consult a doctor for an accurate diagnosis and treatment plan."
  },

  "musculoskeletal": {
    generalInfo: "Musculoskeletal conditions, like arthritis, osteoporosis, and muscle strains, affect the bones, joints, muscles, and ligaments. Symptoms may include pain, swelling, stiffness, or weakness.",
    symptoms: ["joint pain", "stiffness", "swelling", "muscle weakness", "difficulty moving", "pain while walking"],
    action: "If you're experiencing joint pain or muscle weakness, a healthcare provider can help assess the condition and suggest treatments or physical therapy."
  },

  "skin_conditions": {
    generalInfo: "Skin conditions include conditions like eczema, psoriasis, acne, and fungal infections. Symptoms can range from redness and irritation to rashes and sores.",
    symptoms: ["redness", "itching", "rashes", "blisters", "swelling", "dryness", "painful lesions"],
    action: "If you're experiencing persistent or worsening skin symptoms, please consult a dermatologist for diagnosis and appropriate treatment."
  },

  "endocrine": {
    generalInfo: "Endocrine disorders, such as thyroid conditions, diabetes, and adrenal issues, affect the body's hormone-producing glands. Symptoms can range from fatigue to weight changes and mood swings.",
    symptoms: ["fatigue", "weight gain or loss", "mood swings", "increased thirst", "frequent urination", "hair loss", "irregular periods"],
    action: "Hormonal imbalances can affect overall health, so it's important to consult with an endocrinologist for further evaluation and treatment options."
  },

  "urinary": {
    generalInfo: "Urinary tract infections (UTIs) and other kidney issues can cause symptoms like pain while urinating, frequent urges, or blood in the urine.",
    symptoms: ["painful urination", "frequent urination", "blood in urine", "back pain", "cloudy urine"],
    action: "If you suspect a urinary tract infection or other kidney issue, seek medical attention to get a proper diagnosis and treatment."
  },

  "allergies": {
    generalInfo: "Allergies occur when the body overreacts to harmless substances like pollen, dust, or certain foods. Symptoms can include sneezing, itching, or swelling.",
    symptoms: ["sneezing", "itchy eyes", "runny nose", "swelling", "skin rash", "difficulty breathing"],
    action: "If you're experiencing allergic reactions, it's important to identify the trigger and take appropriate medications. If symptoms are severe, such as difficulty breathing, seek medical help immediately."
  },

  "injuries": {
    generalInfo: "Injuries, such as sprains, fractures, and cuts, require immediate attention to prevent further damage. Symptoms may include pain, swelling, bruising, or difficulty moving a body part.",
    symptoms: ["pain", "swelling", "bruising", "difficulty moving", "bleeding", "deformity"],
    action: "For injuries, it's crucial to get proper care immediately. If it's a serious injury, such as a fracture, please visit the emergency room."
  },

  "obesity": {
    generalInfo: "Obesity is a condition where a person has excess body fat, which can lead to serious health issues such as heart disease, diabetes, and joint problems.",
    symptoms: ["excess weight", "shortness of breath", "fatigue", "joint pain"],
    action: "If you're concerned about your weight, it's important to seek advice on healthy weight management and a sustainable diet. A healthcare provider can help you create a plan for long-term health."
  },

  "sleep_disorders": {
    generalInfo: "Sleep disorders, such as insomnia or sleep apnea, can interfere with your ability to get restful sleep, leading to fatigue and mood changes.",
    symptoms: ["difficulty falling asleep", "waking up frequently at night", "snoring", "daytime fatigue", "irritability"],
    action: "Sleep disorders often require lifestyle changes or medical intervention. If you're consistently struggling to sleep, it’s worth speaking to a healthcare provider."
  }
};



// Chatbot component
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Chat window toggle state

  // Function to send message to Gemini API
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      // Check for specific diseases or symptoms from the user's input
      const diseaseQuery = Object.keys(diseaseCategories).find(category =>
        input.toLowerCase().includes(category)
      );

      if (diseaseQuery) {
        // Use the disease category to fetch the response
        const disease = diseaseCategories[diseaseQuery];
        const botMessage = {
          role: "bot",
          text: `${disease.generalInfo} Common symptoms include: ${disease.symptoms.join(", ")}. ${disease.action}`,
        };
        setMessages([...messages, userMessage, botMessage]);
      } else {
        // Default AI response for general queries
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: [{ parts: [{ text: input }] }],
          config: {
            systemInstruction: `You are PlusCura, a friendly and interactive AI healthcare assistant for the PlusPoint platform. 
           Your job is to:
1. Greet users warmly and introduce yourself when they first engage.
2. Provide medical advice, answer health-related questions, give a brief detail about the disease or issue concerned and suggest follow-up questions about their symptoms, health conditions, or medicine.
3. Be helpful and clear, but never offer diagnoses or treatments.
4. Politely refuse to answer non-health-related questions, reminding the user that you only assist with healthcare and services provided on the platform.
5. Always ask context-sensitive follow-up questions, such as:
    - Are you currently diagnosed with this condition?
    - Are you experiencing any symptoms right now?
    - Do you need help finding a healthcare provider or more information on a treatment?
6. Don't start every answer with your introduction.Just do that when they say "hi" , "HI" , "HEY" , "hello" or anything similar to a greeting.
7. If the user says they think they have symptoms then ask about them and suggest to visit a doctor.
8. Don't say "I can also assist you in finding a healthcare provider on the platform for further evaluation." instead suggest them to visit a doctor or remind them that they can you the PlusPoint to do so as well.
9. Don't say stuff like you "Would you like me to guide you through the process" just tell them that they can use PlusPoint for that.


When a user says "hi" or "hello", respond by introducing yourself and asking how you can assist them. Make the conversation feel natural and engaging, while keeping it professional. For any non-health-related queries, kindly remind them that you only provide health-related support.
            `,
          },
        });

        const botMessage = {
          role: "bot",
          text: response.text || "No response",
        };
        setMessages([...messages, userMessage, botMessage]);
      }

    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, userMessage, { role: "bot", text: "Error fetching response" }]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      {!isOpen && (
        <button style={styles.floatingButton} onClick={() => setIsOpen(true)}>
          <FaRobot size={24} color="white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatContainer}>
          {/* Chat Header with Close Button */}
          <div style={styles.header}>
            <span>AI Chatbot</span>
            <FaTimes size={20} style={styles.closeIcon} onClick={() => setIsOpen(false)} />
          </div>

          {/* Chat Messages */}
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  backgroundColor: msg.role === "user" ? "#4CAF50" : "#81C784",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Styles for chatbot UI (updated for larger size)
const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "70px", // Larger floating button for better accessibility
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#4CAF50", // Light green color
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  chatContainer: {
    width: "400px", // Larger width for more content space
    height: "600px", // Larger height for more comfortable space
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#f1f8e9", // Light green background
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#4CAF50", // Light green color
    color: "#fff",
    padding: "15px", // Increased padding for better design
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  closeIcon: {
    cursor: "pointer",
  },
  messagesContainer: {
    flex: 1,
    padding: "20px", // Increased padding for a more spacious feel
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  message: {
    padding: "12px", // Increased padding for better readability
    margin: "8px",
    borderRadius: "5px",
    color: "#fff",
    maxWidth: "90%", // Further increased max width for better messages display
  },
  inputContainer: {
    display: "flex",
    padding: "15px", // Increased padding
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "12px", // Increased padding for the input field
    border: "none",
    outline: "none",
  },
  button: {
    padding: "12px 15px", // Larger button for better interaction
    border: "none",
    backgroundColor: "#4CAF50", // Light green color
    color: "#fff",
    cursor: "pointer",
    marginLeft: "5px",
  },
};

export default Chatbot;