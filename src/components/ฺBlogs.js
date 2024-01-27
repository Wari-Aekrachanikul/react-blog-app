import { useState, useEffect } from "react";
import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    //กรอกข้อมูลชื่อบทความ
    //หาเป็นภาษาอังกฤษ ปรับให้เป็นตัวเล็ก แล้วเช็โดย includes เช็คจากค่า search ที่ปรับเป็นตัวเล็กเช่นกัน
    //blogs.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase))
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlog(result);
  }, [search]);
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              {/* ตั้งแต่ 0 - 300 คำ */}
              <p>{item.content.substring(0, 300)}</p>
              {/* เส้นใต้ hr */}
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
