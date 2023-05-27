
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};
interface IUser {
  nameTai: string;
  id: string | number;
  BienSo : string;
  intendtime : string;
  phoneNumber : string;

}

function UserDetail(props: Props) {
  let params = useParams();
  const [user, setUser] = useState<IUser | undefined>({
    nameTai: '',
    id: 4,
    BienSo:'',
    intendtime:'',
    phoneNumber:'',
  });
  useEffect(() => {
    getUser();
  },[]);
  const getUser = () => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/"+ params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <table className=" table table-bordered border-danger table-primary" style={{textAlign : "center"}}>
      <thead >
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên tài xế</th>
          <th scope="col">SĐT Tài xế</th>
          <th scope="col">Biển số xe</th>
          <th scope="col">Thời gian dự kiến</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user?.id}</th>
          <td>{user?.nameTai}</td>
          <td>{user?.phoneNumber}</td>
          <td>{user?.BienSo}</td>
          <td>{user?.intendtime}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserDetail;
