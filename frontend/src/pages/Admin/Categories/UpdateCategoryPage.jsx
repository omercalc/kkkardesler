import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { message, Form, Input, Button } from 'antd';

const UpdateCategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`);
        if (response.ok) {
          const data = await response.json();
          form.setFieldsValue(data);
        } else {
          message.error('Kategori bulunamadı.');
        }
      } catch (error) {
        message.error(`Veri yükleme hatası: ${error.message}`);
      }
    };

    fetchCategory();
  }, [id, form]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Kategori başarıyla güncellendi.');
        navigate('/admin/categories');
      } else {
        message.error('Kategori güncellenemedi.');
      }
    } catch (error) {
        message.error(`Güncelleme hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Kategoriyi Güncelle</h1>
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
    label="Kategori Resmi"
    rules={[{ required: true, message: 'Lütfen kategori resmini girin' }]}
  >
    <Input style={{ maxWidth: '80%' }} />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit" loading={loading}>
      Güncelle
    </Button>
  </Form.Item>
</Form>
    </div>
  );
};

export default UpdateCategoryPage;