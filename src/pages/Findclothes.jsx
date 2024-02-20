import React, { useEffect, useRef } from 'react';

export default function HomePage() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBLpF01uTVYTm14wUaLv49RzASOnacgPG4&callback=initMap`;
    googleMapScript.async = true;
    //googleMapScript.crossOrigin = 'anonymous';
    window.initMap = initMap;
    document.body.appendChild(googleMapScript);

    function initMap() {
      const seoulCoords = { lat: 37.6016738, lng: 127.0182616 }; // 주어진 위도와 경도
      const map = new window.google.maps.Map(mapContainerRef.current, {
        zoom: 12,
        center: seoulCoords,
      });

      // 마커 추가
      new window.google.maps.Marker({
        position: seoulCoords,
        map: map,
        title: '마커 위치', // 마커에 표시할 제목
      });
    }

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, []);

// 정보 박스 스타일
const infoBoxStyle = {
  width: '600px',
  height: '400px',
  backgroundColor: '#0F4B43',
  lineHeight: '1.5',
  display: 'flex', // 수평 가운데 정렬을 위해 Flexbox를 사용합니다.
  justifyContent: 'center', // 수평 가운데 정렬을 합니다.
  alignItems: 'center', // 수직 가운데 정렬을 합니다.
  position: 'relative',
};

  // 텍스트 스타일
  const headingStyle = {
    fontSize: '24px', // 헤딩 텍스트의 크기를 조절합니다.
  };
  
  const textStyle = {
    position: 'absolute', // 위치를 조정하기 위해 position을 추가합니다.
    top: '50%', // 부모 요소의 50% 위치로 이동합니다.
    left: '50%', // 부모 요소의 50% 위치로 이동합니다.
    transform: 'translate(-50%, -50%)', // 수평 및 수직 정렬을 위해 이동합니다.
    color: 'white',
  };
  
  return (
    <div className="page-container" style={styles.container}>
      <div style={styles.mapContainer} ref={mapContainerRef}></div>
      <div style={styles.infoBox}>
        {/* 정보 박스 */}
        <div style={infoBoxStyle}>
        <p style={{...textStyle, ...headingStyle}}>
          헌옷수거함 이용방법<br />
          <span style={{ fontSize: '18px' }}>
            1. 헌옷수거함 앞에 있는 QR 코드를 스캔하세요. <br />
            2. QR 코드로 연결된 링크를 통해 나타나는 작성 양식에 필요한 정보를 입력하세요. <br />
            3. 작성 양식에 사진을 첨부해주셔야 2ndLabel을 이용할 수 있는 쿠폰을 받을 수 있습니다.
          </span>
        </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  mapContainer: {
    width: '600px',
    height: '400px',
    backgroundColor: 'lightblue',
    marginRight: '100px', // 두 직사각형 사이의 간격
  },
  // infoBox: {
  //   width: '600px',
  //   height: '400px',
  //   backgroundColor: '0F4B43',
  //   textAlign: 'center',
  // },
};

