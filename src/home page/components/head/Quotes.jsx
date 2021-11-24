export const Quotes = ({ headClasses, Quote }) => (
  <div className={headClasses.quotesWrap}>
    <span className={headClasses.quote}>"{Quote}"</span>
    <span className={headClasses.quoteAuthor}>Russell Schweickart, 1973</span>
  </div>
);
