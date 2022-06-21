import { Link } from 'react-router-dom';
import { Container, Alert, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Navigation from './components/Navigation';
import { Form } from 'react-bootstrap';



 function Home() {
    return (
      <Container> 
        <main>
          <h2>Welcome to the Endangered Wildlife Fund!</h2>
          <p>WHAT’S THE DIFFERENCE BETWEEN ASIAN AND AFRICAN ELEPHANTS?</p>
          <>
  <Card bg="dark" border="warning" text="white">
    <Card.Img variant="top" src="https://files.worldwildlife.org/wwfcmsprod/images/elephants_at_water_hole_WW2122503_Anup_Shah/magazine_hero/99dsjm2iaw_Medium_WW2122503.jpg" />
    <Card.Body>
      <Card.Text>
      Elephants are ecosystem engineers and play a vital role in their 
      native habitats, helping maintain the rich biodiversity of the spaces 
      they share with other wildlife. Though elephants are native to only 
      Africa and Asia, they hold significant cultural and symbolic meaning 
      around the world. EWF focuses on conserving the world's largest land 
      mammal in landscapes across both Asia and Africa. We work with wildlife 
      managers, governments, and local communities to stop poaching, reduce 
      human-wildlife conflict, maintain connectivity, and improve monitoring and research.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card bg="dark" border="warning" text="white">
    <Card.Body>
      <Card.Text>
      There are more than 10 physical characteristics that differentiate Asian and African 
      elephants. For example, Asian elephants' ears are smaller compared to the large 
      fan-shaped ears of the African species. Only some male Asian elephants have tusks, 
      while both male and female African elephants grow tusks. It is also important to note 
      that there are two distinct elephants species on the African continent—the savanna 
      elephant and the forest elephant, with a number of characteristics that differentiate 
      them both as well.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://i.natgeofe.com/n/33cdce3b-441a-434f-abfa-ccf3b9c02333/elephants-indian-tea-farm-dsc_6456.jpg" />
  </Card>
</>
        
        </main>

        <Form>
            <h5> GET THE LATEST CONSERVATION NEWS! SIGN UP TODAY!</h5>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name (Required) </Form.Label>
        <Form.Control type="first name" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Last Name (Required) </Form.Label>
        <Form.Control type="last name" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Address (Required) </Form.Label>
        <Form.Control type="email address" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Zip Code (Required) </Form.Label>
        <Form.Control type="zipcode" placeholder="Enter Zip Code" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone Number (optional) </Form.Label>
        <Form.Control type="phone number" placeholder="Enter Phone Number" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            SIGN UP
          </Button>
        </div>
  
       
      </Form>   
      
        
      
             
     </Container>
            


    );
  }
export default Home
  