import React, { useEffect, useState } from "react";
import createblockimage from "./../../Images/1.png";
import { create, loginmetamask } from "../testing/create";
import "./Createblock.css";
import NavigationConnected from "../Navigation/NavigationConnected";
function Createblock() {
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [serialnumber, setSerialNumber] = useState();
  const [speciality, setSpeciality] = useState(
    "Sécurité des systèmes informatiques"
  );
  const [date, setDate] = useState("");

  const [account, setAccount] = useState();

  const creation = () => {
    create(
      serialnumber,
      lastname,
      firstname,
      "Informatics department",
      speciality,
      date.toString()
    );
  };

  // useEffect(() => {
  //   loginmetamask().then((e) => {
  //     console.log(e.addressaccount)
  //     setAccount(e.addressaccount);
  //   });
  // });

  /*
  const handlecreate = () => {
    // Load account data
    if (web3.currentProvider.enable) {
      //For metamask
      web3.currentProvider.enable().then(function (acc) {
        App.account = acc[0];
        $("#accountAddress").html("Your Account: " + App.account);
      });
    } else {
      App.account = web3.eth.accounts[0];
      $("#accountAddress").html("Your Account: " + App.account);
    }
    info = $("#newInfo").val();
    App.contracts.Diploma.deployed()
      .then(function (instance) {
        diplomaInstance = instance;
        return diplomaInstance.createDiplome(
          555,
          info,
          "hihi",
          "kkk",
          "kkkkk",
          "gkuggk",
          { from: App.account }
        );
      })
      .then(function (result) {});
    $("#newInfo").val("");
  };
*/
  const submitdegree = () => {
    console.log("adel");
  };
  return (
    <>
      <div>
        <NavigationConnected />
        <div className="container">
          <div>
            <h2>Digitizing university diplomas</h2>
            <h5 style={{ textAlign: "center" }}>Your account : {account}</h5>
          </div>
          <div className="row py-5 mt-4 align-items-center">
            <div className="col-md-6 pr-lg-5 mb-5 mb-md-0">
              <img
                src={createblockimage}
                alt=""
                className="img-fluid mb-4 d-none d-md-block"
              />
            </div>

            <div className="col-md-7 col-lg-6 ml-auto">
              <form action="#">
                <div className="row">
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="nom"
                      type="text"
                      name="nom"
                      required
                      placeholder="Student's last name"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="prenom"
                      type="text"
                      name="prenom"
                      required
                      placeholder="Student's first Name"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="matricule"
                      type="text"
                      name="matricule"
                      required
                      placeholder="Student's serial number"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => {
                        setSerialNumber(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>

                    <select
                      id="specialite"
                      name="specialite"
                      required
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={(e) => {
                        setSpeciality(e.target.value);
                      }}
                    >
                      <option value="Sécurité des systemes informatiques">
                        Sécurité des systèmes informatiques
                      </option>
                      <option value="Systemes intelligents">
                        Systèmes intelligents
                      </option>
                      <option value="informatique visuelle">
                        informatique visuelle
                      </option>
                      <option value="Big data">Big data</option>
                    </select>
                  </div>

                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      required
                      placeholder="La date de remise du diplôme"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      type="button"
                      className="btn btn-primary btn-block w-100 font-weight-bold"
                      onClick={() => {
                        creation();
                      }}
                    >
                      Créer
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <h6 style={{ textAlign: "center" }}>
              This page is dedicated only to the diploma provider authority (
              the departement )
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createblock;
