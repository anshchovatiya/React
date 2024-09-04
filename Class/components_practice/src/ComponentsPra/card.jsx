import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ ImageLink, colour, tittle }) {
  return (
    <Card className="col-3 offset-1 p-0">
      <Card.Img variant="top" src={ImageLink} alt="random Image" />
      <Card.Body>
        <Card.Title className="fs-3">{tittle}</Card.Title>
        <Card.Text className="fs-5">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant={colour}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;

export function SecondCard({ImageLink,Text}) {
  return (
    <>
      <Card className="">
        <Card.Img variant="top" src={ImageLink} style={{"maxHeight":"500px"}} className="object-fit-cover"/>
        <Card.Body>
          <Card.Text>
            {Text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

