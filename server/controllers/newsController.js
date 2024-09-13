const axios = require('axios');
const Article = require('../models/articles');

exports.getNews = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, pageSize = 12 } = req.query;

    const cachedNews = await Article.find({ category })
      .sort({ publishedAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    if (cachedNews.length > 0) {
      return res.json({
        articles: cachedNews,
        totalArticles: await Article.countDocuments({ category }),
      });
    }

    const response = await axios.get(`${process.env.GNEWS_API_URL}/top-headlines`, {
      params: {
        token: process.env.GNEWS_API_KEY,
        lang: 'en',
        country: 'us',
        category: category,
        max: pageSize,
        page: page,
      },
    });

    const articles = response.data.articles;

    // Save articles to MongoDB
    await Article.insertMany(
      articles.map((article) => ({ ...article, category }))
    );

    res.json({
      articles: articles,
      totalArticles: response.data.totalArticles,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

exports.searchNews = async (req, res) => {
  try {
    const { q, page = 1, pageSize = 12 } = req.query;
    console.log(q, page, pageSize);

    const cachedNews = await Article.find(
      { $text: { $search: q } },
      { score: { $meta: 'textScore' } }
    )
      .sort({ score: { $meta: 'textScore' }, publishedAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    if (cachedNews.length > 0) {
      return res.json({
        articles: cachedNews,
        totalArticles: await Article.countDocuments({ $text: { $search: q } }),
      });
    }

    const response = await axios.get(`${process.env.GNEWS_API_URL}/search`, {
      params: {
        token: process.env.GNEWS_API_KEY,
        lang: 'en',
        q: q,
        max: pageSize,
        page: page,
      },
    });

    const articles = response.data.articles;

    // Save articles to MongoDB
    await Article.insertMany(articles);

    res.json({
      articles: articles,
      totalArticles: response.data.totalArticles,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching news', error: error.message });
  }
};
