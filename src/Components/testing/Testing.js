import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { load, validate } from "./func";
import "antd/dist/antd.css";

function Testing() {
  const [refresh, setRefresh] = useState(true);
  const [degrees, setDegrees] = useState();

  const validation = (value) => {
    validate(value);
  };

  useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    load().then((e) => {
      setDegrees(e.diplomas);
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
      title: "Departement",
      dataIndex: "4",
      align: "center",
      editable: "true",
    },
    {
      title: "degree",
      dataIndex: "3",
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
      {" "}
      <div className="adel"></div>
      <Table
        dataSource={degrees}
        columns={columns}
        bordered
        className="tableposition"
      />
    </div>
  );
}

export default Testing;
