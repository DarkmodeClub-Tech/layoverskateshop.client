export const ProductColorsField = ({
  productColors,
}: {
  productColors: string[];
}) => {
  return (
    <fieldset className="fieldset-colors-field" id="colors">
      <legend>Cores disponíveis:</legend>
      {productColors.map((pc) => (
        <label htmlFor={pc} key={pc}>
          {pc}
          <input type="radio" name="color" value={pc} />
        </label>
      ))}
    </fieldset>
  );
};
