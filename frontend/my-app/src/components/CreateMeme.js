import './CreateMeme.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateMeme = () => {
  const baseURL = 'http://localhost:4000';
  const [textCaption, setTextCaption] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  const formData = new FormData()
  formData.append('textCaption', textCaption)
  formData.append('imageUrl', imageUrl)

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${baseURL}/memes`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
      navigate('/Home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="memeedit-wrapper">
      <label>Upload your image</label>
      <input type="file" onChange={(e) => setImageUrl(e.target.files[0])} />
      <label>Meme description</label>
      <textarea name="" id="" cols="100" rows="10" value={textCaption} onChange={(e) => setTextCaption(e.target.value)}></textarea>
      <button onClick={handleCreate}>Create Meme</button>
    </div>
  );
}

export default CreateMeme;