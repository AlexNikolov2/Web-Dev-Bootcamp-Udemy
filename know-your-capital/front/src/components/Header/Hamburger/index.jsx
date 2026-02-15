export const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};
