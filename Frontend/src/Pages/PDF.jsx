import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';

function PDF() {
  useEffect(() => {
    const paymentId = localStorage.getItem("paymentId") || "Unknown Payment ID";
    const userName = localStorage.getItem("userName") || "Valued Customer";
    const packageName = localStorage.getItem("packageName") || "Health Package";
    const amount = localStorage.getItem("amount") || "N/A";
    const paymentDate = new Date().toLocaleString();

    const doc = new jsPDF();

    // Branding
    doc.setFontSize(22);
    doc.setTextColor(44, 62, 80);
    doc.text("Plus Point Health Services", 20, 20);

    // Subheader
    doc.setFontSize(16);
    doc.setTextColor(100);
    doc.text("Payment Confirmation Receipt", 20, 30);

    // Divider
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Details Section
    doc.setFontSize(12);
    doc.setTextColor(50);

    let y = 45;
    const lineGap = 10;

    doc.text(`Name: ${userName}`, 20, y); y += lineGap;
    doc.text(`Package: ${packageName}`, 20, y); y += lineGap;
    doc.text(`Payment ID: ${paymentId}`, 20, y); y += lineGap;
    doc.text(`Amount Paid: ₹ ${amount}`, 20, y); y += lineGap;
    doc.text(`Date: ${paymentDate}`, 20, y); y += lineGap;

    // Divider
    doc.line(20, y + 5, 190, y + 5);

    // Thank you note
    y += 20;
    doc.setFontSize(14);
    doc.setTextColor(0, 128, 0);
    doc.text("Thank you for choosing Plus Point!", 20, y);

    // Save the file
    doc.save("PlusPoint_Payment_Receipt.pdf");
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Generating Your Receipt...</h2>
      <p>Your payment receipt has been downloaded successfully.</p>
    </div>
  );
}

export default PDF;