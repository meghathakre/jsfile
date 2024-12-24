import {useSelector,useDispatch} from "react-redux";
import Table from 'react-bootstrap/Table';
import {FaPlusCircle} from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import {qntyIncrement,qntyDecrement,dataRemove} from "../pages/cardSlice";
import {Button} from "antd";
import { useNavigate } from "react-router-dom";
const CartData=()=>{
    const myCard=useSelector((state)=>state.mycard.card);
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const qntyInc=(id)=>{
        dispatch(qntyIncrement({id:id}))
    }
    const qntyDec=(id)=>{
        dispatch(qntyDecrement({id:id}))
    }



    let sno=0;
    let totalAmount=0;
    const ans=myCard.map((key)=>{

        totalAmount +=key.price*key.qnty;
        sno++;
        return(
          <>
          <tr>
            <td>{sno}</td>
            <td>
                <img src={key.image} width="100" height="100"/></td>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.category}</td>
                <td>{key.price}</td>
                <td>
                <a href="#" onClick={()=>{qntyDec(key.id)}}>
                    <FaMinusCircle/>
                    <span style={{marginLeft:"5px", marginRight:"5px"}}> 
                    {key.qnty}   
                 </span> 
                </a>
                <a href="#" onClick={()=>{qntyInc(key.id)}}>
                    <FaPlusCircle/>
                </a>
                </td>
                <td>
                    {key.price*key.qnty}

                </td>
                <td>
                    <Button  onClick={()=>{dispatch(dataRemove(key.id))}}>
Remove
                    </Button>
                </td>
          </tr>
          </>  
        )
    })
    return(
        <>
        <h1>My card Data</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
               < th> S.No.</th>
          <th> </th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th> Price </th>
          <th> Quantity</th>
          <th> Total Price</th>
          <th> </th>      
                </tr>
            </thead>
            <tbody>
          {ans}
          <tr>
          <th> </th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> Net Amount</th>
          <th> {totalAmount}</th>
          </tr>
          <tr>
          <th> </th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> 

        <button onClick={()=>{navigate("/checkout")}}>CheckOut</button>

          </th>
          <th> </th>
          </tr>
        
        </tbody>
        </Table>
        </>
    )
}
export default CartData;