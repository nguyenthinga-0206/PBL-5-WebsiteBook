import ImgItem from "../Item";
import ImgItemUI from "../Item/UI";

export default function UI({ data }) {
  const { allIMGS } = data;
  return allIMGS.map((IMG) => {
    return <ImgItem UI={ImgItemUI} key={IMG.id} IMG={IMG} />;
  });
}
