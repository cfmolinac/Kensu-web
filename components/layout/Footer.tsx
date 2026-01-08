import { FacebookIcon, InstagramIcon } from '@/components/icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-kensu-light-gray">
      <div className="container mx-auto px-6 py-10">
        {/* Layout Mobile: 2 columnas arriba */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo - Mobile: columna izquierda */}
          <div className="col-span-1 md:col-span-1">
            <div>
              <Image
                alt="Kensu Logo"
                src="/assets/images/logo/logo-full.png"
                id="i6rsss"
                width={150}
                height={85}
                className="w-32 md:w-36 h-auto"
              />
            </div>
          </div>

          {/* Producto y Compañía - Mobile: columna derecha */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-kensu-blue mb-3 text-sm md:text-base">Producto</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <a href="/#features" className="text-gray-600 hover:text-kensu-blue">
                  Características
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-gray-600 hover:text-kensu-blue">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-kensu-blue">
                  Blog
                </a>
              </li>
            </ul>

            {/* Compañía dentro de la misma columna - solo mobile */}
            <div className="md:hidden mt-4">
              <h4 className="font-bold text-kensu-blue mb-3 text-sm">Compañía</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/quienes-somos" className="text-gray-600 hover:text-kensu-blue">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="mailto:contacto@kensulab.cl" className="text-gray-600 hover:text-kensu-blue">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="font-bold text-kensu-blue mb-4">Compañía</h4>
            <ul className="space-y-2">
              <li>
                <a href="/quienes-somos" className="text-gray-600 hover:text-kensu-blue">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="mailto:contacto@kensulab.cl" className="text-gray-600 hover:text-kensu-blue">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Síguenos - Desktop: columna derecha */}
          <div className="hidden md:block">
            <h4 className="font-bold text-kensu-blue mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585563460189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-kensu-blue transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/kensu_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-kensu-blue transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Síguenos - Mobile: fila completa abajo */}
        <div className="md:hidden mt-8 pt-6 border-t border-gray-300">
          <h4 className="font-bold text-kensu-blue mb-4 text-sm">Síguenos</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61585563460189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-kensu-blue transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/kensu_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-kensu-blue transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-gray-600">
          <p>&copy; 2026 Kensu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
