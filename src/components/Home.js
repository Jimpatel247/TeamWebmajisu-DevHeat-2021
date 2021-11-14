import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        
            <div className="container">
    <div className="card border m-3" width="18rem">
      <div className="card-body">
        <h5 className="card-title">CSE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <button type="button" className="hlink button" data-bs-toggle="modal" data-bs-target="#cseModal">
          Get Assignments
        </button>

        
        <div className="modal fade" id="cseModal" tabindex="-1" aria-labelledby="cseModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cseModalLabel">Select Semester</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <button className="hlink button"><Link to="">Sem 1</Link></button>
                <button className="hlink button"><Link to="csesem2.html">Sem 2</Link></button>
                <button className="hlink button"><Link to="csesem3.html">Sem 3</Link></button>
                <button className="hlink button"><Link to="csesem4.html">Sem 4</Link></button><br/>
                <button className="hlink button"><Link to="csesem5.html">Sem 5</Link></button>
                <button className="hlink button"><Link to="csesem6.html">Sem 6</Link></button>
                <button className="hlink button"><Link to="csesem7.html">Sem 7</Link></button>
                <button className="hlink button"><Link to="csesem8.html">Sem 8</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card border m-3" width="18 rem">
      <div className="card-body">
        <h5 className="card-title">ECE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <button type="button" className="hlink button" data-bs-toggle="modal" data-bs-target="#eceModal">
          Get Assignments
        </button>

       
        <div className="modal fade" id="eceModal" tabindex="-1" aria-labelledby="eceModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="eceModalLabel">Select Semester</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <button className="hlink button"><a href="ecesem1.html">Sem 1</a></button>
                <button className="hlink button"><a href="ecesem2.html">Sem 2</a></button>
                <button className="hlink button"><a href="ecesem3.html">Sem 3</a></button>
                <button className="hlink button"><a href="ecesem4.html">Sem 4</a></button><br/>
                <button className="hlink button"><a href="ecesem5.html">Sem 5</a></button>
                <button className="hlink button"><a href="ecesem6.html">Sem 6</a></button>
                <button className="hlink button"><a href="ecesem7.html">Sem 7</a></button>
                <button className="hlink button"><a href="ecesem8.html">Sem 8</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
        
    )
}
