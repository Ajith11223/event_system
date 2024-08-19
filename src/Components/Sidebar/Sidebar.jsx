"use client";
import React, { useState } from "react";
import { Button, Col, Modal, Panel, Placeholder, Row } from "rsuite";

const Card = (props) => (
  <Panel {...props} bordered header="Card title">
    <Placeholder.Paragraph />
  </Panel>
);

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
  return (
    <>
      <div className="flex justify-between p-2">
        <h5>All Events</h5>
        <Button color="green" onClick={handleOpen} appearance="primary">
          Add Event
        </Button>
      </div>
      <Row>
        <Col md={6} sm={12}>
          <Card />
        </Col>
      </Row>

      <Modal size={'lg'} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={size === 'full' ? 100 : 10} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Sidebar;
