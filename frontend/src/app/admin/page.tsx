"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [contacts, setContacts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchContacts();
}, []);

const fetchContacts = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/contact"
    );

    const data = await response.json();

    setContacts(data.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    
    <main className="min-h-screen bg-gray-50 p-10">

        {loading && (
  <div className="mb-4 text-lg text-green-700">
    Loading inquiries...
  </div>
)}

      <h1 className="mb-8 text-4xl font-bold text-green-800">
  Contact Inquiries ({contacts.length})
</h1>

      <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
  <table className="w-full border-collapse text-left">
    <thead>
      <tr className="border-b bg-gray-100 text-black">
  <th className="p-3">Name</th>
  <th className="p-3">Email</th>
  <th className="p-3">Phone</th>
  <th className="p-3">Country</th>
  <th className="p-3">Company</th>
  <th className="p-3">Message</th>
  <th className="p-3">Date</th>
  <th className="p-3">WhatsApp</th>
</tr>
    </thead>

    <tbody>
      {contacts.map((contact: any) => (
       <tr
  key={contact._id}
  className="border-b text-black hover:bg-gray-50"
>
  <td className="p-3">{contact.name}</td>

  <td className="p-3">
    <a
      href={`mailto:${contact.email}`}
      className="text-blue-600 hover:underline"
    >
      {contact.email}
    </a>
  </td>

  <td className="p-3">{contact.phone}</td>

  <td className="p-3">
    {contact.country || "N/A"}
  </td>

  <td className="p-3">
    {contact.company || "N/A"}
  </td>

  <td className="max-w-xs p-3">
    {contact.message}
  </td>

  <td className="p-3">
    {new Date(contact.createdAt).toLocaleDateString()}
  </td>

  <td className="p-3">
    <a
      href={`https://wa.me/${contact.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
    >
      WhatsApp
    </a>
  </td>
</tr>
      ))}
    </tbody>
  </table>
</div>

    </main>
  );
}