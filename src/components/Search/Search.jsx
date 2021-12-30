import search from "../../assets/icon/search.svg";

export default function Search({
  name,
  type,
  value,
  placeholder,
  onChange,
  disabled = false,
  containerClassName,
  labelClassName,
  inputClassName,
  imgClassName,
  onClick,
}) {
  return (
    <div className={`relative ${containerClassName}`}>
      <label
        htmlFor={name}
        className={`text-dark-green ${labelClassName}`}
      ></label>
      <input
        id={name}
        type={type || "text"}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`bg-light-gray text-dark-green py-2 pl-2 pr-10 w-60 rounded-md focus:outline-dark-green ${inputClassName}`}
      />
      <img
        src={search}
        alt="search"
        className={`absolute left-[13.2em] top-[9px] cursor-pointer ${imgClassName}`}
        onClick={onClick}
      />
    </div>
  );
}
