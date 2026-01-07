import { BellIcon, CalendarIcon, ShieldIcon } from '@/components/icons';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-kensu-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-kensu-blue mb-4">Una app para organizarnos todos&nbsp;</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Kensu centraliza la información importante para que puedas enfocarte en lo que de verdad importa: tu familia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            id="feature-card-1"
            className="bg-gradient-to-br from-kensu-green/10 to-white p-8 rounded-xl shadow-lg border-2 border-kensu-green/20 text-left hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="bg-kensu-green text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <BellIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-kensu-blue mb-2">Notificaciones Unificadas</h3>
            <p className="text-gray-600">
              Recibe al instante todas las comunicaciones del colegio, actividades extraescolares y citas médicas en un solo feed.
            </p>
          </div>
          <div
            id="feature-card-2"
            className="bg-gradient-to-br from-kensu-orange/10 to-white p-8 rounded-xl shadow-lg border-2 border-kensu-orange/20 text-left hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="bg-kensu-orange text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <CalendarIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-kensu-blue mb-2">Calendario Familiar</h3>
            <p className="text-gray-600">
              Visualiza los horarios de todos los miembros de la familia, evita solapamientos y planifica con antelación.
            </p>
          </div>
          <div
            id="feature-card-3"
            className="bg-gradient-to-br from-kensu-blue/10 to-white p-8 rounded-xl shadow-lg border-2 border-kensu-blue/20 text-left hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="bg-kensu-blue text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <ShieldIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-kensu-blue mb-2">Permisos y Autorizaciones</h3>
            <p className="text-gray-600">Gestiona y aprueba permisos para poder ayudarte con los mensajes de whatsapp y correo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
