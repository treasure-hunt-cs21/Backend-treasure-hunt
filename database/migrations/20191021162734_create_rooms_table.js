exports.up = function(knex) {
    return knex.schema.createTable('rooms', rooms => {
  
        rooms.integer("room_id", 10).primary();
      
        rooms
        .string('title', 5000)
        .notNullable();

        rooms
        .string('description', 5000)
        .notNullable();
  
        rooms
        .string('coordinates', 20)
        .notNullable();

        rooms.integer("elevation", 10);

        rooms
        .string('terrain', 100)
        .notNullable();

        rooms.integer("n", 10);

        rooms.integer("s", 10);

        rooms.integer("e", 10);

        rooms.integer("w", 10);

        rooms.specificType('items', 'text ARRAY');

        rooms.specificType('exits', 'text ARRAY');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('rooms');
  };