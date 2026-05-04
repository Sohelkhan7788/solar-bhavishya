import React, { useState, useEffect, useCallback } from "react";
import API from "../api"; // ✅ FIXED
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const STATUS_LABELS = {
  naya: { label: "Naya Lead", color: "#3b82f6" },
  contact_kiya: { label: "Contact Kiya", color: "#f59e0b" },
  follow_up: { label: "Follow Up", color: "#8b5cf6" },
  convert: { label: "Convert ✓", color: "#10b981" },
  band: { label: "Band", color: "#6b7280" },
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selected, setSelected] = useState(null);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const fetchLeads = useCallback(async () => {
    try {
      const params = { page, limit: 15 };
      if (filter !== "all") params.status = filter;
      if (search) params.search = search;

      const res = await API.get("/api/admin/leads", { params }); // ✅ FIXED
      setLeads(res.data.leads);
      setTotalPages(res.data.pages);
    } catch {
      toast.error("Error loading leads");
    } finally {
      setLoading(false);
    }
  }, [page, filter, search]);

  const fetchStats = async () => {
    try {
      const res = await API.get("/api/admin/stats"); // ✅ FIXED
      setStats(res.data);
    } catch {}
  };

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);
  useEffect(() => {
    fetchStats();
  }, []);

  const saveLead = async () => {
    try {
      await API.put(`/api/admin/leads/${selected._id}`, {
        status: editStatus,
        notes: editNotes,
      }); // ✅ FIXED
      toast.success("Updated!");
      setSelected(null);
      fetchLeads();
      fetchStats();
    } catch {
      toast.error("Error updating");
    }
  };

  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await API.delete(`/api/admin/leads/${id}`); // ✅ FIXED
      toast.success("Deleted");
      fetchLeads();
      fetchStats();
      setSelected(null);
    } catch {
      toast.error("Error deleting");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-page">
      <aside className="sidebar">
        <div className="sb-logo">
          <span>SOLAR</span>
          <span className="gold-text">BHAVISHYA</span>
        </div>
        <button className="sb-logout" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      <main className="admin-main">
        <h1>Leads Dashboard</h1>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {leads.map((lead) => (
              <div key={lead._id}>
                {lead.naam} - {lead.mobile}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
