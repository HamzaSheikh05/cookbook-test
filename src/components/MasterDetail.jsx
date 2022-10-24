import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { RecipeData } from "../database/database";

const MasterDetails = () => {
  const [showMoreProp, setShowMoreProp] = useState({});

  function handleMorePropClick(key) {
    const showDetail = showMoreProp[key];
    const toggleKey = showDetail ? { [key]: !showDetail } : { [key]: true };
    setShowMoreProp((showMoreProp) => ({ ...showMoreProp, ...toggleKey }));
  }

  return (
    <div>
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Recipe Name</th>
            <th>Chef Name</th>
            <th>Speciality</th>
            <th>Recipe Details</th>
          </tr>
        </thead>
        <tbody>
          {RecipeData.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>
                <Button onClick={() => handleMorePropClick(item.id)}>
                  {item.recipe}
                </Button>
              </td>
              <td>{item.name}</td>
              <td>{item.Speciality}</td>
              <td>
                {showMoreProp[item.id] && (
                  <ul>
                    <li>
                      <strong>Recipe Id:</strong> {item.id}
                    </li>
                    <li>
                      <strong>Chef Name:</strong> {item.name}
                    </li>
                    <li>
                      <strong>Chef Age:</strong> {item.Age}
                    </li>
                    <li>
                      <strong>Chef Speciality:</strong> {item.Speciality}
                    </li>
                    <li>
                      <strong>Recipe Name:</strong> {item.recipe}
                    </li>
                    <li>
                      <strong>Recipe Details:</strong> {item.details}
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MasterDetails;
