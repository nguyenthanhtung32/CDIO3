import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

interface IUser {
  start: string;
  end: string;
  id: string | number;
  timeStart : string;
  price : string;
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

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
  };

  return (
    <table className="table table-bordered border-danger" style={{textAlign : "center"}}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Giá vé</th>
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
            <td>{item.price}</td>
            <td>{item.timeStart}</td>
            <td>{item.start}</td>
            <td>{item.end}</td>
            <td>
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
