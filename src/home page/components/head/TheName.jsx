export const TheName = ({ breakML, headClasses, contents }) => (
  <div className={headClasses.wrapTopProfile}>
    <div className={headClasses.profile}></div>
    {breakML ? (
      <>
        <h2 className={headClasses.name}>{contents(breakML).name}</h2>
        <span className={headClasses.job}>{contents(breakML).job}</span>
      </>
    ) : (
      <h2 className={headClasses.name}>
        {contents(breakML).name}
        <span className={headClasses.job}>{contents(breakML).job}</span>
      </h2>
    )}
  </div>
);
