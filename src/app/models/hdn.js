export const HdnSchema = {
  HDN: {
    prop: "hdn",
    type: {
      MaNCC: {
        prop: "maNcc",
        type: Number,
        required: true,
      },

      CTHDN: {
        prop: "ctHdn",
        type: {
          MaXe: {
            prop: "maXe",
            type: Number,
            required: true,
          },
          SoLuong: {
            prop: "soLuong",
            type: Number,
            required: true,
          },
          MaKho: {
            prop: "maKho",
            type: Number,
            required: true,
          },
        },
      },
    },
  },
};
