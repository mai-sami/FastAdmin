import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css";
import HeaderInfluencer from "../../components/Header/HeaderInfluencer";
import { toast, ToastContainer } from "react-toastify";
import StatisticsBoxInfluencer from "../../components/influencer/StatisticsBoxInfluencer";
function DashboardInfluencer() {
  const link = "https://example.com/influencer-dashboard"; // Replace with actual link
  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() =>
        toast.success("تم نسخ الرابط بنجاح ", {
          icon: "👏",
          disableTimeOut: false,
          titleClass: "toaster_title",
          messageClass: "toaster_messge",
          timeOut: 5000,
          closeButton: true,
        })
      )
      .catch((err) => console.error("Failed to copy!", err));
  };
  return (
    <>
      <HeaderInfluencer />
      <Container>
        <div className="admin_home">
          <ToastContainer />
          <p>لوحة التحكم</p>
          <div className="box_influencer">
            <div className="link_ingo">
              <Button onClick={handleCopy} className="btn LinksShare">
                انسخ الرابط الخاص بك
              </Button>
              <input className="shear_links" value={link} />
            </div>
          </div>
          <StatisticsBoxInfluencer />
        </div>
      </Container>
    </>
  );
}

export default DashboardInfluencer;
