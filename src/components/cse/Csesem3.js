import React from 'react'
import { Link } from 'react-router-dom';


export default function Csesem3() {
    return (
        <div>
        <div  className="container">
        <h3>Choose Subject</h3>

        <div className="accordion my-3 " id="accordionadd">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Subject 1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                    data-bs-parent="#accordionadd">
                    <div className="accordion-body">
                        <button className="button"><Link className="hlink" to="">Assignment 1</Link></button>

                        <button type="button" className="hlink button" data-bs-toggle="modal"
                            data-bs-target="#addModalsub1">
                            +
                        </button>

                        
                        <div className="modal fade" id="addModalsub1" tabindex="-1" aria-labelledby="addModalsub1Label"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addModalsub1Label">Add Assignment</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Assignment Name</p>
                                        <input type="text" id="newassignmentname" placeholder="Add name"/>
                                        <p>Add file</p>
                                        <input type="file" id="newassignmentfile"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Subject 2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionadd">
                    <div className="accordion-body">
                        <button className="button"><Link className="hlink" to="">Assignment 11</Link></button>

                       
                        <button type="button" className="hlink button" data-bs-toggle="modal"
                            data-bs-target="#addModalsub2">
                            +
                        </button>

                        
                        <div className="modal fade" id="addModalsub2" tabindex="-1" aria-labelledby="addModalsub2Label"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addModalsub2Label">Add Assignment</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Assignment Name</p>
                                        <input type="text" id="newassignmentname" placeholder="Add name"/>
                                        <p>Add file</p>
                                        <input type="file" id="newassignmentfile"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Subject 3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionadd">
                    <div className="accordion-body">
                        <button className="button"><a className="hlink" href="Downloads/FILEJAM.pdf">Assignment 25</a></button>

                      
                        <button type="button" className="hlink button" data-bs-toggle="modal" data-bs-target="#addModal">
                            +
                        </button>

                        
                        <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addModalLabel">Add Assignment</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Assignment Name</p>
                                        <input type="text" id="newassignmentname" placeholder="Add name"/>
                                        <p>Add file</p>
                                        <input type="file" id="newassignmentfile"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    )
}