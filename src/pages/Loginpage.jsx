import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleLoginClick = () => {
        // 로그인 처리를 수행할 함수
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'green', marginBottom: '100px', marginTop: "50px" }}>로그인</h2>
            <div>
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ 
                        borderRadius: '10px', 
                        margin: '50px', 
                        padding: '15px', //위아래 폭
        
                        borderWidth: '2px',
                        width: '300px' }}
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ 
                        borderRadius: '10px',
                        margin: '10px',
                        padding: '15px',
                        borderWidth: '2px',
                        width: '300px' }}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={handleSignUpClick} style={{ marginRight: '5px' }}>회원가입</button>
                <button onClick={handleLoginClick} style={{ backgroundColor: 'green', color: 'white' }}>로그인</button>
            </div>
        </div>
    );
}

export default LoginPage;
