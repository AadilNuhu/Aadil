import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
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
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgwnzbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6 bg-cyan-400"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-200">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdEmail className="text-2xl text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-200">Email</h3>
                  <a 
                    href="mailto:aadilnuhu122@gmail.com" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    aadilnuhu122@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdPhone className="text-2xl text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-200">Phone</h3>
                  <a 
                    href="tel:+233245829714" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    +233 (245) 829-714
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdLocationOn className="text-2xl text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-200">Location</h3>
                  <p className="text-slate-300">
                    Teshie Estate<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4 text-slate-200">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/aadil-nuhu-794054308/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/AadilNuhu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com/aadil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-cyan-400"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-lg overflow-hidden border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.805156715124!2d-0.0552039254195835!3d5.603822294393111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf908f7e55d5d5%3A0x7accd2c5e15e9a9a!2sTeshie%20Estate%2C%20Accra!5e0!3m2!1sen!2sgh!4v1712345678901!5m2!1sen!2sgh"
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
                  className="block text-sm font-medium mb-1 text-slate-200"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-200 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-cyan-400'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-1 text-slate-200"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-200 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-cyan-400'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium mb-1 text-slate-200"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-200 border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-cyan-400'}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-1 text-slate-200"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-200 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-cyan-400'}`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed bg-blue-500 text-slate-200 hover:bg-blue-600"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-cyan-400/10 border border-cyan-400">
                  <p className="text-center text-cyan-400">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-400/10 border border-red-400">
                  <p className="text-center text-red-400">
                    Oops! Something went wrong. Please try again later.
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