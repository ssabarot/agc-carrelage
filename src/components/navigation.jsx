import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [activeTab, setActiveTab] = useState("presentation");

  const handleTabClick = (event, tabId) => {
    setActiveTab(tabId);
    scrollToSection(event, tabId);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior

    const section = document.getElementById(sectionId);
    if (section) {
      let offset = 0;
      if (sectionId === "presentation") {
        offset = 100;
      } else if (sectionId === "portfolio") {
        offset = 150;
      }
      window.scrollTo({
        top: section.offsetTop - offset, // Adjust the offset as needed
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const presentationSection = document.getElementById("presentation");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= presentationSection.offsetTop - 100 &&
        scrollPosition < portfolioSection.offsetTop - 150
      ) {
        setActiveTab("presentation");
      } else if (
        scrollPosition >= portfolioSection.offsetTop - 150 &&
        scrollPosition < contactSection.offsetTop - 100
      ) {
        setActiveTab("portfolio");
      } else {
        setActiveTab("contact");
      }
    };

    // Call handleScroll once to set the initial active tab
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="col-xs-6 col-md-3 text-center">
        <img src="img/logo-agc.jpg" alt="" className="logo" />
        {/* <h4 className="sigle">Aurore Grandsire Carrelage</h4> */}
      </div>
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className={activeTab === "presentation" ? "active" : ""}>
              <a
                href="#presentation"
                className="page-scroll"
                onClick={(event) => handleTabClick(event, "presentation")}
              >
                Présentation & Services
              </a>
            </li>
            <li className={activeTab === "portfolio" ? "active" : ""}>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={(event) => handleTabClick(event, "portfolio")}
              >
                Réalisations
              </a>
            </li>
            <li className={activeTab === "contact" ? "active" : ""}>
              <a
                href="#contact"
                className="page-scroll"
                onClick={(event) => handleTabClick(event, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
