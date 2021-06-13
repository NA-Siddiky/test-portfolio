import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import ProjectModal from './ProjectModal';


function Project({ pr }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, img, teach, link, github, desc } = pr;
  return (
    <div className="col-md-4 p-3">
      <Card className='shadow rounded'>
        <Card.Img variant="top" height="200px" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{teach}</Card.Title>
          <Card.Text>
            {desc.substring(0, 250)}
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button target='_blank' className="btn-custom" href={link}>Visit Site</Button>
            <Button target='_blank' className="btn-custom" href={github}>View Code</Button>
            <Button className="btn-custom" onClick={handleShow}>Details</Button>
          </div>

        </Card.Body>
      </Card>
      <ProjectModal pr={pr} show={show} handleClose={handleClose}></ProjectModal>




    </div>
  )
}

export default Project
