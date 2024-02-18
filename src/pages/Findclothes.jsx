import React from "react";

export default function Findclothes() {
    return (
        <div className="page-container" style={styles.pageContainer}>
            <div style={styles.searchBar}>
                {/* 검색바 */}
                <input
                    type="text"
                    placeholder="찾고 싶은 위치를 검색해보세요!"
                    style={styles.searchInput}
                />
                <button style={{ marginLeft: "10px" }}>검색</button>
            </div>
            <div style={styles.rectangleContainer}>
                {/* 지도 */}
                <div style={styles.rectangle}>
                    {/* 지도 내용 */}
                    <p>지도</p>
                </div>
                {/* 헌옷수거함 이용방법 */}
                <div style={styles.greenRectangle}>
                    {/* 헌옷수거함 이용방법 내용 */}
                    <p>
                        <br />
                        헌옷수거함 이용방법 <br />
                        안녕하세요! 저희는 2ndLabel입니다
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px", // 페이지 맨 위에서부터 간격 조정
    },
    searchBar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "60px",
    },
    searchInput: {
        width: "600px",
        height: "60px",
        borderRadius: "15px", // 둥근 테두리
        paddingLeft: "15px", // 왼쪽 여백
        fontSize: "16px", // 글자 크기
    },
    rectangleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rectangle: {
        width: "600px",
        height: "450px",
        backgroundColor: "lightblue",
        marginRight: "130px", // 직사각형 간격

        textAlign: "center",
    },
    greenRectangle: {
        width: "430px",
        height: "450px",
        backgroundColor: "lightgreen",
        textAlign: "center",
    },
};
