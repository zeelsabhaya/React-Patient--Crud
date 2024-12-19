import { useEffect } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router"
import { getdata } from "../servis/storegData"

const View = () => {
    const { id } = useParams()

    const navigate = useNavigate();

    let arr = []
    let datas = getdata()
    let datas1 = datas.find((data) => data.id == id)
    arr.push(datas1)
    const Back = () => {
        navigate("/")
    }

    return (
        <>
            <Container>
                <div className="d-block card-list">
                    <Row>
                        {
                            arr.map((value, index) => (
                                <Col xs={4} className="cols" key={index}>
                                    <div className="card bg-white p-5 rounded-4 m-3 ">
                                        <div className="card-title">
                                            <div className="patient-img d-flex justify-content-between align-items-start">
                                                <div className="img border rounded-circle overflow-hidden"><img src="https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-single-person-character-in-vector-png-image_2194492.jpg" alt="patient" /></div>
                                                <p className="border border-success-subtle rounded-pill px-2 bg-success-subtle text-success mt-1">{value.id}</p>
                                            </div>
                                            <div className="name d-flex pt-3">
                                                <h5 className="me-2">{value.Name}</h5>
                                                <p className="border px-1 rounded p-tage bg-dark-subtle">{value.gender}</p>
                                            </div>
                                            <div className="d-flex">
                                            </div>
                                            <div className="border my-4"></div>
                                            <p className="text-secondary mb-2">DOB</p>
                                            <p>{value.bod}</p>
                                            <p className="text-secondary mb-2">Address</p>
                                            <p>{value.Address}</p>
                                            <p className="text-secondary mb-2">Contacts</p>
                                            <p>{value.Contacts}</p>
                                            <div className="border my-4"></div>
                                            <Button onClick={Back}>
                                                Back
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

export default View