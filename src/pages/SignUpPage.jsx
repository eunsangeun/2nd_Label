import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        setShowMessage(true);
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
        navigate("/loginpage");
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
                회원가입
            </h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    width: "100%",
                }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                    <label htmlFor="email" style={{ marginRight: "10px" }}>
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
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                    <label htmlFor="password" style={{ marginRight: "10px" }}>
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
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                    <label
                        htmlFor="confirmPassword"
                        style={{ marginRight: "10px" }}>
                        비밀번호 확인
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            padding: "10px",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                    <label
                        htmlFor="phoneNumber"
                        style={{ marginRight: "10px" }}>
                        전화번호
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            padding: "10px",
                        }}
                    />
                    <button
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            marginLeft: "5px",
                            cursor: "pointer",
                        }}>
                        인증하기
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}>
                    <label
                        htmlFor="verificationCode"
                        style={{ marginRight: "10px" }}>
                        인증번호
                    </label>
                    <input
                        type="text"
                        id="verificationCode"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: "5px",
                            borderColor: "green",
                            borderWidth: "2px",
                            padding: "10px",
                        }}
                    />
                </div>
                <button
                    onClick={handleSignUp}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        marginTop: "10px",
                        cursor: "pointer",
                        width: "100%",
                    }}>
                    가입하기
                </button>
            </div>
            {showMessage && (
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                            textAlign: "center",
                        }}>
                        <p>회원가입에 성공했습니다. </p>
                        <button
                            onClick={handleCloseMessage}
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}>
                            로그인 페이지로 이동
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUpPage;
