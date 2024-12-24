import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export function SocialLinks() {
  const links = [
    {
      href: 'https://www.facebook.com/profile.php?id=61551620023930',
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook'
    },
    {
      href: 'https://www.instagram.com/annabank.com.br/',
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram'
    },
    {
      href: 'https://wa.me/556230914896',
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}