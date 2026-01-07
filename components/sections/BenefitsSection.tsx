import { CheckIcon, LockIcon, UserShieldIcon } from '@/components/icons';
import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-kensu-green/10 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/assets/images/screenshots/happy-family.png"
              alt="Happy diverse family with children using smartphone together at home, smiling and organizing their schedule, warm lighting, modern interior, lifestyle photography, vibrant colors"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-kensu-green/20 rounded-full">
              <span className="text-kensu-green font-semibold text-sm">Para toda la familia</span>
            </div>
            <h2 className="text-4xl font-bold text-kensu-blue mb-6">Conecta a todos en un solo lugar</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Mantén a todos informados y sincronizados. Papá, mamá, abuelos... todos pueden estar al día con las actividades de los niños.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-kensu-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-kensu-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-kensu-blue mb-1">Múltiples perfiles</h4>
                  <p className="text-gray-600">Crea perfiles para cada miembro de la familia.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-kensu-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-kensu-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-kensu-blue mb-1">Sincronización en tiempo real</h4>
                  <p className="text-gray-600">Todos ven los cambios al instante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 px-4 py-2 bg-kensu-orange/20 rounded-full">
              <span className="text-kensu-orange font-semibold text-sm">Seguridad garantizada</span>
            </div>
            <h2 className="text-4xl font-bold text-kensu-blue mb-6">Tus datos, siempre protegidos</h2>
            <p className="text-gray-600 mb-6 text-lg">
              La privacidad de tu familia es nuestra máxima prioridad. Usamos encriptación de nivel bancario para proteger toda tu información.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-kensu-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LockIcon className="w-5 h-5 text-kensu-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-kensu-blue mb-1">Encriptación total</h4>
                  <p className="text-gray-600">Tus datos están cifrados de extremo a extremo.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-kensu-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserShieldIcon className="w-5 h-5 text-kensu-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-kensu-blue mb-1">Control de acceso</h4>
                  <p className="text-gray-600">Tú decides quién ve qué información.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/assets/images/screenshots/phone-mockup-2.png"
              alt="Father and son looking at a tablet screen together, smiling. They are in a modern, well-lit living room. The focus is on their interaction and the technology. Lifestyle photography."
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
