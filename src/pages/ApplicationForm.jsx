import React from 'react';
import QRCodeImage from './QR.png'; // QR 코드 이미지 파일 import
import './DonationForm.css'; // 스타일 파일 import

const DonationForm = () => {
    const donationFormUrl = 'https://forms.gle/2MVPeLqyAx5Qx8xM6';

    const handleDonationFormClick = () => {
    window.open(donationFormUrl, '_blank');
  };
  return (
    <div className="donation-form-container">
      <h1 className="title">기부신청서 작성</h1>
      <div className="qr-code">
        
        <img src={QRCodeImage} alt="QR 코드" />
      </div>
      <div className="button-container">
      <a href={donationFormUrl} target="_blank" rel="noopener noreferrer" className="donation-link-button">
          기부신청서 작성 링크
        </a>
      </div>
    </div>
  );
};

export default DonationForm;

