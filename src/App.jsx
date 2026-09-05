import { useState } from "react";
import {
  ArrowLeft,
  Archive,
  Trash2,
  Mail,
  Lock,
  MoreVertical,
  Star,
  Reply,
  Forward,
  Smile,
  Menu,
  Search,
  Sparkles,
  Send,
  Video
} from "lucide-react";
import "./App.css";

const emails = [
   {
    id: 1,
    sender: "Bank Of India",
    email: "boi.crmadm​in@bankofindia.co.in",
    initial: "B",
    color: "#e8675c",
    subject: "Notice:Lien/hold placed on your account",
    preview: "Date : 09/01/2026 6:18:41 PM Ref No. : BI262744050396069",
    date: "01 Sep",
    fullDate: "01 Sep 2026, 6:18 pm",
    body: [
      "Date : 08/31/2026 11:38 PM",
      "Ref No. : BI262744050396069",
      "Name : ABHISHEK KUMAR",
      "Address : S O ABHIMANYU KUMAR NAUBATPUR, PATNA, BIHAR, 801109",
      "",
      "Dear Customer,",
      "",
      "We would like to inform you that a lien/hold has been placed on your account as per the notification received on the National Cyber Reporting Portal. For your information, lien/hold mean that the specified amount of money in your account is bloced and cannot be withdrawn unless the concerned Police Authorities / court gives the NOC to release the amount. For lien details visit our Bank of India mobile app and your Bank of India Branch.",
      "We found suspicious activity in your account if we receive any complaint from the National Cyber Reporting Portal regarding your account, we will be forced to block your account permanently.",
      "This is a serious matter and visit your Bank of India Branch with this transaction details within 7 days.",
      "Account Holder Name : ABHISHEK KUMAR",
      "Account Number : 440518210003588",
      "Account Type : SAVING",
      "Branch Name : NAUBATPUR",
      "Lien Amount : 10000.00  Transaction ID : 613198062260",  "31 Aug 2026, 01:16 PM",
      "Lien Amount : 4999.59  Transaction ID : 653721605257",  "31 Aug 2026, 03:40 PM",
      "",
      "For any further assistance, please contact your Bank of India Branch or call our customer care number 1800 103 1906.",
    ]
   },
  {
    id: 2,
    sender: "Google One",
    email: "googleone-noreply@google.com",
    initial: "G",
    color: "#a8d86e",
    subject: "Meet your always-on AI agent in Gemini",
    preview: "Your Google AI Pro plan gives you access to powerful new features...",
    date: "21 Aug",
    fullDate: "21 Aug 2026, 8:54 am",
    body: [
      "Your Google AI Pro plan gives you access to powerful new features.",
      "Meet your always-on AI agent in Gmail and get more done with Gemini."
    ]
  },
  {
    id: 3,
    sender: "Google",
    email: "accounts-noreply@google.com",
    initial: "G",
    color: "#9fa8dc",
    subject: "You shared some Google Account details",
    preview: "Keep track of your Google Account details and activity...",
    date: "16 Aug",
    fullDate: "16 Aug 2026, 10:21 am",
    body: [
      "You shared some Google Account details.",
      "Keep track of your Google Account details and activity."
    ]
  },
  {
    id: 4,
    sender: "Starform Support",
    email: "support@starform.example",
    initial: "S",
    color: "#a8d86e",
    subject: "[Request received]",
    preview: "Hello Pilot, This is an automated message...",
    date: "6 Aug",
    fullDate: "6 Aug 2026, 4:12 pm",
    body: [
      "Hello Pilot,",
      "This is an automated message confirming that your request has been received."
    ]
  },
  {
    id: 5,
    sender: "Bank Of India",
    email: "boi.crmadm​in@bankofindia.co.in",
    initial: "B",
    color: "#e8675c",
    subject: "Notice:Lien/hold placed on your account",
    preview: "Date : 7/24/2026 2:51:55 PM Ref No. : BI2627440500225014",
    date: "24 Jul",
    fullDate: "24 Jul 2026, 3:39 am",
    body: [
      "Date : 7/20/2026 2:51:55 PM",
      "Ref No. : BI2627440500225014",
      "Name : ABHISHEK KUMAR",
      "Address : S O ABHIMANYU KUMAR",
      "",
      "Dear Customer,",
      "",
      "We would like to inform you that a lien/hold has been placed on your account as per the notification received on the National Cyber Reporting Portal. For your information, lien/hold mean that the specified amount of money in your account is bloced and cannot be withdrawn unless the concerned Police Authorities / court gives the NOC to release the amount. For lien details visit our Bank of India mobile app and your Bank of India Branch.",
      "Account Holder Name : ABHISHEK KUMAR",
      "Account Number : 440518210003588",
      "Account Type : SAVING",
      "Branch Name : NAUBATPUR",
      "Lien Amount : 9999.18",
      "Transaction ID : 211237001667",

      "For any further assistance, please contact your Bank of India Branch or call our customer care number 1800 103 1906.",

      ]
  },
  {
    id: 6,
    sender: "Starform Support co",
    email: "support@starform.co",
    initial: "S",
    color: "#adb3bb",
    subject: "Login",
    preview: "Login to your Starform account from a new device. If this was you, you can safely ignore this email.",
    date: "5 Jul",
    fullDate: "5 July 2026, 9:10 am",
    body: [
      "Dear ABHISHEK KUMAR,",
      "",
      "Your email address has been updated successfully."
    ]
  },
  {
    id: 7,
    sender: "Ho.boiomni...",
    email: "Ho.boiomni@alerts.bankofindia.bank.in",
    initial: "•",
    color: "#adb3bb",
    subject: "BOI - OTP Verification",
    preview: "Dear Customer, BOI - Your OTP for Account verification...",
    date: "3 Jul",
    fullDate: "3 Jul 2026, 9:05 am",
    body: [
      "Dear Customer,",
      "",
      "BOI - Your OTP for Account verification is 123456. This OTP is valid for 5 minutes. Please do not share this OTP with anyone.",
      "If not you? please contact our customer support immediately. Call 1800220220",
      "Thanks and Regards,",
      "Bank of India"
    ]
  },
  {
    id: 8,
    sender: "OLX",
    email: "noreply@olx.in",
    initial: "O",
    color: "#f4b027",
    subject: "Samsung a23 read des has been sold",
    preview: "Please do not reply to this email. This is an automated notification from OLX.",
    date: "3 Jul",
    fullDate: "3 Jul 2026, 1:05 am",
    body: [
      "Please do not reply to this email. This is an automated notification from OLX.",
    ]
  },
  {
    id: 9,
    sender: "Niit University",
    email: "noreply@niituniversity.edu",
    initial: "N",
    color: "#4CAF50",
    subject: "Welcome to Niit University",
    preview: "Congratulations on joining Niit University! We are excited to have you on board.",
    date: "3 Jul",
    fullDate: "3 Jul 2026, 12:39 am",
    body: [
      "Congratulations on joining Niit University! We are excited to have you on board.",
    ]
  },
  {
    id: 10,
    sender: "Starform Support",
    email: "metalstorm.com",
    initial: "S",
    color: "#a8d86e",
    subject: "Your Starform account has been updated",
    preview: "Dear Pilot, Your email address has been updated successfully.",
  },
  {
    id: 11,
    sender: "Google",
    email: "no-reply@account.google.com",
    initial: "G",
    color: "#4285F4",
    subject: "Security alert",
    preview: "We detected a new sign-in to your Google Account from a new device. If this was you, you can safely ignore this email.",
    date: "2 Jul",
    fullDate: "2 Jul 2026, 11:15 am",
    body: [
      "We detected a new sign-in to your Google Account from a new device.",
      "If this was you, you can safely ignore this email."
    ]
  },

];

function Icon({ children, className = "" }) {
  return <span className={`icon ${className}`}>{children}</span>;
}

function App() {
  const [selectedMail, setSelectedMail] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [starred, setStarred] = useState(false);

  const openMail = (mail) => {
    setSelectedMail(mail);
    setShowDetails(false);
    setStarred(false);
  };

  const goBack = () => {
    setSelectedMail(null);
    setShowDetails(false);
  };

  if (selectedMail) {
    return (
      <div className="app">
        <div className="mail-page">

          <header className="mail-toolbar">
            
              <button
  className="toolbar-btn"
  onClick={goBack}
  aria-label="Back"
>
  <ArrowLeft size={24} strokeWidth={2} />
</button>
              <div className="toolbar-spacer" />

<button className="toolbar-btn gemini-btn" aria-label="Gemini">
  <span className="gemini-icon">✦</span>
  <span className="gemini-dot">•</span>
</button>

            <button className="toolbar-btn" aria-label="Archive">
              <Archive size={24} strokeWidth={2} />
            </button>

            <button className="toolbar-btn" aria-label="Delete">
              <Trash2 size={24} strokeWidth={2} />
            </button>

            <button className="toolbar-btn" aria-label="Mark unread">
              <Mail size={24} strokeWidth={2} />
            </button>

            <button className="toolbar-btn" aria-label="More">
              <MoreVertical size={24} strokeWidth={2} />
            </button>
          </header>

          <main className="mail-content">

            <div className="subject-row">
              <h1>{selectedMail.subject}</h1>

              <button
                className={`star-big ${starred ? "active" : ""}`}
                onClick={() => setStarred(!starred)}
              >
                {starred ? "★" : "☆"}
              </button>
            </div>

            <div className="mail-card">

              <div className="sender-row">

                <div
                  className="avatar large"
                  style={{ backgroundColor: selectedMail.color }}
                >
                  {selectedMail.initial}
                </div>

                <div className="sender-info">
                  <div className="sender-name">
                    {selectedMail.sender}
                  </div>

                  <button
                    className="to-me"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    to me
                    <span className={`arrow ${showDetails ? "up" : ""}`}>
                      ▾
                    </span>
                  </button>
                </div>

                <div className="mail-date">
                  {selectedMail.date}
                </div>
              
                <div className="sender-actions">
                  
                  <button aria-label="React">
                    <Smile size={24} strokeWidth={2} />
                  </button>
                  
                  <button aria-label="Reply">
                    <Reply size={24} strokeWidth={2} />
                  </button>

                  <button aria-label="More">
                    <MoreVertical size={24} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {showDetails && (
                <div className="details-box">

                  <div className="detail-line">
                    <span>From</span>
                    <strong>{selectedMail.sender}</strong>
                  </div>

                  <div className="detail-line">
                    <span>Email</span>
                    <strong>{selectedMail.email}</strong>
                  </div>

                  <div className="detail-line">
                    <span>To</span>
                    <strong>abhishekstark304@gmail.com</strong>
                  </div>

                  <div className="detail-line">
                    <span>Date</span>
                    <strong>{selectedMail.fullDate}</strong>
                  </div>

                  <div className="security-line">
                    <Lock size={16} strokeWidth={2} />
                    <span>Standard encryption (TLS).</span>
                  </div>

                  <button className="security-link">
                    See security details
                  </button>

                </div>
              )}

              <div className="email-body">
                {selectedMail.body.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph || <>&nbsp;</>}
                  </p>
                ))}
              </div>

            </div>

            <div className="bottom-actions">
              <button className="action-btn">
                 <Reply size={24} strokeWidth={2} />
                Reply
              </button>

              <button className="action-btn">
                <Forward size={20} strokeWidth={2} />
                Forward
              </button>

              <button className="emoji-btn">
                <Smile size={24} strokeWidth={2} />
              </button>
            </div>

          </main>

          <BottomNav />

        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="inbox-page">

        <header className="inbox-header">

          <button className="menu-btn">
            ☰
          </button>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search in emails"
            />
            <span className="sparkle">✦</span>
          </div>

          <div className="profile">
            A
          </div>

        </header>

        <h2 className="primary-title">
          Primary
        </h2>

        <main className="email-list">

          {emails.map((mail) => (
            <button
              className="email-item"
              key={mail.id}
              onClick={() => openMail(mail)}
            >

              <div
                className="avatar"
                style={{ backgroundColor: mail.color }}
              >
                {mail.initial}
              </div>

              <div className="email-info">

                <div className="email-top">
                  <span className="sender">
                    {mail.sender}
                  </span>

                  <span className="date">
                    {mail.date}
                  </span>
                </div>

                <div className="email-subject">
                  {mail.subject}
                </div>

                <div className="email-preview">
                  {mail.preview}
                </div>

              </div>

              <span
                className="star"
                onClick={(e) => e.stopPropagation()}
              >
                ☆
              </span>

            </button>
          ))}

        </main>

        <button className="compose-btn">
          <span>✎</span>
          Compose
        </button>

        <BottomNav />

      </div>
    </div>
  );
}

 function BottomNav() {
  return (
    <nav className="bottom-nav">

      <div className="nav-item active">
        <span className="mail-pill">
    <Mail size={20} strokeWidth={2} />
  </span>
  <b>99+</b>
</div>

      <div className="nav-item active">
        <span className="nav-icon">
          <Video size={25} strokeWidth={2} />
        </span>
      </div>
    </nav>
  );
}

export default App; 