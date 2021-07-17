const { Relationship, File } = require("@itoa/fields");
const { LocalFileAdapter } = require("@itoa/file-adapters");

const fileAdapter = new LocalFileAdapter({
  src: "./file/img",
  path: "/img",
});

module.exports = {
  fields: {
    anh: {
      type: File,
      adapter: fileAdapter,
      label: "Ảnh",
    },
    sach: {
      type: Relationship,
      ref: "Sach.IMG",
      many: false,
      adminConfig: {
        isReadOnly: true,
        },
      label: "Sách",
    },
  },
};
