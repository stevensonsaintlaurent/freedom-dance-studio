import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        studioRental: "Studio Rental",
        upcomingEvents: "Upcoming Events",
        classes: "Classes",
        freedomClasses: "Freedom Dance Classes",
        freedomClassesDescription: "Classes offered by Freedom Dance Studio",
        hostedClasses: "Classes Hosted at Freedom",
        hostedClassesDescription: "Classes from independent instructors",
        schedule: "Schedule",
        about: "About",
        prices: "Prices",
        teachers: "Teachers",
        testimonials: "Testimonials",
        gallery: "Gallery",
        contact: "Contact",
        more: "More",
        bookClass: "Book a Class",
        bookFirstClass: "Book Your First Class",
      },

      hero: {
        common: {
          upcomingAtFreedom: "Upcoming Event at Freedom Dance",
          lasVegasCommunity: "Las Vegas Dance Community",
          date: "Date",
          time: "Time",
          price: "Price",
          rentStudio: "Rent the Studio",
          upcomingEvent: "Upcoming Event",
          members: "Members",
          nonMembers: "Non-Members",
          free: "FREE",
          cover: "Cover",
          studioName: "Freedom Dance Studio",
          imageAlt: "Freedom Dance Studio Las Vegas",
          danceLearnCreate: "Dance • Learn • Create",
          communitySpaceFreedom: "Your community. Your space. Your freedom.",
        },

        workshop: {
          eyebrow: "UPCOMING WORKSHOP • SALSA ON2",
          title: "Salsa On2",
          highlight: "Ladies Styling.",
          description:
            "Join Sandra for a special Salsa On2 Ladies Styling workshop focused on Mambo Footwork & Fusion, Ladies' Styling, Choreography and Performance Quality. Beginner / Level 1 friendly.",
          date: "August 22, 2026",
          time: "2:00 PM – 4:00 PM",
          priceLabel: "Non-Members",
          secondaryPriceLabel: "Members & Instructors",
          button: "View Workshop",
        },

        havasu: {
          eyebrow: "UPCOMING EVENT • DANCE • TRAVEL",
          title: "SBK Lake Havasu",
          highlight: "Trip.",
          description:
            "Travel, dance and connect with the Freedom Dance community. Join teachers and students for an unforgettable weekend together.",
          date: "August 28–30, 2026",
          time: "Friday – Sunday",
          price: "Join Us",
          priceLabel: "Trip",
          button: "View Trip",
        },

        social: {
          eyebrow: "UPCOMING EVENT • FREEDOM DANCE",
          title: "SBK Social",
          highlight: "Night.",
          description:
            "Join us for a Salsa on 2 workshop with Freeman from 8:00 PM–10:00 PM, followed by the Freedom Dance Social from 10:00 PM–2:00 AM with music by Maximo. Early bird workshop price is $25. Free for members and instructors. $35 at the door.",
          date: "September 4, 2026",
          time: "8:00 PM – 2:00 AM",
          priceLabel: "Cover",
          button: "Register Now",
        },

        learn: {
          eyebrow: "LEARN • DANCE • GROW",
          title: "Learn How to",
          highlight: "Dance.",
          description:
            "Book your first class and discover Salsa, Bachata, Urban Kiz, Konpa and more in a welcoming dance community.",
          button: "Book a Class",
        },

        studio: {
          eyebrow: "YOUR CLASS • YOUR EVENT • YOUR STUDIO",
          title: "Host Your Class.",
          highlight: "Your Place.",
          description:
            "Need a space for your dance class, workshop, rehearsal, private lesson, celebration, or special event? Make Freedom Dance Studio your space.",
          button: "Book the Studio",
        },

        community: {
          eyebrow: "FREEDOM DANCE COMMUNITY",
          title: "Dance More.",
          highlight: "Connect More.",
          description:
            "Meet dancers, make friends, learn new styles, and become part of a growing community that loves to dance.",
          button: "Join Our Community",
        },
      },

      testimonials: {
        title: "What Our Students Say",
        subtitle:
          "Discover why dancers, musicians, families, and event organizers love Freedom Dance Studio.",

        student: "Student",
        testimonial: "testimonial",
        defaultStudent: "Freedom Dance Student",
        outOfFiveStars: "out of 5 stars",

        readMore: "Read more",
        readLess: "Read less",

        videoTitle: "Video Testimonials",
        videoIframeTitle: "Freedom Dance Studio video testimonial",
        videoUnavailable: "Video unavailable",
        defaultVideoTitle: "Freedom Dance Studio Testimonial",
        videoDescription:
          "Watch and experience the energy, community, and atmosphere of Freedom Dance Studio.",
        watchYoutube: "Watch on YouTube",

        whyTitle: "Why People Love Freedom Dance Studio",

        cards: {
          classes: {
            title: "Amazing Classes",
            description:
              "Salsa, Bachata, Urban Kiz, Konpa, Kids Dance, Ballet, Hip-Hop, Yoga, and more.",
          },

          instructors: {
            title: "Professional Instructors",
            description:
              "Friendly teachers focused on helping every student grow from beginner to advanced.",
          },

          liveMusic: {
            title: "Live Music",
            description:
              "Dance with live bands and musicians during special events and socials.",
          },

          floor: {
            title: "Beautiful Dance Floor",
            description:
              "Spacious dance rooms with professional flooring, mirrors, and lighting.",
          },

          rentals: {
            title: "Event Rentals",
            description:
              "Perfect for birthdays, weddings, rehearsals, workshops, private classes, and celebrations.",
          },

          community: {
            title: "Friendly Community",
            description:
              "Join a welcoming family where everyone supports each other's dance journey.",
          },
        },
      },
    },
  },

  es: {
    translation: {
      nav: {
        home: "Inicio",
        studioRental: "Alquiler del Estudio",
        upcomingEvents: "Próximos Eventos",
        classes: "Clases",
        freedomClasses: "Clases de Freedom Dance",
        freedomClassesDescription: "Clases ofrecidas por Freedom Dance Studio",
        hostedClasses: "Clases en Freedom",
        hostedClassesDescription: "Clases de instructores independientes",
        schedule: "Horario",
        about: "Nosotros",
        prices: "Precios",
        teachers: "Instructores",
        testimonials: "Testimonios",
        gallery: "Galería",
        contact: "Contacto",
        more: "Más",
        bookClass: "Reservar una Clase",
        bookFirstClass: "Reserva tu Primera Clase",
      },

      hero: {
        common: {
          upcomingAtFreedom: "Próximo evento en Freedom Dance",
          lasVegasCommunity: "Comunidad de baile de Las Vegas",
          date: "Fecha",
          time: "Hora",
          price: "Precio",
          rentStudio: "Alquilar el estudio",
          upcomingEvent: "Próximo evento",
          members: "Miembros",
          nonMembers: "No miembros",
          free: "GRATIS",
          cover: "Entrada",
          studioName: "Freedom Dance Studio",
          imageAlt: "Freedom Dance Studio Las Vegas",
          danceLearnCreate: "Baila • Aprende • Crea",
          communitySpaceFreedom: "Tu comunidad. Tu espacio. Tu libertad.",
        },

        workshop: {
          eyebrow: "PRÓXIMO TALLER • SALSA ON2",
          title: "Salsa On2",
          highlight: "Ladies Styling.",
          description:
            "Únete a Sandra para un taller especial de Salsa On2 Ladies Styling enfocado en Mambo Footwork & Fusion, estilo femenino, coreografía y calidad de presentación. Apto para principiantes / Nivel 1.",
          date: "22 de agosto de 2026",
          time: "2:00 PM – 4:00 PM",
          priceLabel: "No miembros",
          secondaryPriceLabel: "Miembros e instructores",
          button: "Ver taller",
        },

        havasu: {
          eyebrow: "PRÓXIMO EVENTO • BAILE • VIAJE",
          title: "SBK Lake Havasu",
          highlight: "Viaje.",
          description:
            "Viaja, baila y conéctate con la comunidad de Freedom Dance. Únete a profesores y estudiantes para un fin de semana inolvidable.",
          date: "28–30 de agosto de 2026",
          time: "Viernes – Domingo",
          price: "Únete",
          priceLabel: "Viaje",
          button: "Ver viaje",
        },

        social: {
          eyebrow: "PRÓXIMO EVENTO • FREEDOM DANCE",
          title: "SBK Social",
          highlight: "Noche.",
          description:
            "Únete a nuestro taller de Salsa On2 con Freeman de 8:00 PM a 10:00 PM, seguido por el social de Freedom Dance de 10:00 PM a 2:00 AM con música de Maximo. El precio anticipado del taller es $25. Gratis para miembros e instructores. $35 en la puerta.",
          date: "4 de septiembre de 2026",
          time: "8:00 PM – 2:00 AM",
          priceLabel: "Entrada",
          button: "Regístrate ahora",
        },

        learn: {
          eyebrow: "APRENDE • BAILA • CRECE",
          title: "Aprende a",
          highlight: "Bailar.",
          description:
            "Reserva tu primera clase y descubre Salsa, Bachata, Urban Kiz, Konpa y más en una comunidad de baile acogedora.",
          button: "Reservar una clase",
        },

        studio: {
          eyebrow: "TU CLASE • TU EVENTO • TU ESTUDIO",
          title: "Organiza tu clase.",
          highlight: "Tu espacio.",
          description:
            "¿Necesitas un espacio para tu clase de baile, taller, ensayo, clase privada, celebración o evento especial? Haz de Freedom Dance Studio tu espacio.",
          button: "Reservar el estudio",
        },

        community: {
          eyebrow: "COMUNIDAD FREEDOM DANCE",
          title: "Baila más.",
          highlight: "Conecta más.",
          description:
            "Conoce bailarines, haz amigos, aprende nuevos estilos y forma parte de una comunidad en crecimiento que ama bailar.",
          button: "Únete a nuestra comunidad",
        },
      },

      testimonials: {
        title: "Lo Que Dicen Nuestros Estudiantes",
        subtitle:
          "Descubre por qué bailarines, músicos, familias y organizadores de eventos aman Freedom Dance Studio.",

        student: "Estudiante",
        testimonial: "testimonio",
        defaultStudent: "Estudiante de Freedom Dance",
        outOfFiveStars: "de 5 estrellas",

        readMore: "Leer más",
        readLess: "Leer menos",

        videoTitle: "Testimonios en Video",
        videoIframeTitle: "Testimonio en video de Freedom Dance Studio",
        videoUnavailable: "Video no disponible",
        defaultVideoTitle: "Testimonio de Freedom Dance Studio",
        videoDescription:
          "Mira y experimenta la energía, la comunidad y el ambiente de Freedom Dance Studio.",
        watchYoutube: "Ver en YouTube",

        whyTitle: "Por Qué la Gente Ama Freedom Dance Studio",

        cards: {
          classes: {
            title: "Clases Increíbles",
            description:
              "Salsa, Bachata, Urban Kiz, Konpa, baile infantil, Ballet, Hip-Hop, Yoga y más.",
          },

          instructors: {
            title: "Instructores Profesionales",
            description:
              "Profesores amigables enfocados en ayudar a cada estudiante a crecer desde principiante hasta avanzado.",
          },

          liveMusic: {
            title: "Música en Vivo",
            description:
              "Baila con bandas y músicos en vivo durante eventos especiales y sociales.",
          },

          floor: {
            title: "Hermosa Pista de Baile",
            description:
              "Amplias salas de baile con piso profesional, espejos e iluminación.",
          },

          rentals: {
            title: "Alquiler para Eventos",
            description:
              "Perfecto para cumpleaños, bodas, ensayos, talleres, clases privadas y celebraciones.",
          },

          community: {
            title: "Comunidad Amigable",
            description:
              "Únete a una familia acogedora donde todos apoyan el crecimiento de los demás en el baile.",
          },
        },
      },
    },
  },

  fr: {
    translation: {
      nav: {
        home: "Accueil",
        studioRental: "Location du Studio",
        upcomingEvents: "Événements à venir",
        classes: "Cours",
        freedomClasses: "Cours Freedom Dance",
        freedomClassesDescription: "Cours proposés par Freedom Dance Studio",
        hostedClasses: "Cours accueillis chez Freedom",
        hostedClassesDescription:
          "Cours donnés par des professeurs indépendants",
        schedule: "Horaire",
        about: "À propos",
        prices: "Tarifs",
        teachers: "Professeurs",
        testimonials: "Témoignages",
        gallery: "Galerie",
        contact: "Contact",
        more: "Plus",
        bookClass: "Réserver un cours",
        bookFirstClass: "Réservez votre premier cours",
      },

      hero: {
        common: {
          upcomingAtFreedom: "Prochain événement chez Freedom Dance",
          lasVegasCommunity: "Communauté de danse de Las Vegas",
          date: "Date",
          time: "Heure",
          price: "Prix",
          rentStudio: "Louer le studio",
          upcomingEvent: "Événement à venir",
          members: "Membres",
          nonMembers: "Non-membres",
          free: "GRATUIT",
          cover: "Entrée",
          studioName: "Freedom Dance Studio",
          imageAlt: "Freedom Dance Studio Las Vegas",
          danceLearnCreate: "Danse • Apprends • Crée",
          communitySpaceFreedom: "Ta communauté. Ton espace. Ta liberté.",
        },

        workshop: {
          eyebrow: "PROCHAIN ATELIER • SALSA ON2",
          title: "Salsa On2",
          highlight: "Ladies Styling.",
          description:
            "Rejoignez Sandra pour un atelier spécial de Salsa On2 Ladies Styling axé sur le Mambo Footwork & Fusion, le style féminin, la chorégraphie et la qualité de performance. Accessible aux débutants / Niveau 1.",
          date: "22 août 2026",
          time: "14h00 – 16h00",
          priceLabel: "Non-membres",
          secondaryPriceLabel: "Membres et instructeurs",
          button: "Voir l’atelier",
        },

        havasu: {
          eyebrow: "ÉVÉNEMENT À VENIR • DANSE • VOYAGE",
          title: "SBK Lake Havasu",
          highlight: "Voyage.",
          description:
            "Voyagez, dansez et créez des liens avec la communauté Freedom Dance. Rejoignez professeurs et élèves pour un week-end inoubliable.",
          date: "28–30 août 2026",
          time: "Vendredi – Dimanche",
          price: "Rejoignez-nous",
          priceLabel: "Voyage",
          button: "Voir le voyage",
        },

        social: {
          eyebrow: "ÉVÉNEMENT À VENIR • FREEDOM DANCE",
          title: "SBK Social",
          highlight: "Soirée.",
          description:
            "Participez à un atelier Salsa On2 avec Freeman de 20h00 à 22h00, suivi du social Freedom Dance de 22h00 à 2h00 avec la musique de Maximo. Tarif early bird de l’atelier : 25 $. Gratuit pour les membres et instructeurs. 35 $ à l’entrée.",
          date: "4 septembre 2026",
          time: "20h00 – 2h00",
          priceLabel: "Entrée",
          button: "S’inscrire",
        },

        learn: {
          eyebrow: "APPRENDS • DANSE • PROGRESSE",
          title: "Apprends à",
          highlight: "Danser.",
          description:
            "Réservez votre premier cours et découvrez la Salsa, la Bachata, l’Urban Kiz, le Konpa et plus encore dans une communauté accueillante.",
          button: "Réserver un cours",
        },

        studio: {
          eyebrow: "TON COURS • TON ÉVÉNEMENT • TON STUDIO",
          title: "Organise ton cours.",
          highlight: "Ton espace.",
          description:
            "Besoin d’un espace pour un cours de danse, un atelier, une répétition, un cours privé, une fête ou un événement spécial ? Faites de Freedom Dance Studio votre espace.",
          button: "Réserver le studio",
        },

        community: {
          eyebrow: "COMMUNAUTÉ FREEDOM DANCE",
          title: "Danse plus.",
          highlight: "Connecte-toi plus.",
          description:
            "Rencontrez des danseurs, faites-vous des amis, apprenez de nouveaux styles et rejoignez une communauté grandissante qui aime danser.",
          button: "Rejoindre notre communauté",
        },
      },

      testimonials: {
        title: "Ce Que Disent Nos Élèves",
        subtitle:
          "Découvrez pourquoi les danseurs, musiciens, familles et organisateurs d'événements aiment Freedom Dance Studio.",

        student: "Élève",
        testimonial: "témoignage",
        defaultStudent: "Élève de Freedom Dance",
        outOfFiveStars: "sur 5 étoiles",

        readMore: "Lire plus",
        readLess: "Lire moins",

        videoTitle: "Témoignages Vidéo",
        videoIframeTitle: "Témoignage vidéo de Freedom Dance Studio",
        videoUnavailable: "Vidéo indisponible",
        defaultVideoTitle: "Témoignage Freedom Dance Studio",
        videoDescription:
          "Découvrez l'énergie, la communauté et l'ambiance de Freedom Dance Studio.",
        watchYoutube: "Regarder sur YouTube",

        whyTitle: "Pourquoi les Gens Aiment Freedom Dance Studio",

        cards: {
          classes: {
            title: "Cours Exceptionnels",
            description:
              "Salsa, Bachata, Urban Kiz, Konpa, danse pour enfants, Ballet, Hip-Hop, Yoga et plus encore.",
          },

          instructors: {
            title: "Professeurs Professionnels",
            description:
              "Des professeurs accueillants qui aident chaque élève à progresser du niveau débutant au niveau avancé.",
          },

          liveMusic: {
            title: "Musique Live",
            description:
              "Dansez avec des groupes et musiciens live lors d'événements spéciaux et de soirées sociales.",
          },

          floor: {
            title: "Belle Piste de Danse",
            description:
              "De grandes salles de danse avec sol professionnel, miroirs et éclairage.",
          },

          rentals: {
            title: "Location pour Événements",
            description:
              "Parfait pour les anniversaires, mariages, répétitions, ateliers, cours privés et célébrations.",
          },

          community: {
            title: "Communauté Accueillante",
            description:
              "Rejoignez une famille accueillante où chacun soutient le parcours de danse des autres.",
          },
        },
      },
    },
  },

  ht: {
    translation: {
      nav: {
        home: "Akèy",
        studioRental: "Lwaye Estidyo",
        upcomingEvents: "Evènman k ap vini",
        classes: "Klas",
        freedomClasses: "Klas Freedom Dance",
        freedomClassesDescription: "Klas Freedom Dance Studio ofri",
        hostedClasses: "Klas ki fèt nan Freedom",
        hostedClassesDescription: "Klas ak enstriktè endepandan",
        schedule: "Orè",
        about: "Konsènan Nou",
        prices: "Pri",
        teachers: "Enstriktè",
        testimonials: "Temwayaj",
        gallery: "Galri",
        contact: "Kontak",
        more: "Plis",
        bookClass: "Rezève yon Klas",
        bookFirstClass: "Rezève Premye Klas Ou",
      },

      hero: {
        common: {
          upcomingAtFreedom: "Pwochen Evènman nan Freedom Dance",
          lasVegasCommunity: "Kominote Dans Las Vegas",
          date: "Dat",
          time: "Lè",
          price: "Pri",
          rentStudio: "Lwe Estidyo a",
          upcomingEvent: "Pwochen Evènman",
          members: "Manm",
          nonMembers: "Moun ki pa manm",
          free: "GRATIS",
          cover: "Antre",
          studioName: "Freedom Dance Studio",
          imageAlt: "Freedom Dance Studio Las Vegas",
          danceLearnCreate: "Danse • Aprann • Kreye",
          communitySpaceFreedom: "Kominote pa w. Espas pa w. Libète pa w.",
        },

        workshop: {
          eyebrow: "PWOCHEN ATELYE • SALSA ON2",
          title: "Salsa On2",
          highlight: "Ladies Styling.",
          description:
            "Vin jwenn Sandra pou yon atelye espesyal Salsa On2 Ladies Styling ki konsantre sou Mambo Footwork & Fusion, estil dam, koregrafi ak kalite pèfòmans. Apwopriye pou debutan / Nivo 1.",
          date: "22 Out 2026",
          time: "2:00 PM – 4:00 PM",
          priceLabel: "Moun ki pa manm",
          secondaryPriceLabel: "Manm ak enstriktè",
          button: "Gade Atelye a",
        },

        havasu: {
          eyebrow: "PWOCHEN EVÈNMAN • DANSE • VWAYAJ",
          title: "SBK Lake Havasu",
          highlight: "Vwayaj.",
          description:
            "Vwayaje, danse epi konekte ak kominote Freedom Dance la. Vin pase yon wikenn inoubliyab ansanm ak enstriktè ak elèv yo.",
          date: "28–30 Out 2026",
          time: "Vandredi – Dimanch",
          price: "Vin Avèk Nou",
          priceLabel: "Vwayaj",
          button: "Gade Vwayaj la",
        },

        social: {
          eyebrow: "PWOCHEN EVÈNMAN • FREEDOM DANCE",
          title: "SBK Social",
          highlight: "Sware.",
          description:
            "Vin nan atelye Salsa On2 ak Freeman soti 8:00 PM rive 10:00 PM, apre sa Freedom Dance Social la soti 10:00 PM rive 2:00 AM ak mizik Maximo. Pri early bird atelye a se $25. Gratis pou manm ak enstriktè. $35 nan pòt la.",
          date: "4 Septanm 2026",
          time: "8:00 PM – 2:00 AM",
          priceLabel: "Antre",
          button: "Enskri Kounye a",
        },

        learn: {
          eyebrow: "APRANN • DANSE • GRANDI",
          title: "Aprann kijan pou",
          highlight: "Danse.",
          description:
            "Rezève premye klas ou epi dekouvri Salsa, Bachata, Urban Kiz, Konpa ak plis ankò nan yon kominote dans ki akeyan.",
          button: "Rezève yon Klas",
        },

        studio: {
          eyebrow: "KLAS PA W • EVÈNMAN PA W • ESTIDYO PA W",
          title: "Òganize klas ou.",
          highlight: "Espas pa w.",
          description:
            "Ou bezwen yon espas pou klas dans, atelye, repetisyon, leson prive, selebrasyon oswa evènman espesyal? Fè Freedom Dance Studio vin espas pa w.",
          button: "Rezève Estidyo a",
        },

        community: {
          eyebrow: "KOMINOTE FREEDOM DANCE",
          title: "Danse Plis.",
          highlight: "Konekte Plis.",
          description:
            "Rankontre dansè, fè zanmi, aprann nouvo estil epi vin fè pati yon kominote k ap grandi ki renmen danse.",
          button: "Antre nan Kominote a",
        },
      },

      testimonials: {
        title: "Sa Elèv Nou Yo Di",
        subtitle:
          "Dekouvri poukisa dansè, mizisyen, fanmi ak òganizatè evènman renmen Freedom Dance Studio.",

        student: "Elèv",
        testimonial: "temwayaj",
        defaultStudent: "Elèv Freedom Dance",
        outOfFiveStars: "sou 5 zetwal",

        readMore: "Li plis",
        readLess: "Li mwens",

        videoTitle: "Temwayaj Videyo",
        videoIframeTitle: "Temwayaj videyo Freedom Dance Studio",
        videoUnavailable: "Videyo a pa disponib",
        defaultVideoTitle: "Temwayaj Freedom Dance Studio",
        videoDescription:
          "Gade epi santi enèji, kominote ak atmosfè Freedom Dance Studio.",
        watchYoutube: "Gade sou YouTube",

        whyTitle: "Poukisa Moun Renmen Freedom Dance Studio",

        cards: {
          classes: {
            title: "Bèl Klas",
            description:
              "Salsa, Bachata, Urban Kiz, Konpa, dans pou timoun, Ballet, Hip-Hop, Yoga ak plis ankò.",
          },

          instructors: {
            title: "Enstriktè Pwofesyonèl",
            description:
              "Enstriktè amikal ki konsantre sou ede chak elèv grandi soti nan debutan rive nan nivo avanse.",
          },

          liveMusic: {
            title: "Mizik Live",
            description:
              "Danse ak gwoup ak mizisyen live pandan evènman espesyal ak sosyal.",
          },

          floor: {
            title: "Bèl Planche Dans",
            description:
              "Gwo sal dans ak planche pwofesyonèl, glas ak bon ekleraj.",
          },

          rentals: {
            title: "Lwaye pou Evènman",
            description:
              "Pafè pou anivèsè, maryaj, repetisyon, atelye, klas prive ak selebrasyon.",
          },

          community: {
            title: "Kominote Akeyan",
            description:
              "Antre nan yon fanmi akeyan kote tout moun sipòte youn lòt nan vwayaj dans yo.",
          },
        },
      },
    },
  },

  ru: {
    translation: {
      nav: {
        home: "Главная",
        studioRental: "Аренда студии",
        upcomingEvents: "Предстоящие события",
        classes: "Занятия",
        freedomClasses: "Занятия Freedom Dance",
        freedomClassesDescription: "Занятия от Freedom Dance Studio",
        hostedClasses: "Занятия в Freedom",
        hostedClassesDescription: "Занятия независимых преподавателей",
        schedule: "Расписание",
        about: "О нас",
        prices: "Цены",
        teachers: "Преподаватели",
        testimonials: "Отзывы",
        gallery: "Галерея",
        contact: "Контакты",
        more: "Ещё",
        bookClass: "Записаться на занятие",
        bookFirstClass: "Записаться на первое занятие",
      },

      hero: {
        common: {
          upcomingAtFreedom: "Ближайшее событие в Freedom Dance",
          lasVegasCommunity: "Танцевальное сообщество Лас-Вегаса",
          date: "Дата",
          time: "Время",
          price: "Цена",
          rentStudio: "Арендовать студию",
          upcomingEvent: "Предстоящее событие",
          members: "Участники",
          nonMembers: "Не участники",
          free: "БЕСПЛАТНО",
          cover: "Вход",
          studioName: "Freedom Dance Studio",
          imageAlt: "Freedom Dance Studio Las Vegas",
          danceLearnCreate: "Танцуй • Учись • Создавай",
          communitySpaceFreedom:
            "Твоё сообщество. Твоё пространство. Твоя свобода.",
        },

        workshop: {
          eyebrow: "БЛИЖАЙШИЙ ВОРКШОП • SALSA ON2",
          title: "Salsa On2",
          highlight: "Ladies Styling.",
          description:
            "Присоединяйтесь к Сандре на специальном воркшопе Salsa On2 Ladies Styling с акцентом на Mambo Footwork & Fusion, женскую стилизацию, хореографию и качество выступления. Подходит для начинающих / Уровень 1.",
          date: "22 августа 2026",
          time: "14:00 – 16:00",
          priceLabel: "Не участники",
          secondaryPriceLabel: "Участники и инструкторы",
          button: "Подробнее о воркшопе",
        },

        havasu: {
          eyebrow: "ПРЕДСТОЯЩЕЕ СОБЫТИЕ • ТАНЦЫ • ПУТЕШЕСТВИЕ",
          title: "SBK Lake Havasu",
          highlight: "Поездка.",
          description:
            "Путешествуйте, танцуйте и общайтесь с сообществом Freedom Dance. Проведите незабываемые выходные вместе с преподавателями и учениками.",
          date: "28–30 августа 2026",
          time: "Пятница – Воскресенье",
          price: "Присоединиться",
          priceLabel: "Поездка",
          button: "Подробнее о поездке",
        },

        social: {
          eyebrow: "ПРЕДСТОЯЩЕЕ СОБЫТИЕ • FREEDOM DANCE",
          title: "SBK Social",
          highlight: "Вечер.",
          description:
            "Присоединяйтесь к воркшопу Salsa On2 с Freeman с 20:00 до 22:00, после чего пройдет Freedom Dance Social с 22:00 до 2:00 под музыку Maximo. Ранняя цена воркшопа — $25. Бесплатно для участников и инструкторов. $35 на входе.",
          date: "4 сентября 2026",
          time: "20:00 – 2:00",
          priceLabel: "Вход",
          button: "Зарегистрироваться",
        },

        learn: {
          eyebrow: "УЧИСЬ • ТАНЦУЙ • РАЗВИВАЙСЯ",
          title: "Научись",
          highlight: "Танцевать.",
          description:
            "Запишитесь на первое занятие и откройте для себя Salsa, Bachata, Urban Kiz, Konpa и другие стили в дружелюбном танцевальном сообществе.",
          button: "Записаться на занятие",
        },

        studio: {
          eyebrow: "ТВОЁ ЗАНЯТИЕ • ТВОЁ СОБЫТИЕ • ТВОЯ СТУДИЯ",
          title: "Проведи своё занятие.",
          highlight: "Твоё место.",
          description:
            "Нужно пространство для танцевального занятия, воркшопа, репетиции, частного урока, праздника или особого события? Сделайте Freedom Dance Studio своим пространством.",
          button: "Забронировать студию",
        },

        community: {
          eyebrow: "СООБЩЕСТВО FREEDOM DANCE",
          title: "Танцуй больше.",
          highlight: "Общайся больше.",
          description:
            "Знакомьтесь с танцорами, находите друзей, изучайте новые стили и становитесь частью растущего сообщества, которое любит танцевать.",
          button: "Присоединиться к сообществу",
        },
      },

      testimonials: {
        title: "Что Говорят Наши Ученики",
        subtitle:
          "Узнайте, почему танцоры, музыканты, семьи и организаторы мероприятий любят Freedom Dance Studio.",

        student: "Ученик",
        testimonial: "отзыв",
        defaultStudent: "Ученик Freedom Dance",
        outOfFiveStars: "из 5 звезд",

        readMore: "Читать далее",
        readLess: "Скрыть",

        videoTitle: "Видеоотзывы",
        videoIframeTitle: "Видеоотзыв Freedom Dance Studio",
        videoUnavailable: "Видео недоступно",
        defaultVideoTitle: "Отзыв о Freedom Dance Studio",
        videoDescription:
          "Посмотрите и почувствуйте энергию, сообщество и атмосферу Freedom Dance Studio.",
        watchYoutube: "Смотреть на YouTube",

        whyTitle: "Почему Люди Любят Freedom Dance Studio",

        cards: {
          classes: {
            title: "Отличные Занятия",
            description:
              "Salsa, Bachata, Urban Kiz, Konpa, детские танцы, Ballet, Hip-Hop, Yoga и многое другое.",
          },

          instructors: {
            title: "Профессиональные Преподаватели",
            description:
              "Дружелюбные преподаватели помогают каждому ученику расти от начинающего до продвинутого уровня.",
          },

          liveMusic: {
            title: "Живая Музыка",
            description:
              "Танцуйте под живые группы и музыкантов на специальных мероприятиях и социальных вечеринках.",
          },

          floor: {
            title: "Красивый Танцевальный Зал",
            description:
              "Просторные танцевальные залы с профессиональным покрытием, зеркалами и освещением.",
          },

          rentals: {
            title: "Аренда для Мероприятий",
            description:
              "Идеально для дней рождения, свадеб, репетиций, воркшопов, частных занятий и праздников.",
          },

          community: {
            title: "Дружелюбное Сообщество",
            description:
              "Присоединяйтесь к дружной семье, где все поддерживают друг друга в танцевальном развитии.",
          },
        },
      },
    },
  },
};

const savedLanguage = localStorage.getItem("freedom-dance-language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = savedLanguage;

export default i18n;
