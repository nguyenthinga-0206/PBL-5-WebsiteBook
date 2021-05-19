import PhanloaiItem from "../Item";

export default function UI({ data, clickPhanLoai }) {
  const { allPhanloaisaches } = data;
  return allPhanloaisaches.map((phanloai) => {
    return (
      <a onClick={(e) => clickPhanLoai(phanloai)}>
        <PhanloaiItem key={phanloai.id} phanloai={phanloai} />
      </a>
    );
  });
}
