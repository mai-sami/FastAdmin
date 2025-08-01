import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useGetData } from "../../hooks/useGetData";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import Pagination from "@mui/material/Pagination";

function SuportClose() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { getAdminClosrdTicket, closedTicket, isLoading } = useGetData();
  useEffect(() => {
    getAdminClosrdTicket(page);
  }, [page]);
  return (
    <Container className="admin_home">
      <p>الرسائل الغير مقروءة</p>
      {isLoading ? (
        <div className="Spinner_admin">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div>
          {closedTicket.length === 0 && (
            <div className="no_ticket">لا توجد تذاكر مغلقة</div>
          )}
          {closedTicket?.map((ticket, index) => (
            <Accordion key={ticket.id} className="accordion_ticket">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <span className="ticket_id">
                    {" "}
                    {ticket.subject}
                    {index + 1}
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

export default SuportClose;
