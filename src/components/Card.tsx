type CardProps = {
  name: string;
  sorce: string;
  text: string;
};

const Card = (props: CardProps) => {
  return (
    <>
      <div className="card w-[30vw] h-[50vh] bg-base-100 shadow-xl ">
        <div className="card-body ">
           <figure>
          <div className="  rounded-xl">
            <img src={props.sorce} className="object-fill h-32 w-32"  />
          </div>
        </figure>
          <h2 className="card-title">{props.name}</h2>
          <p className="align-text-top break-words">{props.text}</p>
          <div className="card-actions justify-end">
            <button className="bg-green-500 text-emerald-100 font-bold py-2 px-4 rounded-full hover:bg-green-700 hover:">Apply now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
