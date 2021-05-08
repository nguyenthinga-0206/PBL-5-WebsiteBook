//hoang thi xoan
//test
const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password, Integer, Color, Relationship, Float, Select, DateTime, CloudinaryImage, File } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');


const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'first-app';
const adapterConfig = { mongoUri: 'mongodb://localhost/first-app' };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

const fileAdapter = new LocalFileAdapter({
  src: './file',
  path: './file',
  
});
keystone.createList('User', {
  fields: {
    name:{ 
      type: Text
     },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      /*
      access: {
        update: access.userIsAdmin,
      },
      */
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls

  // access: {
  //   read: access.userIsAdminOrOwner,
  //   update: access.userIsAdminOrOwner,
  //   create: access.userIsAdmin,
  //   delete: access.userIsAdmin,
  //   auth: true,
  // },
});

keystone.createList('IMG', {
  fields: {
    anh: {
      type: File,
      adapter: fileAdapter,
      label:' ảnh '
    },
    sach:{
      type:Relationship,ref:'Sach',many:false,
      label:'Sách'

    }
  },
});

keystone.createList("Phanloaisach", {
  fields: {
    loai: {
      type: Text,
      label: 'Loại sách'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    sach: {
      type: Relationship, ref: 'Sach.phanLoaiSach', many: true,
      label: 'Sách'
    },
    
    
  },
});
keystone.createList("Nhacungcap", {
  fields: {
    ten: {
      type: Text,
      label: 'Tên',
    },
    diaChi: {
      type: Text,
      label: 'Địa chỉ'
    },
    sdt: {
      type: Text,
      label: 'SDT'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    items: {
      type: Relationship, ref: 'Phieunhapsach', many: true,
      label: 'Phiếu nhập sách'
    }

  },
});

keystone.createList("Phieunhapsach", {
  fields: {
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    tien: {
      type: Float,
      label: 'Tiền'
    },
    ngayNhap: {
      type: DateTime,
      label: 'Ngày nhập'
    },
    items: {
      type: Relationship, ref: 'Sach', many: true,
      label: 'Sach'
    },
    nhaCungCap:{
      type:Relationship,ref:'Nhacungcap',many:false,
      label:'Nhà cung cấp'
    },
    Chitietdonhang:{
      type:Relationship,ref:'Chitietdonhang',many:false,
      label:'Chi tiết đơn hàng'

    }

  },

});

keystone.createList("Sach", {
  fields: {
    tenSach: {
      type: Text,
      label: 'Tên'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    gia: {
      type: Float,
      label: 'Gia'
    },
    tenNhaXuatBan: {
      type: Text,
      label: 'Tên NXB'
    },
    tenTacGia: {
      type: Text,
      label: 'Tên tác giả'
    },
    soTrang: {
      type: Integer,
      label: 'Số trang'
    },
    ngayXuatBan: {
      type: DateTime,
      label: 'Ngày xuất bản'
    },
    IMG: {
      type: Relationship, ref: 'IMG', many: true,
      label: 'IMG'
    },
    baiViet: {
      type: Relationship, ref: 'Baiviet', many: false,
    },

    phanLoaiSach:{
      type:Relationship,ref:'Phanloaisach.sach',many:false,
      label:'Phân loại sách'
    },
    chiTietDonHang:{
      type:Relationship,ref:'Chitietdonhang',many:false
    }
  },
  labelField: 'tenSach'

});
keystone.createList("Baiviet", {
  fields: {
    baiViet: {
      type: Text,
      label: 'Bài viết'
    },
    sach:{
      type:Relationship,ref:'Sach',many:false,
      label:'Sách'
    },
  },

});
keystone.createList("Chitietdonhang", {
  fields: {
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    tien: {
      type: Float,
      label: 'Giá tiền'
    },
    sach:{
      type:Relationship,ref:'Sach',many:false,
      label:'Sách'
    }
  },
});
keystone.createList("Giohang", {
  fields: {
    items: {
      type: Relationship, ref: 'Chitietdonhang', many: true,
      label: "Chi tiết đơn hàng"
    }
  },
});

keystone.createList('Donhang', {
  fields: {
    sdt: {
      type: Text,
      label: 'SDT'
    },
    tongtien: {
      type: Float,
      label: 'Tổng tiền'
    },
    tinhTrangThanhToan: {
      type: Checkbox, options: 'đã thanh toán,chưa thanh toán',
      label: 'Tình trạng thánh toán'
    },
    tinhTrangGiao: {
      type: Checkbox, options: 'Chờ xác nhận,Chờ lấy hàng, Đang giao, Đã giao',

      label: 'Tình trạng giao'

    },
    duyetBoiTaiKhoan: {
      type: Text,
      label: 'Duyệt bởi tài khoản'
    },
    cachThucGiaoHang: {
      type: Text,
      label: 'Cách thức giao hàng'
    },
    ngayDat:
    {
      type: DateTime,
      label: 'Ngày đặt'
    },
    ngayGiao: {
      type: DateTime,
      label: 'Ngày giao'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    items: {
      type: Relationship, ref: 'Chitietdonhang', many: true,
      label: 'Chi tiết đơn hàng'
    }
  },
  // List-level access controls
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
