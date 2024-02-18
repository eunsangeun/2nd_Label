import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Styled component 생성
const StyledCalendar = styled(Calendar)`
    &.react-calendar {
        // react-calendar의 기본 클래스명에 대한 스타일
        border-radius: 10px; // 테두리 둥글게
        border-color: #0f4b43;
        background-color: #f5f1ed; // 배경색 변경
        width: 60vw;
        height: 60vh;
        position: absolute;
        left: 20%;
        top: 20%;
    }

    .react-calendar__navigation {
        // 네비게이션 버튼 스타일

        background-color: #f5f1ed;
        border-radius: 10px; // 테두리 둥글게
        button {
            border-radius: 10px; // 테두리 둥글게
            min-width: 44px; // 버튼 최소 너비 설정
            background-color: #f5f1ed; // 버튼 배경색 변경
            font-size: 1.5em;
        }
    }

    .react-calendar__month-view__weekdays {
        font-size: 1.2em;
    }
    .react-calendar__month-view__days__day--weekend {
        // 주말 날짜 스타일
        color: #d10000; // 주말 날짜 색상 변경
    }

    .react-calendar__tile {
        height: calc(60vh / 6); // 높이를 뷰포트 높이의 1/6로 설정
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items: center; // 내용을 타일 중앙에 배치
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        // 타일 호버 및 포커스 스타일
        background-color: #0f4b43; // 배경색 변경
        border-radius: 10px; // 테두리 둥글게
    }

    .react-calendar__tile--active {
        background-color: rgba(15, 75, 67, 0.5); // 선택된 타일의 배경색 변경
        border-radius: 10px; // 테두리 둥글게
    }

    .special-day {
        background-color: rgba(15, 75, 67, 0.5) !important;
        border-radius: 10px; // 테두리 둥글게
    }

    .today {
        background-color: #0f4b43;
        color: #ffffff;
        border-radius: 10px; // 테두리 둥글게
    }
`;

function CustomCalendar(props) {
    // 이름을 CustomCalendar로 변경하여 충돌 방지
    const [dated, onChange] = useState(new Date());
    // 현재 연도와 월을 확인하기 위한 함수
    const tileClassName = ({ date, view }) => {
        // 'month' 뷰에서만 스타일 적용
        if (view === "month") {
            // 오늘 날짜 확인
            const today = new Date();
            if (
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()
            ) {
                return "today"; // 오늘 날짜에 해당하는 타일에 'today' 클래스 적용
            }
            const day = date.getDate();
            if (date.getMonth() === today.getMonth())
                if (day === 5 || day === 10) {
                    return "special-day"; // 특별한 날짜에 'special-day' 클래스 적용
                }
        }
        return null;
    };

    return (
        <StyledCalendar
            className="calendar"
            onChange={onChange}
            value={dated}
            tileClassName={tileClassName}
        />
    );
}

function ApplicationForm(props) {
    return (
        <div id="calendar-box">
            <CustomCalendar />
        </div>
    );
}

export default ApplicationForm; // 컴포넌트 정의 후 export