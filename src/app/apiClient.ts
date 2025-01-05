"use client";
export default async function apiClient() {
  console.log("API is called");
  const response = await fetch("http://localhost:3000/api/auth/reg-psky");
  const data = await response.json();
  console.log(data);
  alert(`API is called, Response message: ${data.message}`);
}
