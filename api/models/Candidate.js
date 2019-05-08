/**
 * Candidate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'candidate',

  attributes: {

    is_deleted: {
      type: 'boolean',
      columnType: 'boolean',
      allowNull: false,
      defaultsTo: false
    },

    organization_id: {
      type: 'number',
      columnType: 'integer',
    },

    status_id: {
      type: 'number',
      columnType: 'smallint',
    },

    external_id: {
      type: 'string',
      columnType: 'text',
    },

    first_name: {
      type: 'string',
      columnType: 'text',
    },

    middle_name: {
      type: 'string',
      columnType: 'text',
    },

    last_name: {
      type: 'string',
      columnType: 'text',
    },

    source_id: {
      type: 'number',
      columnType: 'integer',
    },

    assigned_to: {
      type: 'number',
      columnType: 'integer',
    },

    email: {
      type: 'string',
      columnType: 'citext',
      allowNull: false,
    },

    phone: {
      type: 'string',
      columnType: 'text',
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

    added_by: {
      type: 'number',
      columnType: 'integer',
    },

    icard: {
      type: 'string',
      columnType: 'text',
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

    cf: {
      type: 'json',
      columnType: 'jsonb',
      defaultsTo: {},
    },

    created_by: {
      type: 'number',
      columnType: 'integer',
    },

    updated_by: {
      type: 'number',
      columnType: 'integer',
    },

    about: {
      type: 'string',
      columnType: 'text',
    },

    date_of_birth: {
      type: 'ref',
      columnType: 'timestamp',
    },

    current_salary: {
      type: 'number',
      columnType: 'double precision',
    },

    expected_salary: {
      type: 'number',
      columnType: 'double precision',
    },

    notice_period: {
      type: 'number',
      columnType: 'integer',
    },

    experience: {
      type: 'number',
      columnType: 'integer',
    },

    profile_pic: {
      type: 'string',
      columnType: 'text',
    },

    current_location: {
      type: 'string',
      columnType: 'text',
    },

    is_relocate: {
      type: 'boolean',
      columnType: 'boolean',
    },

  },

};



















