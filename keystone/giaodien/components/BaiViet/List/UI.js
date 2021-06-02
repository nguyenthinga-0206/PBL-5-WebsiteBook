import BaiVietItem from "../Item";
import BaiVietItemUI from "../Item/UI";

export default function UI({ data }) {
  const { allBaiviets } = data;
  return allBaiviets.map((baiViet) => {
    return <BaiVietItem UI={BaiVietItemUI} key={baiViet.id} baiViet={baiViet} />;
  });
}
