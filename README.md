** Pape **

- nhân viên
- xe, loại xe
- khách hàng
- nhà cung cấp

next:

- tài khoản
- hdx
- hdn

[hdn]
public int? MaNcc { get; set; }
[cthdn]
public int? MaXe { get; set; }
public int SoLuong { get; set; }
public int? MaKho { get; set; }

[Xe]
public int MaXe { get; set; }
public string TenXe { get; set; }
public int? MaLoaiXe { get; set; }
public string SoKhung { get; set; }
public string SoMay { get; set; }

**Nếu đã tồn tại xe thì chỉ nhập Id **

