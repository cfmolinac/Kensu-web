import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kensu-blue mb-4">Organizarse nunca fue tan fácil</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">En solo tres pasos, tendrás el control total de la agenda familiar.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div id="step-1" className="flex items-start space-x-6 mb-8 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-kensu-green">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-kensu-green to-kensu-green/80 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kensu-blue mb-2">Crea tu cuenta familiar</h3>
                <p className="text-gray-600">Regístrate y añade los perfiles de tus hijos. Es rápido, fácil y seguro.</p>
              </div>
            </div>
            <div id="step-2" className="flex items-start space-x-6 mb-8 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-kensu-orange">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-kensu-orange to-kensu-orange/80 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kensu-blue mb-2">Sincroniza las fuentes</h3>
                <p className="text-gray-600">
                  Conecta la app con colegios, academias y centros médicos para recibir toda la información automáticamente.
                </p>
              </div>
            </div>
            <div id="step-3" className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-kensu-blue">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-kensu-blue to-kensu-blue/80 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kensu-blue mb-2">¡Disfruta tu tiempo!</h3>
                <p className="text-gray-600">
                  Con todo organizado, Kensu te notifica lo importante para que te dediques a disfrutar de tu familia.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="h-[500px] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/assets/images/screenshots/family-calendar.png"
                alt="A happy mother and her young daughter sitting on a sofa, smiling as they use a smartphone together. The scene is bright, warm, and has a cozy home atmosphere. Lifestyle photography."
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
