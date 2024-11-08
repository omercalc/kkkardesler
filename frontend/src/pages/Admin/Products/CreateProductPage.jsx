import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { message, Form, Input, Button, Select, InputNumber } from 'antd';

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        message.error(`Kategoriler yüklenemedi: ${error.message}`);
      }
    };

    fetchCategories();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Ürün başarıyla oluşturuldu.');
        navigate('/admin/products');
      } else {
        message.error('Ürün oluşturulamadı.');
      }
    } catch (error) {
      message.error(`Oluşturma hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Yeni Ürün Oluştur</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Ürün İsmi"
          rules={[{ required: true, message: 'Lütfen ürün ismini girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="image"
          label="Ürün Resmi URL"
          rules={[{ required: true, message: 'Lütfen ürün resmini girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Kategori"
          rules={[{ required: true, message: 'Lütfen kategori seçin' }]}
        >
          <Select style={{ maxWidth: '80%' }}>
            {categories.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={['price', 'current']}
          label="Fiyat"
          rules={[{ required: true, message: 'Lütfen fiyat girin' }]}
        >
          <InputNumber min={0} style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Açıklama"
          rules={[{ required: true, message: 'Lütfen açıklama girin' }]}
        >
          <Input.TextArea style={{ maxWidth: '80%' }} />
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

export default CreateProductPage;