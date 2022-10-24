import React, { useState } from "react";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";
import { RecipeData } from "../database/database";
import RecipeDetails from "./RecipeDetails";

const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Recipe List</h2>
          <Row>
            <Stack gap={2} className="col-md-5 mx-auto">
              {RecipeData.map((r) => (
                <Button key={r.id} onClick={() => setSelectedRecipe(r)}>
                  {r.name}
                </Button>
              ))}
            </Stack>
          </Row>
        </Col>
        <Col>
          <h2>Recipe Details</h2>
          {selectedRecipe && (
            <RecipeDetails key={selectedRecipe.id} recipe={selectedRecipe} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeList;
