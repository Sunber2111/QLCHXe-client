import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/api";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const request = {
  get: async (url) => await axios.get(url).then(responseBody),
  post: async (url, body) => await axios.post(url, body).then(responseBody),
  put: async (url, body) => await axios.put(url, body).then(responseBody),
  delete: async (url) => await axios.delete(url).then(responseBody),
};

const Product = {
  getAllCategory: async () => await request.get("/loaixe"),
  addCategory: async (category) => await request.post("/loaixe", category),
  updateCategory: async (category) => await request.put("/loaixe", category),
  deleteCategory: async (id) => await request.delete(`/loaixe/${id}`),
  getAll: async () => await request.get("/xe"),
  deleteCar: async (id) => await request.delete(`/xe/${id}`),
  addCar: async (car) => await request.post("/xe", car),
  updateCar: async (car) => await request.put("/xe", car),
};

const Employee = {
  getAll: async () => await request.get("/nhanvien"),
  deleteEmp: async (id) => await request.delete(`/nhanvien/${id}`),
  addEmp: async (nv) => await request.post("/nhanvien", nv),
  updateEmp: async (nv) => await request.put("/nhanvien", nv),
};

const Customer = {
  getAll: async () => await request.get("/khachhang"),
  deleteCus: async (id) => await request.delete(`/khachhang/${id}`),
  addCus: async (kh) => await request.post("/khachhang", kh),
  updateCus: async (kh) => await request.put("/khachhang", kh),
  getOrder: async (id) => await request.get(`/khachhang/hoadon/${id}`),
};

const Store = {
  getAll: async () => await request.get("/kho"),
  deleteStore: async (id) => await request.delete(`/kho/${id}`),
  addStore: async (st) => await request.post("/kho", st),
  updateStore: async (st) => await request.put("/kho", st),
  addDetailStore: async (ctKho) => await request.post("/kho/ctkho", ctKho),
  deleteDetailStore: async (id) => await request.get(`/kho/ctkho/${id}`),
};

const Phieu = {
  getAllPhieuXuat: async () => await request.get("/hdx"),
  deletePhieuXuat: async (id) => await request.delete(`/hdx/${id}`),
  addPhieuXuat: async (st) => await request.post("/hdx", st),
  addCTPhieuXuat: async (st) => await request.post("/hdx/cthdx", st),
  deleteCTPhieuXuat: async (id) => await request.get(`/hdx/cthdx/${id}`),
  getAllPhieuNhap: async () => await request.get("/hdn"),
  deletePhieuNhap: async (id) => await request.delete(`/hdn/${id}`),
  addPhieuNhap: async (st) => await request.post("/hdn", st),
};

export default {
  Product,
  Employee,
  Customer,
  Store,
  Phieu,
};
