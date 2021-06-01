import HTML from "../../HTML";

export default function UI({ handleChange, onCreate, resultCreateDonHang }) {
  return (
    <div>
      số điện thoại:  <input name="sdt" onChange={handleChange("sdt")} />
      tổng tiền: <input name="tongtien" onChange={handleChange("tongtien")} />

      <br/> tình trạng thanh toán: 
      <select  onChange={handleChange("tinhTrangThanhToan")}>
            <option value="nhanhang">Thanh toán khi nhận hàng</option>
            <option value="vidientu">Thanh toán bằng ví điện tử</option>
      </select>

      <br/>  tình trạng giao: 
      <select onChange={handleChange("tinhtrangGiao")}>
            <option value="choxacnhan">Chờ xác nhận</option>
            <option value="cholayhang">Chờ lấy hàng</option>
            <option value="danggiao">Đang giao</option>
            <option value="dagiao">Đã giao</option>
      </select>
      <br/> duyệt bởi tài khoản: <input name="duyetBoiTaiKhoan" onChange={handleChange("duyetBoiTaiKhoan")}/>
      <br/> cách thức giao hàng: 
      <select onChange={handleChange("cachThucGiaoHang")}>
            <option value="giohanhchinh">Chỉ giao hàng trong giờ hành chính</option>
            <option value="tatcangay">Tất cả các ngày trong tuần</option>
      </select>
      <br/> ngày đặt: <input name="ngayDat" onChange={handleChange("ngayDat")}/>
      <br/> ngày giao: <input name="ngayGiao" onChange={handleChange("ngayGiao")}/>
      <br/> số lượng: <input name="soLuong" onChange={handleChange("soLuong")}/>
      
       
       <p>{values}</p>
       <button onClick={onCreate}>Create</button>
      
    </div> 
  );
}

