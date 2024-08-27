import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl = useNavigate();
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100 p-5 pt-1">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "white", fontSize: "40px" }}>
            Welcome to <span className="text-warning">Media Player</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eius dolor nihil veniam molestiae, aspernatur molestias recusandae
            ab rerum nemo nobis aperiam ullam, nam corporis quam sequi
            obcaecati, nostrum cupiditate. Quibusdam necessitatibus ab
            doloremque doloribus officia est ex corporis optio. Numquam,
            aliquam? Quia, corporis molestiae? Dolorem nobis quisquam, fugit
            reiciendis et soluta ab corrupti, ipsum inventore, debitis
            consequuntur voluptatibus. Dolore. Nostrum delectus sit culpa neque
            atque exercitationem ab enim, iste minima consequuntur nesciunt
            eaque officiis dolore, saepe optio voluptatum vero dolor vitae quia
            omnis possimus eos at beatae? Voluptate, numquam. Sint quis libero
            quam! Ipsam, voluptas non repudiandae nisi eligendi nostrum
            doloribus eius eum? Minima vel tenetur sed recusandae, odio
            aspernatur quos impedit in est inventore fugiat beatae modi minus!
            Molestias, minima necessitatibus? Magni nesciunt ipsam
            necessitatibus eveniet accusantium cupiditate nemo assumenda,
            repellendus minima magnam consectetur illum rem eos. Quod reiciendis
            non sit est veniam. Soluta nemo saepe culpa nulla!{" "}
          </p>
          <Button
            className="btn btn-info"
            onClick={() => navigateByUrl("./home")}
          >
            Get Started
          </Button>
        </Col>
        <Col>
          <img
            src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
            alt=""
          />
        </Col>
        <Col></Col>
      </Row>

      {/* cards */}
      <div className="container  d-flex flex-column  align-items-center justify-content-center w-100 ">
        <h5>Features</h5>
        <div className="cards mb-5 mt-1 d-flex align-items-center justify-content-center w-100 ">
          <Card style={{ width: "22rem", margin: "15px" }} className="bg-info">
            <Card.Img
              varient="top"
              height={"300px"}
              src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                cupiditate explicabo quod eaque corrupti quas, quaerat
                accusantium sit repellendus illum eos omnis officiis
                necessitatibus similique adipisci, aperiam unde id ipsam?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem", margin: "15px" }} className="bg-info">
            <Card.Img
              varient="top"
              height={"300px"}
              src="https://i.pinimg.com/originals/1d/91/f8/1d91f8f64a3d7e4e51cfe526012cfa3f.gif"
            />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                cupiditate explicabo quod eaque corrupti quas, quaerat
                accusantium sit repellendus illum eos omnis officiis
                necessitatibus similique adipisci, aperiam unde id ipsam?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem", margin: "15px" }} className="bg-info">
            <Card.Img
              varient="top"
              height={"300px"}
              src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif"
            />
            <Card.Body>
              <Card.Title>Watch-History</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                cupiditate explicabo quod eaque corrupti quas, quaerat
                accusantium sit repellendus illum eos omnis officiis
                necessitatibus similique adipisci, aperiam unde id ipsam?
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* section */}
      <div className="container border rounded p-4 border-light mt-1 d-flex justify-content-center align-items-center">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple,Powerfull & Fast</h4>
          <h6 className="mb-5 mt-4">
            <span className="text-warning">Play Everything</span>: Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Velit cumque
            reprehenderit nam expedita quos consequuntur autem suscipit, eum,
            saepe quo qui, tenetur labore? Ab fuga, veritatis labore nam eius
            adipisci!
          </h6>
          <h6 className="mb-5 mt-4">
            <span className="text-warning">Categorize Vedios</span>: Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Velit cumque
            reprehenderit nam expedita quos consequuntur autem suscipit, eum,
            saepe quo qui, tenetur labore? Ab fuga, veritatis labore nam eius
            adipisci!
          </h6>
          <h6 className="mb-5 mt-4">
            <span className="text-warning">Managing Vedios</span>: Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Velit cumque
            reprehenderit nam expedita quos consequuntur autem suscipit, eum,
            saepe quo qui, tenetur labore? Ab fuga, veritatis labore nam eius
            adipisci!
          </h6>
        </div>
        <div className="col-lg-5 ms-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=U-LnxP34oZmAm2Yn" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

    </>
  );
}

export default LandingPage;