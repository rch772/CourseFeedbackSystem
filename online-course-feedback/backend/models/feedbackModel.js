let feedbacks = [];

const getAllFeedback = () => {
    return feedbacks;
};

const addFeedback = (data) => {
    const newFeedback = { id: Date.now(), ...data };
    feedbacks.push(newFeedback);
    return newFeedback;
};

const deleteFeedback = (id) => {
    feedbacks = feedbacks.filter(f => f.id != id);
};

module.exports = {
    getAllFeedback,
    addFeedback,
    deleteFeedback
};