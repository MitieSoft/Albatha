'use client'; 
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const GlobalChatButton = () => {
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const { isRTL } = useLanguage();

  return (
    <>
      {/* Global Chat Button - Fixed Position Above All Content */}
      <div
        className={`fixed bottom-8 z-[9999] flex items-center space-x-4 ${
          isRTL ? "left-6" : "right-6"
        }`}
      >
        {/* Chat Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsChatMenuOpen(!isChatMenuOpen)}
          className="bg-white/20 hover:bg-white/30 text-white hover:scale-105 transition-all duration-300 rounded-full p-3 shadow-lg border border-white/30 hover:shadow-xl"
        >
                  <img
          src="/assets/chat.png"
          alt="Chat"
          className="w-6 h-6"
        />
        </Button>

        {/* Chat Menu */}
        {isChatMenuOpen && (
          <div className="absolute bottom-full mb-3 right-0 bg-[#661244] border border-white/30 rounded-xl shadow-2xl py-4 min-w-[320px] z-[10000]">
            <div className="text-center mb-4 px-6">
              <h3 className="text-white font-bold text-lg">
                Start a Conversation
              </h3>
            </div>
            
            <div className="space-y-3 px-6">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white text-sm mb-3">
                  Welcome! How can we help you today?
                </p>
                <div className="flex space-x-2">
                  <button className="bg-Albatha -light text-Albatha -navy px-4 py-2 rounded-lg text-sm font-medium hover:bg-Albatha -light/90 transition-colors duration-200">
                    Property Inquiry
                  </button>
                  <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors duration-200">
                    General Info
                  </button>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-Albatha -light rounded-full flex items-center justify-center">
                    <span className="text-Albatha -navy text-sm font-bold">A</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">Albatha  Assistant</p>
                    <p className="text-[#661244] text-xs">Online • Ready to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalChatButton;
