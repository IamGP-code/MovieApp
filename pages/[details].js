/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import Button from "@mui/joy/Button";

import { removeTags } from "../helpers/StripHtml";
import BookingModal from "../components/BookingModal/BookingModal";

const DetailsPage = (props) => {
  const [movie, setMovie] = React.useState(props.movie);
  const removedDesc = removeTags(movie.summary);

  return (
    <>
      <Head>
        <title>fsfsd</title>
      </Head>
      <div className="container">
        <img src={movie.image?.original} alt="" className="main-img" />
        <h2>Summary</h2>
        <p className="summary">{removedDesc}</p>
        <BookingModal movie={movie} />
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            padding-bottom: 50px;
          }

          .main-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          h2 {
            padding: 20px;
            font-size: 2rem;
          }

          .summary {
            width: 100%;
            font-size: 1rem;
            line-height: 30px;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const slug = Number(params.details);
    const response = await axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then(function (response) {
        // handle success
        const shows = response.data;
        return shows[slug].show;
      })
      .catch(function (error) {
        // handle error
        return {
          error: "No Such Movie",
        };
      });

    return {
      props: {
        movie: response,
      },
    };
  } catch {}
};

export default DetailsPage;
