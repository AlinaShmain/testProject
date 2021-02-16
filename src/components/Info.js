import { useRef, useState } from "react";
import file from "../assets/Json.txt";

export const Info = () => {
  const [data, setData] = useState(null);
  const ref = useRef();

  fetch(file)
    .then((r) => r.text())
    .then((text) => {
      setData(text);
    });

//   console.log(data);

  let convert = JSON.parse(data);

  if (convert) {
    ref.current.innerHTML = convert[0].text;
  }

  return <div ref={ref}></div>;
};

export default Info;
