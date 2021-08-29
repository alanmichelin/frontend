import { useState } from "react";
import Button  from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"

const Recipe = ({ingredients}) =>{
        console.log(ingredients)
        const [open, setOpen] = useState(false);
      
        return (
          <div style={{position: 'absolute'}}>
              <p>See ingredients</p>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <i className="fas fa-angle-double-right"></i>
            </Button>
            <div style={{minHeight: '150px', position: 'absolute'}}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{width: '400px'}}>
                  <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map(e=>
                            <tr>
                                <td>{Object.keys(e)}</td>
                                <td>{Object.values(e)}</td>
                            </tr>
                            )}

                    </tbody>
                    </Table>
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>
        );
      
}

export default Recipe;