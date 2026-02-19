export default function Input({ type, label, id }) {
  return (
    <p>
      <label for={id}>{label}</label>
      <input id={id} name={id} type={type} />
    </p>
  );
}
