const OneField = (width, title, placeholder, defaultVal, onInput) => {
  const field = (
    <div className={`${width} wide column`}>
        <label>{title}</label>
        <input 
          type="text" 
          placeholder={placeholder} 
          defaultValue={defaultVal} 
          onChange={e => onInput(e.target.value, title)}
        />
    </div>
    
  );
  return field;
};

export default OneField;