import { Link } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Navigation from "./components/Navigation";
import AdoptButton from "./components/Adopt-button";


export default function Adopt() {
    return (
      <Container>
        <main>
          <h2>Want to do more? Adopt!</h2>
          <p>
           You can Symbolicly Adopt an endangered animal! 
           You will help save them and their habitat, as well as get cool gifts for adopting!
          </p>
          <div>
          <>
            <Card bg="dark" text="white">
              <Card.Img variant="top" src="https://www.science.org/do/10.1126/science.abf8850/abs/elephant_1280p.jpg" />
              <Card.Body>
                <Card.Text>
                Symbolic Species Adoptions
                Support EWF's global efforts to protect wild animals and their habitats! 
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="warning" size="lg">
                    SYMBOLICLY ADOPT AN ANIMAL 
                  </Button>
                </div>
                
              </Card.Body>
            </Card>
          </>
          </div>
        </main>
        
        <div>
          <p>
            
          </p>
        <>
      
          <Button variant="outline-warning">$10</Button>{' '}
          <Button variant="outline-warning">$15</Button>{' '}
          <Button variant="outline-warning">$20</Button>{' '}
          <Button variant="outline-warning">$25</Button>{' '}
          <Button variant="outline-warning">$50</Button>{' '}
          

        </>

        </div>
        
        
      </Container>
    );
  }

  