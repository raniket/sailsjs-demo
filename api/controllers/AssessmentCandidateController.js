/* ------------------- OPERATION PER HANDELER ----------------- */
// Request validation
// Authorization
// DB query
// Pagination
// Response model
// Error handeling
// Loggin
// Test cases

/**
 * AssessmentCandidateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list: async (req, res) => {
        try {
            const limitData = req.query.limit;
            const data = await AssessmentCandidate.find({  limit: limitData });
            return res.status(200).json(data);
        } catch (error) {
            console.log('errro: ', error);
            return res.json(error);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await AssessmentCandidate.find({id});
            if(data.length === 0) return res.status(404).json({message: 'not found'});
            return res.json(data);
        } catch (error) {
            console.log('errro: ', error);
            return res.status(200).json(error);
        }
    },

    create: async (req, res) => {
        try {
            const body = req.body;
            console.log('body::: ', body)
            const data = await AssessmentCandidate.create(body).fetch();
            return res.json(data);
        } catch (error) {
            console.log('errro: ', error);
            return res.json(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            console.log('body ::: ', body);
            const data = await AssessmentCandidate.update({id}).set(body).fetch();
            return res.json(data);
        } catch (error) {
            console.log('errro: ', error);
            return res.json(error);
        }
    },

    destroy: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await AssessmentCandidate.destroy({id}).fetch();
            return res.json(data);
        } catch (error) {
            console.log('errro: ', error);
            return res.json(error);
        }
    },
};

