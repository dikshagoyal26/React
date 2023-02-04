import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-m font-bold">{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {!isVisible ? <>Show</> : <>Hide</>}
      </button>
      {isVisible && <h3>{description}</h3>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={(isVisible) =>
          !isVisible ? setVisibleSection(null) : setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={"This is the team section of Instamart"}
        isVisible={visibleSection === "team"}
        setIsVisible={(isVisible) =>
          !isVisible ? setVisibleSection(null) : setVisibleSection("team")
        }
      />
      <Section
        title={"Career Instamart"}
        description={"This is the career section of Instamart"}
        isVisible={visibleSection === "career"}
        setIsVisible={(isVisible) =>
          !isVisible ? setVisibleSection(null) : setVisibleSection("career")
        }
      />
    </div>
  );
};
export default Instamart;
