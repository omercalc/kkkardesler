import { message, Table, Button, Popconfirm, Space } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('tr-TR', options);
  };

const ProductPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/api/products`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Veri Bulunamadı.");
      }
    } catch (error) {
      console.log("Veri Hatası:", error);
    }
  }, [apiUrl]);

  const deleteCategori = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Ürün başarıyla silindi.");
        fetchUsers();
      } else {
        message.error("Ürün silme başarısız.");
      }
    } catch (error) {
      console.log("Ürün silme hatası:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns = [
    {
      title: "Resimler",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="kategori"
          style={{ width: "75px", height: "75px", borderRadius: "20%" }}
        />
      ),
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <b>{name}</b>,
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => formatDate(text),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <Space  size={"large"} >
        <Button type="primary"
        onClick={() => navigate(`/admin/product/update/${record._id}`)}>DÜZENLE</Button>
        <Popconfirm
          title="Kategoriyi Sil"
          description="Bu Kategoriyi Silmek İstediğinize Emin misiniz?"
          okText="Evet"
          cancelText="Hayır"
          onConfirm={() => deleteCategori(record._id)}
        >
          <Button danger>SİL</Button>
        </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default ProductPage;