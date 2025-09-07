import React from "react";
import styles from "./Body.module.css";
import pool from "./db";
function Body() {
  return (
    <main className={styles.body}>
      <section className={styles.hero}>
        <h1>Welcome to Lê Trọng Phúc Website 🚀</h1>
        <p>
          Xin chào, tôi tên là Lê Trọng Phúc, 21 tuổi. Hiện tại, tôi đang là sinh viên khoa Công nghệ Thông tin, chuyên ngành Lập trình máy tính. Tôi luôn có niềm đam mê với công nghệ, yêu thích việc tìm tòi và xây dựng các ứng dụng phần mềm để giải quyết những vấn đề thực tiễn trong cuộc sống.
        </p>
        <p>
          Hello, my name is Lê Trọng Phúc, I am 21 years old. I am currently a student at the Faculty of Information Technology, majoring in Computer Programming. I am passionate about technology and enjoy exploring as well as building software applications to solve real-world problems.
        </p>
        <a href="https://github.com/PhucDiamond-VN" target="_blank" rel="noopener noreferrer">
            <button className={styles.btn}>Github của tôi</button>\
        </a>
      </section>

      <section className={styles.content}>
        <h2>Đây là các đường dẫn đến các sản phẩm của tôi</h2>
        <p>
          <a href="https://phucdiamond-vn.github.io/Lottery-Predictor/" target="_blank" rel="noopener noreferrer">Dự đoán số</a> - Ứng dụng web giúp người dùng dự đoán kết quả số tiếp bằng các thuật toán dự đoán hiện đại.
        </p>
      </section>
    </main>
  );
}

export default Body;
