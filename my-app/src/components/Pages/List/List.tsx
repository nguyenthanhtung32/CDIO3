import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

interface IUser {
  name: string;
  start: string;
  end: string;
  id: string | number;
}

function List(props: Props) {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (userId: string | number) => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + userId;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
  };

  const handleUpdate = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`form/${userId}`);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Giờ xuất phát</th>
          <th scope="col">Điểm bắt đầu</th>
          <th scope="col">Điểm kết thúc</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.start}</td>
            <td>{item.end}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleUpdate(item.id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleDetail(item.id)}
              >
                Detail
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
