const Button = (props) => {
  //  Write your code here.
  const { name } = props;
  return (
    <div className="bg">
      <h1 className="heading">Social Buttons</h1>
      <Button className="button">{name}</Button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Button name="Like" />
    <Button name="Comment" />
    <Button name="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
