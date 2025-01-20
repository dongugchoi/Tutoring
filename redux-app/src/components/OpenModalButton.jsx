import React from 'react'
import { useDispatch } from 'react-redux'
import { OPEN_MODAL } from '../reducer/modal';
export default function OpenModalButton() {
const dispatch = useDispatch()

const openModal = () => {
    dispatch({type : OPEN_MODAL})
}

  return (
    <div>   
      <button
       onClick={openModal}
      >모달 열기</button>
    </div>
  )
}
