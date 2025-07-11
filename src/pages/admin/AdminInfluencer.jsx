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
function createData(
  id,
  name,
  commission_available,
  referral_code,
  promo_code,
  gpu_power,
  commission_earned,
  commission_withdrawn,
  deposit_amount,
  email,
  wallet_address
) {
  return {
    id,
    commission_earned,
    name,
    wallet_address,
    commission_withdrawn,
    commission_available,
    referral_code,
    promo_code,
    gpu_power,
    deposit_amount,
    email,
  };
}

function AdminInfluencer() {
  const { getAdminInfluencer, user, isLoading, influencers } = useGetData();
  const [current_page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAdminInfluencer(current_page);
  }, [current_page]);
  return (
    <Container className="admin_home">
      <p>مستخدمين النظام</p>
      <div className="box_table">
        <div className="level_flex"></div>
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
                    العمولة المتاحة
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    العمولة المكتسبة
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    الكود{" "}
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    العمولة المسحوبة
                  </TableCell>
                  <TableCell align="right" className="samll ">
                    عنوان المحفظة
                  </TableCell>

                  <TableCell align="right" className=" samll">
                    الايميل
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {influencers.length === 0 ? (
                  <div className="no_ticket">لا يوجد مستخدمين حاليا</div>
                ) : (
                  <>
                    {influencers.map((row) => (
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
                          {row.name}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.commission_available}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.commission_earned}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.promo_code === "null" ? (
                            <p>لا يوجد</p>
                          ) : (
                            <p>{row.promo_code}</p>
                          )}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.commission_withdrawn}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.wallet_address}
                        </TableCell>
                        <TableCell className="rights" align="center">
                          {row.email}
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
          page={current_page}
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </Container>
  );
}

export default AdminInfluencer;
