// const addDaysToCurrentDate = require('../helpers/addDays');
/**
 * Assessment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'assessment',

  attributes: {

    is_deleted: {
      type: 'boolean',
      columnType: 'boolean',
      allowNull: false,
      defaultsTo: false,
    },

    external_id: {
      type: 'string',
      columnType: 'text',
    },

    title: {
      type: 'string',
      columnType: 'text',
      allowNull: false,
    },

    description: {
      type: 'string',
      columnType: 'text',
    },

    position_id: {
      type: 'number',
      columnType: 'integer',
    },

    status: {
      type: 'number',
      columnType: 'smallint',
    },

    start_date: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    end_date: {
      type: 'ref',
      columnType: 'timestamp',
      // defaultsTo: (new Date()).setDate((new Date()).getDate() + 3)
    },

    owned_by: {
      type: 'number',
      columnType: 'integer',
      allowNull: false,
    },

    organization_id: {
      type: 'number',
      columnType: 'integer',
      allowNull: false,
    },

    modified_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    modified_by: {
      type: 'number',
      columnType: 'integer',
    },

    copied_from: {
      type: 'number',
      columnType: 'integer',
    },

    copied_at: {
      type: 'ref',
      columnType: 'timestamp'
    },

    old_id: {
      type: 'number',
      columnType: 'integer',
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
      defaultsTo: {},
    },

    created_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    updated_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    created_by: {
      type: 'number',
      columnType: 'integer',
    },

    updated_by: {
      type: 'number',
      columnType: 'integer',
    },

  },

};

