import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {message} from 'antd';
import{useSelector} from "react-redux";


const Header=()=>{
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  const navigate=useNavigate();
  const[show,setShow]=useState(false);


 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CardData=useSelector((state)=>state.mycard.card);
  const cardLength=CardData.length;

    const handleSubmit=()=>{
      let api="http://localhost:9000/adminuser/usercheck";
      axios.post(api, {user:username, password:password}).then((res)=>{
        console.log(res);
       

        if(res.status==200){
          message.success("you are succesfully login!")
          navigate("/admin");
        }
        else{
          message.error(response.data.msg);
        }
      })      
   }


    return(
        <>
          <div id="header">
         
             
          {cardLength}
          <a href="#"  onClick={()=>{navigate("/carddata")}}>
          <FaShoppingCart  className="icon" />
          </a>
         <a href="#" onClick={handleShow} > 
          <RiAdminFill className="space" />
          </a>
          <a href="">
          <FaSearch className="space" />
          </a>
          </div>


          <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Admin Area for Manage your Website
          <br/><br />
          Enter   Admin :   < input type="text" value={username}
           onChange={(e)=>{setUsername(e.target.value)}} />
          <br/><br />
          Enter Password: <input type="password" value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/><br />
         


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Header;
