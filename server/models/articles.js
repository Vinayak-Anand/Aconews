const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: String,
  image: String,
  publishedAt: Date,
  source: {
    name: String,
    url: String,
  },
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: process.env.CACHE_DURATION,
  },
});

ArticleSchema.index({ title: 'text', description: 'text', content: 'text' });

module.exports = mongoose.model("Article", ArticleSchema);