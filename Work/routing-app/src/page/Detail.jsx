import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {

  const {galleryId} = useParams()

  return (
    <div>
        RESULT : {galleryId}
    </div>
  )
}

export default Detail
