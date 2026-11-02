import service01 from '../assets/clinic/service-01.webp'
import service02 from '../assets/clinic/service-02.webp'
import service03 from '../assets/clinic/service-03.webp'
import service04 from '../assets/clinic/service-04.webp'
import higieneFacial from '../assets/clinic/service-higiene-facial.webp'
import toxinaBotulinica from '../assets/clinic/service-toxina-botulinica.webp'
import peelingsQuimicos from '../assets/clinic/service-peelings-quimicos.webp'
import ojeras from '../assets/clinic/service-ojeras.webp'

// Add approved photos here; the gallery grows without changing the page layout.
export const serviceGallery = [
  { image: service01, name: 'Microneedling facial', alt: 'Aplicación de microneedling facial', width: 1200, height: 1200 },
  { image: higieneFacial, name: 'Higiene facial', alt: 'Limpieza facial con espátula ultrasónica', width: 1080, height: 1080 },
  { image: service02, name: 'Tratamiento de grasa localizada', alt: 'Comparación antes y después de un tratamiento de grasa localizada', width: 820, height: 820 },
  { image: toxinaBotulinica, name: 'Toxina botulínica', alt: 'Preparación de toxina botulínica con vial y jeringa', width: 1080, height: 1080 },
  { image: peelingsQuimicos, name: 'Peelings químicos', alt: 'Aplicación de peeling químico facial con pincel', width: 1080, height: 1080 },
  { image: ojeras, name: 'Tratamiento de ojeras', description: 'Tratamiento especializado que ayuda a mejorar la apariencia de las ojeras, aportando hidratación, luminosidad y revitalización al contorno de los ojos.', alt: 'Atención de la zona de ojeras durante un tratamiento facial', width: 720, height: 720 },
  { image: service03, name: 'Tratamiento de alopecias', description: 'Valoración de la caída del cabello y del cuero cabelludo para orientar las opciones de atención según cada caso.', alt: 'Examen del cuero cabelludo con vista ampliada', width: 1200, height: 1200 },
  { image: service04, name: 'Consultas dermatológicas', description: 'Un espacio para consultar sobre la salud de tu piel, recibir una valoración y conversar sobre las opciones de atención.', alt: 'La doctora en su consultorio', width: 1200, height: 1200 },
]
