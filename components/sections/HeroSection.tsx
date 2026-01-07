'use client';

import { AppleIcon, GooglePlayIcon } from '@/components/icons';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 h-[850px] overflow-hidden pt-70 lg:pt-0">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-kensu-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-kensu-orange rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 h-full flex flex-col justify-center text-center lg:text-left lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-kensu-green/10 rounded-full border border-kensu-green/20">
            <span className="text-kensu-green font-semibold text-sm">✨ Sincronización familiar instantánea</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-kensu-blue leading-tight mb-4">La vida familiar, <span className="text-kensu-green">finalmente</span> organizada.</h1>
          <p className="text-lg text-gray-600 mb-8">Kensu unifica los horarios, tareas y eventos de tus hijos. Menos estrés, más tiempo para disfrutar juntos.</p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <div className="relative">
              <a href="#" className="flex items-center bg-kensu-green text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-xl" onClick={(e) => e.preventDefault()}>
                <AppleIcon className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-xs">Descargar en</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
              <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">Próximamente</span>
            </div>
            <div className="relative">
              <a href="#" className="flex items-center bg-kensu-orange text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed shadow-xl" onClick={(e) => e.preventDefault()}>
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
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center h-full">
          <div className="relative w-[350px] h-[700px]">
            <Image
              src="/assets/images/hero/phone-mockup.png"
              alt="Clay style smartphone mockup, white color, minimalist"
              width={350}
              height={700}
              priority
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 px-[26px] py-[24px] overflow-hidden">
              <Image
                src="/assets/images/screenshots/app-screen.png"
                alt="User interface of a family organizer mobile app"
                width={298}
                height={652}
                priority
                fetchPriority="high"
                unoptimized
                className="w-full h-full object-cover rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
