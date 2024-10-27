import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'


const PostDetail = () => {

    
const [tvalue, setTValue] = useState('');


const navigation = useNavigate()
const handleChange = (e) => {
    setTValue(e.target.vlaue);
}

const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/search/${tvalue}`);
}

  return (
    <div>
           <form onSubmit={handleSubmit}>
            <input type='text' placeholder='검색어 입력'
            value={tvalue} onChange={handleChange} />
        </form>
    </div>
  )
}

export default PostDetail
