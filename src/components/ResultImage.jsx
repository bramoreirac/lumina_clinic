import { useState } from 'react'

export default function ResultImage({ result, lazy = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="result-image-error" role="img" aria-label={`Imagen no disponible: ${result.alt}`}>No se pudo cargar la imagen.<br />Prueba de nuevo más tarde.</span>
  return <img src={result.src} alt={result.alt} width={result.width} height={result.height}
    loading={lazy ? 'lazy' : 'eager'} onError={() => setFailed(true)} />
}
