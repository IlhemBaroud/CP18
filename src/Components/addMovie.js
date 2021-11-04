import React from 'react';
import Form from 'react-bootstrap/Form';

import Modal from 'react-modal';
import { useState } from 'react';

const AddMovie = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [url, setUrl] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        props.addMovie(title, description, year, url);
        setTitle('');
        setDescription('');
        setYear('');
        setUrl('');
        setIsOpen(false);
    }
    return (
       <div className="add stick2">
          <button onClick={()=>setIsOpen(true)}> Add new </button>
        
        <Modal isOpen={isOpen} 
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '100px',
              left: '600px',
              right: '400px',
              bottom: '50px',
              border: '1px solid #ccc',
              background: '#000',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}>
            <Form style={{color:"white"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text" placeholder="Type the movie title..." 
                onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Year </Form.Label>
                <Form.Control type="text" placeholder="Type the year of production..." 
                 onChange={(e)=>setYear(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Movie poster</Form.Label>
                <Form.Control type="text" placeholder="Type the poster URL..." 
                 onChange={(e)=>setUrl(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} 
                 onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
            <button className="btn btn-primary" style={{marginRight:"20px", padding:"10px 20px"}}>Close </button>
            <button className="btn btn-primary" style={{marginRight:"20px", padding:"10px 20px"}}
            onClick={handleSave}>Save </button>
            </Form>
        </Modal>
        </div>
    ) 
}

export default AddMovie
