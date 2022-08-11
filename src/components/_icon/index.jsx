const IconForWeather = ({ typeOfWeather, size }) => {
  let icon = "";
  switch (typeOfWeather.toLowerCase()) {
    case "fog":
      icon = "bi bi-cloud-fog-fill";
      break;
    case "lightning":
      icon = "bi bi-cloud-lightning-rain-fill";
      break;
    case "rain":
      icon = "bi bi-cloud-drizzle-fill";
      break;
    case "storm":
      icon = "bi bi-cloud-rain-heavy-fill";
      break;
    case "clouds":
      icon = "bi bi-clouds-fill";
      break;
    case "wind":
      icon = "bi bi-wind";
      break;
    case "sunny":
      icon = "bi bi-brightness-high-fill";
      break;
    default:
      icon = "bi bi-question-diamond";
      break;
  }

  return size ? (
    <i style={{ fontSize: size }} className={icon} />
  ) : (
    <i style={{ fontSize: "3.5rem" }} className={icon} />
  );
};

const IconForWindDirection = ({ direction, size }) => {
  let icon = "";
  switch (direction.toLowerCase()) {
    case "north":
      icon = "bi bi-arrow-up";
      break;
    case "east":
      icon = "bi bi-arrow-right";
      break;
    case "west":
      icon = "bi bi-arrow-left";
      break;
    case "south":
      icon = "bi bi-arrow-down";
      break;
    default:
      icon = "bi bi-question-diamond";
      break;
  }

  return size ? (
    <i style={{ fontSize: size }} className={icon} />
  ) : (
    <i className={icon} />
  );
};

export { IconForWeather, IconForWindDirection };
