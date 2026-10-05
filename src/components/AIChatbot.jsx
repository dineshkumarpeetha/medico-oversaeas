import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  User, 
  RefreshCw, 
  PhoneCall, 
  CheckCircle2
} from 'lucide-react';
import { CHATBOT_KNOWLEDGE, PRESET_PROMPTS } from '../data/chatbotKnowledge';
import { dbService } from '../services/dbService';

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: "👋 Hi! I am the **BuildX AI Assistant** for Medico Overseas.\n\nHow can I help you choose your ideal medical university today? Ask me about fees, NEET cutoffs, FMGE exams, or hostels!",
  prompts: ["💰 Check Total Packages & Fees", "🇷🇺 Tell me about MBBS in Russia", "🇬🇪 Why choose Georgia?", "🎯 NEET Cutoff Rules"],
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

const CALLBACK_PHRASES = [
  'call me', 'callback', 'contact me', 'request call', 'request callback',
  'expert call', 'talk to expert', 'speak to counsellor', 'speak to counselor',
  'need counsellor', 'need counselor', 'phone number'
];

function formatMessageText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

function normalizeQuery(query) {
  return query.toLowerCase().replace(/[^\w\s%₹]/g, ' ').replace(/\s+/g, ' ').trim();
}

function findKnowledgeById(id) {
  return CHATBOT_KNOWLEDGE.find((item) => item.id === id) || null;
}

export default function AIChatbot({ onOpenLeadModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const processAIResponse = (userQuery) => {
    const qLower = normalizeQuery(userQuery);
    const rawLower = userQuery.toLowerCase().trim();

    // 1. Preset prompt alias lookup (exact match on button labels)
    const aliasId = PROMPT_ALIASES[rawLower] || PROMPT_ALIASES[qLower];
    if (aliasId) {
      const aliasMatch = findKnowledgeById(aliasId);
      if (aliasMatch) {
        return {
          text: aliasMatch.response,
          prompts: aliasMatch.prompts || PRESET_PROMPTS.slice(0, 4)
        };
      }
    }

    // 2. Callback / expert call intent
    const phoneMatch = userQuery.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\b\d{10}\b/);
    const wantsCallback = CALLBACK_PHRASES.some((phrase) => qLower.includes(phrase));

    if (wantsCallback || phoneMatch) {
      if (phoneMatch) {
        const detectedPhone = phoneMatch[0];
        dbService.addLead({
          name: 'Chatbot Visitor',
          phone: detectedPhone,
          message: `Callback request via AI Chat: "${userQuery}"`,
          preferredCountry: 'AI Chat Visitor'
        });

        return {
          text: `✅ **Callback Request Recorded!**\n\nThank you! Our Senior Medical Study Counsellor has been notified and will call you on **${detectedPhone}** within 15 minutes to discuss customized university admissions & fee waivers.`,
          prompts: ["Check MBBS Fees", "Russia University List", "Georgia University List"]
        };
      }

      return {
        text: "📞 **Request a Free Expert Call**\n\nI'd love to connect you with our Senior Medical Counsellor! Please share your **10-digit mobile number** here in the chat, or click **Request Call** below to fill a quick form.",
        prompts: ["9876543210", "Check MBBS Fees", "🇷🇺 Tell me about MBBS in Russia"],
        openLeadModal: true
      };
    }

    // 3. Score-based keyword matching from knowledge base
    let bestMatch = null;
    let highestScore = 0;

    for (const item of CHATBOT_KNOWLEDGE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (qLower.includes(kw)) {
          score += kw.length > 4 ? 3 : 1;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        text: bestMatch.response,
        prompts: bestMatch.prompts || PRESET_PROMPTS.slice(0, 4)
      };
    }

    // 4. Contextual fallbacks
    if (qLower.includes('fee') || qLower.includes('cost') || qLower.includes('price') || qLower.includes('lakh') || qLower.includes('budget')) {
      return {
        text: "💰 **Tuition & Budget Options:**\n\n- **Kyrgyzstan:** ₹18L - ₹20L Total (Lowest Budget)\n- **Uzbekistan:** ₹22L - ₹24L Total\n- **Russia:** ₹24L - ₹28.5L Total (Most Popular)\n- **Georgia:** ₹32L - ₹38.5L Total (Highest FMGE Rate)\n\nWhich budget target fits your requirement?",
        prompts: ["Kyrgyzstan Total Package", "Russia Fee Table", "Use Interactive Calculator"]
      };
    }

    if (qLower.includes('food') || qLower.includes('hostel') || qLower.includes('live') || qLower.includes('room') || qLower.includes('mess')) {
      return {
        text: "🏠 **Hostel & Indian Dining:**\n\nAll our partner universities in Russia, Georgia, and Kyrgyzstan provide furnished campus dormitories with 24/7 security and dedicated Indian mess serving hot Veg & Non-Veg Indian meals daily!",
        prompts: ["Are hostels safe for girls?", "Russia Hostels", "Georgia Hostels"]
      };
    }

    if (qLower.includes('exam') || qLower.includes('next') || qLower.includes('fmge') || qLower.includes('nmat') || qLower.includes('license')) {
      return {
        text: "🩺 **Medical Licensing Guidance:**\n\nForeign medical graduates can practice in India by clearing the FMGE/NEXT examination. Medico Overseas provides **free online coaching & mock tests** starting from your 1st year of study abroad!",
        prompts: ["FMGE Exam Syllabus", "NMAT Exam Info", "Check Country Pass Rates"]
      };
    }

    return {
      text: "I'm here to help with your medical study abroad questions!\n\nYou can ask me specific questions like:\n- *What is the fee for Russia or Georgia?*\n- *What NEET score is needed?*\n- *Is Indian food available in hostels?*\n- *What is the FMGE pass rate?*\n\nOr click below to speak directly with our Senior Medical Director!",
      prompts: ["💰 Check MBBS Fees", "🇷🇺 Tell me about Russia", "📞 Request Expert Callback"]
    };
  };

  const handleSendMessage = (textToSend = null) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: query, time: timeStr }]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    dbService.logChatbotQuery(query);

    setTimeout(() => {
      const { text: botResponseText, prompts: nextPrompts, openLeadModal } = processAIResponse(query);

      setMessages((prev) => [...prev, {
        sender: 'bot',
        text: botResponseText,
        prompts: nextPrompts,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

      if (openLeadModal && onOpenLeadModal) {
        setTimeout(() => onOpenLeadModal(), 800);
      }

      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Chat context refreshed. What medical university or country would you like to explore?",
        prompts: PRESET_PROMPTS.slice(0, 4),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputText('');
    setIsTyping(false);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-slate-700 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ask <strong>BuildX AI Assistant</strong></span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI chat assistant"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1F3864] to-[#E15B3F] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group pulse-glow"
          >
            <Bot className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">

          <div className="bg-gradient-to-r from-[#122443] via-[#1F3864] to-[#122443] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-[#E15B3F] p-2 flex items-center justify-center text-white font-bold">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1F3864]"></span>
              </div>
              <div>
                <div className="font-bold text-sm flex items-center gap-1.5 font-['Outfit']">
                  BuildX AI Assistant <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span>Medico Overseas Counseling Bot</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset Chat"
                aria-label="Reset chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                aria-label="Close chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-slate-50 border-b border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E15B3F]" /> Smart MBBS Assistant
            </span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
              Instant AI Intelligence
            </span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg, index) => (
              <div key={index} className="space-y-2">
                <div className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#E15B3F] to-[#C9472C] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                  }`}>
                    <div className="whitespace-pre-wrap">{formatMessageText(msg.text)}</div>
                    <div className={`text-[9px] mt-1.5 text-right ${msg.sender === 'user' ? 'text-white/80' : 'text-slate-400'}`}>
                      {msg.time}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {msg.sender === 'bot' && msg.prompts && index === messages.length - 1 && !isTyping && (
                  <div className="pl-9 flex flex-wrap gap-1.5 pt-1 animate-in fade-in">
                    {msg.prompts.map((p, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSendMessage(p)}
                        className="bg-white hover:bg-[#1F3864] hover:text-white text-slate-700 text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-sm transition-colors"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-slate-400 italic bg-white p-3 rounded-2xl w-fit border border-slate-200">
                <Bot className="w-4 h-4 text-[#1F3864] animate-pulse" /> BuildX AI is formulating detailed answer...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="px-3.5 py-2 bg-amber-50 border-t border-amber-200 flex items-center justify-between text-xs">
            <span className="text-amber-900 font-semibold flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-[#E15B3F]" /> Need doctor counsellor call?
            </span>
            <button
              onClick={onOpenLeadModal}
              className="bg-[#E15B3F] hover:bg-[#C9472C] text-white text-[11px] font-bold px-3 py-1 rounded-lg transition-colors shadow-sm"
            >
              Request Call
            </button>
          </div>

          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSendMessage()}
              placeholder="Ask anything about fees, eligibility, hostels..."
              disabled={isTyping}
              className="flex-1 text-xs border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1F3864] disabled:bg-slate-50 disabled:text-slate-400"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isTyping || !inputText.trim()}
              aria-label="Send message"
              className="bg-[#1F3864] hover:bg-[#122443] text-white p-2.5 rounded-xl transition-colors shrink-0 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
