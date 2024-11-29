import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Main.css'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { clientNumAtom, loginsuccessAtom, messageAtom, userIdAtom, userPwdAtom } from '../recoil/UserRecoil';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //loginsuccess에 loginsuccessAtom의 값을 읽어와 loginsuccess변수에 저장 (true, false가 저장됨)
  const loginsuccess = useRecoilValue(loginsuccessAtom);
  //loginsuccessAtom에 저장된 값으로 setLoginSuccess 업데이트 (true=로그인됨, false=로그아웃)
  const setLoginSuccess = useSetRecoilState(loginsuccessAtom);
  //clientNumAtom에서 현재 클라이언트번호를 읽어와 clientNum변수에 저장
  const clientNum = useRecoilValue(clientNumAtom);

  //로그아웃시 로그인 인풋에 남아있는 값 초기화 하기위해 상태초기화함수 가져왔다
  const resetUserId = useResetRecoilState(userIdAtom);
  const resetUserPwd = useResetRecoilState(userPwdAtom);
  const resetMessage = useResetRecoilState(messageAtom);

  //로그아웃 함수
  const handleLogout = () => {
    setLoginSuccess(false);
    localStorage.removeItem('loginsuccess');
    localStorage.removeItem('clientNum');
    resetUserId();
    resetUserPwd();
    resetMessage();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  //정보수정 이동함수
  const handleLogInfo = () => {
    if (clientNum) {
      // clientNum을 가지고 사용자 정보 페이지로 이동
      navigate(`/userinfo/${clientNum}`);
    } else {
      alert('로그인 정보가 없습니다. 다시 로그인 해주세요.');
    }
  };

  

  return (
    <header className="mainHeader">
      <div className="mainHeaderLeft">
        <img src={logo} alt="Logo" className="mainLogo" onClick={() => navigate('/')} />
        <h2 className='logoText '>나야, 농</h2>
      </div>
      <nav className="mainHeaderNav">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/board' ? 'active' : ''}>
            <Link to="/board">게시판</Link>
          </li>
          <li className={location.pathname === '/qna' ? 'active' : ''}>
            <Link to="/qna">QnA</Link>
          </li>
        </ul>
      </nav>
      <div className="mainHeaderRight">
        {!loginsuccess ? (
          <>
            <button className="mainButton" onClick={() => navigate('/login')}>
              로그인
            </button>
            <button className="mainButton" onClick={() => navigate('/signup')}>
              회원가입
            </button>
          </>
        ) : (
          <>
            <button className="mainButton" onClick={handleLogInfo}>
              회원수정
            </button>
            <button className="mainButton" onClick={handleLogout}>
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
