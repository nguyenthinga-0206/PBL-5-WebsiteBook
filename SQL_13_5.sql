create database SQL_13_5;
use SQL_13_5;
create table PHANLOAISACH(
idloaisach nvarchar (10)  primary key,
loai nvarchar(250)not null
);
create table TAIKHOAN(
idtaikhoan nvarchar(10)  primary key,
tentaikhoan nvarchar(250) not null,
matkhau nvarchar(250) not null

);
create table SACH(
idsach nvarchar(10)  primary key,
tensach nvarchar(250) not null,
soluong int not null,
gia float not null,
tennxb nvarchar(250) not null,
tentacgia nvarchar(250) not null,
sotrang int  not null,
ngayxuatban datetime not null,
idloai nvarchar(10) not null,
Foreign key (idloai) References PHANLOAISACH(idloaisach)

);
create table NHACUNGCAP(
idnhacungcap nvarchar(10)  primary key,
tennhacungcap nvarchar(250) not null,
diachi nvarchar(250) not null,
sdt nvarchar(15) not null,
gmail nvarchar(250) not null
); 


create table PHIEUNHAPSACH(
idpns nvarchar(10)  primary key not null,
idtaikhoan nvarchar(10) not null,
idnhacungcap nvarchar(10) not null,
Foreign key (idnhacungcap) References NHACUNGCAP(idnhacungcap),
soluong int not null ,
tien float not null,
ngaynhap datetime not null,
idsach nvarchar(10) not null,
Foreign key (idsach) References SACH(idsach)
);
create table  IMG(
idimg nvarchar(10)  primary key,
img nvarchar(250) not null,
idsach nvarchar(250) not null,
Foreign key (idsach) References SACH(idsach)

);


create table NHANVIEN(
idnhanvien nvarchar(10)  primary key,
idtaikhoan nvarchar(10) not null,
Foreign key (idtaikhoan) References TAIKHOAN(idtaikhoan),
chucvu nvarchar(250) not null,
sdt nvarchar(15) not null,
gmail nvarchar(250) not null,
diachi nvarchar(250) not null,
ngaysinh date not null,
gioitinh nvarchar(10) not null,
hoten nvarchar(250) not null
);


create table SHIPPER(
idshipper nvarchar(10)  primary key,
idtaikhoan nvarchar(10) not null,
Foreign key (idtaikhoan) References TAIKHOAN(idtaikhoan),
tinhtrang  nvarchar(250) not null,
loaixe nvarchar(30) not null,
sdt nvarchar(15) not null,
gmail nvarchar(250) not null,
diachi nvarchar(250) not null,
ngaysinh date not null,
gioitinh nvarchar(5) not null,
hoten nvarchar(250) not null
);

create table DONHANG(
iddonhang nvarchar(10)  primary key,
diachi nvarchar(10) not null,
sdt nvarchar(15) not null,
tongtien float not null,
tinhtrangthanhtoan float not null,
tinhtranggiao nvarchar(100) not null,
khachhang nvarchar(10) not null,
Foreign key (khachhang) References TAIKHOAN(idtaikhoan),
nhanvien nvarchar(10) not null,
Foreign key (nhanvien) References TAIKHOAN(idtaikhoan),
cachthucgiaohang nvarchar(100) not null,
ngaydat datetime not null,
ngaydukiengiao datetime not null
);

create table GIOHANG(
idgiohang nvarchar(10)  primary key
);

create table CHITIETDONHANG(
idctdh nvarchar(10)  primary key,
idsach nvarchar(10) not null,
Foreign key ( idsach) References SACH(idsach),
soluong int not null,
tien float  not null,
idgiohang nvarchar(10) not null,
Foreign key (idgiohang) References GIOHANG(idgiohang)
);

create table BAIVIET(
idbaiviet nvarchar(10)  primary key,
idsach nvarchar(10) not null,
Foreign key ( idsach) References SACH(idsach),
baiviet nvarchar(150)not null,
idnguoiviet nvarchar(10)not null,
Foreign key (idnguoiviet) References TAIKHOAN(idtaikhoan)
);

create table KHACHHANG(
idkhachhang nvarchar(10)  primary key,
idtaikhoan nvarchar(10) not null,
Foreign key (idtaikhoan) References TAIKHOAN(idtaikhoan)
);

create table Chat (
idchat nvarchar(10)  primary key,
khachhang nvarchar(10) not null,
Foreign key (khachhang) References TAIKHOAN(idtaikhoan),
nhanvien nvarchar(10) not null,
Foreign key (nhanvien) References TAIKHOAN(idtaikhoan),
noidung nvarchar (10000) 
);

