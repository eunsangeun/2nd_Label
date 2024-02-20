import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/signup"); // 회원가입 페이지로 이동
    };

    const handleLoginClick = () => {
        // 로그인 처리를 수행할 함수
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div
            style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100vh",
                boxSizing: "border-box",
                padding: "20px",
                paddingTop: "10vh",
            }}>
            <h2
                style={{
                    color: "green",
                    fontSize: "32px",
                    fontWeight: "bold",
                    marginBottom: "50px",
                }}>
                로그인
            </h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    width: "100%",
                    alignItems: "center",
                }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        width: "100%",
                    }}>
                    <label htmlFor="email" style={{ width: "80px" }}>
                        이메일
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            padding: "10px",
                            marginLeft: "10px",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        width: "100%",
                    }}>
                    <label htmlFor="password" style={{ width: "80px" }}>
                        비밀번호
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            padding: "10px",
                            marginLeft: "10px",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
                <div
                    style={{
                        marginTop: "10px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <button
                        onClick={handleSignUpClick}
                        style={{
                            marginRight: "20px",
                            cursor: "pointer",
                            padding: "10px 20px",
                            borderRadius: "5px",
                        }}>
                        회원가입
                    </button>
                    <button
                        onClick={handleLoginClick}
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            cursor: "pointer",
                            padding: "10px 20px",
                            borderRadius: "5px",
                        }}>
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;