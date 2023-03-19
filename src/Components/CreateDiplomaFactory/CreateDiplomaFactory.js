import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./CreateDiplomaFactory.css"
import CreateDiplomaImage from "../../Images/jj.png"
import {CreateFactory,AddAddressASC} from "../testing/func2";
import { useState ,useEffect } from 'react';



function CreateDiplomaFactory() {

    const [address, setaddress] = useState('');
    const [name, setName] = useState('');
  

    const handleaddress = (event) => {
        setaddress(event.target.value);
      }

      const handleName = (event) => {
        setName(event.target.value);
      }

      const creation =() => {
        //loadcontractASC();
        //AddAddressASC(address,name);
        CreateFactory(address,name);


      }


     
    




  return (
    <>
      <h1>Create new Diploma Factory</h1>
    <img src={CreateDiplomaImage} alt="Placeholder image" />
    <Form>
     

      <Form.Group className="mb-3">
        <Form.Label className='CreateFactoryBold'>Faculty Name</Form.Label>
        <Form.Control type="text" placeholder="Faculty of IT"  value={name} onChange={handleName} />
        <Form.Text className="text-muted"> </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='CreateFactoryBold'>Faculty address</Form.Label>
        <Form.Control type="text" placeholder="0x12345678dc2345678C12F4567891a3456789123"  value={address} onChange={handleaddress} />
      </Form.Group>


      <Button className="CreateFactoryButton" variant="primary"   onClick={() => {
                        // console.log(address);
                        // console.log(name);
                        creation();
                      }}
                    >   Create Factory
      </Button>
      
    </Form>

    </>
  )
}

export default CreateDiplomaFactory