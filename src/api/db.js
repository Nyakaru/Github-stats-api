//@ts-check
// define our DB requests for product models
import Repo from "./models";

const repos = async () => {
  const products = await Repo.find()
  return products;
};

const repoExists = async (id) => {
  let repo = Repo.exists({ repo_id: id})
  return repo
}
const addRepo = async (payload) => {
  const newProduct = await Repo.create(payload);
  return newProduct;
};

export {
    repos, addRepo, repoExists
}
