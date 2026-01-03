export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Seamless 5G Connectivity
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            We build next-generation wireless infrastructure for enterprises and smart cities.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Private 5G", "Secure on-premise 5G networks."],
            ["Edge Computing", "Ultra-low latency processing."],
            ["IoT Connectivity", "Massive device connectivity."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Let’s work together</h2>
          <p className="text-gray-600 mb-8">
            Email us and we’ll get back to you within one business day.
          </p>
          <a
            href="mailto:contact@kakshaspacetech.com"
            className="inline-block bg-blue-600 !text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            contact@kakshaspacetech.com
          </a>
        </div>
      </section>
    </div>
  );
}
