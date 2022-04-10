import React from 'react'
import { common } from '../../common/common'
import '../../css/components/common/PageShare.css';
import { AppConfigConsumer } from '../../Context/ConfigContext';


export default function SharePage({ modelId }) {
    modelId = common.defaultIfEmpty(modelId, 'pageShareModel');
    return (
        <>
            <AppConfigConsumer>{
                (config) => {
                    return <div className="modal" tabIndex="-1" id={modelId}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Share on social media</h5>
                                    <button type="button" className="share btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <ul className='social-media-list'>
                                        <a href={`https://api.whatsapp.com/send?text=${config.app.appShareUrl}`} data-action="share/whatsapp/share">
                                            <li className='social-media-list-item whatsapp' data-bs-dismiss="modal">
                                                <i className="fa-brands fa-whatsapp"></i> Share on WhatsApp
                                            </li>
                                        </a>
                                        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(config.app.appShareUrl)}&amp;src=sdkprepars`} className="fb-xfbml-parse-ignore">
                                            <li className='social-media-list-item facebook' data-bs-dismiss="modal">
                                                <i className="fa-brands fa-facebook"></i> Share on Facebook
                                            </li>
                                        </a>
                                        <a href={`https://twitter.com/intent/tweet?text=${config.app.appShareUrl}`}>
                                            <li className='social-media-list-item twitter' data-bs-dismiss="modal">
                                                <i className="fa-brands fa-twitter"></i> Share on Twitter
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            }</AppConfigConsumer>
        </>
    )
}
