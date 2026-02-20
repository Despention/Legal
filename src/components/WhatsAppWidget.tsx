import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
    const phoneNumber = "77010000000"; // Format without plus
    const message = "Здравствуйте, мне нужна юридическая консультация.";

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-widget"
            aria-label="Написать в WhatsApp"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                backgroundColor: '#25D366', // WhatsApp Green
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                zIndex: 9999,
                transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <MessageCircle size={32} />
        </a>
    );
}
