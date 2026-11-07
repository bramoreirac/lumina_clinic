import ResultImage from './ResultImage'

export default function ResultCard({ result, index }) {
  return (
    <article className="result-card">
      <button type="button" className="result-card-open" data-result-index={index}
        aria-label={`Ampliar resultado ${index + 1}: ${result.treatment}`}>
        <span className="result-card-image"><ResultImage result={result} lazy /></span>
        <span className="result-card-meta"><span>{result.treatment}</span><span className="result-card-action">Ver caso</span></span>
      </button>
    </article>
  )
}

