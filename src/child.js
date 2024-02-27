function ChildComponent(Props) {
  const { name, age } = Props;
  return (
    <div>
      <p>
        이름은 {name}이며 {age}살입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
