import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos | Kensu Lab - Nuestra Historia y Equipo",
  description: "Conoce al equipo de Kensu Lab. Dos ingenieros de la UC creando la solución definitiva para la organización familiar escolar.",
  openGraph: {
    title: "Quiénes Somos | Kensu Lab",
    description: "Del caos a la claridad: conoce la historia detrás de Kensu",
    url: 'https://kensuapp.com/quienes-somos',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-kensu-green rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-kensu-orange rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-kensu-blue leading-tight mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Del caos a la claridad: la historia detrás de la solución que devuelve tiempo a las familias
            </p>
          </div>
        </section>

        {/* El Origen Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-kensu-blue mb-6">El Origen: Del Caos a la Claridad</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong className="text-kensu-blue">Kensu</strong>, nace de una realidad que compartimos millones de padres: la sensación de que, a pesar de vivir en un mundo hiperconectado, la gestión escolar de nuestros hijos se ha vuelto una <strong>fuente de carga mental abrumadora</strong>. Grupos de WhatsApp interminables, correos traspapelados y la eterna pregunta: <em>"¿Qué tengo que comprar para mañana?"</em>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                No fundamos Kensu para ser una aplicación más en tu teléfono. La fundamos para ser el <strong className="text-kensu-green">aplicacion inteligente</strong> que separa el ruido de la información relevante con IA, devolviéndote lo más valioso: <strong>tiempo y tranquilidad</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo Section */}
        <section className="py-20 bg-gradient-to-b from-kensu-light-gray to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-kensu-blue mb-6 text-center">El Equipo detrás de la Visión</h2>
              <p className="text-gray-600 text-lg text-center leading-relaxed">
                Kensu Lab es liderado por dos ingenieros de la Universidad Católica de Chile, que combinan el rigor técnico con la experiencia real del mundo empresarial y la vida familiar. En conjunto con personas apasionadas que han contado sus testimonios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cristóbal Molina */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-kensu-green/20 hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-kensu-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-kensu-blue mb-1">Cristóbal Molina</h3>
                  <p className="text-kensu-green font-semibold mb-4">Co-Founder</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Ingeniero Civil Industrial PUC</strong> con 15 años de experiencia liderando proyectos tecnológicos en el sector retail. Como padre de dos niños pequeños, Cristóbal vive diariamente los desafíos de balancear la vida laboral con la logística familiar, siendo el <strong className="text-kensu-blue">principal arquitecto</strong> de la solución que hoy construimos.
                </p>
              </div>

              {/* Ariel Gana */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-kensu-orange/20 hover:shadow-2xl transition-all">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-kensu-orange/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-kensu-blue mb-1">Ariel Gana</h3>
                  <p className="text-kensu-orange font-semibold mb-4">Co-Founder</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Ingeniero Civil PUC</strong> y empresario con 15 años de trayectoria en la creación y gestión de negocios. Ariel aporta la <strong className="text-kensu-blue">visión estratégica y operativa</strong> necesaria para garantizar que Kensu sea una plataforma sólida, segura y escalable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hoja de Ruta Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-kensu-blue mb-6">Nuestra Hoja de Ruta</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Hoy nos encontramos en una <strong className="text-kensu-green">etapa emocionante</strong>: construyendo la base de lo que será el estándar de organización familiar. Estamos afinando nuestra tecnología de integración de calendarios para que tu vida personal y escolar finalmente hablen el mismo idioma.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestra visión no se detiene en el recordatorio. A futuro, Kensu no solo te dirá qué necesitas, sino que <strong className="text-kensu-orange">te ayudará a conseguirlo</strong>, cerrando el círculo de la organización para que nunca más una emergencia de último minuto interrumpa tus momentos en familia.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-kensu-green to-kensu-orange py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Únete a nuestra Prueba de Concepto</h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              Estamos próximos a iniciar nuestras pruebas de validación y buscamos padres que quieran ser parte del diseño de esta solución. Si quieres ser de los primeros en probar Kensu o tienes alguna duda sobre nuestra visión, escríbenos directamente.
            </p>
            <a
              href="mailto:contacto@kensulab.cl"
              className="inline-block bg-white text-kensu-blue px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl font-semibold text-lg"
            >
              📧 contacto@kensulab.cl
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
