const DEFAULT_EMAILS = [
  {
    id: "1",
    sender: "Google",
    senderEmail: "no-reply@google.com",
    subject: "Security alert",
    body: "Your Google Account was signed in on a new device.",
    time: "10:42 AM",
    date: "Sep 19, 2026",
    read: false,
    starred: false,
    label: "Inbox",
  },
  {
    id: "2",
    sender: "Bank of Baroda",
    senderEmail: "alerts@bankofbaroda.in",
    subject: "Your account update",
    body: "Your account information has been updated successfully.",
    time: "9:18 AM",
    date: "Sep 19, 2026",
    read: true,
    starred: false,
    label: "Inbox",
  },
];

export function getEmails() {
  const saved = localStorage.getItem("gmailclone_emails");

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "gmailclone_emails",
    JSON.stringify(DEFAULT_EMAILS)
  );

  return DEFAULT_EMAILS;
}

export function saveEmails(emails) {
  localStorage.setItem(
    "gmailclone_emails",
    JSON.stringify(emails)
  );
}