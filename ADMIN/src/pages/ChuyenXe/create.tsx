import { Button, Form, Input, InputNumber, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateChuyenXe() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/chuyenxe");
    message.success("Thêm chuyến xe thành công!", 1.5);
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{}}>
        <Form
          form={createForm}
          name="create-form"
          onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item label="ID" name="name" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Biển số xe"
            name="biensoxe"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số lượng vé"
            name="soluongve"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ID Lộ trình"
            name="lotrinhID"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Giá vé" name="price" hasFeedback required={true}>
            <InputNumber style={{ width: 500 }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Lưu thông tin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
