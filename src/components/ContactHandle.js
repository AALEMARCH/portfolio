import React from "react";

const ContactHandle = () => {
  return (
    <div className="contact_container">
      <div className="contact_container--position">
        <h1>Contacter moi</h1>
        <div>
          <ul>
            <li>
              <i className="fa-solid fa-chart-area contactIcon"></i>
              <a
                href="https://goo.gl/maps/uSSxeBgV46L2UkWU7"
                target="_blank"
                rel="noreferrer"
              >
                Guignen (télétravail possible)
              </a>
            </li>
            <li>
              <i className="fa-solid fa-paper-plane contactIcon"></i>
              <a href="mailto:lemarchand.antoine00@gmail.com">
                Lien pour me contacter par email
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone contactIcon"></i>
              <a href="tel:0786720571">0786720571</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact_container--positionTwo">
        <p>
          N'hesitez pas à me contacter <br /> je vous repondrais des que
          possible
        </p>
      </div>
    </div>
  );
};

export default ContactHandle;
