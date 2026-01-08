'use client';

import { AppleIcon, GooglePlayIcon } from '@/components/icons';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="cta" className="bg-gradient-to-r from-kensu-green to-kensu-orange overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Recupera el control de tu agenda familiar</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Únete a miles de padres que ya organizan su vida familiar de una forma más inteligente. ¡Es gratis!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative flex-1 sm:flex-none">
                <a href="#" className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-lg w-full sm:w-auto" onClick={(e) => e.preventDefault()}>
                  <AppleIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs whitespace-nowrap">Descargar en</p>
                    <p className="text-lg font-semibold whitespace-nowrap">App Store</p>
                  </div>
                </a>
                <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">Próximamente</span>
              </div>
              <div className="relative flex-1 sm:flex-none">
                <a href="#" className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-lg w-full sm:w-auto" onClick={(e) => e.preventDefault()}>
                  <GooglePlayIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs whitespace-nowrap">DISPONIBLE EN</p>
                    <p className="text-lg font-semibold whitespace-nowrap">Google Play</p>
                  </div>
                </a>
                <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">Próximamente</span>
              </div>
            </div>
          </div>

          {/* Kensunito mascot */}
          <div className="hidden lg:block absolute -right-0 top-1/2 -translate-y-1/2">
            <Image
              src="/assets/images/mascot/kensunito.png"
              alt="Kensunito mascot"
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
