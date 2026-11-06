import ResultImage from './ResultImage'

export default function ResultCard({ result, index, onOpen }) {
  return (
    <article className="result-card">
      <button type="button" className="result-card-open" onClick={(event) => onOpen(index, event.currentTarget)}
        aria-label={`Ampliar resultado ${index + 1}: ${result.treatment}`}>
        <span className="result-card-image"><ResultImage result={result} lazy /></span>
        <span className="result-card-meta"><span>{result.treatment}</span><span aria-hidden="true">↗</span></span>
      </button>
    </article>
  )
}

