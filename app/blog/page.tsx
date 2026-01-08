'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        slug: 'carga-mental-crianza',
        title: 'El colapso invisible: La crisis de la "Carga Mental" en la crianza del Siglo XXI',
        excerpt: 'La crianza en 2026 ha dejado de ser una cuestión de instinto para convertirse en una gestión logística de alta precisión. Descubre cómo el burnout parental afecta a millones de familias.',
        author: 'Kensunito',
        readTime: '4 minutos',
        date: 'Enero 2026',
        image: '/assets/images/blog/carga-mental.png',
        category: 'Salud Mental',
    },
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-green-50 via-white to-orange-50 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-kensu-blue mb-4">
                            Blog de <span className="text-kensu-green">Kensu</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Consejos, estudios y recursos para navegar la crianza moderna con menos estrés y más felicidad
                        </p>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-kensu-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-kensu-blue mb-3 group-hover:text-kensu-green transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-kensu-orange">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State (cuando haya más posts) */}
                    {blogPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">Próximamente más contenido...</p>
                        </div>
                    )}
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-kensu-green/10 to-kensu-orange/10 py-16">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-kensu-blue mb-4">
                            ¿Listo para simplificar tu vida familiar?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Descubre cómo Kensu puede ayudarte a reducir la carga mental y disfrutar más de tu familia
                        </p>
                        <Link
                            href="/#cta"
                            className="inline-block bg-kensu-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kensu-orange transition-colors shadow-xl"
                        >
                            Comenzar ahora
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
