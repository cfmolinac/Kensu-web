'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function CargaMentalCrianzaPost() {
    return (
        <>
            <Header />
            <article className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-gradient-to-br from-green-50 via-white to-orange-50 py-16">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <Link href="/blog" className="text-kensu-green hover:text-kensu-orange transition-colors mb-6 inline-block">
                            ← Volver al Blog
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-kensu-blue leading-tight mb-4">
                            El colapso invisible: La crisis de la <span className="text-kensu-green">"Carga Mental"</span> en la crianza del Siglo XXI
                        </h1>
                        <div className="flex items-center gap-4 text-gray-600">
                            <span className="font-semibold text-kensu-orange">Por Kensunito</span>
                            <span>•</span>
                            <span>Lectura estimada: 4 minutos</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto px-6 max-w-4xl py-12">
                    <div className="prose prose-lg max-w-none">
                        {/* Intro with floating image */}
                        <div className="relative mb-8">
                            <div className="float-left ml-6 mb-4 w-full md:w-1/3">
                                <Image
                                    src="/assets/images/blog/carga-mental.png"
                                    alt="Ilustración de carga mental en la crianza"
                                    width={240}
                                    height={150}
                                    style={{ marginTop: '0px' }}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                La crianza en 2026 ha dejado de ser una cuestión de instinto para convertirse en una <span className="font-semibold text-kensu-green">gestión logística de alta precisión</span>. Mientras que las generaciones anteriores se enfocaban en la supervivencia y la disciplina, los padres y madres de hoy enfrentan un fenómeno silencioso que la psicología moderna ha etiquetado como <span className="font-semibold text-kensu-orange">Carga Mental</span> y <span className="font-semibold text-kensu-orange">Burnout Parental</span>.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <h2 className="text-3xl font-bold text-kensu-blue mt-12 mb-4" style={{ marginTop: '70px' }}>
                            La gestión invisible: Más allá de las tareas físicas
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A diferencia de las tareas domésticas visibles (limpiar, cocinar, lavar), la carga mental es el <span className="font-semibold text-kensu-green">esfuerzo cognitivo de planificar, organizar y tomar decisiones de manera constante</span>. Según datos recientes del informe Maternify 2025, el <span className="font-semibold text-kensu-orange">78% de las madres</span> reportan síntomas de agotamiento crónico derivados de esta gestión invisible, asumiendo todavía el <span className="font-semibold text-kensu-orange">70% de la planificación del hogar</span> en comparación con sus parejas.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Este "ruido mental" constante —recordar citas médicas, vigilar el calendario escolar, gestionar la dieta familiar y prever necesidades emocionales— está provocando una <span className="font-semibold text-kensu-green">crisis de salud pública</span> que no entiende de fronteras.
                        </p>

                        {/* Section 2 */}
                        <h2 className="text-3xl font-bold text-kensu-blue mt-12 mb-4">
                            El diagnóstico: Burnout Parental
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            El agotamiento no es solo cansancio; es una <span className="font-semibold text-kensu-orange">desconexión emocional</span>. Estudios publicados por los National Institutes of Health (NIH) en su revisión de 2025 indican que el estrés crónico en la crianza está derivando en cuadros de fatiga patológica.
                        </p>
                        <blockquote className="border-l-4 border-kensu-green pl-6 py-4 my-6 bg-green-50 italic text-gray-700">
                            "El burnout parental es un síndrome resultante de la exposición prolongada al estrés de la crianza. Se caracteriza por el agotamiento emocional, el distanciamiento de los hijos y la pérdida de eficacia parental", señala la investigación académica del NIH.
                        </blockquote>

                        {/* Section 3 */}
                        <h2 className="text-3xl font-bold text-kensu-blue mt-12 mb-4">
                            Los nuevos retos: Digitalización y Hiperpaternidad
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A la carga logística se suma la <span className="font-semibold text-kensu-green">presión digital</span>. Según el Estado Mundial de la Infancia de UNICEF, los cuidadores del siglo XXI enfrentan el desafío de proteger la salud mental de sus hijos en un entorno de redes sociales hiperestimulante. Esto obliga a los padres a una formación constante en alfabetización digital, añadiendo otra capa de exigencia a su día a día.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La <span className="font-semibold text-kensu-orange">"hiperpaternidad"</span> —la tendencia a sobreproteger y agendar cada minuto de la vida de los hijos— está pasando factura. Los expertos coinciden en que la presión por ser "padres perfectos" está destruyendo el bienestar de los adultos y, paradójicamente, restando autonomía a los niños.
                        </p>

                        {/* Section 4 */}
                        <h2 className="text-3xl font-bold text-kensu-blue mt-12 mb-4">
                            Hacia una corresponsabilidad real
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            La solución, advierten los organismos de salud, no pasa solo por "ayudar en casa", sino por una <span className="font-semibold text-kensu-green">corresponsabilidad cognitiva</span>. Esto implica que ambos progenitores asuman la responsabilidad de pensar las tareas, no solo de ejecutarlas.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Organismos internacionales como UNICEF subrayan la importancia de que los estados y empresas fomenten políticas de conciliación real, permitiendo que el cuidado de la salud mental de los padres sea una prioridad para el desarrollo saludable de las futuras generaciones.
                        </p>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-br from-kensu-green/10 to-kensu-orange/10 rounded-2xl p-8 my-12 border border-kensu-green/20">
                            <h2 className="text-3xl font-bold text-kensu-blue mb-6">
                                Kensu: Tu aliado contra la Carga Mental
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-6">
                                <div>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        En un mundo donde cada minuto cuenta y la lista de tareas parece infinita, la gestión eficiente se vuelve no un lujo, sino una necesidad. <span className="font-semibold text-kensu-green">Kensu está diseñado precisamente para aliviar esa presión</span>. Nuestra plataforma te permite organizar, planificar y delegar las innumerables responsabilidades de la vida familiar, desde las citas médicas hasta la lista de la compra, pasando por el seguimiento del desarrollo de tus hijos y la coordinación con tu pareja.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Con Kensu, queremos transformar la compleja telaraña de la carga mental en un camino claro y manejable. Porque cuidar de los que más quieres empieza por cuidarte a ti mismo y gestionar mejor tu tiempo y energía. <span className="font-semibold text-kensu-orange">Permítete recuperar el placer de la crianza</span>, dejando que la tecnología se ocupe del estrés.
                                    </p>
                                </div>
                                <div className="flex items-start justify-center">
                                    <Image
                                        src="/assets/images/blog/kensu-aliado.png"
                                        alt="Kensu - Tu aliado contra la carga mental"
                                        width={400}
                                        height={400}
                                        style={{ marginTop: '40px' }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <Link
                                    href="/#cta"
                                    className="inline-block bg-kensu-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-kensu-orange transition-colors shadow-lg"
                                >
                                    Descubre cómo Kensu puede ayudarte
                                </Link>
                            </div>
                        </div>

                        {/* References */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-kensu-blue mb-4">
                                Referencias y Fuentes Oficiales
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a
                                        href="https://unicef.org/es/salud-mental"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-kensu-green hover:text-kensu-orange transition-colors underline"
                                    >
                                        UNICEF: Salud mental y bienestar de los cuidadores
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://pmc.ncbi.nlm.nih.gov"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-kensu-green hover:text-kensu-orange transition-colors underline"
                                    >
                                        National Institutes of Health (NIH): Parental Burnout - Factors and consequences (Update 2025)
                                    </a>
                                </li>
                                <li>
                                    <span className="text-gray-700">Maternify / Informe AXA 2025: Estudio sobre la brecha de salud mental y carga invisible en el hogar</span>
                                </li>
                                <li>
                                    <span className="text-gray-700">OMS (Organización Mundial de la Salud): Directrices sobre salud mental en el entorno laboral y familiar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}
