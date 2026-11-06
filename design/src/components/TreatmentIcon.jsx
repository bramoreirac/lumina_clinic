export default function TreatmentIcon({ treatment }) {
  return (
    <svg viewBox="18 4 84 92" aria-hidden="true">
      <g className="visual-mark" strokeWidth="2">
        {treatment === 'body' ? (
          <>
            <path d="M43 12c3 9 7 17 6 24-1 8-8 15-10 24-2 9 0 19 3 28m35-76c-3 9-7 17-6 24 1 8 8 15 10 24 2 9 0 19-3 28M48 47c7 4 17 4 24 0M59 55q1 3 2 0M43 72c5 1 10 5 17 12 7-7 12-11 17-12" />
            <path className="visual-accent" d="M20 49h16m-5-5 5 5-5 5m69-5H84m5-5-5 5 5 5" />
          </>
        ) : (
          <>
            {/* Swept hair and a small bun, following the reference line art. */}
            <path d="M51 17c-1-10 17-12 18 0M40 45c-3-7-3-16 2-22 5-6 11-8 18-8 9 0 16 4 19 11 3 6 3 13 0 20M40 39c13-2 23-9 25-17M42 44c11-3 18-8 23-16 2 7 7 12 13 15" />
            <path d="M42 44c-7-5-8 8-2 12l3 1m35-13c7-5 8 8 2 12l-3 1M43 43l1 15c1 11 10 19 16 20 6-1 15-9 16-20l2-15M49 70c1 7-1 13-3 17m25-17c-1 7 1 13 3 17" />
            <path d="M47 48q4-3 8-1m10 0q4-2 8 1M48 54q3 3 7 0m10 0q4 3 7 0M59 54l-2 8q3 2 6 0M55 68q5 3 10 0M58 72h4" />
            {treatment === 'microneedling' && (
              <>
                <path d="M47 59h.1m4 3h.1m-3 4h.1m20-7h.1m3 4h.1" />
                <g className="visual-accent" transform="rotate(-43 79 69)">
                  <rect x="75" y="60" width="8" height="22" rx="2" />
                  <path d="M76 60v-5h6v5m-4-5v-4m2 4v-4M75 76h8m-5 6v7h2v-7" />
                </g>
              </>
            )}
            {treatment === 'cleansing' && (
              <g className="visual-accent">
                <circle cx="78" cy="64" r="6" />
                <path d="m83 68 12 10-3 4-12-12M34 34v-8m-4 4h8M87 27v-6m-3 3h6" />
                <circle cx="36" cy="65" r="3" />
                <circle cx="32" cy="55" r="2" />
              </g>
            )}
            {treatment === 'botulinum' && (
              <g className="visual-accent" transform="rotate(-45 36 69)">
                <path d="M33 58h6v20h-6zM36 58v-9M31 78h10M36 78v8m-4 0h8M33 63h3m-3 5h3m-3 5h3" />
              </g>
            )}
          </>
        )}
      </g>
    </svg>
  )
}
