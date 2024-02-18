import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        setShowMessage(true);
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
        navigate('/loginpage'); // 로그인 페이지로 이동
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'green' }}>회원가입</h2>
            <div>
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderRadius: '5px', margin: '5px', borderColor: 'green', borderWidth: '2px' }}
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderRadius: '5px', margin: '5px', borderColor: 'green', borderWidth: '2px' }}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ borderRadius: '5px', margin: '5px', borderColor: 'green', borderWidth: '2px' }}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">전화번호</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{ borderRadius: '5px', margin: '5px', borderColor: 'green', borderWidth: '2px' }}
                />
                <button style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>인증하기</button>
            </div>
            <div>
                <label htmlFor="verificationCode">인증번호</label>
                <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    style={{ borderRadius: '5px', margin: '5px', borderColor: 'green', borderWidth: '2px' }}
                />
            </div>
            <div>
                <button onClick={handleSignUp} style={{ backgroundColor: 'green', color: 'white', marginTop: '10px' }}>가입하기</button>
            </div>
            {showMessage && (
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
                        <p>회원가입에 성공했습니다. </p>
                        <button onClick={handleCloseMessage} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>로그인페이지로 이동</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUpPage;