import { Table } from "semantic-ui-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64bcc5027b33a35a44474fd0.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const onDelete = (id) => {
    axios
      .delete(`https://64bcc5027b33a35a44474fd0.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get(`https://64bcc5027b33a35a44474fd0.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div className="list-div">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to="/Update"
                    className="btn btn-primary"
                    onClick={() => setData(data)}
                  >
                    Update
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link variant="danger" onClick={() => onDelete(data.id)}>
                    Delete
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
