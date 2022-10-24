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
            <th>Name</th>
            <th>Age</th>
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
                  {item.name}
                </Button>
              </td>
              <td>{item.Age}</td>
              <td>{item.Speciality}</td>
              <td>{showMoreProp[item.id] && item.recipe}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MasterDetails;
