import Input from "./Input";

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input type="number" label="Initial investment" id="initial"></Input>
        <Input type="number" label="Initial investment" id="annual"></Input>
      </div>
      <div className="input-group">
        <Input type="number" label="Expected return" id="expected"></Input>
        <Input type="number" label="Duration" id="duration"></Input>
      </div>
    </section>
  );
}
