import React, { useEffect, useState } from 'react';
import { Check, MessageCircle, ShoppingCart } from 'lucide-react';

interface CardActionsProps {
  itemName: string;
  whatsappUrl: string;
  onAdd: () => void;
}

/** Shared Add-to-cart + WhatsApp row for product and spare-part cards. */
export const CardActions: React.FC<CardActionsProps> = ({ itemName, whatsappUrl, onAdd }) => {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = window.setTimeout(() => setAdded(false), 1200);
    return () => window.clearTimeout(t);
  }, [added]);

  return (
    <div className="flex gap-1.5">
      <button
        type="button"
        onClick={() => {
          onAdd();
          setAdded(true);
        }}
        className={`btn flex-1 min-w-0 px-2 text-xs sm:text-sm ${added ? 'bg-emerald-600 text-white' : 'btn-primary'}`}
        aria-label={`Add ${itemName} to cart`}
      >
        {added ? <Check className="w-4 h-4 shrink-0" /> : <ShoppingCart className="w-4 h-4 shrink-0" />}
        <span className="truncate">{added ? 'Added' : 'Add'}</span>
      </button>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp w-11 px-0 shrink-0"
        aria-label={`Enquire on WhatsApp about ${itemName}`}
        title="Enquire on WhatsApp"
      >
        <MessageCircle className="w-[18px] h-[18px]" />
      </a>
    </div>
  );
};
