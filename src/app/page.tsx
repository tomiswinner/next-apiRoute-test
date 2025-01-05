import apiClient from "./apiClient";

export default function Home() {
  return (
    <div>
      <button onClick={apiClient}>Click me</button>
    </div>
  );
}
