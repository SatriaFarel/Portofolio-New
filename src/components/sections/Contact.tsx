import { Reveal } from '../ui/Reveal';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_e3bfxus",
      "template_ginygyg",
      formData,
      "bStUJ8o3G3IGLjDyd"
    )
    .then(() => {
      alert("Pesan berhasil dikirim!");
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Gagal kirim: " + err.text);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" id="contact">
      <div className="max-w-5xl mx-auto px-6">

        <Reveal width="100%">
          <div className="text-center mb-14">
            <span className="text-blue-400/80 uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <Reveal>
            <div className="space-y-6">

              {[
                { icon: Mail, text: "satriafarel40@gmail.com" },
                { icon: Phone, text: "+62 882-9930-9375" },
                { icon: MapPin, text: "Jakarta, Indonesia" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 transition"
                >
                  <item.icon className="text-blue-500" size={20} />
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}

            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.1}>
            <form
              onSubmit={sendEmail}
              className="space-y-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm"
            >

              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium 
                hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}