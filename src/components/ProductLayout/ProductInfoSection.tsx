import { TProduct } from "@/interfaces";

export const ProductInfoSection = ({ product }: { product: TProduct }) => {
  return (
    <section className="product-details-section">
      <p className="product-category">
        {`Categorias > ${product.category.title}`}
      </p>
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">
        {Number(product.price).toLocaleString("pt-BR", {
          currency: "BRL",
          style: "currency",
        })}
      </p>
      <p className="product-installments">
        em até {product.max_installments}x de{" "}
        {(Number(product.price) / product.max_installments).toLocaleString(
          "pt-BR",
          {
            currency: "BRL",
            style: "currency",
          }
        )}
      </p>
    </section>
  );
};
