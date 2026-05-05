export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
        "@id": "https://www.castellocarlovcrotone.it/#castello",
        "name": "Castello di Carlo V",
        "alternateName": ["Castello Carlo V Crotone", "Castello di Carlo Quinto"],
        "description": "Fortezza storica di Crotone costruita nel IX secolo dai Bizantini. Ampliata nel XVI secolo per volere dell'imperatore Carlo V su progetto di Gian Giacomo dell'Acaia. Ospita mostre, eventi culturali e tour guidati.",
        "url": "https://www.castellocarlovcrotone.it",
        "telephone": "+393496661564",
        "email": "multitracce@hotmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Risorgimento",
          "addressLocality": "Crotone",
          "addressRegion": "KR",
          "postalCode": "88900",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.0811,
          "longitude": 17.1285
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "12:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "09:30",
            "closes": "12:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "17:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "€",
        "offers": {
          "@type": "Offer",
          "price": "2.00",
          "priceCurrency": "EUR",
          "description": "Biglietto d'ingresso al Castello di Carlo V"
        },
        "image": [
          "https://www.castellocarlovcrotone.it/images/ingresso-castello.webp",
          "https://www.castellocarlovcrotone.it/images/torre-comandante.webp",
          "https://www.castellocarlovcrotone.it/images/ponte-di-pietra-scaled.webp"
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100086143946961",
          "https://www.instagram.com/castello_carlov/"
        ],
        "containsPlace": [
          { "@type": "Place", "name": "Torre Comandante", "description": "Torre aragonese del XV secolo" },
          { "@type": "Place", "name": "Torre Aiutante", "description": "Torre aragonese del XV secolo" },
          { "@type": "Place", "name": "Ponte di Pietra", "description": "Accesso principale al castello" }
        ],
        "historicEvent": [
          { "@type": "Event", "name": "Costruzione Bizantina", "startDate": "0900" },
          { "@type": "Event", "name": "Progetto Carlo V", "startDate": "1530" }
        ],
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Tour guidati", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Mostre temporanee", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Eventi culturali", "value": true }
        ],
        "isAccessibleForFree": false,
        "publicAccess": true,
        "tourBookingPage": "https://www.castellocarlovcrotone.it/#contatti"
      },
      {
        "@type": "Organization",
        "@id": "https://www.castellocarlovcrotone.it/#multitracce",
        "name": "Associazione Culturale Multitracce",
        "description": "Associazione che gestisce il Castello di Carlo V di Crotone in collaborazione con il Comune di Crotone",
        "email": "multitracce@hotmail.com",
        "telephone": "+393496661564",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100053175285797",
          "https://www.instagram.com/associazione_multitracce/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.castellocarlovcrotone.it/#website",
        "url": "https://www.castellocarlovcrotone.it",
        "name": "Castello di Carlo V — Crotone",
        "inLanguage": "it-IT"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.castellocarlovcrotone.it" },
          { "@type": "ListItem", "position": 2, "name": "Storia", "item": "https://www.castellocarlovcrotone.it/#storia" },
          { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://www.castellocarlovcrotone.it/#gallery" },
          { "@type": "ListItem", "position": 4, "name": "Contatti", "item": "https://www.castellocarlovcrotone.it/#contatti" }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
