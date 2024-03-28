import type { NextPage } from "next";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoding(false);
    })
  }, []);
  return <div>{ loading || <img src={imageUrl}/> }</div>;
}

export default IndexPage;

type Image = {
  url: string;
}

const fetchImage = async(): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images.url);
  return images[0];
}