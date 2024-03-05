const Post = require("../Model/postModel");

// Controller function to get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({
      title,
      content,
      author,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
