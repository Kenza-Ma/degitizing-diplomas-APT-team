import React from "react";
import "./displaycertif.css";
function displaycertif() {
  return (
    <>
      <div className="body">
        <div className="container pm-certificate-container">
          <div className="outer-border"></div>
          <div className="inner-border"></div>

          <div className="pm-certificate-border col-xs-12">
            <div className="row pm-certificate-header">
              <div className="pm-certificate-title cursive col-xs-12 text-center">
                <h1 style={{ fontSize: "350%" }}>Diplôme de master</h1>
              </div>
            </div>

            <div className="row pm-certificate-body">
              <div className="pm-certificate-block">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                      <span className="pm-name-text bold">Haicheur Amani</span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-earned col-xs-8 text-center">
                      <span className="pm-earned-text padding-0 block cursive">
                        a satisfait les exigences nécessaires pour l'obtention
                        d'un diplôme de Master Sécurité des systemes
                        informatiques
                      </span>
                      <span className="pm-credits-text block bold sans"></span>
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="col-xs-12"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-course-title col-xs-8 text-center">
                      <span className="pm-earned-text block cursive"> </span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"> </div>
                    <div className="pm-course-title underline col-xs-8 text-center">
                      <span className="pm-credits-text block bold sans">
                        {" "}
                        Faculté d'Informatique ,Département des Systèmes
                        Informatiques{" "}
                      </span>
                    </div>
                    <div className="col-xs-2"> </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="pm-certificate-footer">
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className="pm-credits-text block sans">
                        Université des Sciences et de la Technologie
                      </span>
                      <span className="pm-empty-space block underline"></span>
                    </div>
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className="pm-credits-text block sans">
                        Alger , le 23/04/2022{" "}
                      </span>
                      <span className="pm-empty-space block underline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default displaycertif;
