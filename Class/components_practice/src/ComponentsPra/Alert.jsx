import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function AlertCustom() {
  return (
    <>
      <Alert key={"primary"} variant={"primary"}>
        This is Alert massage Primary variant
      </Alert>
      <Alert key={"danger"} variant={"danger"}>
        This is Alert massage Danger variant
      </Alert>
      <Alert key={"success"} variant={"success"}>
        This is Alert massage Success variant
      </Alert>
      <Alert key={"warning"} variant={"warning"}>
        This is Alert massage Warning variant
      </Alert>
      <Alert variant="success">
      <div className="d-flex align-items-center w-100">
          <Alert.Heading>
            This is alert heading
          </Alert.Heading>
          <Badge pill bg="success" className=" ms-5 p-2">
            Success
          </Badge>
        </div>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
        <Button variant="success" className="mt-3">
          Likes{" "}
          <Badge bg="secondary" className="ms-4">
            80
          </Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </Alert>

      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <div className="d-flex align-items-center w-100">
          <Alert.Heading>
            This is error massage with danger variant of Alert
          </Alert.Heading>
          <Badge pill bg="danger" className=" ms-5 p-2">
            Danger
          </Badge>
        </div>

        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </>
  );
}

export default AlertCustom;
