'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header id="header" className="bg-white/80 backdrop-blur-md sticky top-0 z-[100]">
      <nav className="container mx-auto px-4 py-2 lg:px-6 lg:py-4">
        {/* Mobile + Tablet: Logo y Botón en la primera fila */}
        <div className="flex lg:hidden justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <a href="/">
              <Image
                alt="Kensu Logo"
                src="/assets/images/logo/logo-3.png"
                id="iskty"
                width={188}
                height={80}
                priority
                style={{ width: '188px', height: 'auto' }}
                className="cursor-pointer lg:!w-[188px]"
              />
            </a>
          </div>

          {/* Botón Descargar Mobile + Tablet */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <a href="#" className="bg-kensu-orange text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-lg font-semibold opacity-60 cursor-not-allowed text-sm" onClick={(e) => e.preventDefault()}>Descargar App</a>
              <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow-md whitespace-nowrap">Próximamente</span>
            </div>
          </div>
        </div>

        {/* Mobile + Tablet: Menú en segunda fila */}
        <div className="flex lg:hidden flex-wrap gap-3 justify-center">
          <a href="/" className="text-gray-600 hover:text-kensu-blue transition-colors text-sm">Inicio</a>
          <a href="/#features" className="text-gray-600 hover:text-kensu-blue transition-colors text-sm">Características</a>
          <a href="/#how-it-works" className="text-gray-600 hover:text-kensu-blue transition-colors text-sm">Cómo Funciona</a>
          <a href="/blog" className="text-gray-600 hover:text-kensu-blue transition-colors text-sm">Blog</a>
          <a href="/quienes-somos" className="text-gray-600 hover:text-kensu-blue transition-colors text-sm">Quiénes Somos</a>
        </div>

        {/* Desktop: Todo en una sola fila (Logo - Menú - Botón) */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo Desktop */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <Image
                alt="Kensu Logo"
                src="/assets/images/logo/logo-3.png"
                id="iskty"
                width={188}
                height={80}
                priority
                style={{ width: '188px', height: 'auto' }}
                className="cursor-pointer"
              />
            </a>
          </div>

          {/* Menú Desktop Centrado */}
          <div className="flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-kensu-blue transition-colors">Inicio</a>
            <a href="/#features" className="text-gray-600 hover:text-kensu-blue transition-colors">Características</a>
            <a href="/#how-it-works" className="text-gray-600 hover:text-kensu-blue transition-colors">Cómo Funciona</a>
            <a href="/blog" className="text-gray-600 hover:text-kensu-blue transition-colors">Blog</a>
            <a href="/quienes-somos" className="text-gray-600 hover:text-kensu-blue transition-colors">Quiénes Somos</a>
          </div>

          {/* Botón Desktop */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <a href="#" className="bg-kensu-orange text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-lg font-semibold opacity-60 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Descargar App</a>
              <span className="absolute -top-2 -right-2 bg-kensu-blue text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md whitespace-nowrap">Próximamente</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
