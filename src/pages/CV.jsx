export default function CV() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/mycv.pdf"
        title="CV"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}