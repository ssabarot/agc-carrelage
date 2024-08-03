import React, { useState, useEffect } from "react";

export const Presentation = (props) => {
  const [isSmallLandscape, setIsSmallLandscape] = useState(false);

  const checkOrientationAndSize = () => {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const isSmallScreen = window.innerWidth < 950;
    setIsSmallLandscape(isLandscape && isSmallScreen);
  };

  useEffect(() => {
    checkOrientationAndSize();
    window.addEventListener("resize", checkOrientationAndSize);

    return () => {
      window.removeEventListener("resize", checkOrientationAndSize);
    };
  }, []);

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div id="presentation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/pres.jpg" className="img-responsive" alt="" />
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="presentation-text">
              <h2>Présentation</h2>
              <div className={`${isSmallLandscape ? 'landscape-padding' : ''}`}>
                <p>{props.data ? formatTextWithLineBreaks(props.data.paragraph) : "loading..."}</p>
              </div>
              {!isSmallLandscape && (
                <>
                  <h3>Services</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why2.map((d, i) => (
                              <li key={`${d}-${i}`}> {d}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {isSmallLandscape && (
          <>
          <div id="services">
            <div className="landscape-mode">
                  <h3>Services</h3>
                      <div className="list-style">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            {props.data
                              ? props.data.Why.map((d, i) => (
                                  <li key={`${d}-${i}`}>{d}</li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            {props.data
                              ? props.data.Why2.map((d, i) => (
                                  <li key={`${d}-${i}`}> {d}</li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
              )}
        </div>
      </div>
    </div>
  );
};