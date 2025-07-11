import React, { useEffect } from "react";
import { Button, Container, Nav, Spinner } from "react-bootstrap";
import "../style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useGetData } from "../../../hooks/useGetData";
import Pagination from "@mui/material/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTasks } from "../../../hooks/useTasks";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function createData(
  id,
  code,
  description,
  total_users,
  total_deposit_users,
  total_deposit_amount,
  reward,
  commission,
  influencer_name,
  commission_earned,
  commission_withdrawn,
  commission_available,
  status
) {
  return {
    id,
    code,

    description,
    total_users,
    total_deposit_users,
    total_deposit_amount,
    reward,
    commission,
    influencer_name,
    commission_earned,
    commission_withdrawn,
    commission_available,
    status,
  };
}

function HomePromoCode() {
  const [show, setShow] = useState(false);
  const { getAdminPromoCode, promo, isLoading } = useGetData();
  const { deletePromoCode, UpdatePromoCodes } = useTasks();
  const [selectedPromo, setSelectedPromo] = useState(null);

  const HandelDeleteopen = (id) => {
    deletePromoCode(id);
    getAdminPromoCode(page);
  };

  const handleShow = (id) => {
    const selected = promo.find((item) => item.id === id);
    setSelectedPromo(selected);
    setShow(true);
  };
  const handleUpdatePromo = async () => {
    try {
      // تأكد أن updatePromoCode موجود في useTasks
      await UpdatePromoCodes(selectedPromo);
      toast.success("تم تحديث الكود بنجاح");
      setShow(false);
      getAdminPromoCode(page); // تحديث القائمة بعد التعديل
    } catch (err) {
      toast.error("فشل في تحديث الكود");
    }
  };

  const [page, setPage] = useState(1);
  const [search, setSearchVal] = useState("");

  useEffect(() => {
    getAdminPromoCode(page, search);
  }, [page, search]);
  return (
    <Container className="admin_home">
      <ToastContainer />
      <p>لوحة تحكم لبرومو كود</p>
      <div className="create_promoPAge">
        <div className="header__search">
          <input
            className="header__searchInput"
            placeholder=" .... بحث "
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <Nav className="btn-registration">
          <Link to={"/admin/create-promo"}>
            <Button className="btn  craete_modepromo" variant="success">
              إنشاء كود جديد
            </Button>
          </Link>
        </Nav>
      </div>
      <div className="box_table">
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
                  <TableCell>التعريف</TableCell>
                  <TableCell align="right" className="samll">
                    اسم المؤثر
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الكود
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الوصف
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    العمولة
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    اجمالي المستخدمين
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    اجمالي مستخدمين الإيداع
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    اجمالي مبلغ الإيداع
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    المكافأة
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    العمولة المكتسبة
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    العمولة المسحوبة
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    العمولة المتاحة
                  </TableCell>{" "}
                  <TableCell align="right" className=" samll">
                    الحالة
                  </TableCell>
                  <TableCell align="right" className=" samll">
                    الأوامر
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {promo.length === 0 ? (
                  <div className="no_ticket">لا يوجد أكواد أخرى حاليا</div>
                ) : (
                  <>
                    {promo.map((row) => (
                      <TableRow
                        key={row.id}
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
                          {row.id}{" "}
                        </TableCell>
                        <TableCell className="rights" align="right">
                          <span>{row.influencer_name}</span>
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.code}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.description}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.commission}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.total_users}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.total_deposit_amount}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.total_deposit_users}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.reward}
                        </TableCell>{" "}
                        <TableCell className="rights" align="center">
                          {row.commission_withdrawn}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.commission_earned}
                        </TableCell>{" "}
                        <TableCell className="rights" align="center">
                          {row.commission_available}
                        </TableCell>
                        {row.status ? (
                          <TableCell className="rights" align="center">
                            قيد الانتظار
                            <div className="sucssesCircul"></div>
                          </TableCell>
                        ) : (
                          <TableCell className="green__table" align="center">
                            نشط
                            <div className="sucssesCircul"></div>
                          </TableCell>
                        )}
                        <TableCell>
                          <div className="flex_item">
                            <DeleteForeverIcon
                              className="DeleteIcon"
                              onClick={() => HandelDeleteopen(row.id)}
                            />

                            <EditIcon
                              className="EditIcon"
                              onClick={() => handleShow(row.id)}
                            />
                          </div>
                        </TableCell>
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
          page={page}
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <div className="modal-headers">
            <span>تعديل الكود الترويجي</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form className="form_data">
            <div className="flex_input">
              <span className="create_name">اسم الكود</span>
              <input
                placeholder="الكود الترويجي"
                className="input_form"
                value={selectedPromo?.code || ""}
                onChange={(e) =>
                  setSelectedPromo({ ...selectedPromo, code: e.target.value })
                }
              />
            </div>

            <div className="flex_input">
              <span className="create_name">الوصف (إختياري)</span>
              <textarea
                placeholder="الوصف"
                className="input_form"
                value={selectedPromo?.description || ""}
                onChange={(e) =>
                  setSelectedPromo({
                    ...selectedPromo,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex_input">
              <span className="create_name">اسم المؤثر</span>
              <input
                placeholder="اسم المؤثر"
                className="input_form"
                value={selectedPromo?.influencer_name || ""}
                onChange={(e) =>
                  setSelectedPromo({
                    ...selectedPromo,
                    influencer_name: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex_input">
              <span className="create_name">العمولة</span>
              <input
                type="number"
                placeholder="العمولة"
                className="input_form"
                value={selectedPromo?.commission || ""}
                onChange={(e) =>
                  setSelectedPromo({
                    ...selectedPromo,
                    commission: e.target.value,
                  })
                }
              />
            </div>

            {/* يمكنك إضافة المزيد من الحقول حسب الحاجة */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="craete"
            onClick={handleUpdatePromo}
          >
            حفظ التعديلات
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={delet}>
        <Modal.Header closeButton>
          <div className="modal-headers">
            <span>تأكيد الحذف</span>
          </div>
        </Modal.Header>
        <span className="span_delete">هل متأكد من الحذف</span>
        <div className="flex_item">
          <Button
            onClick={() => HandelDeleteSuer()}
            variant="primary"
            className="Btn dangers"
          >
            نعم
          </Button>
          <Button variant="primary" className=" Btn backs">
            لا
          </Button>{" "}
        </div>
      </Modal> */}
    </Container>
  );
}

export default HomePromoCode;
