import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


const resources = {
  en: {
    translation: {
        "home": "Home",
        "courses": "Courses",
        "courts": "Courts",
        "forums": "Forums",
        "loginSignup": "Login/Signup",
        "Events": "Events",
        "Learn": "Learn",
        "Where to Find Us": "Where to Find Us",
        "Rally Range": "Rally Range",
        "Contact Us": "Contact Us",
        "Opening Hours": "Opening Hours",
        "Getting There": "Getting There",
        "Getting1" : "1. Take the train to 460 Angel",
        "Getting2" : "2. Walk 100m to the location",
        "Our Courses" : "Our Courses",
        "Course Intro" : "Our courses are expertly crafted to elevate your game, providing personalized training from seasoned tennis coaches. We blend technical skills with strategic insights, ensuring that every player, regardless of level, achieves their full potential on the court. Embrace a comprehensive learning experience, tailored to foster growth and ignite a lasting passion for tennis. Join us and transform your play, one stroke at a time",
        "Explore Our Courses": "Explore Our Courses",
        "Kids": "Kids",
        "Adults": "Adults",
        "Beginner": "Beginner",
        "Intermediate": "Intermediate",
        "Advanced": "Advanced",
        "Learn More": "Learn More"
      }
    },
    es: {
      translation: {
            "home": "Inicio",
            "courses": "Cursos",
            "courts": "Canchas",
            "forums": "Foros",
            "loginSignup": "Iniciar Sesión/Registrarse",
            "Events": "Eventos",
            "Learn": "Aprender",
            "Where to Find Us": "Dónde encontrarnos",
            "Rally Range": "Rango De Rally",     
            "Contact Us": "Contáctanos",
            "Opening Hours": "Horario de apertura",
            "Getting There": "Cómo llegar",
            "Getting1": "1. Toma el tren hasta 460 Angel",
            "Getting2": "2. Camina 100 metros hasta la ubicación",
            "Our Courses": "Nuestros Cursos",
            "Course Intro": "Nuestros cursos están diseñados expertamente para elevar tu juego, proporcionando entrenamiento personalizado de entrenadores de tenis experimentados. Combinamos habilidades técnicas con perspectivas estratégicas, asegurando que cada jugador, independientemente de su nivel, alcance su máximo potencial en la cancha. Abraza una experiencia de aprendizaje integral, diseñada para fomentar el crecimiento e inspirar una pasión duradera por el tenis. Únete a nosotros y transforma tu juego, golpe a golpe.",
            "Explore Our Courses": "Explora Nuestros Cursos",
            "Kids": "Niños",
            "Adults": "Adultos",
            "Beginner": "Principiante",
            "Intermediate": "Intermedio",
            "Advanced": "Avanzado",
            "Learn More": "Aprende Más"
      }
    }
  };

i18n
.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    // fallbackLng: 'en',
    // debug: true,
    // Backend: {
    //   loadPath: './translations/{{lng}}.json',
    // },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;