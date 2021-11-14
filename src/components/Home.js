import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (

    <div className="container">
      <div className="card border m-3" width="18rem" >
        <div className="card-body">
          <h5 className="card-title">Cse</h5>
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
                  
                  <button className="hlink button"><a href="/csese">Sem 1</a></button>
                  <button className="hlink button"><a href="/cse2">Sem 2</a></button>
                  <button className="hlink button"><a href="/cse3">Sem 3</a></button>
                  <button className="hlink button"><a href="/cse4">Sem 4</a></button><br />
                  <button className="hlink button"><a href="/cse5">Sem 5</a></button>
                  <button className="hlink button"><a href="/cse6">Sem 6</a></button>
                  <button className="hlink button"><a href="/cse7">Sem 7</a></button>
                  <button className="hlink button"><a href="/cse8">Sem 8</a></button>
                </div>
              </div>
            </div>
          </div>
          <button className="button hlink mx-2">Books</button>
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
                  <button className="hlink button"><a href="/ece1">Sem 1</a></button>
                  <button className="hlink button"><a href="/ece2">Sem 2</a></button>
                  <button className="hlink button"><a href="/ece3">Sem 3</a></button>
                  <button className="hlink button"><a href="/ece4">Sem 4</a></button><br />
                  <button className="hlink button"><a href="/ece5">Sem 5</a></button>
                  <button className="hlink button"><a href="/ece6">Sem 6</a></button>
                  <button className="hlink button"><a href="/ece7">Sem 7</a></button>
                  <button className="hlink button"><a href="/ece8">Sem 8</a></button>
                </div>
              </div>
            </div>
          </div>
          <button className="button hlink mx-2">Books</button>
        </div>
      </div>
      <div className="card border m-3" width="18rem">
        <div className="card-body">
          <h5 className="card-title">Branch 3</h5>
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
                  <button className="hlink button"><Link to="csesem1.html">Sem 1</Link></button>
                  <button className="hlink button"><Link to="csesem2.html">Sem 2</Link></button>
                  <button className="hlink button"><Link to="csesem3.html">Sem 3</Link></button>
                  <button className="hlink button"><Link to="csesem4.html">Sem 4</Link></button><br />
                  <button className="hlink button"><Link to="csesem5.html">Sem 5</Link></button>
                  <button className="hlink button"><Link to="csesem6.html">Sem 6</Link></button>
                  <button className="hlink button"><Link to="csesem7.html">Sem 7</Link></button>
                  <button className="hlink button"><Link to="csesem8.html">Sem 8</Link></button>
                </div>
              </div>
            </div>
          </div>
          <button className="button hlink mx-2">Books</button>
        </div>
      </div>
      <div className="card border m-3" width="18rem">
        <div className="card-body">
          <h5 className="card-title">Branch 4</h5>
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
                  <button className="hlink button"><Link to="csesem1.html">Sem 1</Link></button>
                  <button className="hlink button"><Link to="csesem2.html">Sem 2</Link></button>
                  <button className="hlink button"><Link to="csesem3.html">Sem 3</Link></button>
                  <button className="hlink button"><Link to="csesem4.html">Sem 4</Link></button><br />
                  <button className="hlink button"><Link to="csesem5.html">Sem 5</Link></button>
                  <button className="hlink button"><Link to="csesem6.html">Sem 6</Link></button>
                  <button className="hlink button"><Link to="csesem7.html">Sem 7</Link></button>
                  <button className="hlink button"><Link to="csesem8.html">Sem 8</Link></button>
                </div>
              </div>
            </div>
          </div>
          <button className="button hlink mx-2">Books</button>
        </div>
      </div>
    </div>



  )
}
