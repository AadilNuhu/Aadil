import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
            Get In Touch
          </h2>
          <div 
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: '#22d3ee' }}
          ></div>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#e2e8f0' }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdEmail className="text-2xl" style={{ color: '#22d3ee' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#e2e8f0' }}>Email</h3>
                  <a 
                    href="mailto:aadil@example.com" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    aadil@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdPhone className="text-2xl" style={{ color: '#22d3ee' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#e2e8f0' }}>Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdLocationOn className="text-2xl" style={{ color: '#22d3ee' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#e2e8f0' }}>Location</h3>
                  <p className="text-gray-300">
                    123 Developer Street<br />
                    Tech City, TC 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#e2e8f0' }}>Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/aadil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/aadil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com/aadil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449240148!3d40.74844047138986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#e2e8f0' }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-cyan-400'}`}
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#e2e8f0' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-cyan-400'}`}
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#e2e8f0' }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-cyan-400'}`}
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: '#e2e8f0' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-cyan-400'}`}
                  style={{ 
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155'
                  }}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#3b82f6',
                    color: '#e2e8f0'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#22d3ee20', border: '1px solid #22d3ee' }}>
                  <p className="text-center" style={{ color: '#22d3ee' }}>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;