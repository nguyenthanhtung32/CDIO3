import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function NhanVien() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateForm] = Form.useForm();

  const navigate = useNavigate();

  const create = () => {
    navigate("/createnhanvien");
  };

  const [data] = useState([
    {
      id: 1,
      name: "Nguyễn Thanh Tùng",
      phoneNumber: "0905286312",
      address: "Đà Nẵng",
      position: "Nhân viên bán vé",
    },
    {
      id: 2,
      name: "Phan Thị Hoàng Vinh",
      phoneNumber: "0905612841",
      address: "Quảng Nam",
      position: "Nhân viên bán vé",
    },
  ]);

  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "1%",
      align: "right",
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Họ & Tên",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Chức vụ",
      dataIndex: "position",
      key: "position",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      width: "1%",
      render: (text, record, index) => {
        return (
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setOpen(true);
              }}
            />
            <Button danger icon={<DeleteOutlined />} />
          </Space>
        );
      },
      title: (
        <Button
          icon={<AppstoreAddOutlined />}
          style={{
            marginBottom: "10px",
            float: "right",
            border: "1px solid #4096ff",
            color: "#4096ff",
          }}
          onClick={create}
        ></Button>
      ),
    },
  ];
  const onUpdateFinish = () => {
    message.success("Cập nhật thành công!", 1.5);
  };

  return (
    <div style={{ padding: 24 }}>
      <Table rowKey="id" dataSource={data} columns={columns} />
      <Modal
        open={open}
        title="Cập nhật danh mục"
        onCancel={() => {
          setOpen(false);
        }}
        cancelText="Đóng"
        okText="Lưu thông tin"
        onOk={() => {
          updateForm.submit();
        }}
      >
        <Form
          form={updateForm}
          name="update-form"
          onFinish={onUpdateFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item
            label="Họ & Tên"
            name="name"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phoneNumber" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Chức vụ"
            name="position"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
