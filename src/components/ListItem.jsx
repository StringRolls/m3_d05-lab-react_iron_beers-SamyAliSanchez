export default function ListItem(props) {
  const { image_url, name, tagline, contributed_by } = props.beer;

  return (
    <div className="listItem">
      <div className="imgContainer">
        <img className="imagenes" src={image_url} alt={name} />
      </div>
      <div className="itemTextContainer">
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <p>Created by: {contributed_by}</p>
      </div>
    </div>
  );
}
