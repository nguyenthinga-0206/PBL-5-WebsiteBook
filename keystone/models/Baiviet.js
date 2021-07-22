const { Text, Relationship } = require('@itoa/fields');
module.exports = {
  fields: {
    tieude: {
      type: Text,
      label: 'Tiêu đề'
    },
    baiViet: {
      type: Text,
      isMultiline:true,
      label: 'Bài viết'

    },
    sach: {
      type: Relationship, ref: 'Sach.baiViet', many: false,
      adminConfig: {
        isReadOnly: true,
        },
      label: 'Sách'
    },
  },
  labelField: 'tieude'

}