import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
          <div className="bg-gradient-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-5">
            <h3 className="h4 fw-bold mb-4">Let's Work Together</h3>
            <p className="text-muted mb-4">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-box flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="fw-semibold mb-1">Email</h5>
                  <p className="text-muted mb-0">contact@example.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="icon-box flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="fw-semibold mb-1">Phone</h5>
                  <p className="text-muted mb-0">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="icon-box flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="fw-semibold mb-1">Location</h5>
                  <p className="text-muted mb-0">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn btn-gradient text-white w-100 py-3 fw-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
