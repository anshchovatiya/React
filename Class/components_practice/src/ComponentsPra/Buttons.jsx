import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function ButtonsExa() {
  return (
    <ButtonGroup className="row container  row-cols-2">
      <div className="row row-cols-3" style={{ gap: "1rem" }}>
        <Button className="rounded-pill" variant="success">
          1
        </Button>
        <Button className="rounded-pill" variant="warning">
          2
        </Button>
        <Button className="rounded-pill" variant="dark">
          3
        </Button>
        <Button className="rounded-pill" variant="info">
          4
        </Button>
      </div>

      <DropdownButton
        as={ButtonGroup}
        variant="danger"
        title="Dropdown"
        id="bg-nested-dropdown"
        className="border border-success p-2 mb-2"
      >
        <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
        <Dropdown.Item eventKey="2">CSS</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default ButtonsExa;

export function ButtonGroupExa() {
  return (
    <>
      <div
        className="btn-group-vertical"
        role="group"
        aria-label="Vertical radio toggle button group"
        style={{width:"240px",backgroundColor:"royalblue"}}
      >
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
          autocomplete="off"
          checked
        />
        <label className="btn btn-outline-danger" for="vbtn-radio1" disabled>
          Radio 1
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autocomplete="off"
        />
        <label className="btn btn-outline-Dark" for="vbtn-radio2">
          Radio 2
        </label>
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autocomplete="off"
        />
        <label className="btn btn-outline-danger" for="vbtn-radio3">
          Radio 3
        </label>
      </div>
    </>
  );
}
