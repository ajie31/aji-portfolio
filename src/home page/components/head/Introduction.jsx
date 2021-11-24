export const Introduction = ({ headClasses, paragraphs }) => (
  <div className={headClasses.introducing}>
    <h1 className={headClasses.Hello}>
      Hello
      <span className={headClasses.There}>There</span>
    </h1>
    {paragraphs.map((p, i) => (
      <p key={i} className={headClasses.paragraph}>
        {p}
      </p>
    ))}
  </div>
);
