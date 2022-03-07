import React from 'react'
import '../../css/components/Signup.css';
import LoginForm from './LoginForm';

export default function Signup() {
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {/* <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
            <div className="modal-body signup-modal-body">
             
            <div className="btn-close" style={{ float: "right" }} data-bs-dismiss="modal" aria-label="Close"></div>
              <div className="row row-cols m-0">
                <div className="col d-none d-sm-none d-lg-block px-0">
                  <img className='signup-banner img-fluid' src="../Images/signup.jpg" alt="..." />
                </div>
                <div className="col py-3">
                <LoginForm></LoginForm>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
