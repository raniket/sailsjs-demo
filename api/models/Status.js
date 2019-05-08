/**
 * Status.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'status',

  attributes: {

    is_deleted: {
      type: 'boolean',
      columnType: 'boolean',
      allowNull: false,
      defaultsTo: false,
    },

    organization_id: {
      type: 'number',
      columnType: 'integer',
    },

    label: {
      type: 'string',
      columnType: 'text',
    },

    type: {
      type: 'number',
      columnType: 'integer',
      allowNull: false,
      defaultsTo: 10,
    },

    description: {
      type: 'string',
      columnType: 'text',
    },

    sort_key: {
      type: 'number',
      columnType: 'integer',
    },

    added_by: {
      type: 'number',
      columnType: 'integer',
    },

    added_at: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date(),
    },

    category_id: {
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

