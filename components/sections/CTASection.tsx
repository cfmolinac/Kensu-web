'use client';

import { AppleIcon, GooglePlayIcon } from '@/components/icons';

export default function CTASection() {
  return (
    <section id="cta" className="bg-gradient-to-r from-kensu-green to-kensu-orange">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Recupera el control de tu agenda familiar</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Únete a miles de padres que ya organizan su vida familiar de una forma más inteligente. ¡Es gratis!
        </p>
        <div className="flex justify-center space-x-4">
          <div className="relative">
            <a href="#" className="flex items-center bg-white text-black px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-lg" onClick={(e) => e.preventDefault()}>
              <AppleIcon className="w-6 h-6 mr-3" />
              <div>
                <p className="text-xs">Descargar en</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </a>
            <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">Próximamente</span>
          </div>
          <div className="relative">
            <a href="#" className="flex items-center bg-white text-black px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-lg" onClick={(e) => e.preventDefault()}>
              <GooglePlayIcon className="w-6 h-6 mr-3" />
              <div>
                <p className="text-xs">DISPONIBLE EN</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </a>
            <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">Próximamente</span>
          </div>
        </div>
      </div>
    </section>
  );
}
