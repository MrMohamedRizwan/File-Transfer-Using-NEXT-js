// components/RadioGroup.js

const RadioGroup = ({ options, selectedOption, onChange }) => {
    return (
      <div>
        {options.map(option => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={onChange}
              className="form-radio h-4 w-4 text-indigo-600 ml-[10px]"
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default RadioGroup;
  