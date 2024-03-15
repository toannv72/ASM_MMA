const dataList = [
  {
    "id": "1",
    "name": "Hoa lan vàng ",
    "image": "https://iuhoa.com/wp-content/uploads/2021/12/Downloader.la-61a75420d5816.jpg",
    "isNatural": true,
    "origin": "Việt Nam",
    price: 32,
    "category": "Địa lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Bình hoa địa lan đẹp gồm 9 cành địa lan vàng hoàng hậu, tượng trưng cho sự thịnh vượng, quyền lực đặc biệt loại hoa này có độ bền cao, dễ chăm sóc. Đây là món quà ý nghĩa, sang trọng để dành tặng đối tác, bạn bè, người thân trong các dịp chúc mừng khai trương, tân gia, ngày doanh nhân, hoặc chưng trong ngày tết."
  },
  
  {
    "id": "2",
    "name": "Hoa lan tím",
    "image": "https://stc.hoatuoihoangnga.com/data/uploads/news/17/hoa-phong-lan-y-nghia-phong-thuy-tac-dung-va-cach-cham-soc-1598363137806.jpg?v=1598363137",
    price: 119,
    "isNatural": true,
    "origin": "Thái Lan",
    "category": "Phong lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Địa Lan là loại hoa mang nhiều ý nghĩa được nhiều người lựa chọn để trang trí . Hoa địa lan giả đang dần thay thế địa lan thật bởi nhiều khía cạnh : chi phí , thời gian sử dụng và thẩm mĩ. Không gian làm việc, phòng khách, phòng ngủ của bạn sẽ bừng sáng với Chậu Địa Lan Giả   cao cấp . Với màu sắc trang nhã nhưng không kém phần nổi bật , mẫu Chậu Địa Lan  nhân tạo của chúng tôi sẽ thức tỉnh mọi không gian xung quanh nó. Hãy đến ngay Hoa Decor để sở hữu Chậu Địa Lan  cao cấp  đẹp mê hồn của chúng tôi nhé."
  },
  {
    "id": "3",
    "name": "Chậu hoa vàng",
    "image": "https://static.uyenshop.vn/uploads/2018/11/dia-lan-vang.jpg",
    "isNatural": true,
    price: 391,
    "origin": "Việt Nam",
    "category": "Bán địa lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Địa Lan là loài hoa của núi rừng với vẻ đẹp kiêu sa,lịch lãm, vương giả và được coi như nữ hoàng xinh đẹp của các loài hoa, Địa Lan được sử dụng nhiều làm quà tặng đặc biệt, sang trọng dành tặng cho gia đình,bạn bè, đối tác quan trọng. Bình hoa cao 80cm, xòe rộng 60cm."
  },
  {
    "id": "4",
    "name": "Chậu hoa tươi ",
    "image": "https://caycanhanhthu.vn/wp-content/uploads/2020/11/Dia-lan-vang-mit-Da-Lat-1.jpg",
    "isNatural": true,
    price: 32,
    "origin": "Thái Lan",
    "category": "Địa lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Cây địa lan Sato mang vẻ đẹp cuốn hút, mang giá trị thẩm mỹ cao; được người yêu thích và chọn lựa làm hoa chưng vào ngày lễ Tết nguyên đán với mong muốn mang đến may mắn, phát tài phát lộc, những lời chúc sức khỏe đặc biệt nhất."
  },
  {
    "id": "5",
    "name": "Lan vàng đẹp",
    "image": "https://nemthuanviet.com/wp-content/uploads/2023/09/hoa-phong-lan-2.jpg",
    price: 31,
    "isNatural": true,
    "origin": "Thái Lan",
    "category": "Phong lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Lan hồ điệp vàng có màu sắc rực rỡ và ấm áp, thu hút mọi ánh nhìn. Lan hồ điệp vàng mang ý nghĩa sự lạc quan, vui tươi, ấm áp, giàu sang, sung túc, thịnh vượng. Chậu hoa lan hồ điệp vàng được ghép từ 15 cây lan hồ điệp loại 2 vòi bông được kết hợp hài hòa cùng cây sen đá tạo nên tác phẩm đẹp và sang trọng, chứa đựng được những lời chúc tốt đẹp nhất mà bạn muốn dành tặng cho người thân, bạn bè, phù hợp tặng trong các dịp khai trương, sinh nhật, quà tặng người thân, chưng văn phòng,…"
  },
  {
    "id": "6",
    "name": "Lan tím đẹp",
    "image": "https://vuanem.com/blog/wp-content/uploads/2022/11/y-nghia-hoa-phong-lan.jpg",
    "isNatural": true,
    price: 32,
    "origin": "Việt Nam",
    "category": "Phong lan",
    "createdAt": "2023-10-30T10:52:11.450+00:00",
    "detail": "Thân lan có 2 loại chính là đa thân và đơn thân. Lá lan rất đa dạng từ thể loại mọng nước đến loại lá phiến mỏng và thường có màu xanh bóng. Hoa lan có 6 cánh. Trong đó, 3 cánh ngoài cùng là 3 cánh đài thường có màu sắc và kích thước giống nhau. Bên trong các cánh đài là các cánh hoa. Trong cùng của hoa còn có một cánh môi  bộ phận quyết định giá trị thẩm mỹ của phong lan. "
  }
  // Add more orchids as needed
];

export default dataList;
