// src/pages/Contact.jsx
import { PikachuIcon, MailIcon, PhoneIcon, MapPinIcon, SendIcon } from '../components/Icons';
import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  { Icon: MailIcon, title: 'Email', detail: 'pruthvirajkhedkar23@gmail.com' },
  { Icon: PhoneIcon, title: 'Phone', detail: '+91 7875686040' },
  { Icon: MapPinIcon, title: 'Location', detail: 'Ichalkaranji, Maharashtra, India' },
];

const socialLinks = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pruthviraj-khedkar-bba53b28a' },
  { Icon: FaEnvelope, href: 'mailto:pruthvirajkhedkar23@gmail.com' }, // use "mailto:" for email
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'b42ce9f4-9515-4ee5-9a90-5b88a75b2c16', ...formData }),
      });
      const result = await res.json();
      setSubmitStatus(result.success ? 'success' : 'error');
      if (result.success) setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center mb-8">
        <h1 className="text-4xl font-bold ml-4 text-gray-100">
        <span className="text-yellow-400">Contact</span> 
        </h1>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {contactInfo.map(({ Icon, title, detail }, idx) => (
              <div key={idx} className="flex items-start">
                <Icon className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
  <h3 className="font-semibold mb-4">Connect with me</h3>
  <div className="flex space-x-4">
    {socialLinks.map(({ Icon, href }, idx) => (
      <a
        key={idx}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
      >
        <Icon className="text-gray-200 w-5 h-5" /> {/* This line changed */}
      </a>
    ))}
  </div>
</div>

        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
              {submitStatus === 'success'
                ? 'Thank you! Your message has been sent successfully.'
                : 'Oops! Something went wrong. Please try again later.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block font-medium capitalize mb-2">{`Your ${field}`}</label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    rows="5"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 flex items-center justify-center transition-colors"
            >
              {isSubmitting ? 'Sending...' : <><SendIcon className="w-5 h-5 mr-2" />Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
