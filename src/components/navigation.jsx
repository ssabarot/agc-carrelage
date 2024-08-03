import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [activeTab, setActiveTab] = useState("");
  const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);

  const handleTabClick = (event, tabId) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset = calculateOffset(sectionId);

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  const calculateOffset = (sectionId) => {
    switch (sectionId) {
      case "presentation":
        return 100;
      case "portfolio":
        return 150;
      case "contact":
        return 100;
      default:
        return 0;
    }
  };

  const determineSection = (scrollPosition) => {
    if (scrollPosition >= 370 && scrollPosition < 920) {
      return "presentation";
    } else if (scrollPosition >= 921 && scrollPosition < 2275) {
      return "portfolio";
    } else if (scrollPosition >= 2275 && scrollPosition < 2386) {
      return "contact";
    } else {
      return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Code to determine the active tab based on scroll position
      const scrollPosition = window.scrollY;
      setActiveTab(determineSection(scrollPosition));
    };

    // Call handleScroll once to set the initial active tab
    handleScroll();

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOrientationChange = (e) => {
      setIsLandscape(e.matches);
    };

    const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");
    landscapeMediaQuery.addEventListener("change", handleOrientationChange);

    // Clean up: remove event listener when component unmounts
    return () => {
      landscapeMediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className={`${isLandscape ? "" : "col-xs-6"} col-md-3 text-center`}>
        <img src="img/logo-agc.jpg" alt="" className="logo" />
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
