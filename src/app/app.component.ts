import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  posts = [
    {
      id: 1,
      name: "Áo Thun Cổ Tròn Smile",
      price: 220000 ,
      image: '../assets/1.jpg',
      material: "Cotton",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 2,
      name: "Áo Thun Cổ Tròn Linh Vật Rồng",
      price: 125000,
      image:"../assets/2.jpg",
      material: "Cotton Compact 4S",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 3,
      name: "Áo Thun Cổ Tròn Special",
      price: 210000,
      image:"../assets/3.jpg",
      material: "Cotton Compact 2S",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 4,
      name: "Áo Thun Cổ Tròn Linh Vật Bbuff",
      price: 190000,
      image:"../assets/4.jpg",
      material: "Cotton Compact 4S",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 5,
      name: "Áo Thun Cổ Tròn Linh Vật Ghost",
      price: 180000,
      image:"../assets/5.jpg",
      material: "Cotton Compact 2S",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 6,
      name: "Áo Thun Cổ Tròn Thần Cổ Đại",
      price: 210000,
      image:"../assets/6.jpg",
      material: "Cotton Compact 2S",
      order: false,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 7,
      name: "Áo Thun Cổ Tròn Linh Vật Bbuff ver2",
      price: 230000,
      image:"../assets/7.jpg",
      material: "Cotton Compact 2S",
      order: false,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 8,
      name: "Áo Thun Cổ Tròn Thần Cổ Đại Athena",
      price: 220000,
      image:"../assets/8.jpg",
      material: "Cotton Compact 2S",
      order: true,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 9,
      name: "Áo Thun Cổ Tròn Linh Vật Animals",
      price: 250000,
      image:"../assets/9.jpg",
      material: "Cotton",
      order: false,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    },
    {
      id: 10,
      name: "Áo Thun Cổ Tròn Ngân Hà Space",
      price: 200000,
      image:"../assets/0.jpg",
      material: "Cotton Compact 2S",
      order: false,
      sub: "Nên giặt chung với sản phẩm cùng màu. Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh"
    }
    
  ];

  posts2 = [
    
  ];
}
