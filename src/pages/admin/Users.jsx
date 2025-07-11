import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./style.css";
import { Button, Container, Spinner } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { useGetData } from "../../hooks/useGetData";
import { config } from "../../config/headerConfig";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTasks } from "../../hooks/useTasks";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToastContainer } from "react-toastify";

function createData(
  telegram_id,
  username,
  balance,
  referral_code,
  promo_code,
  gpu_power,
  deposit_amount,
  status
) {
  return {
    telegram_id,
    username,
    balance,
    referral_code,
    promo_code,
    gpu_power,
    deposit_amount,
    status,
  };
}

function Users() {
  const { getAdminUser, user, isLoading } = useGetData();
  const { deleteUsers, deleteusers, CahngeUserStatusActive } = useTasks();

  const [current_page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [statusChanges, setStatusChanges] = useState([]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  // const handleChangeStatus = (id) => {
  //   setStatusChanges(id);
  //   CahngeUserStatusActive(id);
  // };
  const handleChangeStatus = (id, newStatus) => {
    setStatusChanges((prev) => ({
      ...prev,
      [id]: newStatus,
    }));
    CahngeUserStatusActive(id, newStatus); // تأكد أن الدالة تقبل status
  };

  const HandelDeleteUsers = (id) => {
    deleteUsers(id);
  };
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearchVal] = useState("");

  useEffect(() => {
    getAdminUser(current_page, search, status);
  }, [current_page, search, status, deleteusers, statusChanges]);
  return (
    <Container className="admin_home">
      <ToastContainer />
      <p>مستخدمين النظام</p>
      <div className="box_table">
        <div className="level_flex">
          <div className="header__search">
            <input
              className="header__searchInput"
              placeholder=" .... بحث "
              onChange={(e) => setSearchVal(e.target.value)}
              type="text"
            />
            <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__search">
            <FormControl className="FormControlSelect" fullWidth>
              <InputLabel id="demo-simple-select-label">
                إختر الحالة التي تريدها
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="إختر الحالة التي تريدها"
                onChange={handleChange}
              >
                <MenuItem>إختر الحالة التي تريدها</MenuItem>

                <MenuItem value={"active"}>نشط</MenuItem>
                <MenuItem value={"banned"}>معلق</MenuItem>
                <MenuItem value={"disabled"}>مجمد</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <br />
        {isLoading ? (
          <div className="Spinner_admin">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>الرقم</TableCell>
                  <TableCell align="right" className="samll">
                    اسم العميل
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الرصيد
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    كود الإحالة{" "}
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الكود{" "}
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    {" "}
                    الطاقة{" "}
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الإيداع
                  </TableCell>

                  <TableCell align="right" className=" samll">
                    {" "}
                    تاريخ الاستلام{" "}
                  </TableCell>

                  <TableCell align="right" className=" samll">
                    {" "}
                    الحالة{" "}
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    الأوامر
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.length === 0 ? (
                  <div className="no_ticket">لا يوجد مستخدمين حاليا</div>
                ) : (
                  <>
                    {user.map((row) => (
                      <TableRow
                        key={row.username}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          className="rights"
                          component="th"
                          scope="row"
                        >
                          {" "}
                          {row.telegram_id}{" "}
                        </TableCell>
                        <TableCell className="rights" align="right">
                          {row.username}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.balance}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.referral_code === null ? (
                            <p className="danger">لا يوجد</p>
                          ) : (
                            <p>{row.referral_code}</p>
                          )}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.promo_code === null ? (
                            <p className="danger">لا يوجد</p>
                          ) : (
                            <p>{row.promo_code}</p>
                          )}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.gpu_power}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.deposit_amount}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.created_at === null ? (
                            <p className="danger">لا يوجد</p>
                          ) : (
                            <p>{row.created_at}</p>
                          )}
                        </TableCell>

                        {row.status === "active" ? (
                          <TableCell className="green__table" align="center">
                            <span className="span_item">
                              <div className="sucssesCircul"></div>
                              نشط
                            </span>
                          </TableCell>
                        ) : row.status === "banned" ? (
                          <TableCell className="rights" align="center">
                            <div className="sucssesCircul waite"></div>
                            معلق
                          </TableCell>
                        ) : (
                          <TableCell className="rights" align="center">
                            <div className="sucssesCircul jmad"></div>
                            مجمد
                          </TableCell>
                        )}
                        <div className="flex_item">
                          <DeleteForeverIcon
                            className="DeleteIcon"
                            onClick={() => HandelDeleteUsers(row.id)}
                          />
                          <FormControl fullWidth>
                            <InputLabel id={`status-label-${row.id}`}>
                              تغيير الحالة
                            </InputLabel>
                            <Select
                              labelId={`status-label-${row.id}`}
                              id={`status-select-${row.id}`}
                              value={statusChanges[row.id] || ""}
                              label="تغيير الحالة"
                              onChange={(e) =>
                                handleChangeStatus(row.id, e.target.value)
                              }
                            >
                              <MenuItem value="">تغيير الحالة</MenuItem>
                              <MenuItem value={"activate"}>نشط</MenuItem>
                              <MenuItem value={"banned"}>معلق</MenuItem>
                              <MenuItem value={"deactivate"}>مجمد</MenuItem>
                            </Select>
                          </FormControl>

                          {/* <EditIcon
                                                      className="EditIcon"
                                                      onClick={() => handleShow(row.id)}
                                                    /> */}
                        </div>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Pagination
          count={10}
          page={current_page}
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </Container>
  );
}

export default Users;
