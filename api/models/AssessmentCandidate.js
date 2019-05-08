/**
 * AssessmentCandidate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'assessment_candidate',

  attributes: {

    is_deleted: {
      type: 'boolean',
      allowNull: false,
      defaultsTo: false,
      columnType: 'boolean',
    },

    verification_code: {
      type: 'string',
      columnType: 'text',
    },

    invited_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    start_date: {
      type: 'ref',
      columnType: 'timestamp',
    },

    end_date: {
      type: 'ref',
      columnType: 'timestamp',
    },

    attended_at: {
      type: 'ref',
      columnType: 'timestamp',
    },

    evaluated_at: {
      type: 'ref',
      columnType: 'timestamp',
    },

    assessment_id: {
      // type: 'number',
      // allowNull: false,
      // columnType: 'integer',
      
      model: 'Assessment'
    },

    invited_by: {
      type: 'number',
      columnType: 'integer',
    },

    status_id: {
      // type: 'number',
      // allowNull: false,
      // columnType: 'smallint',
      // isIn: [10, 20, 30, 40, 50, 60, 70, 80 ,90, 100],

      model: 'Status'
    },

    candidate_id: {
      // type: 'number',
      // allowNull: false,
      // columnType: 'integer',

      model: 'Candidate'
    },

    modified_by: {
      type: 'number',
      columnType: 'integer',
    },

    modified_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    old_id: {
      type: 'number',
      columnType: 'integer',
    },

    owned_by: {
      type: 'number',
      columnType: 'integer'
    },

    deleted_by: {
      type: 'number',
      columnType: 'integer',
    },

    deleted_at: {
      type: 'ref',
      columnType: 'timestamp',
    },

    meta: {
      type: 'json',
      columnType: 'jsonb',
      defaultsTo: {}
    },

    created_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    updated_at: {
      type: 'ref',
      columnType: 'timestamp',
    },

    created_by: {
      type: 'number',
      columnType: 'integer',
    },

    updated_at: {
      type: 'number',
      columnType: 'integer',
    },

  },

};

