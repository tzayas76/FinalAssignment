import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import Navigation from "./components/Navigation";
import DonateForm from "./components/Donate-form";


  export default function Donate() {
    return (
    <>
    <Container>
           <main>
          <h2>Donations help endangered animals all over the world!</h2>
          <p>
            We have several options available for you to help save
            endangered animals and their habitats!

          </p>
        </main>

        <Container>
          <CardGroup>
            <Card bg="dark" border="warning" text="white" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th-thumbnailer.cdn-si-edu.com/u_SfAocOUU9zoAlmyULgUOciUqo=/fit-in/1600x0/filters:focal(2560x1707:2561x1708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/53/d2/53d26bb7-205a-4cfa-b988-590a9edb8742/gettyimages-107246950.jpg" />
              <Card.Body>
                <Card.Title>Donate Once</Card.Title>
                <Card.Text>
                  You can protect threatened species and their habitats
                  today with a donation to Endangered  Wildlife Fund. Your
                  support of EWF's global conservation work will make a world of
                  difference.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <>
                  <Button variant="warning">Donate Once</Button>{' '}
                </>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="warning" text="white" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/d/p/dpx-0001975184_jpg.webp" />
              <Card.Body>
                <Card.Title>Give Monthly</Card.Title>
                <Card.Text>
                  You can protect threatened species and their habitats today with a monthly donation to Endangered Wildlife Fund. Your support of EWF's global conservation work
                  will make a world of difference. When you make a monthly donation, you'll join our special group of EWF Heroes (monthly members) and enjoy these benefits.
                  A monthly gift of $85+ makes you a Partner in Conservation.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <>
                  <Button variant="warning">Give Monthly</Button>{' '}
                </>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="warning" text="white" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" />
              <Card.Body>
                <Card.Title>More Ways to Give</Card.Title>
                <Card.Text>
                  You can have an extraordinary, positive impact on our natural world. When you help WWF protect species, you contribute to a thriving, healthy planet.
                  However you choose to support EWF, we are deeply grateful. With Panda Nation, you can start your own fundraising campaign for EWF! Whatever you do — run a marathon,
                  celebrate a birthday or fundraise with your classroom — we'll provide you with support all along the way. Learn about giving gifts through your will, living trust,
                  retirement plans and ways to give that may provide fixed income back to you or a loved one for life.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <>
                  <Button variant="warning">More Ways to Give</Button>{' '}
                </>
              </Card.Footer>

            </Card>
          </CardGroup>

        </Container>
        <div>
          <p>
            Your Monthly Donation
          </p>
        <>
      
          <Button variant="outline-warning">$10</Button>{' '}
          <Button variant="outline-warning">$15</Button>{' '}
          <Button variant="outline-warning">$20</Button>{' '}
          <Button variant="outline-warning">$25</Button>{' '}
          <Button variant="outline-warning">$50</Button>{' '}
          

        </>

        </div>
        <div>
          <p>
            Your Donation
          </p> 
        <>
      
          <Button variant="outline-warning">$50</Button>{' '}
          <Button variant="outline-warning">$75</Button>{' '}
          <Button variant="outline-warning">$100</Button>{' '}
          <Button variant="outline-warning">$200</Button>{' '}
          <Button variant="outline-warning">$500</Button>{' '}
          

        </>

        </div>
        
        
      </Container>
    </>
         
    );
  }
 
  