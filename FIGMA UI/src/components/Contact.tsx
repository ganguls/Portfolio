import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from './Icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitMessage('>> MESSAGE_SENT: Encrypted transmission successful. Response incoming...');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> CONTACT_CHANNEL'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto font-mono text-sm">
            {'>> Secure communication channel active. Encrypted connection established.'}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg mb-2 text-blue-400 font-mono">{'> EMAIL'}</h3>
              <a href="mailto:security@cypher.sec" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                security@cypher.sec
              </a>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg mb-2 text-blue-400 font-mono">{'> PHONE'}</h3>
              <a href="tel:+15551234567" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 text-center hover:border-blue-400 transition-all shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg mb-2 text-blue-400 font-mono">{'> LOCATION'}</h3>
              <p className="text-blue-200 font-mono text-sm">SECTOR_7 / UNDISCLOSED</p>
            </div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-8 max-w-2xl mx-auto shadow-lg shadow-blue-500/10">
            <div className="mb-4 text-blue-400 font-mono text-sm">
              {'>> INITIALIZING_SECURE_FORM...'}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-blue-400 font-mono text-sm">
                  {'> NAME'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:border-blue-400 font-mono backdrop-blur-sm"
                  placeholder="ENTER_NAME"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-blue-400 font-mono text-sm">
                  {'> EMAIL'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:border-blue-400 font-mono backdrop-blur-sm"
                  placeholder="user@domain.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-blue-400 font-mono text-sm">
                  {'> MESSAGE'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 text-blue-300 focus:outline-none focus:border-blue-400 resize-none font-mono backdrop-blur-sm"
                  placeholder="ENTER_ENCRYPTED_MESSAGE..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-blue-500/20 text-blue-400 border border-blue-500 hover:bg-blue-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2 font-mono shadow-lg shadow-blue-500/20"
              >
                {isSubmitting ? (
                  '>> TRANSMITTING...'
                ) : (
                  <>
                    <Send size={20} />
                    <span>{'> SEND_MESSAGE'}</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="mt-4 p-4 bg-blue-500/10 text-blue-400 border border-blue-500/30 font-mono text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
