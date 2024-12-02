import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../../css/PostDetail.css'


const PostDetail = () => {

    const navigate = useNavigate()


    //URL 파라미터에서 닉네임 가져오기
    const { userNick } = useParams()

    //게시글 상태
    const [board, setBoard] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBoardData = async () => {
            try {
                const response = await axios.get(`http://localhost:7070/board/${userNick}`)
                if (response.data && response.data.length > 0) {
                    console.log("postDetail게시글 : ", response.data);

                    setBoard(response.data[0])
                } else {
                    console.log('게시글을 찾을 수 없습니다.')
                    alert("게시글을 찾을 수 없습니다.");
                }
            } catch (error) {
                console.error("postDetail error", error)
                alert("게시글을 불러올 수 없습니다.")
            } finally {
                setLoading(false)
            }
        };
        getBoardData();
    }, [userNick])

    if (loading) {
        return <p>로딩중 입니다...</p>
    }

    // const handleDelete = async () => {
    //     if (window.confirm('게시글을 삭제하시겟습니까?')) {
    //         const response = await axios.delete(`http://localhost:7070/board/${bodNum}`)
    //         if (response.data) {
    //             console.log('handleDelete : ', response.data);
    //             alert('삭제되었습니다.')
    //             navigate("/")
    //         } else {
    //             alert('삭제되지 않았습니다.')
    //         }
    //     }
    // }

    return (
        <div className="postDetailContainer">
            <div className="postDetailContent">
                <h2 className="postTitle">{board.bodTitle}</h2>
                <div className="postInfo">
                    <span>{board.userNick}</span>
                    <span>{board.writeDate}</span>
                    <span>조회수: {board.views}</span>
                </div>
                <div className="postContent">{board.bodDtail}</div>
                <div className="postInfo">
                    <span>좋아요: {board.likeCount}</span>
                </div>
                {/* <button onClick={handleDelete}>삭제</button> */}
            </div>
        </div>
    );
};
export default PostDetail