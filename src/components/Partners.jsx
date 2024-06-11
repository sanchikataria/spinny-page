import React from 'react';
import '../styles/Partners.css';
import idfc from '../assets/idfc.png';
import hdfc from '../assets/hdfc.png';
import icici from '../assets/icici.png';
import kotak from '../assets/kotak.png';
import axis from '../assets/axis.png';
import bajaj from '../assets/bajaj.png';
import piramal from '../assets/piramal.png';
import tvs from '../assets/tvs.png';
import mahindra from '../assets/mahindra.png';
import au from '../assets/au.png';
import indusind from '../assets/indusind.png';
import liquiloans from '../assets/liquiloans.png';

const Partners = () => {
  const partners = [
    { src: idfc, alt: 'IDFC First Bank' },
    { src: hdfc, alt: 'HDFC Bank' },
    { src: icici, alt: 'ICICI Bank' },
    { src: kotak, alt: 'Kotak Mahindra Bank' },
    { src: axis, alt: 'Axis Bank' },
    { src: bajaj, alt: 'Bajaj Finserv' },
    { src: piramal, alt: 'Piramal Finance' },
    { src: tvs, alt: 'TVS Credit' },
    { src: mahindra, alt: 'Mahindra Finance' },
    { src: au, alt: 'AU Small Finance Bank' },
    { src: indusind, alt: 'IndusInd Bank' },
    { src: liquiloans, alt: 'Liquiloans' }
  ];

  return (
    <div className="partners">
      <h2>Our Finance Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner" key={index}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
