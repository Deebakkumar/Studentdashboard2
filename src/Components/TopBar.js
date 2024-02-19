import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'
function Topbar() {
    const userData=useContext(UserContext);
  return (
    <>

  <nav className="navbar navbar-light " style={{backgroundImage:"linear-gradient(to right,   #1cc88a ,  #99ffbb)"}}>
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                    <button className="btn btn-outline-dark" type="submit" style={{marginLeft:"5px"}}><FontAwesomeIcon icon={faSearch} /></button>

                </form>
                <div>



                    {/* <img class="img-profile rounded-circle" style={{ width: 30,margin:"6px" }}
                    src="https://www.erecept.pl/assets/img/undraw_profile.svg"/> */}
                         <span className="mr-2 d-none d-lg-inline text-gray-600 small"> {userData.user.name} </span>
                    <Link className="btn btn-outline-dark btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>
            </>

  )
}

export default Topbar