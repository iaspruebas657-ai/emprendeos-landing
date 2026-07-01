import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const questions = [
  {
    id: 1,
    title: "¿En qué etapa estás ahora?",
    options: [
      "No tengo producto ni negocio todavía",
      "Tengo una idea, pero no sé si se venderá",
      "Ya tengo producto o servicio",
      "Ya vendo, pero quiero ordenar y escalar"
    ]
  },
  {
    id: 2,
    title: "¿Cuál es tu mayor bloqueo hoy?",
    options: [
      "No sé qué vender",
      "No sé cómo conseguir clientes",
      "No sé crear contenido o anuncios",
      "No tengo una página o tienda",
      "No hago seguimiento a mis prospectos",
      "Estoy desordenado y no avanzo"
    ]
  },
  {
    id: 3,
    title: "¿Cuál es tu objetivo principal en los próximos 30 días?",
    options: [
      "Encontrar un producto para vender",
      "Validar una idea de negocio",
      "Crear mi oferta y landing",
      "Conseguir mis primeros clientes",
      "Organizar mis ventas con CRM",
      "Escalar un negocio que ya tengo"
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
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    trackEvent('submit_diagnostic', { answers, formData });
    setStep(step + 1);
  };

  const getRecommendation = () => {
    const stage = answers[0];
    if (stage === "No tengo producto ni negocio todavía") {
      return {
        title: "Tu ruta recomendada: Descubrir + Validar + Crear Oferta",
        desc: "Empieza encontrando una oportunidad real, valida si existe demanda y crea tu primera oferta antes de invertir dinero.",
        ctaText: "Acceder a la clase gratis",
        ctaLink: CTA_LINKS.freeClass
      };
    }
    if (stage === "Tengo una idea, pero no sé si se venderá") {
      return {
        title: "Tu ruta recomendada: Validar + Crear Landing + Captar Prospectos",
        desc: "Antes de comprar inventario o invertir fuerte, valida si el mercado realmente quiere lo que vas a vender.",
        ctaText: "Quiero entrar al reto",
        ctaLink: CTA_LINKS.checkout
      };
    }
    if (stage === "Ya tengo producto o servicio") {
      return {
        title: "Tu ruta recomendada: Oferta + Landing + Contenido + CRM",
        desc: "Convierte tu producto en una oferta más clara, crea una página de venta y empieza a dar seguimiento a tus prospectos.",
        ctaText: "Quiero entrar al reto",
        ctaLink: CTA_LINKS.checkout
      };
    }
    // "Ya vendo, pero quiero ordenar y escalar"
    return {
      title: "Tu ruta recomendada: CRM + Seguimiento + Automatización + Escala",
      desc: "Ordena tus prospectos, mejora tu seguimiento comercial y convierte más conversaciones en ventas.",
      ctaText: "Quiero entrar al reto",
      ctaLink: CTA_LINKS.checkout
    };
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
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-yellow)' }}>¡Diagnóstico casi listo!</h3>
            <p className="text-muted" style={{ marginBottom: '24px' }}>Ingresa tus datos para ver tu ruta recomendada y guardar tu perfil.</p>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Nombre completo" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <input type="tel" placeholder="WhatsApp (Ej: +51...)" required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <input type="email" placeholder="Correo electrónico" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '16px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#111', color: '#fff', fontSize: '16px' }} />
              <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>Ver mi ruta recomendada</button>
            </form>
          </div>
        )}

        {step > questions.length && (
          <div style={{ textAlign: 'center' }}>
            {(() => {
              const rec = getRecommendation();
              return (
                <>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-yellow)' }}>{rec.title}</h3>
                  <p style={{ fontSize: '18px', marginBottom: '32px', color: 'var(--text-pure)' }}>{rec.desc}</p>
                  <a href={rec.ctaLink} onClick={() => {
                      trackEvent(rec.ctaLink === CTA_LINKS.freeClass ? 'click_free_class' : 'click_cta_offer');
                    }} className="btn btn-primary" style={{ width: '100%' }}>
                    {rec.ctaText}
                  </a>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticModal;
