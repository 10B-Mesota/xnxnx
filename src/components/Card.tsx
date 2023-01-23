type CardProps = {
  name: String;
};

const Card = (props: CardProps) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
        <div className="w-24 rounded-xl">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Allah-green-transparent.svg/1024px-Allah-green-transparent.svg.png"/>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
