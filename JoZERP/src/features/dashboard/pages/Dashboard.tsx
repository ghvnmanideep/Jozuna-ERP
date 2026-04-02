import { Users, IndianRupee, FileText, Bed, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
import { Strings } from "../../../utils/Strings";
import "../styles/Dashboard.css";
import { SummaryCard } from "../interfaces/SummaryCard";
import { Notice } from "../interfaces/Notice";
import { Alert } from "../interfaces/Alert";
import { DashboardData } from "../../../common/interface/chartinterface";
import CommonBarChart from "../../../common/component/Barchart";
import CircularChart from "../../../common/component/Circularchart";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const summaryCards: SummaryCard[] = [
    {
      title: Strings.DASHBOARD.SUMMARY_CARDS.TOTAL_STUDENTS,
      value: "4,280",
      icon: Users,
      bgColor: "#e0f2fe",
      iconColor: "#0369a1",
    },
    {
      title: Strings.DASHBOARD.SUMMARY_CARDS.REVENUE_YTD,
      value: "₹ 2.4M",
      icon: IndianRupee,
      bgColor: "#f0f9ff",
      iconColor: "#2563eb",
      isRevenue: true,
    },
    {
      title: Strings.DASHBOARD.SUMMARY_CARDS.NEW_APPLICATION,
      value: "842",
      icon: FileText,
      bgColor: "#f0f9ff",
      iconColor: "#2563eb",
    },
    {
      title: Strings.DASHBOARD.SUMMARY_CARDS.HOSTEL_OCCUPANCY,
      value: "92%",
      icon: Bed,
      bgColor: "#eef2ff",
      iconColor: "#3b82f6",
    },
  ];

  const notices: Notice[] = [
    {
      id: 1,
      badge: "Patent Granted",
      badgeVariant: "blue",
      title: "Solar-Efficient Cooling Grid",
      detailId: "ID: US-2026-00412A",
      department: "Mechanical Eng.",
      linkText: "View Details",
    },
    {
      id: 2,
      badge: "Q1 Journal",
      badgeVariant: "blue",
      title: "CRISPR Adaptation in Wheat",
      detailId: "Published: Nature Biotech",
      department: "Biotechnology",
      linkText: "DOI Link",
    },
    {
      id: 3,
      badge: "Competition",
      badgeVariant: "green",
      title: "Regional Robotics Challenge",
      detailId: "ID: RC-2026-992",
      department: "Engineering",
      linkText: "Register Now",
    },
    {
      id: 4,
      badge: "Workshop",
      badgeVariant: "green",
      title: "AI Ethics & Governance",
      detailId: "Venue: Seminar Hall 2",
      department: "Computer Science",
      linkText: "Schedule",
    },
  ];

  const alerts: Alert[] = [
    {
      id: 1,
      title: "Low Occupancy Alert - Block C",
      description: "Block C Girls Hostel currently at 45% capacity.",
    },
    {
      id: 2,
      title: "New Accreditation Document",
      description:
        "NAAC certificate has been updated by Institution Admin.",
    },
    {
      id: 3,
      title: "New Accreditation Document",
      description:
        "NAAC certificate has been updated by Institution Admin.",
    },
    {
      id: 4,
      title: "New Accreditation Document",
      description:
        "NAAC certificate has been updated by Institution Admin.",
    },
  ];

  const handleDownloadReport = () => {
    // Generate a minimal empty PDF
    const emptyPdfTemplate =
      "%PDF-1.4\n" +
      "1 0 obj <</Type/Catalog/Pages 2 0 R>> endobj\n" +
      "2 0 obj <</Type/Pages/Kids[3 0 R]/Count 1>> endobj\n" +
      "3 0 obj <</Type/Page/MediaBox[0 0 595 842]/Parent 2 0 R/Resources<<>>>> endobj\n" +
      "xref\n" +
      "0 4\n" +
      "0000000000 65535 f \n" +
      "0000000009 00000 n \n" +
      "0000000052 00000 n \n" +
      "0000000101 00000 n \n" +
      "trailer <</Size 4/Root 1 0 R>>\n" +
      "startxref\n" +
      "178\n" +
      "%%EOF";
      
    const blob = new Blob([emptyPdfTemplate], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Annual_Report_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    /* Previous local PDF generation code:
    const doc = new jsPDF();

    // Header
    doc.setFillColor(241, 245, 249);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(30, 41, 59);
    doc.text("JOZUNA CAMPUS ERP", 20, 25);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text(`Annual Report - 2026 | Generated: ${new Date().toLocaleDateString()}`, 20, 32);

    // Summary Section
    let yPos = 55;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text("University Summary Overview", 20, yPos);

    yPos += 15;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    summaryCards.forEach((card, index) => {
      doc.text(`${card.title}:`, 25, yPos);
      doc.setFont("helvetica", "bold");
      doc.text(`${card.value}`, 80, yPos);
      doc.setFont("helvetica", "normal");
      yPos += 10;
    });

    // Recent Alerts Section
    yPos += 10;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Recent System Alerts", 20, yPos);

    yPos += 15;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);

    alerts.forEach((alert) => {
      doc.setFont("helvetica", "bold");
      doc.text(alert.title, 25, yPos);
      yPos += 6;
      doc.setFont("helvetica", "normal");
      doc.text(alert.description, 25, yPos, { maxWidth: 160 });
      yPos += 12;
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text("Confidential - For Board Meeting Use Only", 105, 285, { align: "center" });

    doc.save("Annual_Report_2026.pdf");
    */
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{Strings.DASHBOARD.TITLE}</h1>
      </div>
      <div className="summary-grid">
        {summaryCards.map((card, index) => (
          <div key={index} className="summary-card">
            <div>
              <span className="card-title">{card.title}</span>
              <h2 className={`card-value ${card.isRevenue ? "revenue-value" : ""}`}>
                {card.value}
              </h2>
            </div>

            <div className="card-icon"
              style={{
                backgroundColor: card.bgColor,
                color: card.iconColor,
              }}>
              <card.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* ===== Main Grid ===== */}
      <div className="dashboard-grid">
        <div className="dashboard-card unoccupied-seats">
          <div className="card-header">
            <div>
              <span className="card-label">{Strings.DASHBOARD.SECTIONS.UNOCCUPIED_SEATS}</span>
              <h3 className="card-main-value">2150</h3>
            </div>
            <div className="filter-wrapper" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <select className="filter-select">
                <option className="filter-option">{Strings.DASHBOARD.FILTERS.LEAST_5_COURSES}</option>
              </select>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="currentColor"
                style={{ position: 'absolute', right: '14px', pointerEvents: 'none', color: '#1e293b' }}
              >
                <polygon points="0,0 12,0 6,8" />
              </svg>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="chart-area">
            <CommonBarChart
              data={DashboardData}
              showTooltip={false}
              showCompareBar={true}
              barSize = {25}
              activeBarColor="#1BA784" 
              defaultBarColor="#5FCCA8"/>
          </div>
        </div>

        {/* Fee Status */}
        <div className="dashboard-card fee-status">
          <div className="card-header">
            <h3 className="section-title">{Strings.DASHBOARD.SECTIONS.FEE_COLLECTION}</h3>
          </div>

          <div className="fee-status-summary" style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
            <CircularChart percentage={62} label="Collected" size={250} strokeWidth={25} />
          </div>

          <button className="open-status-btn" onClick={() => navigate('/fee-collection')}>
            {Strings.DASHBOARD.BUTTONS.OPEN} <div className="open-icon-wrapper"><ArrowUpRight size={14} className="open-icon" /></div>
          </button>
        </div>

        {/* Notice Board */}
        <div className="dashboard-card notice-board">
          <div className="card-header">
            <h3 className="section-title">{Strings.DASHBOARD.SECTIONS.NOTICE_BOARD}</h3>
            <span className="view-all">{Strings.DASHBOARD.BUTTONS.VIEW_ALL}</span>
          </div>

          <div className="notices-list">
            {notices.map((notice) => (
              <div key={notice.id} className="notice-item">
                <span className={`notice-badge ${notice.badgeVariant === 'green' ? 'badge-green' : 'badge-blue'}`}>
                  {notice.badge}
                </span>
                <h4 className="notice-title">{notice.title}</h4>
                <p className="notice-id">{notice.detailId}</p>

                <div className="notice-divider"></div>

                <div className="notice-footer">
                  <span>{notice.department}</span>
                  <button className="notice-link">
                    {notice.linkText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="dashboard-card recent-alerts">
          <div className="card-header">
            <h3 className="section-title">{Strings.DASHBOARD.SECTIONS.RECENT_ALERTS}</h3>
          </div>

          <div className="alerts-list">
            {alerts.map((alert) => (
              <div key={alert.id} className="alert-item">
                <h4 className="alert-title">{alert.title}</h4>
                <p className="alert-desc">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Report */}
        <div className="report-card">
          <div>
            <h3 className="report-title">{Strings.DASHBOARD.REPORT.TITLE}</h3>
            <p className="report-desc">
              {Strings.DASHBOARD.REPORT.DESC}
            </p>
          </div>

          <button className="download-btn" onClick={handleDownloadReport}>{Strings.DASHBOARD.BUTTONS.DOWNLOAD_PDF}</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;