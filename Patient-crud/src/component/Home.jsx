import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getdata } from "../servis/storegData";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './style.css'

const Home = () => {
    const navigate = useNavigate();

    const [storeg, setstoreg] = useState(getdata());

    const deleteData = (id) => {
        const deletes = storeg.filter((item) => item.id !== id);
        setstoreg(deletes);
        localStorage.setItem("products", JSON.stringify(deletes));
    }

    const editData = (id) => {
        navigate(`/Edit/${id}`)
    }

    const viewData = (id) => {
        navigate(`/View/${id}`)
    }

    return (
        <>
            <Container className="mt-5">
                <h3 className="pb-5 fw-bold fs-1">Patient Card</h3>
                <div className="d-block card-list">
                    <Row>
                        {
                            storeg.map((value, index) => (
                                <Col className="col" xs={4} key={index}>
                                    <div className="card bg-white p-5 rounded-4 m-3 ">
                                        <div className="card-title">
                                            <div className="patient-img d-flex justify-content-between align-items-start">
                                                <div className="img border rounded-circle overflow-hidden"><img src="https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-single-person-character-in-vector-png-image_2194492.jpg" alt="patient" /></div>
                                                <p className="p-id border border-success-subtle rounded-pill px-2 bg-success-subtle text-success mt-1">{value.id}</p>
                                            </div>
                                            <div className="name d-flex pt-3">
                                                <h5 className="me-2">{value.Name}</h5>
                                                <p className="border px-1 rounded p-tage bg-dark-subtle">{value.gender}</p>
                                            </div>
                                            <div className="all-bts d-flex">
                                                <Button className="bts p-0 px-3 py-1 me-2 mt-3" onClick={() => editData(value.id)}>
                                                    <FaEdit /> Edit
                                                </Button>
                                                <Button className="bts p-0 px-3 py-1 me-2 mt-3" onClick={() => viewData(value.id)}>
                                                    <FaEye /> View
                                                </Button>
                                            </div>
                                            <div className="border my-4"></div>
                                            <p className="text-secondary mb-2">DOB</p>
                                            <p>{value.bod}</p>
                                            <p className="text-secondary mb-2">Address</p>
                                            <p>{value.Address}</p>
                                            <p className="text-secondary mb-2">Contacts</p>
                                            <p>{value.Contacts}</p>
                                            <div className="border my-4"></div>
                                            <Button className="p-0 px-3 py-1 me-2 mt-3" onClick={() => deleteData(value.id)}>
                                                <MdDelete /> Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>

                </div>
            </Container>
        </>
    )
}
export default Home;