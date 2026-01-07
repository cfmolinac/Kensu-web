export default function JsonLd() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "Kensu",
        "description": "Gestión familiar inteligente. Organiza la vida familiar de manera sencilla y eficiente.",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": ["iOS", "Android"],
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Kensu",
            "url": "https://kensuapp.com",
            "logo": "https://kensuapp.com/assets/images/logo/kensu-logo.png",
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61585563460189",
                "https://www.instagram.com/kensu_app/"
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
    );
}
