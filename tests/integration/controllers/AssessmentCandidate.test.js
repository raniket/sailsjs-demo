import test from 'ava';
const request = require('supertest');
const sails = require('sails');
const AssessmentCandidate = require('./../../../api/controllers/AssessmentCandidateController.js');


sails.lift({ log: { level: 'error' } }, (error, sail) => {
    // const app = sail.hooks.http.app;

    // test(`list 10 of the Assessment Candidate`, async (t) => {

    //     const response = await request(app).get('/assessment-candidate').query({limit: 10});
    //     // t.pass();
    //     // console.log('response ::: ', response);
    //     t.is(response.status, 200);
    //     t.is(response.body.length, 10);

    // });

    const req =  {
        params: {},
        query: {
            limit: 2
        },
        body: {}
    };

    const res = {
        status: (statusCode) => {
            return {
                ...this,
                status: statusCode
            }
        },
        // json: (body) => {
        //     return {
        //         ...this,
        //         body: body
        //     }
        // }
        json: (body) => res.body = body
    };

    console.log('res ===> ', res.status(200).json({message: 'life in'}))

    test('list 2 of all the Assessment Candidate', async (t) => {
        // console.log('ASssesment andidate ', AssessmentCandidate);
        const response = await AssessmentCandidate.list(req, res);
        console.log('respnse :: -> ', response);
        t.is(response.status, 200)
    })
});

