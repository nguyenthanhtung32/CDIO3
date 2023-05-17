import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";

export default function CategoryList() {
  const dataSource = [
    {
      id: "1",
      route: "Sài Gòn - Nha Trang",
      price: "320.000đ",
    },
    {
      id: "2",
      route: "Quảng Nam - Đà Nẵng",
      price: "120.000đ",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "1%",
      align: "right",
    },
    {
      title: "Tuyến",
      dataIndex: "route",
      key: "route",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      width: "1%",
      render: (text, record, index) => {
        return (
          <Space>
            <Button type="primary" ghost>
              Mua Ngay
            </Button>
            <Button type="primary" danger>
              Thêm vào giỏ hàng
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
    <Header/>
    <div style={{ padding: 15 }}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
    <Footer/>
    </>
    
  );
}
