/* eslint-disable @next/next/no-img-element */

// eslint-disable-next-line react/display-name

import { removeTags } from "../../helpers/StripHtml";
import { useRouter } from "next/router";

const Card = (props) => {
    // const removedDesc = removeTags(props.description)
    const router = useRouter();
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt="Main image" className="card-img" />
        <h2 className="title">{props.title}</h2>
        <p className="genres">
          <span className="genre-title">genres</span>:
          {
            props.genres.map((el, i) => {
                return (
                    <span className="genre-el" key={String(i)}>{el}{ i === props.genres.length - 1 ? "" : ","}</span>
                )
            })
          }
          
          
        </p>
        <p className="rating">
          <span className="rating-title">rating</span>:{" "}
          <span className="rating-el">{props.rating === null ? "unknown" : props.rating}</span>
        </p>
        {/* <p className="desc">{removedDesc}</p> */}
        <button onClick= { () => router.push(`/${props.id}`)}className="show-more">Show More</button>
      </div>
      <style jsx>


        {`


 .card {
            width: 100%;
            height: 370px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 15px;
            position: relative;
          }

          .card-img {
            width: 100%;
            aspect-ratio: 2/1;
            object-fit: cover;
            border-radius: 5px;
            max-height: 150px;
          }

          .title {
            font-size: 1.5rem;
            color: black;
            padding: 10px 0px;
          }

          .genres .genre-title {
            font-weight: bold;
            text-transform: capitalize;
          }

          .genres .genre-el {
            font-style: italic;
            font-size: 0.7rem;
            padding: 0px 5px;
          }

          .rating .rating-title {
            font-weight: bold;
            text-transform: capitalize;
          }

          .rating .rating-el {
            font-weight: bold;
            font-size: 0.7rem;
            padding: 0px 5px;
          }

          .desc {
            font-size: 0.75rem;
            line-height: 20px;
            
            overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 6; 
           line-clamp: 6; 
   -webkit-box-orient: vertical;
   margin: 20px 0px;
          }

          .show-more {
            outline: none;
            border-radius: 5px;
            background: none;
            border: 1px solid black;
           padding: 10px 0px;
            transition: all 400ms ease;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 15px;
            left: 15px;
            width: calc(100% - 30px);
          }

          .show-more:hover {
            background: black;
            color: white;
          }



        




@media screen and (min-width: 700px) {
  .card {
            width: 48%;
           
            border: 1px solid black;
            border-radius: 5px;
            padding: 15px;
            position: relative;
          }

          .card-img {
            width: 100%;
            aspect-ratio: 2/1;
            object-fit: cover;
            border-radius: 5px;
            max-height: 150px;
          }



         

    



}

@media screen and (min-width: 900px) {

  .card {
            width: 30%;
           
            border: 1px solid black;
            border-radius: 5px;
            padding: 15px;
            position: relative;
          }

          .card-img {
            width: 100%;
            aspect-ratio: 2/1;
            object-fit: cover;
            border-radius: 5px;
            max-height: 250px;
          }

}
        `}
      </style>
    </>
  );
};

export default Card;
