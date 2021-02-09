//@ts-check
// methods for routes

import { repos, addRepo, repoExists } from "./db";

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createRepo = async (req, res) => {
  console.log(req.body);
  try {
    let payload = {
      name: req.body.name,
      repo_id: req.body.repo_id,
      owner: req.body.owner,
      description: req.body.description,
      stars: req.body.stars,
    };
    const exists = await repoExists(payload?.repo_id);

    if (exists) {
      res.status(400).json({
        error: "already bookmarked",
        status: false,
      });
    }

    let product = await addRepo({
      ...payload,
    });

    res.status(200).json({
      status: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getRepos = async (req, res) => {
  try {
    let data = await repos();

    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

export { createRepo, getRepos };
