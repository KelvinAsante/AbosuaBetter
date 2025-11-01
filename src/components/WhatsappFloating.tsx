import React from "react";

const phoneNumber = "233592720844"; // international format without + or spaces
const displayNumber = "+233 59 272 0844";

export default function WhatsappFloating() {
  const waLink = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      {/* Container positioned fixed at bottom-right */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp ${displayNumber}`}
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-transparent"
      >
        {/* Number pill - hidden on very small screens */}
        <span className="hidden sm:inline-flex items-center bg-white/90 text-sm text-slate-800 px-3 py-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2 text-emerald-600"
            aria-hidden
          >
            <path d="M20.52 3.48A11.88 11.88 0 0012 .5C6.05.5 1 5.55 1 11.5c0 2.08.54 4.12 1.57 5.9L.5 23.5l6.4-1.68A11.95 11.95 0 0012 23.5c5.95 0 11-5.05 11-11.5 0-3.08-1.2-5.95-2.48-8.52zM12 21.5c-1.8 0-3.56-.44-5.1-1.28l-.36-.2-3.8 1 1.03-3.5-.23-.37A9.2 9.2 0 012.9 11.5C2.9 6.98 6.98 2.9 12 2.9s9.1 4.08 9.1 8.6S17.02 21.5 12 21.5z" />
            <path d="M17.5 14.2c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15s-.8 1-1 1.2c-.2.2-.4.25-.7.1-1.3-.65-2.2-1.86-3-3.26-.22-.4.22-.4.63-1.3.07-.15.03-.29-.02-.4-.05-.1-.7-1.7-.96-2.33-.25-.6-.5-.53-.7-.54h-.6c-.2 0-.5.07-.77.33s-1.02 1-1.02 2.47 1.05 2.88 1.2 3.08c.15.2 2.08 3.36 5.05 4.72 2.98 1.36 2.98.91 3.52.86.54-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
          {displayNumber}
        </span>

        {/* Floating round WhatsApp button */}
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 shadow-lg text-white hover:scale-105 transition-transform" title="Chat on WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
            <path d="M20.5 3.5a12.07 12.07 0 00-17 0 12 12 0 000 17l-1.5 4.5 4.5-1.5a12 12 0 0014-20zM12 21a9 9 0 01-4.5-1.2l-.3-.17L5 20l.37-2.16-.19-.35A9 9 0 1112 21z"/>
            <path d="M17.8 14.6c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15s-.8 1-1 1.2c-.2.2-.4.25-.7.1-1.3-.65-2.2-1.86-3-3.26-.22-.4.22-.4.63-1.3.07-.15.03-.29-.02-.4-.05-.1-.7-1.7-.96-2.33-.25-.6-.5-.53-.7-.54h-.6c-.2 0-.5.07-.77.33S6 9.3 6 10.7s1.05 2.88 1.2 3.08c.15.2 2.08 3.36 5.05 4.72 2.98 1.36 2.98.91 3.52.86.54-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/>
          </svg>
        </span>
      </a>
    </div>
  );
}
