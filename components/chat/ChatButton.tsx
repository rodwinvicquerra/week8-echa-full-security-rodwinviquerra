'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatWidget } from './ChatWidget';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <ChatWidget isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
