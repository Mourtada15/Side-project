import './Memes.css'
import { Link } from 'react-router-dom';

const Memes = ({ memes }) => {

  return (
    <>
      <div className="meme-card">
        {memes && memes.map((meme) => (
          <Link  key={meme.id}  to={`/EditMeme/${meme.id}`}>
          <img src={`http://localhost:4000/${meme.imageUrl}`} alt='Meme' />
          </Link>
        ))}
      </div>
      
      {/* <p>{meme.textCaption}</p> */}
    </>
  );
}

export default Memes;