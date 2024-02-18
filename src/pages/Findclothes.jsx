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

  return (
    <div className="page-container" style={styles.container}>
      <div style={styles.mapContainer} ref={mapContainerRef}></div>
      <div style={styles.infoBox}>
        {/* 정보 박스 */}
        <div style={{ width: '400px', height: '300px', backgroundColor: 'lightgreen', textAlign: 'center', lineHeight: '1.5' }}>
          <p>
            헌옷수거함 이용방법<br />
            1. 헌옷수거함 앞에 있는 QR 코드를 스캔하세요. <br />
            2. QR 코드로 연결된 링크를 통해 나타나는 작성 양식에 필요한 정보를 입력하세요. <br />
            3. 작성 양식에 사진을 첨부해주셔야 2ndLabel을 이용할 수 있는 쿠폰을 받을 수 있습니다.
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
  infoBox: {
    width: '600px',
    height: '400px',
    backgroundColor: 'lightgreen',
    textAlign: 'center',
  },
};