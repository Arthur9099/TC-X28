export const registerFormControls = [
  {
    name: "userName",
    label: "Tên",
    placeholder: "Tên của bạn",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email của bạn",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Mật khẩu của bạn",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Email của bạn",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Mật khẩu cảu bạn",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "productName",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "productDescription",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "productCategory",
    componentType: "select",
    options: [
      { id: "laptop", label: "Laptop" },
      { id: "pc-gaming", label: "PC Gaming" },
      { id: "mainboard", label: "Mainboard" },
      { id: "cpu", label: "CPU" },
      { id: "vga", label: "VGA" },
      { id: "case", label: "Case" },
      { id: "nguon", label: "Nguồn" },
      { id: "tan-nhiet", label: "Tản nhiệt" },
      { id: "o-cung", label: "Ổ cứng" },
      { id: "ram", label: "RAM" },
      { id: "the-nho", label: "Thẻ nhớ" },
      { id: "man-hinh", label: "Màn hình" },
      { id: "ban-phim", label: "Bàn phím" },
      { id: "chuot", label: "Chuột" },
      { id: "lot-chuot", label: "Lót chuột" },
      { id: "tai-nghe", label: "Tai nghe" },
    ],
  },
  {
    label: "Brand",
    name: "productBrand",
    componentType: "select",
    options: [
      { id: "nvidia", label: "Nvidia" },
      { id: "amd", label: "AMD" },
      { id: "intel", label: "Intel" },
      { id: "samsung", label: "Samsung" },
      { id: "consair", label: "Consair" },
      { id: "logitech", label: "Logitech" },
      { id: "razer", label: "Razer" },
      { id: "steelseries", label: "SteelSeries" },
      { id: "asus", label: "Asus" },
      { id: "dell", label: "Dell" },
      { id: "msi", label: "MSI" },
      { id: "nzxt", label: "NZXT" },
    ],
  },
  {
    label: "Price",
    name: "productPrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "productSalePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "productTotalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: ["laptop"],
    label: "Laptop",
    path: "/products",
  },
  {
    id: ["pc-gaming"],
    label: "PC Gaming",
    path: "/products",
  },
  {
    id: ["mainboard", "cpu", "vga"],
    label: "Main, CPU, VGA",
    path: "/products",
  },
  {
    id: ["case", "nguon", "tan-nhiet"],
    label: "Case, Nguồn, Tản nhiệt",
    path: "/products",
  },
  {
    id: ["o-cung", "ram", "the-nho"],
    label: "Ổ cứng, RAM, Thẻ nhớ",
    path: "/products",
  },
  {
    id: ["man-hinh"],
    label: "Màn hình",
    path: "/products",
  },
  {
    id: ["ban-phim"],
    label: "Bàn phím",
    path: "/products",
  },
  {
    id: ["chuot", "lot-chuot"],
    label: "Chuột, Lót chuột",
    path: "/products",
  },
  {
    id: ["tai-nghe"],
    label: "Tai nghe",
    path: "/products",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  productCategory: [
    { id: "laptop", label: "Laptop" },
    { id: "pc-gaming", label: "PC Gaming" },
    { id: "mainboard", label: "Mainboard" },
    { id: "cpu", label: "CPU" },
    { id: "vga", label: "VGA" },
    { id: "case", label: "Case" },
    { id: "nguon", label: "Nguồn" },
    { id: "tan-nhiet", label: "Tản nhiệt" },
    { id: "o-cung", label: "Ổ cứng" },
    { id: "ram", label: "RAM" },
    { id: "the-nho", label: "Thẻ nhớ" },
    { id: "man-hinh", label: "Màn hình" },
    { id: "ban-phim", label: "Bàn phím" },
    { id: "chuot", label: "Chuột" },
    { id: "lot-chuot", label: "Lót chuột" },
    { id: "tai-nghe", label: "Tai nghe" },
  ],
  productBrand: [
    { id: "nvidia", label: "Nvidia" },
    { id: "amd", label: "AMD" },
    { id: "intel", label: "Intel" },
    { id: "samsung", label: "Samsung" },
    { id: "consair", label: "Consair" },
    { id: "logitech", label: "Logitech" },
    { id: "razer", label: "Razer" },
    { id: "steelseries", label: "SteelSeries" },
    { id: "asus", label: "Asus" },
    { id: "dell", label: "Dell" },
    { id: "msi", label: "MSI" },
    { id: "nzxt", label: "NZXT" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Giá tăng dần" },
  { id: "price-hightolow", label: "Giá giảm dần" },
  { id: "title-atoz", label: "Tên từ A - Z" },
  { id: "title-ztoa", label: "Tên từ Z - A" },
];

export const addressFormControls = [
  {
    label: "Địa chỉ",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Nhập địa chỉ của bạn",
  },
  {
    label: "Thành phố",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Nhập thành phố của bạn",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Nhập pincode của bạn",
  },
  {
    label: "Số điện thoại",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Nhập số điện thoãi của bạn",
  },
  {
    label: "Ghi chú",
    name: "notes",
    componentType: "textarea",
    placeholder: "Nhập ghi chú của bạn",
  },
];
