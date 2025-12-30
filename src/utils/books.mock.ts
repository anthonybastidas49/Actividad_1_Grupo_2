import type { Book } from "@/types/book";
import soledad from "@/assets/cien-anos-soledad.jpg";
import rayuela from "@/assets/rayuela.jpg";
import ciudad_perros from "@/assets/la-ciudad-y-los-perros-resumen.jpg";
import amor_colera from "@/assets/amor_tiempos_colera.jpg";
import go1984 from "@/assets/1984.jpg";
import fahrenheit from "@/assets/fahrenheit_451.jpg";
import principito from "@/assets/principito.jpg";
import quijote from "@/assets/quijote.jpg";
import cronica_muerte_anunciada from "@/assets/cronica_muerte_anunciada.jpg";
import sombra_viento from "@/assets/sombra_del_viento.jpg";
import orgullo_prejuicio from "@/assets/orgullo_prejuicio.jpg";
import juegos_hambre from "@/assets/juegos_del_hambre.jpg";

export const booksMock: Book[] = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    image: soledad,
    description:
      "Una de las obras más representativas del realismo mágico latinoamericano, que narra la historia de la familia Buendía a lo largo de varias generaciones.",
    price: 19.99
  },
  {
    id: 2,
    title: "Rayuela",
    author: "Julio Cortázar",
    image: rayuela,
    description: "Novela innovadora que rompe la estructura narrativa tradicional, permitiendo múltiples formas de lectura.",
    price: 14.99
  },
  {
    id: 3,
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    image: ciudad_perros,
    description: "Una crítica social ambientada en un colegio militar, donde se exploran la violencia, la autoridad y la pérdida de la inocencia.",
    price: 12.99
  },
  {
    id: 4,
    title: "El amor en los tiempos del cólera",
    author: "Gabriel García Márquez",
    image: amor_colera,
    description: "Una historia de amor persistente que atraviesa décadas, marcada por la espera, la nostalgia y la esperanza.",
    price: 15.99
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    image: go1984,
    description: "Una novela distópica que presenta una sociedad vigilada, donde el control del pensamiento y la información es absoluto.",
    price: 10.99
  },
  {
    id: 6,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    image: fahrenheit,
    description: "Un mundo en el que los libros están prohibidos y quemados para evitar el pensamiento crítico.",
    price: 11.99
  },
  {
    id: 7,
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    image: principito,
    description: "Un relato poético y filosófico que reflexiona sobre la amistad, el amor y el sentido de la vida.",
    price: 9.99
  },
  {
    id: 8,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    image: quijote,
    description: "Considerada la primera novela moderna, narra las aventuras de un hidalgo que confunde la realidad con la fantasía.",
    price: 18.99
  },
  {
    id: 9,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    image: cronica_muerte_anunciada,
    description: "Una narración breve e intensa sobre un asesinato anunciado por todo un pueblo, menos por la propia víctima.",
    price: 13.99
  },
  {
    id: 10,
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    image: sombra_viento,
    description: "Un misterio literario ambientado en la Barcelona de posguerra, donde los libros guardan secretos olvidados.",
    price: 16.99
  },
  {
    id: 11,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    image: orgullo_prejuicio,
    description: "Una novela romántica que analiza las relaciones humanas, las clases sociales y los prejuicios de su época.",
    price: 14.49
  },
  {
    id: 12,
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    image: juegos_hambre,
    description: "Una saga distópica que enfrenta a jóvenes participantes en una lucha por la supervivencia en una sociedad desigual.",
    price: 17.99
  }
];