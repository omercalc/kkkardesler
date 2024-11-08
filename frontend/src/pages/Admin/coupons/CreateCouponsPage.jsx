import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { message, Form, Input, Button, InputNumber } from 'antd';

const CreateCouponsPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/coupons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Kupon başarıyla oluşturuldu.');
        navigate('/admin/coupons');
      } else {
        message.error('Kupon oluşturulamadı.');
      }
    } catch (error) {
      message.error(`Oluşturma hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Yeni Kupon Oluştur</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="code"
          label="Kupon Kodu"
          rules={[{ required: true, message: 'Lütfen kupon kodunu girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="discountPercent"
          label="İndirim Oranı"
          rules={[{ required: true, message: 'Lütfen indirim oranını girin' }]}
        >
          <InputNumber min={0} max={100} style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCouponsPage;