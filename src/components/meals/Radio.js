const Radio = ({label, id, name}) => {
    return (
        <>
            <input
                type="radio"
                id={id}
                name={name}
                // onChange={handleChange}
                value={id}
                // checked={form[name] === id}
            />
            <label htmlFor={id}>{label}</label>
            <br/>
        </>
    )
}
export default Radio;