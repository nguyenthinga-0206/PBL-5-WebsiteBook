import ImgItem from "../Item";

export default function UI({ data }) {
  const { allIMGS } = data;
  return allIMGS.map((IMG) => {
    return <ImgItem key={IMG.id} IMG={IMG} />;
  });
}
