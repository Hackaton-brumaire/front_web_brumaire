import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

    return(
        <div >
    <MDBCarousel>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://global-uploads.webflow.com/5f1a994364b3473c65835692/6005ae233b38034163d3afda_DSC09589.jpg' alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://global-uploads.webflow.com/5f1a994364b3473c65835692/6005ae233b38034163d3afda_DSC09589.jpg'  alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://global-uploads.webflow.com/5f1a994364b3473c65835692/6005ae233b38034163d3afda_DSC09589.jpg' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
        <br/>
        <br/>
        <div class="col-md-12 well">
  <div class="col-md-12 text-center">
    <h2 class="btn btn-dark btn-lg btn-block" >Voir plus de détails</h2>
  </div>
</div>
        <br/>
        <br/>
    <iframe scrolling='no' frameBorder='0' allowFullScreen='true'
    src='https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1175983&width=250&height=250&edraw=true'
    name='PreviewFrame3D' id='PreviewFrame3D' width='370' height='355' margin="10px"/>
    
            <iframe scrolling='no' frameBorder='0' allowFullScreen='true'
    src='https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=288067&width=250&height=250&edraw=true'
    name='PreviewFrame3D' id='PreviewFrame3D' width='370' height='355' margin="10px"/>
            <iframe scrolling='no' frameBorder='0' allowFullScreen='true'
    src='https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=86727&width=250&height=250&edraw=true'
    name='PreviewFrame3D' id='PreviewFrame3D' width='370' height='355' margin="10px"/>
            <iframe scrolling='no' frameBorder='0' allowFullScreen='true'
    src='https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=205778&width=250&height=250&edraw=true'
    name='PreviewFrame3D' id='PreviewFrame3D' width='370' height='355' margin="10px"/>  
    </div>
    )
}

export default Home;