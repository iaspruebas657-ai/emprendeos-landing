import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const questions = [
  {
    id: 1,
    title: "¿En qué situación estás?",
    options: [
      "Estoy empezando desde cero",
      "Tengo una idea de negocio",
      "Ya tengo un producto o servicio",
      "Ya tengo un negocio y quiero vender más"
    ]
  },
  {
    id: 2,
    title: "¿Qué necesitas ahora?",
    options: [
      "Saber qué vender",
      "Conseguir más clientes",
      "Crear contenido para mi negocio",
      "Organizar mejor mis ventas",
      "Vender por internet",
      "Hacer crecer mi negocio"
    ]
  },
  {
    id: 3,
    title: "¿Cuál es tu meta principal?",
    options: [
      "Empezar mi primer negocio",
      "Validar una idea",
      "Vender mi producto",
      "Conseguir más clientes",
      "Ordenar mi negocio",
      "Crecer más rápido"
    ]
  }
];

const DiagnosticModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });

  if (!isOpen) return null;

  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [step]: option });
    setStep(step + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    trackEvent('submit_diagnostic', { answers, formData });
    setStep(step + 1);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div className="card" style={{ width: '100%', maxWidth: '600px', backgroundColor: 'var(--bg-deep)', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>×</button>
        
        {step < questions.length && (
          <div>
            <p className="text-yellow" style={{ fontWeight: '700', marginBottom: '8px' }}>Pregunta {step + 1} de {questions.length}</p>
            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>{questions[step].title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {questions[step].options.map((opt, i) => (
                <button key={i} onClick={() => handleOptionSelect(opt)} className="btn btn-secondary" style={{ textAlign: 'left', padding: '16px', fontSize: '16px', textTransform: 'none', width: '100%' }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === questions.length && (
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-yellow)' }}>¡Casi listo!</h3>
            <p className="text-muted" style={{ marginBottom: '24px' }}>Ingresa tus datos para prepararte tu clase gratis adaptada a tu caso.</p>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Nombre completo" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <input type="tel" placeholder="WhatsApp (Ej: +51...)" required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <input type="email" placeholder="Correo electrónico" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>Ver resultado</button>
            </form>
          </div>
        )}

        {step > questions.length && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-yellow)' }}>Todo listo para avanzar</h3>
            <p style={{ fontSize: '18px', marginBottom: '32px', color: 'var(--text-pure)' }}>Tenemos una clase gratuita perfecta para tu nivel actual. Habla con nosotros por WhatsApp para enviarte el acceso.</p>
            <a href={CTA_LINKS.freeClass} onClick={() => {
                trackEvent('click_free_class');
              }} className="btn btn-primary" style={{ width: '100%' }}>
              Recibir mi clase gratis por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticModal;
