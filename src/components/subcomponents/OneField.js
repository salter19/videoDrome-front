const OneField = (width, title, placeholder, defaultVal) => {
  const field = (
    <div className={`${width} wide column`}>
        <label>{title}</label>
        <input type="text" placeholder={placeholder} defaultValue={defaultVal}/>
    </div>
    
  );
  return field;
};

export default OneField;