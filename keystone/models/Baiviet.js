const { Text, Relationship } = require('@keystonejs/fields');
module.exports = {
  fields: {
    tieude: {
      type: Text,
      label: 'Tiêu đề'
    },
    baiViet: {
      type: Text,
      label: 'Bài viết'
    },
    sach: {
      type: Relationship, ref: 'Sach.baiViet', many: false,
      label: 'Sách'
    },
  },
  labelField: 'tieude'

}