import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  return {
    title: `Product id ${id}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;

  console.log(productId);

  return <div>Product Id {productId}</div>;
};

export default ProductDetails;
