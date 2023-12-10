export const ProductSizesField = ({
  productSizes,
}: {
  productSizes: string[];
}) => {
  return (
    <fieldset className="fieldset-sizes-field" id="sizes">
      <legend>Tamanhos disponíveis:</legend>
      {productSizes.map((ps) => {
        return (
          <label htmlFor={ps} key={ps}>
            {ps}
            <input type="radio" name="size" value={ps} />
          </label>
        );
      })}
    </fieldset>
  );
};
