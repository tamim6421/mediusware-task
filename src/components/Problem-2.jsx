import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalA1, setShowModalA1] = useState(false);

  const [contract, setAllContract] = useState(null);
  const [usContact, setUsContact] = useState(null);

  useEffect(() => {
    const url = `https://contact.mediusware.com/api/contacts/?page=1&page_size=10`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setAllContract(result?.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const url2 = `https://contact.mediusware.com/api/country-contacts/United%20States/?page=1&page_size=10`;

    const fetchData = async () => {
      try {
        const response = await fetch(url2);
        const result = await response.json();
        console.log(result);
        setUsContact(result?.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleShowModalA = () =>{
    setShowModalA(false)
    setShowModalA(true)

  }
  const handleCloseModalA = () => setShowModalA(false);
  const modalOff = () =>{
    setShowModalA(false);
    setShowModalB(false);
  } 
  const handleCloseModalA1 = () => setShowModalA1(false);

  const handleShowModalB = () =>{
    setShowModalB(true);
    setShowModalA(false)

  } 

  const handleCloseModalB = () => setShowModalB(false);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleShowModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleShowModalB}
            className="btn  btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal A */}
      <Modal show={showModalA} onHide={handleCloseModalA}>
        <Modal.Header closeButton>
          <Modal.Title>Modal A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {contract?.map((data, index) => (
              <ul key={index}>
                <li>{data.phone}</li>
              </ul>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#46139f" }}
            onClick={handleShowModalA}
          >
            Button A
          </Button>
          <Button
            onClick={handleShowModalB}
            style={{ backgroundColor: "#ff7f50" }}
          >
            Button B
          </Button>
          <Button
            style={{
              backgroundColor: "",
              border: "1px solid #46139f",
              color: "black",
            }}
            className="bg-white "
            onClick={modalOff}
          >
            Button C
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Modal B */}
      <Modal show={showModalB} onHide={handleCloseModalB}>
        <Modal.Header closeButton>
          <Modal.Title>Modal B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {usContact?.map((data, index) => (
              <ul key={index}>
                <li>{data.phone}</li>
              </ul>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button
            style={{ backgroundColor: "#46139f" }}
            onClick={handleShowModalA}
          >
            Button A
          </Button>
          <Button
            onClick={handleShowModalB}
            style={{ backgroundColor: "#ff7f50" }}
          >
            Button B
          </Button>
          <Button
            style={{
              backgroundColor: "",
              border: "1px solid #46139f",
              color: "black",
            }}
            className="bg-white "
            onClick={modalOff}
          >
            Button C
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Problem2;
