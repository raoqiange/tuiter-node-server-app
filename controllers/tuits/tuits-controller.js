import * as tuitsDao from './tuits-dao.js';
// import posts from './tuits.js';
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const {tid} = req.params;
    const updatedTuit = req.body;
    // tuits = tuits.map(tuit => {
    //     if (tuit._id === tid) {
    //         return {...tuit, ...updatedTuit}
    //     } else {
    //         return tuit
    //     }})
    const status = await tuitsDao.updateTuit(tid, updatedTuit);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}