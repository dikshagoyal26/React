import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-m font-bold">{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => {
          setIsVisible();
        }}
      >
        {!isVisible ? <>Show</> : <>Hide</>}
      </button>
      {isVisible && <h3>{description}</h3>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showTeam: false,
    showCareers: true,
  });
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Team Instamart"}
        description={"This is the team section of Instamart"}
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Career Instamart"}
        description={"This is the career section of Instamart"}
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};
export default Instamart;
