export const Quotes = ({ headClasses, Quote }) => (
  <div className={headClasses.quotesWrap}>
    <span className={headClasses.quote}>&ldquo;{Quote}&ldquo;</span>
    <span className={headClasses.quoteAuthor}>Russell Schweickart, 1973</span>
  </div>
);
