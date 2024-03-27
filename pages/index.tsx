import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return <div>猫画像予定地</div>
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