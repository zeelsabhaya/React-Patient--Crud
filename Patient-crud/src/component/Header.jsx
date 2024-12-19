import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoPersonAdd } from "react-icons/io5";
const Header = () => {

    const navigate = useNavigate();
    const handelClick = () => {
        navigate('/add')
    }

    return (
        <>
            <Navbar className="bg-white">
                <Container>
                    <Navbar.Brand href="/" className='w-50' ><img className='bg-black w-25' src="https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXT962lo62fy0bLhuS2HE0LfA78ufxZrGXA38gZOXx6IBVN5ofxvo6LlzW5hEhg1CXoPN4ZFBTc1Lb8QaR_achQ_uMouUsm5EzLmBVuxfw1UzpPpX4eopqjI2zf8KUUA2FtQsRKU1BLV6H11elrORuweXD3Dv0-d2TImOL_BRwb1Dt1gKoVkLA.png?r=69f" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button onClick={handelClick} ><IoPersonAdd size={20} /> Add Patient</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header