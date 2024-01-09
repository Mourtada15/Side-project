import './CreateMeme.css'

const CreateMeme = () => {

  return (
    <div className="memeedit-wrapper">
      <label>Upload your image</label>
      <input type="file" />
      <label>Meme description</label>
      <textarea name="" id="" cols="100" rows="10"></textarea>
      <button>Create Meme</button>
    </div>
  );
}

export default CreateMeme;