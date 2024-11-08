import { message, Table, Button, Popconfirm } from "antd";
import { useCallback, useEffect, useState } from "react";

const AdminUserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`);
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
  
  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kullanıcı başarıyla silindi.");
        fetchUsers();
      } else {
        message.error("Kullanıcı silme başarısız.");
      }
    } catch (error) {
      console.log("Kullanıcı silme hatası:", error);
    }
};
  
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record) => (
        <img
          src={record.avatar}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "20%" }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username ",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <Popconfirm
        title="Kullanıcıyı Sil"
        description="Kullanıcıyı Silmek İstediğinize Emin misiniz?"
        okText="Evet"
        cancelText="Hayır"
        onConfirm={() => deleteUser(record.email) }
      >
        <Button danger>SİL</Button>
      </Popconfirm>
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

export default AdminUserPage;
