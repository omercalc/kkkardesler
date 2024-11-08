import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { message, Form, Input, Button } from 'antd';

const CreateCategoryPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Kategori başarıyla oluşturuldu.');
        navigate('/admin/categories');
      } else {
        message.error('Kategori oluşturulamadı.');
      }
    } catch (error) {
      message.error(`Oluşturma hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
       <h1 className="text-4xl font-bold mb-8">Yeni Kategori Oluştur</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Kategori İsmi"
          rules={[{ required: true, message: 'Lütfen kategori ismini girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="image"
          label="Kategori Resmi URL"
          rules={[{ required: true, message: 'Lütfen kategori resmini girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
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

export default CreateCategoryPage;