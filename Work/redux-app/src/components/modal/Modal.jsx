import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CLOSE_MODAL } from '../../reducer/modal';
import { ModalWrapper } from './Modal.styls';

export default function Modal() {
    const isShow = useSelector((state) => state.modal.isShow);
    const dispatch = useDispatch()

    if (!isShow) return null;

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL })
    }
    return (
  
            <ModalWrapper >
            <div className='container'>
                <div className='header'>
                    <h1>제목</h1>
                    <button
                    onClick={closeModal}
                    >닫기</button>
                </div>
                <p>내용</p>
            </div>
            </ModalWrapper >

    )
}
