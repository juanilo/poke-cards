import clsx from "clsx";

interface SelectProps {
  options: Array<{ label: string; value: string }>;
  selected: string;
  setSelected: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Select = ({
  options,
  selected,
  setSelected,
  placeholder,
  className,
}: SelectProps) => {
  return (
    <select
      name="type"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className={clsx(className ? className : "cursor-pointer p-2 rounded-lg")}
    >
      <option value="" key="select">
        {placeholder ? placeholder : "Select"}
      </option>
      {options.map(({ label, value }) => (
        <option value={value} key={label}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
