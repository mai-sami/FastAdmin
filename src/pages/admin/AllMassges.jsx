import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetData } from "../../hooks/useGetData";
import Pagination from "@mui/material/Pagination";

function AllMassges() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { getAdminOpenTicket, openTicket, isLoading } = useGetData();
  useEffect(() => {
    getAdminOpenTicket(page);
  }, [page]);
  return (
    <Container className="admin_home">
      <p>الرسائل المفتوحة</p>
      {isLoading ? (
        <div className="Spinner_admin">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div>
          {openTicket.length === 0 && (
            <div className="no_ticket">لا توجد تذاكر مفتوحة</div>
          )}
          {openTicket?.map((ticket, index) => (
            <Accordion key={ticket.id} className="accordion_ticket">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <span>
                    {ticket.subject}
                    <span className="ticket_id"> {index + 1} </span>
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ticket.message}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
      <Pagination
        count={10}
        page={page}
        color="secondary"
        onChange={(e, value) => setPage(value)}
      />
    </Container>
  );
}

export default AllMassges;
