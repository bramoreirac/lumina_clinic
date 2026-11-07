export const services = [
  {
    "name": "Microneedling facial",
    "category": "facial",
    "description": "Estimula la renovación de la piel y la producción de colágeno, ayudando a mejorar su textura, apariencia y luminosidad."
  },
  {
    "name": "Higiene facial",
    "category": "facial",
    "description": "Limpieza personalizada que elimina impurezas, exceso de grasa y células muertas para mantener una piel limpia y saludable."
  },
  {
    "name": "Tratamiento de grasa localizada",
    "category": "corporal",
    "description": "Alternativas médico-estéticas dirigidas a tratar depósitos de grasa en zonas específicas del cuerpo, previa valoración médica."
  },
  {
    "name": "Toxina botulínica",
    "category": "facial",
    "description": "Tratamiento que suaviza temporalmente las líneas de expresión mediante la relajación controlada de músculos específicos."
  },
  {
    "name": "Bioestimulación con PRP",
    "category": "facial",
    "description": "Utiliza el plasma rico en plaquetas del propio paciente para favorecer los procesos naturales de regeneración de la piel."
  },
  {
    "name": "Peelings químicos",
    "category": "facial",
    "description": "Favorecen la renovación cutánea y ayudan a mejorar manchas, textura irregular y otras alteraciones superficiales de la piel."
  },
  {
    "name": "Inductores de colágeno",
    "category": "facial",
    "description": "Estimulan la producción natural de colágeno, contribuyendo progresivamente a mejorar la firmeza y calidad de la piel."
  },
  {
    "name": "Mesoterapia facial",
    "category": "facial",
    "description": "Aplicación de activos seleccionados según las necesidades de la piel para complementar su hidratación y mejorar su apariencia."
  },
  {
    "name": "Hydrafacial",
    "category": "facial",
    "description": "Limpieza facial avanzada que combina exfoliación, extracción de impurezas e hidratación para una piel de aspecto más fresco y luminoso."
  },
  {
    "name": "Microdermoabrasión",
    "category": "facial",
    "description": "Exfoliación mecánica que ayuda a retirar células superficiales y mejorar la suavidad y textura de la piel."
  },
  {
    "name": "Tratamiento de melasma y manchas",
    "category": "dermatologia",
    "description": "Protocolos personalizados orientados a mejorar las alteraciones de pigmentación y favorecer un tono de piel más uniforme."
  },
  {
    "name": "Tratamiento dermatológico del acné",
    "category": "dermatologia",
    "description": "Evaluación y manejo personalizado del acné, enfocado en controlar las lesiones y mejorar la salud de la piel."
  },
  {
    "name": "Tratamiento médico de estrías",
    "category": "corporal",
    "description": "Procedimiento orientado a mejorar la apariencia de las estrías mediante técnicas de estimulación de colágeno y regeneración cutánea. Ayuda a mejorar la textura, elasticidad y uniformidad de la piel, según el tipo y evolución de las estrías."
  },
  {
    "name": "Escleroterapia de várices y arañas vasculares",
    "category": "corporal",
    "description": "Tratamiento médico mínimamente invasivo que consiste en aplicar una solución esclerosante en vasos sanguíneos superficiales seleccionados, favoreciendo su cierre progresivo y mejorando la apariencia de arañas vasculares y pequeñas venas dilatadas."
  },
  {
    "name": "Tratamientos despigmentantes corporales",
    "category": "corporal",
    "description": "Protocolos especializados para mejorar manchas e hiperpigmentaciones en diferentes zonas del cuerpo, mediante activos despigmentantes y técnicas dermatológicas que favorecen una piel más uniforme y luminosa."
  },
  {
    "name": "Tratamiento para eliminación de papada",
    "category": "corporal",
    "description": "Procedimiento médico estético dirigido a reducir la acumulación de grasa localizada en la región submentoniana (debajo del mentón), buscando mejorar el contorno mandibular y la definición del perfil facial. La técnica se selecciona según la valoración anatómica del paciente."
  },
  {
    "name": "Electrocauterización de verrugas y lesiones cutáneas benignas",
    "category": "dermatologia",
    "description": "Procedimiento médico que utiliza energía eléctrica para tratar determinadas lesiones superficiales de la piel, como algunas verrugas y otras lesiones benignas. Requiere valoración previa para establecer el diagnóstico y determinar si la cauterización es el tratamiento adecuado."
  }
]

export const serviceAnchor = (name) => name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
