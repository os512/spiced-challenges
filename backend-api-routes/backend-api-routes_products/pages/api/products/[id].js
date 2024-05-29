import { getProductById } from "@/services/productServices.js";

export default function handler(req, res) {
//   console.log("request in ID getProductById: ", req.query);
  console.log("dshjfdskfhdjskfhsdjkfhsdfjkdslhfjksdfhsjklxs");

  const { id } = req.query;

  console.log(id);

  const product = getProductById(id);

  if (!product) {
    return res.status(404).json({ status: "Not found" });
  }

  res.status(200).json(product);
}