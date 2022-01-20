import { Col, Row, Container } from "react-bootstrap";
import image from "../assets/about.png";
import SearchBar from "../components/SearchBar";

const About = () => {
  return (
    <>
    <SearchBar/>
    <Container style={{minHeight:"70vh"}} className="text-center mt-4">
      <Row>
        <Col>
          <img className="pt-4" src={image} style={{height:500, width:900
          ,marginBottom:20}} alt="About Us" />
        </Col>
        <Col>
          <h1 className="pt-4">Social Blogging is the future of Online Writing</h1>
          <div>
           It’s all the benefits of owning your own blog (design customization, domain, library of content, etc.)
           </div>
           <br/>
           <div>
           And all the benefits of writing on social platforms (reach, distribution, social proof, and real-time data feedback loops).
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;
