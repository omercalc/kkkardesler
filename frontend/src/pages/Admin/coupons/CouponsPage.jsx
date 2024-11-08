import { message, Table, Button, Popconfirm, Space } from "antd";
import { useCallback, useEffect, useState } from "react";

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('tr-TR', options);
};

const CouponsPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchCoupons = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons`);
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

  const deleteCoupon = async (couponId) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kupon başarıyla silindi.");
        fetchCoupons();
      } else {
        message.error("Kupon silme başarısız.");
      }
    } catch (error) {
      console.log("Kupon silme hatası:", error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  const columns = [
    {
      title: "Kupon Kodu",
      dataIndex: "code",
      key: "code",
      render: (code) => <b>{code}</b>,
    },
    {
      title: "İndirim Oranı",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (discountPercent) => `${discountPercent}%`,
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
        <Space size={"large"}>
          <Popconfirm
            title="Kuponu Sil"
            description="Bu Kuponu Silmek İstediğinize Emin misiniz?"
            okText="Evet"
            cancelText="Hayır"
            onConfirm={() => deleteCoupon(record._id)}
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

export default CouponsPage;