const router = require("express").Router();
const { Reaction } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
	Reaction.findAll()
		.then((dbReactionData) => res.json(dbReactionData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", withAuth, (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
	Reaction.create({
		reaction_text: req.body.reaction_text,
		user_id: req.session.user_id,
		post_id: req.body.post_id,
	})
		.then((dbReactionData) => res.json(dbReactionData))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

module.exports = router;
