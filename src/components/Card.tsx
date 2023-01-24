type CardProps = {
  name: string;
  sorce: string;
  text: string;
};

const Card = (props: CardProps) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
           <figure>
          <div className="w-24 rounded-xl">
            <img src={props.sorce} />
          </div>
        </figure>
          <h2 className="card-title">{props.name}</h2>
          <p className="text-center align-text-top">{props.text}</p>
          <div className="card-actions justify-end">
            <button className="btn-secondary btn">Apply now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
