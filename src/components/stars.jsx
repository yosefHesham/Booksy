import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stars = () => {
  return (
    <div className="flex justify-start gap-2">
      {Array.from(Array(5)).map((n) => (
        <FontAwesomeIcon icon="fa-solid fa-star" color="orange" />
      ))}
    </div>
  );
};

export default Stars;
