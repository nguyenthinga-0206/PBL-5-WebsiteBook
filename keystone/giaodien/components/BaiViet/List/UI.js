import BaiVietItem from "../Item";

export default function UI({ data }) {
  const { allBaiviets } = data;
  return allBaiviets.map((baiViet) => {
    return <BaiVietItem key={baiViet.id} baiViet={baiViet} />;
  });
}
