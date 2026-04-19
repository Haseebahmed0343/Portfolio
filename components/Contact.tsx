"use client";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Tag,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "haseebahmed0343@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Phone",
      value: "+92 310 6110191",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: "Location",
      value: "Islamabad, Pakistan",
    },
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const response = await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Message sent successfully!");
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#05071a] text-white py-20 px-8 md:px-24"
    >
      <div className="flex items-center gap-4 mb-16">
        <span className="text-cyan-400 font-mono text-2xl">04.</span>
        <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gray-100">
              Let's Work Together!
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm always excited to collaborate on interesting projects and
              explore new opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all group overflow-hidden"
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white scale-90 md:scale-100">
                    {info.icon}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    {info.label}
                  </p>
                  <p className="text-gray-200 text-sm md:text-lg md:font-semibold truncate">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-4xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                  <User className="w-4 h-4" /> Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  name="name"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  name="email"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                  <Phone className="w-4 h-4" /> Phone
                </label>
                <input
                  type="text"
                  placeholder="+92-XXX-XXXXXXX"
                  required
                  name="phone"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                  <Tag className="w-4 h-4" /> Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  name="subject"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                <MessageSquare className="w-4 h-4" /> Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message..."
                required
                name="message"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-200 resize-none"
              ></textarea>
            </div>

            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-10 py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-indigo-500/25">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
