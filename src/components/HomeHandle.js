import React from "react";
import HomeFooter from "./HomeFooter";

const HomeHandle = () => {
  return (
    <div className="homeSection">
      <div className="presentation">
        <div className="imgModerate-container">
          <img
            src="./media/portrait.webp"
            className="imgModerate"
            alt="moderate-pic"
          />
        </div>
        <div className="presentation_sectionAbout">
          <div className="moderateName-container">
            <div className="moderateFunction">Developpeur Web</div>
            <div className="moderateName">antoine lemarchand</div>
            <p className="abouteMe">
              Apres une premiere vie en tant qu'Aide Médico-Psychologique, je
              décide de me reconvertir à 32 ans dans l'univers du développement
              web. Sur ce portfolio, retrouvez mon cv, mon contact ainsi que les
              projets réalisés durant ma formation.
            </p>
          </div>
          <div>
            <HomeFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHandle;
