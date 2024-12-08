import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../css/FindUser.css'
import { messageAtom, userPwdAtom } from "../../recoil/UserRecoil";
import { useRecoilState } from "recoil";


const FindUserPwd = () => {

  const [message, setMessage] = useRecoilState(messageAtom);
  const [userPwd, setUserPwd] = useRecoilState(userPwdAtom);
  
  const [userId, setUserId] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  
  const navigate = useNavigate();

      //스크롤 없애기
      useEffect(() => {
        // body에 클래스 추가
        document.body.classList.add('no-scroll');
    
        // 언마운트 시 클래스 제거
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, []);

  const handlePwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const handleConfirmPwd = (e) => {
    setConfirmPwd(e.target.value);
  };

  const updatePwd = async () => {
    if (userPwd !== confirmPwd) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const response = await axios.post("/api/update-password", {
        userId,
        userPwd,
      });
      if (response.data.success) {
        setMessage("비밀번호가 변경되었습니다.");
        navigate("/login");
      } else {
        setMessage("아이디를 확인해주세요.");
      }
    } catch (error) {
      setMessage("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="findUserContainer">
      <span className="findUserHeader">비밀번호 변경</span>
      <div className="findUserForm">
        <label className='findUserLabel'>아이디</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="아이디"
          className="findUserInput"
        />
  

        <label className='findUserLabel'>새 비밀번호</label>
        <input
          type="password"
          value={userPwd}
          onChange={handlePwdChange}
          placeholder="비밀번호"
          className="findUserInput"
        />

        <label className='findUserLabel'>비밀번호 확인</label>
        <input
          type="password"
          value={confirmPwd}
          onChange={handleConfirmPwd}
          placeholder="비밀번호 확인"
          className="findUserInput"
        />
        {message && <p className="findUserError">{message}</p>}
  
        <button onClick={updatePwd} className="findUserButton">
          비밀번호 변경
        </button>
        <button
          onClick={() => navigate("/findUserId")}
          className="findUserButton"
        >
          이전
        </button>
       
   
      </div>
      
    </div>
  );
};

export default FindUserPwd;
