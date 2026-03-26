const model = require("../models/feedbackModel");

// ADD
const addFeedback = (req, res) => {
    const { course, student, rating, comment } = req.body;

    if (!course || !student || !rating) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const newFeedback = model.addFeedback({
        course,
        student,
        rating: Number(rating),
        comment
    });

    res.json(newFeedback);
};

// GET ALL
const getFeedback = (req, res) => {
    res.json(model.getAllFeedback());
};

// DELETE
const deleteFeedback = (req, res) => {
    model.deleteFeedback(req.params.id);
    res.json({ message: "Deleted successfully" });
};

// ANALYTICS
const getAnalytics = (req, res) => {
    const data = model.getAllFeedback();

    const total = data.length;
    const average =
        total === 0
            ? 0
            : data.reduce((sum, f) => sum + f.rating, 0) / total;

    res.json({ total, average });
};

module.exports = {
    addFeedback,
    getFeedback,
    deleteFeedback,
    getAnalytics
};