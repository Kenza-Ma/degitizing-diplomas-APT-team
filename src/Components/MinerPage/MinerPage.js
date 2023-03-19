import React from "react";
import { Table, Button } from "antd";
import { useState, useEffect } from "react";
import { minerload } from "../testing/minerload";
import "./MinerPage.css";
import "antd/dist/antd.css";
import { textAlign } from "@mui/system";
import { blue } from "@material-ui/core/colors";
import NavigationConnected from "../Navigation/NavigationConnected";

function MinerPage() {
  /*const [datafile, setData] = useState({ Data });



  const modifieddata = datafile.Data.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
  }));

  const validate = (value) => {
    const datasource = [...modifieddata];
    const filtereddata = datasource.filter((item) => item.id === value.id);
    console.log(filtereddata);
  };
  */

  const [refresh, setRefresh] = useState(true);
  const [degrees, setDegrees] = useState();
  const [account, setAccount] = useState();
  const [name, setName] = useState();
  const validation = (value) => {
    //validate(value);
  };

  useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    minerload().then((e) => {
      setDegrees(e.diplomas);
      setAccount(e.currentaddress);
      setName(e.name.toString());
      console.log(e.currentaddress.toString());
      console.log(name);
    });
  });

  const columns = [
    { title: "id", dataIndex: "0" },
    {
      title: "Last Name",
      dataIndex: "1",
      align: "center",
      editable: "true",
    },
    {
      title: "First Name",
      dataIndex: "2",
      align: "center",
      editable: "true",
    },
    {
      title: "Department",
      dataIndex: "3",
      align: "center",
      editable: "true",
    },
    {
      title: "degree",
      dataIndex: "4",
      align: "center",
      editable: "true",
    },
    {
      title: "Date",
      dataIndex: "5",
      align: "center",
      editable: "true",
    },
    {
      title: "valid",
      dataIndex: "6",
      align: "center",
      editable: "true",
      render: (completed) => {
        return <p>{completed ? "verified" : "in progress"}</p>;
      },
    },
    {
      title: "Actions",
      dataIndex: "id",
      align: "center",
      render: (text, record, id, value) => (
        <Button
          type="primary"
          style={record[6] ? { display: "none" } : {}}
          id={record.id}
          disabled={record[6]}
          className="valider"
          onClick={(e) => {
            validation(record[0]);
          }}
        >
          Validate
        </Button>
      ),
    },
  ];

  return (
    <div>
      <NavigationConnected />
      <Button
        type="primary"
        style={{
          marginLeft: "25px",
          backgroundColor: "#4946a1",
          border: "1px solid #4946a1",
        }}
      ></Button>
      <h2 style={{ color: "#4946a1" }}>List of degrees </h2>
      <h5 style={{ textAlign: "center" }}> Welcome {name}</h5>
      <h5 style={{ textAlign: "center" }}>Your account : {account}</h5>
   
      <Table
        dataSource={degrees}
        columns={columns}
        bordered
        className="tableposition"
      />
      <h6 style={{ textAlign: "center", paddingBottom: "10px" }}>
        This page is dedicated to the verification authorities ( the faculty,
        the rectorate , the ministry )
      </h6>
    </div>
  );
}

export default MinerPage;
