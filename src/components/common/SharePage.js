import React from 'react'
import { common } from '../../common/common'
import '../../css/components/common/PageShare.css';


export default function SharePage({ modelId }) {
    modelId = common.defaultIfEmpty(modelId, 'pageShareModel');
    return (
        <>
            <div className="modal" tabIndex="-1" id={modelId}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Share on social media</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className='social-media-list'>
                            <a href="https://api.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share">  <li className='social-media-list-item' data-bs-dismiss="modal"><i className="fa-brands fa-whatsapp"></i> Share on WhatsApp</li>Share via Whatsapp web</a>
                                <li className='social-media-list-item' data-bs-dismiss="modal"><i className="fa-brands fa-facebook"></i> Share on Facebook</li>
                                <li className='social-media-list-item' data-bs-dismiss="modal"><i className="fa-brands fa-twitter"></i> Share on Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
