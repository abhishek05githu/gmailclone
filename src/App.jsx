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
   id: -14,
   sender: "Niit University",
    email: "noreply@niituniversity.edu",
    initial: "N",
    color: "#4CAF50",
    subject: "Welcome to Niit University",
    preview: "Congratulations on joining Niit University! We are excited to have you on board.",
    date: "09 Jul",
    fullDate: "09 Jul 2026, 12:56 am",
    body: [
      "Congratulations on joining Niit University! We are excited to have you on board.",
    ]

  },
  {
   id: -13,
   sender: "Metalstrom team",
    email: "noreply@metalstrom.com",
    initial: "M",
    color: "rgba(85, 204, 255, 0.67)",
    subject: "Monthly progress reminder",
    preview: "check your monthly progress",
    date: "08 Sep",
    fulldate: "08 Sep 2026, 05:00",

  },
  {
   id: -12,
   sender: "Google",
    email: "noreply@google.com",
    initial: "G",
    color: "#f4aa42",
    subject: "new sign-in to your Google Account",
    preview: "You have signed in to your Google Account.",
    date: "08 Sep",
    fullDate: "08 Sep 2026, 03:11 pm",
    body: [
      "You have signed in to your Google Account.",
      "If this was you, you can safely ignore this email.",
      "If you don't recognize this activity, please secure your account immediately."
    ]
  },
  {
   id: -11,
    sender: "Bank Of Baroda",
    email: "gm.ops.ho@bankofbaroda.bank.in",
    mailedBy: "bankofbaroda.bank.in",
    signedBy: "bankofbaroda.bank.in",
    initial: "B",
    color: "#e8945c",
    subject: "Lien/hold placed on your BOB account",
    preview: "Date : 09/07/2026 04:12 PM Ref No. : BOB6386649116388",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 04:12 pm",
    body: [
      "Dear Customer,",
      "",
      "Refer to you trail mail and inform you that in your account as 31.08.2026 you have received Rs. 10,000/- from upi vide RRN number 624310910428",
      "We would like to inform you that a lien/hold has been placed on your account as per the notification received on the National Cyber Reporting Portal. For your information, lien/hold mean that the specified amount of money in your account is bloced and cannot be withdrawn unless the concerned Police Authorities / court gives the NOC to release the amount.",
      "Account Holder Name : SUDHANSHU RAJ",
      "Account Number : 43090100010953",
      "Lien Amount :10000.00", 
      "Transaction ID : 624310910428",
      "31 Aug 2026",
      "",
      "For any further assistance, please contact your Bank Of Baroda Naubatpur Branch or call 1800 5700.",
    ]
  },
  {
    id: -10,
    sender: "Metalstrom team",
    email: "noreply@metalstrom.com",
    initial: "M",
    color: "rgba(85, 204, 255, 0.67)",
    subject: "Monthly progress reminder",
    preview: "check your monthly progress",
    date: "07 Sep",
    fulldate: "07 Sep 2026, 01:00",
  },
  {
    id: -9,
    sender: "Google",
    email: "noreply@google.com",
    initial: "G",
    color: "#f4aa42",
    subject: "new sign-in to your Google Account",
    preview: "You have signed in to your Google Account.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 12:01 pm",
    body: [
      "You have signed in to your Google Account.",
      "If this was you, you can safely ignore this email.",
      "If you don't recognize this activity, please secure your account immediately."
    ]
  },
  {
    id: -8,
    sender: "Activison",
    email: "noreply@activison.com",
    initial: "A",
    color: "#000000",
    subject: "Welcome to Call of Duty!",
    preview: "Call of Duty account created successfully.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 11:30 am",
    body: [
      "Call of Duty account created successfully.",
      "Welcome to the world of Call of Duty! Start your journey and enjoy the game.",
      "We have sent you some rewards in your Call of Duty mobile account mailbox. Please check your in-game mail to claim your rewards."
    ]
  },
  {
    id: -7,
    sender: "Spotify",
    email: "noreply@spotify.com",
    initial: "S",
    color: "#1db954",
    subject: "Welcome to Spotify!",
    preview: "Thanks for signing up for Spotify!",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 11:27 am",
    body: [
      "Thanks for signing up for Spotify!",
      "We're excited to have you on board. Start exploring and enjoy your music journey with us."
    ]
  },
  {
    id: -6,
    sender: "Google",
    email: "noreply@google.com",
    initial: "G",
    color: "#f4aa42",
    subject: "new sign-in to your Google Account",
    preview: "You have signed in to your Google Account.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 09:47 am",
  },
  {
    id: -5,
    sender: "Google",
    email: "noreply@google.com",
    initial: "G",
    color: "#f4aa42",
    subject: "new sign-in to your Google Account",
    preview: "You have signed in to your Google Account.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 09:45 am",
  },
  {
    id: -4,
    sender: "Google",
    email: "noreply@google.com",
    initial: "G",
    color: "#f4aa42",
    subject: "new sign-in to your Google Account",
    preview: "You have signed in to your Google Account.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 09:45 am",
  },
  {
    id: -3,
    sender: "Amazon",
    email: "noreply@amazon.com",
    initial: "A",
    color: "#fafafa",
    subject: "Your Amazon account has been successfully created",
    preview: "Welcome to Amazon! Your account has been successfully created.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 09:30 am",
  },
  {
    id: -2,
    sender: "AJIO",
    email: "noreply@ajio.com",
    initial: "A",
    color: "#faf9f7",
    subject: "Your order has been shipped",
    preview: "Your order has been shipped and is on its way to you.",
    date: "07 Sep",
    fullDate: "07 Sep 2026, 08:00 pm",

  },
  {
    id: -1,
    sender: "ship-confirm",
    email: "noreply@ship-confirm.com",
    initial: "f",
    color: "#f4b027",
    subject: "Your order has been shipped",
    preview: "Your order has been shipped and is on its way to you.",
    date: "06 Sep",
    fullDate: "06 Sep 2026, 02:11 pm",
  },
  {
    id: 0,
    sender: "Google Play",
    email: "noreply@google.com",
    initial: "G",
    color: "#42ebf4",
    subject: "Your Google Play order receipt",
    preview: "Your Google Play order receipt for your purchase of the app 'MyApp' is attached.",
    date: "06 Sep",
    fullDate: "06 Sep 2026, 10:15 am",
  },
  {
    id: 1,
    sender: "Bank Of India",
    email: "boi.crmadm​in@bankofindia.co.in",
    mailedBy: "bankofindia.bank.in",
    signedBy: "bankofindia.co.in",
    initial: "B",
    color: "#e8675c",
    subject: "Notice:Lien/hold placed on your account",
    preview: "Date : 09/06/2026 5:30:58 PM Ref No. : BI26274220990641",
    date: "06 Sep",
    fullDate: "06 Sep 2026, 5:30 pm",
    body: [
      "Date : 09/06/2026 5:30:58 PM",
      "Ref No. : BI26274220990641",
      "Name : ABHISHEK KUMAR",
      "Address : S O ABHIMANYU KUMAR NAUBATPUR, PATNA, BIHAR, 801109",
      "",
      "Dear Customer,",
      "",
      "We would like to inform you that a lien/hold has been placed on your account as per the notification received on the National Cyber Reporting Portal. For your information, lien/hold mean that the specified amount of money in your account is bloced and cannot be withdrawn unless the concerned Police Authorities / court gives the NOC to release the amount. For lien details visit your Bank of India Branch.",
      "",
      "Account Holder Name : ABHISHEK KUMAR",
      "Account Number : 440518210003588",
      "Account Type : SAVING",
      "Branch Name : NAUBATPUR",
      "Lien Amount :4999.59  Transaction ID : 653721605257",
      "31 Aug 2026, 03:40 PM",
      "",
      "For any further assistance, please contact your Bank of India Branch or call our customer care number 1800 103 1906.",
    ]
  },
  {
    id: 2,
    sender: "Bank Of India",
    email: "boi.crmadm​in@bankofindia.co.in",
    mailedBy: "bankofindia.bank.in",
    signedBy: "bankofindia.co.in",
    initial: "B",
    color: "#e8675c",
    subject: "Notice:Lien/hold placed on your account",
    preview: "Date : 09/06/2026 5:28:41 PM Ref No. : BI26274401114578",
    date: "06 Sep",
    fullDate: "06 Sep 2026, 5:28 pm",
    body: [
      "Date : 08/31/2026 11:38 PM",
      "Ref No. : BI26274401114578",
      "Name : ABHISHEK KUMAR",
      "Address : S O ABHIMANYU KUMAR NAUBATPUR, PATNA, BIHAR, 801109",
      "",
      "Dear Customer,",
      "",
      "We would like to inform you that a lien/hold has been placed on your account as per the notification received on the National Cyber Reporting Portal. For your information, lien/hold mean that the specified amount of money in your account is bloced and cannot be withdrawn unless the concerned Police Authorities / court gives the NOC to release the amount. For lien details visit your Bank of India Branch.",
      "",
      "Account Holder Name : ABHISHEK KUMAR",
      "Account Number : 440518210003588",
      "Account Type : SAVING",
      "Branch Name : NAUBATPUR",
      "Lien Amount : 10000.00  Transaction ID : 613198062260",  
      "31 Aug 2026, 01:16 PM",
      "",
      "For any further assistance, please contact your Bank of India Branch or call our customer care number 1800 103 1906.",
    ]
  },
   {
    id: 3,
    sender: "Bank Of India",
    email: "boi.crmadm​in@bankofindia.co.in",
    mailedBy: "bankofindia.bank.in",
    signedBy: "bankofindia.co.in",
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    sender: "Starform Support",
    email: "metalstorm.com",
    initial: "S",
    color: "#a8d86e",
    subject: "Your Starform account has been updated",
    preview: "Dear Pilot, Your email address has been updated successfully.",
  },
  {
    id: 13,
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
  const [showSecurity, setShowSecurity] = useState(false);
const [showHelp, setShowHelp] = useState(false);

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
    if (showHelp) {
  return (
    <div className="app">
      <div className="help-page">
        <header className="help-toolbar">
          <button
            className="help-back"
            onClick={() => setShowHelp(false)}
            aria-label="Back"
          >
            <ArrowLeft size={24} strokeWidth={2} />
          </button>

          <h2>Help</h2>

          <div className="help-actions">
            <button>×</button>
            <button>
              <MoreVertical size={24} strokeWidth={2} />
            </button>
          </div>
        </header>

        <main className="help-content">
          <main className="help-content">
  <h1>Check your email security</h1>

  <p>
    Email services can encrypt messages while they are being transferred
    to help keep your information protected. You can check the security
    level of an email.
  </p>

  <p>
    <strong>Want to get more out of Google apps at work or school?</strong>{" "}
    Learn about Google Workspace options for organizations and schools.
  </p>

  <h2>Learn what the encryption icons mean</h2>

  <p>
    When you send or receive an email, a lock icon can indicate the level
    of encryption used to protect the message.
  </p>

  <ul>
    <li>
      <strong>🔒 Standard encryption:</strong>{" "}
      Transport Layer Security (TLS) helps protect your email while it
      travels between email providers. It is commonly used for email
      delivery.
    </li>

    <li>
      <strong>⚠️ No encryption:</strong>{" "}
      The message was not protected by standard encryption during
      delivery. Avoid including sensitive information in messages that
      are not encrypted.
    </li>
  </ul>

  <p>
    Work and school accounts may also support additional encryption
    features:
  </p>

  <ul>
    <li>
      <strong>🔐 Enhanced encryption:</strong>{" "}
      Some organizations can use S/MIME to provide an additional layer
      of protection for email messages.
    </li>

    <li>
      <strong>🛡️ Additional encryption:</strong>{" "}
      With client-side encryption, an organization controls the keys
      used to encrypt and decrypt its messages.
    </li>
  </ul>

  <div className="help-tabs">
    <button className="help-tab active">Computer</button>
    <button className="help-tab">Android</button>
    <button className="help-tab">iPhone and iPad</button>
  </div>

  <h2>Check encryption for incoming messages</h2>

  <p>
    1. Open the email you want to check.
  </p>

  <p>
    2. Open the message details using the drop-down control near the
    sender or recipient information.
  </p>

  <p>
    3. Find the security section to see which encryption method was used.
  </p>

  <ul>
    <li>Standard encryption (TLS)</li>
    <li>Enhanced encryption (S/MIME)</li>
    <li>No encryption supported</li>
  </ul>

  <h2>Learn why some emails aren't encrypted</h2>

  <ul>
    <li>
      If an email provider does not support TLS, the message may not be
      encrypted during delivery.
    </li>

    <li>
      You may sometimes see a warning even when encryption is normally
      available, depending on the email provider or domain being used.
    </li>
  </ul>

  <h2>Related resources</h2>

  <ul className="related-resources">
    <li>Email security tips</li>
    <li>Confidential email features</li>
    <li>How to recognize and report phishing emails</li>
  </ul>

  <p className="feedback-text">
    Give feedback about this article
           </p>
          </main>
        </main>
      </div>
    </div>
  );
}

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
                    <strong>rajshudhanshu70@gmail.com</strong>
                  </div>

                  <div className="detail-line">
                    <span>Date</span>
                    <strong>{selectedMail.fullDate}</strong>
                  </div>

                  <div className="security-line">
                    <Lock size={16} strokeWidth={2} />
                    <span>Standard encryption (TLS).</span>
                  </div>

                  <button
  className="security-link"
  onClick={() => setShowSecurity(true)}
  >
  See security details
</button>

                </div>
              )}
              {showSecurity && (
  <div
  className="security-modal"
  onClick={() => setShowSecurity(false)}
>
    <div
  className="security-modal-box"
  onClick={(e) => e.stopPropagation()}
>

      <div className="security-modal-header">
        <strong>Security details</strong>

      
      </div>

      <div className="security-info">

  <div className="security-row">
  <span>Mailed by:</span>
  <strong>{selectedMail.mailedBy}</strong>
</div>

<div className="security-row">
  <span>Signed by:</span>
  <strong>{selectedMail.signedBy}</strong>
</div>

  <div className="security-row security-status">
    <span>Security:</span>
    <Lock size={18} strokeWidth={2} />
    <strong>Standard encryption (TLS).</strong>
  </div>

  <button
    className="learn-more"
    onClick={() => {
  setShowSecurity(false);
  setShowHelp(true);
}}
  >
    Learn more
  </button>

</div>
    </div>
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
            R
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