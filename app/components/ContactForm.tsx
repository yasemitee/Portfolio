'use client';
import { useState } from 'react';
import { CheckCircle, Send, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 border bg-neutral-800/50 border-neutral-700 text-neutral-200 focus:border-indigo-500 focus:bg-neutral-800';

  return (
    <div className="w-full p-8 rounded-2xl border relative overflow-hidden bg-neutral-900 border-neutral-800">
      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-white">
            Get in Touch
          </h3>
          <p className="text-sm text-neutral-400">
            Have a project in mind or just want to say hi? Send me a message
            below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClasses}
                placeholder="Name Surname"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClasses}
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClasses} resize-none`}
              placeholder="Your message here..."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 bg-white text-neutral-900 hover:bg-neutral-200"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={16} />
                  Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle size={16} />
                  Error
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
