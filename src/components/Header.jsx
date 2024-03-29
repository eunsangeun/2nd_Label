import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "./15.png";
import Person from "./person.png";
import ShoppingList from "./shoppinglist.png";

export default function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="header-container">
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Poor+Story&display=swap')
            </style>
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <ul>
                        <li>
                            <Link
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                to="/"
                                className={`header-nav-item ${
                                    activeLink === "/" ? "active" : ""
                                }`}
                                onClick={() => handleNavLinkClick("/")}>
                                <img
                                    style={{ width: "80px", height: "20px" }}
                                    src={LogoImg}
                                    alt="로고"
                                />
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/findclothes"
                                        ? "active"
                                        : ""
                                }`}
                                to="/findclothes"
                                onClick={() =>
                                    handleNavLinkClick("/findclothes")
                                }>
                                헌옷수거함 찾기
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/sharingclothes"
                                        ? "active"
                                        : ""
                                }`}
                                to="/sharingclothes"
                                onClick={() =>
                                    handleNavLinkClick("/sharingclothes")
                                }>
                                나눔옷
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/upcycling" ? "active" : ""
                                }`}
                                to="/upcycling"
                                onClick={() =>
                                    handleNavLinkClick("/upcycling")
                                }>
                                업사이클링
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/applicationform"
                                        ? "active"
                                        : ""
                                }`}
                                to="/applicationform"
                                onClick={() =>
                                    handleNavLinkClick("/applicationform")
                                }>
                                기부신청서
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/mypage" ? "active" : ""
                                }`}
                                to="/mypage"
                                onClick={() => handleNavLinkClick("/mypage")}>
                                마이페이지
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                to="/loginpage"
                                className={`header-nav-item ${
                                    activeLink === "/loginpage" ? "active" : ""
                                }`}
                                onClick={() =>
                                    handleNavLinkClick("/loginpage")
                                }>
                                <img
                                    style={{ width: "20px", height: "20px" }}
                                    src={Person}
                                    alt="로고"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`header-nav-item ${
                                    activeLink === "/shoppinglist"
                                        ? "active"
                                        : ""
                                }`}
                                to="/cart"
                                onClick={() =>
                                    handleNavLinkClick("/shoppinglist")
                                }>
                                <img
                                    style={{ width: "30px", height: "30px" }}
                                    src={ShoppingList}
                                    alt="로고"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div></div>
            </div>
        </div>
    );
}
