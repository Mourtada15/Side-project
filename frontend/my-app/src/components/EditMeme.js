import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './EditMeme.css';

const EditMeme = () => {
  const { id } = useParams();
  const baseURL = 'http://localhost:4000';
  const navigate = useNavigate();
  const [meme, setMeme] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState('');



  useEffect(() => {
    // Fetch meme data by ID
    axios.get(`${baseURL}/memes/${id}`)

      .then(response => setMeme(response.data.meme))
      .catch(error => console.error('Error fetching meme:', error));
  }, [baseURL, id]);

  useEffect(() => {
    // Additional useEffect to re-run when meme changes
    console.log("Meme updated:", meme);
  }, [meme]);

  const handleEdit = () => {
    setEditMode(true);
    setEditedText(meme.textCaption);
  };

  const handleSave = () => {
    axios.put(`${baseURL}/memes/${id}`, { textCaption: editedText })
      .then(response => {
        setEditMode(false);
        setMeme(prevMeme => ({ ...prevMeme, textCaption: editedText }));
      })
      .catch(error => console.error('Error updating meme:', error));
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleDelete = () => {
    axios.delete(`${baseURL}/memes/${id}`)
      .then(response => {
        console.log('Meme deleted successfully:', response);
        navigate('/Home');
      })
      .catch(error => console.error('Error deleting meme:', error));
  };

  console.log("this is the image url", meme.imageUrl)

  return (
    <div className="memecard-wrapper">
      {meme && <img src={`${baseURL}/${meme.imageUrl}`} alt="Meme" />}
      <div>

        {editMode ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <h3>Meme description</h3>
            <p>{meme.textCaption}</p>
            <button onClick={handleEdit}>Edit Meme</button>
            <button onClick={handleDelete}>Delete Meme</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditMeme;
