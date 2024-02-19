import React from 'react'
import { Table } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faPenToSquare,faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
function Details({Student}) {
  const his=useNavigate();

  const handledelete=(id)=>{
    const alert=window.confirm(`DO you want to delete ${id}`)
  if(alert){
    var index=Student.map(function(el){
      return el.id

    }).indexOf(id);

    Student.splice(index,1);
  }
  his("/portal/dashboard")
  }

  return (
   <>

   <Table striped bordered hover>
    <thead>
      <tr>
        <th style={{textAlign:"center"}}>Id No</th>
        <th style={{textAlign:"center"}}>Name</th>
        <th style={{textAlign:"center"}}>Gender</th>
        <th style={{textAlign:"center"}}>DOB</th>
        <th style={{textAlign:"center"}}>Gpa</th>
        <th  style={{textAlign:"center"}}>Average</th>
        <th style={{textAlign:"center"}}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        Student && Student.length>0
        ?
        Student.map((e)=>{
          return(
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.dob}</td>
              <td>{e.average}</td>
              <td>{e.gpa}</td>


              <td>
                <Link to={`/portal/view/${e.id}`}>
              <Button  size='sm' variant="secondary" style={{margin:"2px"}}>View <FontAwesomeIcon icon={faEye} style={{marginLeft:"3px"}}/></Button>
              </Link>
              <Link to={`/portal/edit/${e.id}`}>
                 <Button  size='sm'variant="success" style={{margin:"2px"}} >Edit <FontAwesomeIcon icon={faPenToSquare} style={{marginLeft:"3px"}}/></Button>
                 </Link>
                 <Button size='sm' variant="danger" style={{margin:"2px"}} onClick={()=>handledelete(e.id)}>Delete <FontAwesomeIcon icon={faUserMinus} style={{marginLeft:"3px"}}/></Button>
              </td>
            </tr>
          )
        })
        :"No data available"
      }
    </tbody>
   </Table>


   </>
  )
}

export default Details