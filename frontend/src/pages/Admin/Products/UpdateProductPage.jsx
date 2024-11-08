import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { message, Form, Input, Button, InputNumber, Select } from 'antd';

const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          form.setFieldsValue({
            ...data,
            priceCurrent: data.price.current,
            priceDiscount: data.price.discount,
          });
        } else {
          message.error('Ürün bulunamadı.');
        }
      } catch (error) {
        message.error(`Veri yükleme hatası: ${error.message}`);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error('Kategoriler yüklenemedi.');
        }
      } catch (error) {
        message.error(`Veri yükleme hatası: ${error.message}`);
      }
    };

    fetchProduct();
    fetchCategories();
  }, [id, form]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.priceCurrent,
            discount: values.priceDiscount,
          },
        }),
      });

      if (response.ok) {
        message.success('Ürün başarıyla güncellendi.');
        navigate('/admin/products');
      } else {
        message.error('Ürün güncellenemedi.');
      }
    } catch (error) {
      message.error(`Güncelleme hatası: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ürünü Güncelle</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Ürün İsmi"
          rules={[{ required: true, message: 'Lütfen ürün ismini girin' }]}
        >
          <Input style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="priceCurrent"
          label="Ürün Fiyatı"
          rules={[{ required: true, message: 'Lütfen ürün fiyatını girin' }]}
        >
          <InputNumber min={0} style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="priceDiscount"
          label="İndirimli Fiyat"
        >
          <InputNumber min={0} style={{ maxWidth: '80%' }} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Ürün Açıklaması"
          rules={[{ required: true, message: 'Lütfen ürün açıklamasını girin' }]}
        >
          <Input.TextArea style={{ maxWidth: '80%' }} />
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
          name="image"
          label="Ürün Resmi URL"
          rules={[{ required: true, message: 'Lütfen ürün resmini girin' }]}
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

export default UpdateProductPage;