import React from 'react';
import { FileQuestion, CornerDownLeft } from 'lucide-react';

export default function NotFoundPopup({ isOpen, onClose, itemName = "Item" }) {
  

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
        {/* Text */}
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">
          {itemName} Not Found
        </h3>
      
    </div>
  );
}