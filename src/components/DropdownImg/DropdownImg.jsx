import { useState } from "react";
import down from "../../assets/icon/down.svg";
import DropdownList from "./DropdownList";

export default function DropdownImg({
  icon,
  name,
  onChange,
  value,
  list,
  containerClassName,
  labelClassName,
  listClassName,
}) {
  const [showList, setShowList] = useState(false);

  function changeHandler(data) {
    onChange(data);
    setShowList(false);
  }

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label
        className={`text-dark-green ${labelClassName}`}
        htmlFor={name}
      ></label>

      <div
        onClick={() => setShowList((prev) => !prev)}
        className={`bg-light-gray px-2 py-2 rounded-md flex text-dark-green mb-[.1rem] ${
          showList && "outline outline-2 outline-dark-green"
        }`}
      >
        <img src={icon} alt="icon" className="flex-none mr-2" />
        <p className="flex-grow">{value.text}</p>
        <img src={down} alt="down" className="flex-none" />
      </div>
      {showList && (
        <ul className="rounded border transition-all">
          {list.map((li) => (
            <DropdownList
              className={listClassName}
              key={li.val}
              data={li}
              onClick={changeHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
