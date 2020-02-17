
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', function(tbl) {
    tbl.increments();
    tbl.string('name')
      .notNullable()
      .unique();
    tbl.decimal('budget')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('accounts');
};
