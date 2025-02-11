import React from 'react';

function NameInput({ mbti,setMBTI, setSub }) {

    const handleChange = (e) => {
        setMBTI(e.target.value);
    }

    const handleSave = (e) => {
        e.preventDefault();
        setSub(prev => [mbti, ...prev]);
      };

  return (
    <form onSubmit={handleSave}>
        <input type="text" onChange={handleChange} />
        <button style={{backgroundColor:"lightblue"}}>버튼입력</button>
    </form>
  );
}

export default NameInput;
