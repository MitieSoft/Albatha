'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Volume2, 
  Move, 
  RotateCcw,
  X,
  Plus,
  Minus
} from 'lucide-react';

const GlobalAccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    settings, 
    updateFontSize, 
    toggleHighContrast, 
    toggleScreenReader, 
    toggleReducedMotion,
    resetSettings 
  } = useAccessibility();
  const { isRTL } = useLanguage();

  const handleFontSizeIncrease = () => updateFontSize(2);
  const handleFontSizeDecrease = () => updateFontSize(-2);

  return (
    <>
      {/* Global Accessibility Button - Fixed Position at Left Bottom Corner */}
      <div
        className={`fixed bottom-6 z-[9999] ${
          isRTL ? 'right-6' : 'left-6'
        }`}
        style={{ maxWidth: '100vw', overflow: 'hidden' }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          size="sm"
          className="bg-Albatha -navy/90 hover:bg-Albatha -navy text-white hover:scale-105 transition-all duration-300 rounded-full p-3 shadow-2xl border-2 border-Albatha -light/30 hover:border-Albatha -light/50 hover:shadow-3xl"
          aria-label="Accessibility Options"
        >
          <Accessibility className="w-6 h-6" />
        </Button>
      </div>

      {/* Accessibility Options Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#661244]/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-Albatha -navy text-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Accessibility Options
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Font Size Controls */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleFontSizeDecrease}
                    className="rounded-full p-2"
                    disabled={settings.fontSize <= 12}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-mono min-w-[3rem] text-center">
                    {settings.fontSize}px
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleFontSizeIncrease}
                    className="rounded-full p-2"
                    disabled={settings.fontSize >= 24}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Contrast className="w-4 h-4" />
                  High Contrast
                </h3>
                <Button
                  variant={settings.highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                  className={`w-full ${
                    settings.highContrast 
                      ? 'bg-Albatha -navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {settings.highContrast ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Screen Reader Toggle */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Screen Reader Support
                </h3>
                <Button
                  variant={settings.screenReader ? "default" : "outline"}
                  size="sm"
                  onClick={toggleScreenReader}
                  className={`w-full ${
                    settings.screenReader 
                      ? 'bg-Albatha -navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {settings.screenReader ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Move className="w-4 h-4" />
                  Reduced Motion
                </h3>
                <Button
                  variant={settings.reducedMotion ? "default" : "outline"}
                  size="sm"
                  onClick={toggleReducedMotion}
                  className={`w-full ${
                    settings.reducedMotion 
                      ? 'bg-Albatha -navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {settings.reducedMotion ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetSettings}
                  className="w-full text-gray-600 hover:text-gray-800 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Default
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalAccessibilityButton;
