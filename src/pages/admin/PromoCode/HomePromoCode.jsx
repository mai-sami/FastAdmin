import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import "../style.css";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function createData(id, name, calories, fat, carbs, proteins, protein, status) {
  return { id, name, calories, fat, carbs, proteins, protein, status };
}
const rows = [
  createData("234534", " عبد الرحمن الشهري   ", 159, 6.0, 24, 3, 66, false),
  createData("234534", "Ice creamsandwich", 237, 9.0, 37, 23, 78, true),
  createData("234534", "Eclair", 262, 16.0, 24, 788, 12, false),
  createData("234534", "Cupcake", 305, 3.7, 67, 1234, 67, 1),
  createData("234534", "Gingerbread", 356, 16.0, 49, 23, 68889, false),
];
function HomePromoCode() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="admin_home">
      <div className="create_promoPAge">
        <p>لوحة تحكم لبرومو كود</p>
        <Nav className="btn-registration">
          <Button
            onClick={handleShow}
            className="btn  craete_modepromo"
            variant="success"
          >
            إنشاء كود جديد
          </Button>
        </Nav>
      </div>
      <div className="box_table">
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>التعريف</TableCell>
                <TableCell align="right" className="samll">
                  اسم العميل
                </TableCell>
                <TableCell align="right" className="samll ">
                  مدة الاشتراك
                </TableCell>
                <TableCell align="right" className="samll ">
                  {" "}
                  رقم الجوال{" "}
                </TableCell>
                <TableCell align="right" className="samll ">
                  الجنس{" "}
                </TableCell>
                <TableCell align="right" className="samll ">
                  {" "}
                  العمر{" "}
                </TableCell>
                <TableCell align="right" className="samll ">
                  {" "}
                  نوع البرنامج{" "}
                </TableCell>

                <TableCell align="right" className=" samll">
                  {" "}
                  تاريخ الاستلام{" "}
                </TableCell>
                <TableCell align="right" className=" samll">
                  {" "}
                  وقت الاستلام{" "}
                </TableCell>

                <TableCell align="right" className="samll ">
                  {" "}
                  مكان التوصيل
                </TableCell>
                <TableCell align="right" className=" samll">
                  {" "}
                  الحالة{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="rights" component="th" scope="row">
                    {" "}
                    {row.id}{" "}
                  </TableCell>
                  <TableCell className="rights" align="right">
                    {/* <AccountCircleIcon style={{ fontSize: 23 }} /> */}
                    {row.name}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.fat}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.carbs}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.carbs}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.carbs}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.carbs}
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.carbs}
                  </TableCell>

                  <TableCell className="rights" align="center">
                    {row.proteins} يوم
                  </TableCell>
                  <TableCell className="rights" align="center">
                    {row.protein}
                  </TableCell>
                  {row.status ? (
                    <TableCell className="rights" align="center">
                      قيد الانتظار
                    </TableCell>
                  ) : (
                    <TableCell className="green__table" align="center">
                      تم التسليم
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="modal-headers">
            <span>انشاء برومو كود</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form className="form_data">
            <div className="flex_input">
              <span className="">اسم الكود</span>
              <input placeholder="كلمة المرور" className="input_form" />
            </div>
            <div className="flex_input">
              <span className="">اسم المؤثر</span>
              <input placeholder="كلمة المرور" className="input_form" />
            </div>
            <div className="flex_input">
              <span className="">اسم الكود</span>
              <input placeholder="كلمة المرور" className="input_form" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="craete" onClick={handleClose}>
            إنشاء الكود
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default HomePromoCode;
