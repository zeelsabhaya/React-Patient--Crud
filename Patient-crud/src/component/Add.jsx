import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { getdata } from "../servis/storegData";
import { useNavigate } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate()
    const [inputForm, setinputForm] = useState({
        id: "",
        Name: "",
        Address: "",
        Contacts: "",
        bod: "",
        gender: "",
    });
    const handelChanged = (e) => {
        const { name, value } = e.target;
        setinputForm({ ...inputForm, [name]: value });
    }
    const handelsubmit = (e) => {
        e.preventDefault();
        let id = generateUniqueId({
            length: 8,
            useLetters: false
        })

        let data = getdata()
        data.push({ ...inputForm, id: id })
        localStorage.setItem("products", JSON.stringify(data))
        setinputForm({
            id: "",
            Name: "",
            Address: "",
            Contacts: "",
            bod: "",
            gender: "",
        });
        navigate('/')
    }
    return (
        <div>
            <h1 className="text-center mt-5">Add patient list</h1>
            <Container>
                <div className="d-flex justify-content-center">
                    <Form onSubmit={handelsubmit} className="border border-2 rounded-5 w-50  p-5 mt-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" name="Name" onChange={handelChanged} value={inputForm.Name} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" name="Address" onChange={handelChanged} value={inputForm.Address} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Contacts</Form.Label>
                            <Form.Control type="text" placeholder="Contacts" name="Contacts" onChange={handelChanged} value={inputForm.Contacts} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>D.O.B</Form.Label>
                            <Form.Control type="date" placeholder="About text for Product" name="bod" onChange={handelChanged} value={inputForm.bod} required />
                        </Form.Group>
                        <div className="d-flex align-items-center">
                            <Form.Label column sm="2">
                                Gender:
                            </Form.Label>
                            <Col sm="2">
                                <Form.Check
                                    type="radio"
                                    label='Male'
                                    name='gender'
                                    value={'Male'}
                                    onChange={handelChanged}
                                />
                            </Col>
                            <Col sm="1">
                                <Form.Check
                                    type="radio"
                                    label='Female'
                                    name='gender'
                                    value={'Female'}
                                    onChange={handelChanged}
                                />
                            </Col>
                        </div>
                        <Button variant="primary" type="submit" className="mt-4">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
export default Add;