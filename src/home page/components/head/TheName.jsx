export const TheName = ({ breakML, headClasses, contents }) => (
  <div className={headClasses.wrapTopProfile}>
    <div
      className={headClasses.profile}
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/profile/profile%20image.jpg")`,
        backgroundSize: "cover",
      }}
    ></div>
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
