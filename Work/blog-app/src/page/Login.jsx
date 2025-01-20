import React from 'react'

const Login = () => {
  return (
    <div>
      <p>ID</p>
      <input type="text" placeholder='아이디를 입력하세요.'/>
      <p>Password</p>
      <input type="password" placeholder='비밀번호를 입력하세요.'/>
      <div>
        <button>로그인</button>
      </div>
      
    </div>
    
  )
}

export default Login
