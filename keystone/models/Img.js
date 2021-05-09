const { Relationship, File } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
  src: './file',
  path: './file',

});

module.exports = {
  fields: {
    anh: {
      type: File,
      adapter: fileAdapter,
      label: ' ảnh '
    },
    sach: {
      type: Relationship, ref: 'Sach.IMG', many: false,
      label: 'Sách'
    }
  },
}