
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        
          {
            room_id: 0,
            title: "A brightly lit room",
            description:"You are standing in the center of a brightly lit room. You notice a shop to the west and exits to the north, south and east.",
            coordinates: "(60,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 10,
            s: 2,
            e: 4,
            w: 1
          },
          {
            room_id: 1,
            title: "Shop",
            description:"You are standing in a small shop. A sign behind the mechanical shopkeeper says 'WILL PAY FOR TREASURE'.",
            coordinates: "(59,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 0,
            w: null
          },
          {
            room_id: 2,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 0,
            s: 6,
            e: 3,
            w: null
          },
          {
            room_id: 3,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(61,59)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: 9,
            e: 5,
            w: 2
          },
          {
            room_id: 4,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 23,
            s: null,
            e: 13,
            w: 0
          },
          {
            room_id: 5,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 3
          },
          {
            room_id: 6,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 2,
            s: null,
            e: null,
            w: 7
          },
          {
            room_id: 7,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 8,
            s: null,
            e: 6,
            w: 56
          },
          {
            room_id: 8,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 7,
            e: null,
            w: 16
          },
          {
            room_id: 9,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,58)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: 3,
            s: 12,
            e: 11,
            w: null
          },
          {
            room_id: 10,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 19,
            s: 0,
            e: null,
            w: 43
          },
          {
            room_id: 11,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(62,58)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 17,
            w: 9
          },
          {
            room_id: 12,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,57)",
            elevation: 3,
            terrain: "MOUNTAIN",
            n: 9,
            s: 18,
            e: 14,
            w: 21
          },
          {
            room_id: 13,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 15,
            w: 4
          },
          {
            room_id: 14,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(62,57)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: null,
            s: 34,
            e: 37,
            w: 12
          },
          {
            room_id: 15,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 13
          },
          {
            room_id: 16,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 58,
            s: null,
            e: 8,
            w: 67
          },
          {
            room_id: 17,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 24,
            s: null,
            e: 42,
            w: 11
          },
          {
            room_id: 18,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,56)",
            elevation: 4,
            terrain: "MOUNTAIN",
            n: 12,
            s: 22,
            e: null,
            w: 25
          },
          {
            room_id: 19,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 20,
            s: 10,
            e: null,
            w: 77
          },
          {
            room_id: 20,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 63,
            s: 19,
            e: 27,
            w: 46
          },
          {
            room_id: 21,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(60,57)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 12,
            w: 29
          },
          {
            room_id: 22,
            title: "The Peak of Mt. Holloway",
            description:"You are standing at the zenith of Mt. Holloway. You see before you a holy shrine erected in the image of a magnificent winged deity.",
            coordinates: "(61,55)",
            elevation: 5,
            terrain: "MOUNTAIN",
            n: 18,
            s: 78,
            e: null,
            w: 36
          },
          {
            room_id: 23,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 4,
            e: 26,
            w: null
          },
          {
            room_id: 24,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 17,
            e: null,
            w: null
          },
          {
            room_id: 25,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(60,56)",
            elevation: 3,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 18,
            w: null
          },
          {
            room_id: 26,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 55,
            w: 23
          },
          {
            room_id: 27,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 40,
            s: 28,
            e: 30,
            w: 20
          },
          {
            room_id: 28,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 27,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 29,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(59,57)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: 45,
            e: 21,
            w: 49
          },
          {
            room_id: 30,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 31,
            e: 32,
            w: 27
          },
          {
            room_id: 31,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 30,
            s: null,
            e: 33,
            w: null
          },
          {
            room_id: 32,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 39,
            s: null,
            e: 54,
            w: 30
          },
          {
            room_id: 33,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 38,
            w: 31
          },
          {
            room_id: 34,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(62,56)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: 14,
            s: 50,
            e: 35,
            w: null
          },
          {
            room_id: 35,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 52,
            e: null,
            w: 34
          },
          {
            room_id: 36,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(60,55)",
            elevation: 4,
            terrain: "MOUNTAIN",
            n: null,
            s: 48,
            e: 22,
            w: 60
          },
          {
            room_id: 37,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(63,57)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: null,
            w: 14
          },
          {
            room_id: 38,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 59,
            e: 66,
            w: 33
          },
          {
            room_id: 39,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 53,
            s: 32,
            e: 51,
            w: 41
          },
          {
            room_id: 40,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 27,
            e: null,
            w: null
          },
          {
            room_id: 41,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 39,
            w: null
          },
          {
            room_id: 42,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 44,
            s: 80,
            e: 118,
            w: 17
          },
          {
            room_id: 43,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 10,
            w: 47
          },
          {
            room_id: 44,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 42,
            e: null,
            w: null
          },
          {
            room_id: 45,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(59,56)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: 29,
            s: 60,
            e: null,
            w: null
          },
          {
            room_id: 46,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 20,
            w: 62
          },
          {
            room_id: 47,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 71,
            s: null,
            e: 43,
            w: null
          },
          {
            room_id: 48,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(60,54)",
            elevation: 3,
            terrain: "MOUNTAIN",
            n: 36,
            s: 105,
            e: null,
            w: 149
          },
          {
            room_id: 49,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 79,
            e: 29,
            w: 136
          },
          {
            room_id: 50,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: 34,
            s: 89,
            e: null,
            w: null
          },
          {
            room_id: 51,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 69,
            s: null,
            e: 57,
            w: 39
          },
          {
            room_id: 52,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: 35,
            s: 68,
            e: 75,
            w: null
          },
          {
            room_id: 53,
            title: "A misty room",
            description:"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 95,
            s: 39,
            e: null,
            w: 88
          },
          {
            room_id: 54,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 32
          },
          {
            room_id: 55,
            title: "Wishing Well",
            description: "You are standing besides a large well. A sign next the well reads 'EXAMINE WELL, FIND WEALTH'.",
            coordinates: "(63,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 26
          },
          {
            room_id: 56,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 7,
            w: 61
          },
          {
            room_id: 57,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 145,
            w: 51
          },
          {
            room_id: 58,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 16,
            e: null,
            w: 65
          },
          {
            room_id: 59,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 38,
            s: 104,
            e: 92,
            w: null
          },
          {
            room_id: 60,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(59,55)",
            elevation: 3,
            terrain: "MOUNTAIN",
            n: 45,
            s: null,
            e: 36,
            w: 70
          },
          {
            room_id: 61,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 56,
            w: 171
          },
          {
            room_id: 62,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 64,
            s: null,
            e: 46,
            w: 84
          },
          {
            room_id: 63,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 72,
            s: 20,
            e: null,
            w: 73
          },
          {
            room_id: 64,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 62,
            e: null,
            w: 82
          },
          {
            room_id: 65,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 74,
            s: null,
            e: 58,
            w: 139
          },
          {
            room_id: 66,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 169,
            s: null,
            e: 123,
            w: 38
          },
          {
            room_id: 67,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 16,
            w: 162
          },
          {
            room_id: 68,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 52,
            s: null,
            e: 100,
            w: null
          },
          {
            room_id: 69,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 94,
            s: 51,
            e: 103,
            w: null
          },
          {
            room_id: 70,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(58,55)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: null,
            s: 163,
            e: 60,
            w: 98
          },
          {
            room_id: 71,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 47,
            e: null,
            w: null
          },
          {
            room_id: 72,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 63,
            e: null,
            w: 76
          },
          {
            room_id: 73,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 63,
            w: null
          },
          {
            room_id: 74,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 87,
            s: 65,
            e: null,
            w: 161
          },
          {
            room_id: 75,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 85,
            w: 52
          },
          {
            room_id: 76,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 83,
            s: null,
            e: 72,
            w: 110
          },
          {
            room_id: 77,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 19,
            w: null
          },
          {
            room_id: 78,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,54)",
            elevation: 4,
            terrain: "MOUNTAIN",
            n: 22,
            s: 108,
            e: null,
            w: null
          },
          {
            room_id: 79,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 49,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 80,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 42,
            s: 81,
            e: 86,
            w: null
          },
          {
            room_id: 81,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 80,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 82,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 191,
            s: null,
            e: 64,
            w: null
          },
          {
            room_id: 83,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 76,
            e: 130,
            w: 125
          },
          {
            room_id: 84,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 62,
            w: 91
          },
          {
            room_id: 85,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 154,
            w: 75
          },
          {
            room_id: 86,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 96,
            e: 90,
            w: 80
          },
          {
            room_id: 87,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 74,
            e: null,
            w: null
          },
          {
            room_id: 88,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 53,
            w: 122
          },
          {
            room_id: 89,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(62,54)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: 50,
            s: 93,
            e: null,
            w: null
          },
          {
            room_id: 90,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 178,
            w: 86
          },
          {
            room_id: 91,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 180,
            s: 101,
            e: 84,
            w: 99
          },
          {
            room_id: 92,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 59
          },
          {
            room_id: 93,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(62,53)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: 89,
            s: null,
            e: null,
            w: 108
          },
          {
            room_id: 94,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 152,
            s: 69,
            e: null,
            w: null
          },
          {
            room_id: 95,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 119,
            s: 53,
            e: null,
            w: 115
          },
          {
            room_id: 96,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 86,
            s: null,
            e: 97,
            w: null
          },
          {
            room_id: 97,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 181,
            w: 96
          },
          {
            room_id: 98,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(57,55)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: 102,
            s: 126,
            e: 70,
            w: 109
          },
          {
            room_id: 99,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 190,
            s: null,
            e: 91,
            w: 146
          },
          {
            room_id: 100,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 106,
            e: 112,
            w: 68
          },
          {
            room_id: 101,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 91,
            s: null,
            e: null,
            w: 113
          },
          {
            room_id: 102,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 98,
            e: null,
            w: 142
          },
          {
            room_id: 103,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 160,
            s: null,
            e: null,
            w: 69
          },
          {
            room_id: 104,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 59,
            s: null,
            e: 107,
            w: null
          },
          {
            room_id: 105,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(60,53)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: 48,
            s: null,
            e: null,
            w: 202
          },
          {
            room_id: 106,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 100,
            s: 111,
            e: null,
            w: 135
          },
          {
            room_id: 107,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 120,
            e: 121,
            w: 104
          },
          {
            room_id: 108,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,53)",
            elevation: 3,
            terrain: "MOUNTAIN",
            n: 78,
            s: 117,
            e: 93,
            w: null
          },
          {
            room_id: 109,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 185,
            e: 98,
            w: 175
          },
          {
            room_id: 110,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 76,
            w: null
          },
          {
            room_id: 111,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 106,
            s: 367,
            e: 158,
            w: null
          },
          {
            room_id: 112,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 141,
            e: 140,
            w: 100
          },
          {
            room_id: 113,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 114,
            e: 101,
            w: null
          },
          {
            room_id: 114,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 113,
            s: null,
            e: null,
            w: 176
          },
          {
            room_id: 115,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 116,
            s: null,
            e: 95,
            w: null
          },
          {
            room_id: 116,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 132,
            s: 115,
            e: null,
            w: null
          },
          {
            room_id: 117,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(61,52)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: 108,
            s: 131,
            e: 166,
            w: 133
          },
          {
            room_id: 118,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 137,
            w: 42
          },
          {
            room_id: 119,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 134,
            s: 95,
            e: null,
            w: null
          },
          {
            room_id: 120,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 107,
            s: null,
            e: 127,
            w: null
          },
          {
            room_id: 121,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 128,
            s: null,
            e: 143,
            w: 107
          },
          {
            room_id: 122,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 124,
            s: null,
            e: 88,
            w: null
          },
          {
            room_id: 123,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 66
          },
          {
            room_id: 124,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 157,
            s: 122,
            e: null,
            w: null
          },
          {
            room_id: 125,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 165,
            s: null,
            e: 83,
            w: 237
          },
          {
            room_id: 126,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 98,
            s: 129,
            e: null,
            w: null
          },
          {
            room_id: 127,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 184,
            w: 120
          },
          {
            room_id: 128,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 121,
            e: 189,
            w: null
          },
          {
            room_id: 129,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 126,
            s: null,
            e: 194,
            w: 170
          },
          {
            room_id: 130,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 83
          },
          {
            room_id: 131,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(61,51)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: 117,
            s: 244,
            e: null,
            w: 138
          },
          {
            room_id: 132,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 116,
            e: null,
            w: null
          },
          {
            room_id: 133,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(60,52)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 117,
            w: 173
          },
          {
            room_id: 134,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: 147,
            s: 119,
            e: 144,
            w: null
          },
          {
            room_id: 135,
            title: "A misty room",
            description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 150,
            e: 106,
            w: null
          },
          {
            room_id: 136,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 49,
            w: 148
          },
          {
            room_id: 137,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 118
          },
          {
            room_id: 138,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 211,
            e: 131,
            w: 195
          },
          {
            room_id: 139,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 65,
            w: 188
          },
          {
            room_id: 140,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 112
          },
          {
            room_id: 141,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 112,
            s: null,
            e: 156,
            w: null
          },
          {
            room_id: 142,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 102,
            w: 159
          },
          {
            room_id: 143,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 212,
            w: 121
          },
          {
            room_id: 144,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 155,
            w: 134
          },
          {
            room_id: 145,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 174,
            s: null,
            e: 220,
            w: 57
          },
          {
            room_id: 146,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 215,
            s: 177,
            e: 99,
            w: 257
          },
          {
            room_id: 147,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: 200,
            s: 134,
            e: 153,
            w: 151
          },
          {
            room_id: 148,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 136,
            w: 292
          },
          {
            room_id: 149,
            title: "Mt. Holloway",
            description: "You are on the side of a steep incline.",
            coordinates: "(59,54)",
            elevation: 2,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 48,
            w: null
          },
          {
            room_id: 150,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 135,
            s: null,
            e: null,
            w: 166
          },
          {
            room_id: 151,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: 172,
            s: null,
            e: 147,
            w: 207
          },
          {
            room_id: 152,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 94,
            e: null,
            w: null
          },
          {
            room_id: 153,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 329,
            w: 147
          },
          {
            room_id: 154,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 193,
            w: 85
          },
          {
            room_id: 155,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 187,
            e: 316,
            w: 144
          },
          {
            room_id: 156,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 168,
            e: 164,
            w: 141
          },
          {
            room_id: 157,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 210,
            s: 124,
            e: null,
            w: 182
          },
          {
            room_id: 158,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 167,
            e: null,
            w: 111
          },
          {
            room_id: 159,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 142,
            w: 196
          },
          {
            room_id: 160,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 103,
            e: null,
            w: null
          },
          {
            room_id: 161,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 74,
            w: null
          },
          {
            room_id: 162,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 67,
            w: null
          },
          {
            room_id: 163,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(58,54)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: 70,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 164,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 217,
            s: null,
            e: 298,
            w: 156
          },
          {
            room_id: 165,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 203,
            s: 125,
            e: null,
            w: 204
          },
          {
            room_id: 166,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(62,52)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: 198,
            e: 150,
            w: 117
          },
          {
            room_id: 167,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 158,
            s: 262,
            e: 260,
            w: null
          },
          {
            room_id: 168,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 156,
            s: null,
            e: 340,
            w: null
          },
          {
            room_id: 169,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 66,
            e: 186,
            w: null
          },
          {
            room_id: 170,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 129,
            w: null
          },
          {
            room_id: 171,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 61,
            w: null
          },
          {
            room_id: 172,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 267,
            s: 151,
            e: null,
            w: null
          },
          {
            room_id: 173,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 133,
            w: 214
          },
          {
            room_id: 174,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 192,
            s: 145,
            e: 224,
            w: null
          },
          {
            room_id: 175,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 183,
            e: 109,
            w: 179
          },
          {
            room_id: 176,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 114,
            w: 402
          },
          {
            room_id: 177,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 146,
            s: null,
            e: null,
            w: 346
          },
          {
            room_id: 178,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 209,
            s: null,
            e: 243,
            w: 90
          },
          {
            room_id: 179,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 233,
            e: 175,
            w: 213
          },
          {
            room_id: 180,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 91,
            e: null,
            w: null
          },
          {
            room_id: 181,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 97
          },
          {
            room_id: 182,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 157,
            w: 208
          },
          {
            room_id: 183,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 175,
            s: 229,
            e: null,
            w: null
          },
          {
            room_id: 184,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 221,
            w: 127
          },
          {
            room_id: 185,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 109,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 186,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 205,
            w: 169
          },
          {
            room_id: 187,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 155,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 188,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 139,
            w: 335
          },
          {
            room_id: 189,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 255,
            w: 128
          },
          {
            room_id: 190,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 99,
            e: null,
            w: null
          },
          {
            room_id: 191,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 82,
            e: null,
            w: null
          },
          {
            room_id: 192,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 201,
            s: 174,
            e: 223,
            w: null
          },
          {
            room_id: 193,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 251,
            w: 154
          },
          {
            room_id: 194,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 214,
            e: null,
            w: 129
          },
          {
            room_id: 195,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 228,
            e: 138,
            w: 225
          },
          {
            room_id: 196,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 222,
            s: null,
            e: 159,
            w: 197
          },
          {
            room_id: 197,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 232,
            s: null,
            e: 196,
            w: 276
          },
          {
            room_id: 198,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 166,
            s: 239,
            e: 199,
            w: null
          },
          {
            room_id: 199,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 230,
            e: null,
            w: 198
          },
          {
            room_id: 200,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 227,
            s: 147,
            e: 206,
            w: null
          },
          {
            room_id: 201,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 192,
            e: null,
            w: null
          },
          {
            room_id: 202,
            title: "Mt. Holloway",
            description: "You are at the base of a large, looming mountain.",
            coordinates: "(59,53)",
            elevation: 1,
            terrain: "MOUNTAIN",
            n: null,
            s: null,
            e: 105,
            w: null
          },
          {
            room_id: 203,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: 268,
            s: 165,
            e: 299,
            w: null
          },
          {
            room_id: 204,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 219,
            s: null,
            e: 165,
            w: 216
          },
          {
            room_id: 205,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 241,
            e: 479,
            w: 186
          },
          {
            room_id: 206,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 288,
            s: null,
            e: 380,
            w: 200
          },
          {
            room_id: 207,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: 231,
            s: null,
            e: 151,
            w: 290
          },
          {
            room_id: 208,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 182,
            w: null
          },
          {
            room_id: 209,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 178,
            e: null,
            w: null
          },
          {
            room_id: 210,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 157,
            e: null,
            w: null
          },
          {
            room_id: 211,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 138,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 212,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 143
          },
          {
            room_id: 213,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 179,
            w: 420
          },
          {
            room_id: 214,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 194,
            s: null,
            e: 173,
            w: 226
          },
          {
            room_id: 215,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 246,
            s: 146,
            e: null,
            w: null
          },
          {
            room_id: 216,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(56,67)",
            elevation: 0,
            terrain: "CAVE",
            n: 234,
            s: null,
            e: 204,
            w: 218
          },
          {
            room_id: 217,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 164,
            e: 247,
            w: null
          },
          {
            room_id: 218,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,67)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 263,
            e: 216,
            w: 242
          },
          {
            room_id: 219,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 204,
            e: null,
            w: null
          },
          {
            room_id: 220,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 145
          },
          {
            room_id: 221,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 253,
            e: 240,
            w: 184
          },
          {
            room_id: 222,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 305,
            s: 196,
            e: null,
            w: null
          },
          {
            room_id: 223,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: 283,
            s: null,
            e: null,
            w: 192
          },
          {
            room_id: 224,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 174
          },
          {
            room_id: 225,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 278,
            e: 195,
            w: null
          },
          {
            room_id: 226,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 300,
            e: 214,
            w: null
          },
          {
            room_id: 227,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 269,
            s: 200,
            e: null,
            w: null
          },
          {
            room_id: 228,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 195,
            s: 281,
            e: null,
            w: null
          },
          {
            room_id: 229,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 183,
            s: 250,
            e: null,
            w: 236
          },
          {
            room_id: 230,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 199,
            s: 307,
            e: 297,
            w: null
          },
          {
            room_id: 231,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 207,
            e: null,
            w: 248
          },
          {
            room_id: 232,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 272,
            s: 197,
            e: null,
            w: 235
          },
          {
            room_id: 233,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 179,
            s: null,
            e: null,
            w: 238
          },
          {
            room_id: 234,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(56,68)",
            elevation: 0,
            terrain: "CAVE",
            n: 368,
            s: 216,
            e: null,
            w: 252
          },
          {
            room_id: 235,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 330,
            s: null,
            e: 232,
            w: 355
          },
          {
            room_id: 236,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 264,
            e: 229,
            w: null
          },
          {
            room_id: 237,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 125,
            w: 245
          },
          {
            room_id: 238,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 233,
            w: null
          },
          {
            room_id: 239,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 198,
            s: null,
            e: null,
            w: 244
          },
          {
            room_id: 240,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 249,
            s: null,
            e: 386,
            w: 221
          },
          {
            room_id: 241,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 205,
            s: null,
            e: 266,
            w: null
          },
          {
            room_id: 242,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,67)",
            elevation: 0,
            terrain: "TRAP",
            n: 287,
            s: 259,
            e: 218,
            w: 275
          },
          {
            room_id: 243,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 293,
            e: 256,
            w: 178
          },
          {
            room_id: 244,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 131,
            s: null,
            e: 239,
            w: null
          },
          {
            room_id: 245,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,66)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 254,
            e: 237,
            w: null
          },
          {
            room_id: 246,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 215,
            e: null,
            w: null
          },
          {
            room_id: 247,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 261,
            w: 217
          },
          {
            room_id: 248,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 296,
            s: null,
            e: 231,
            w: 280
          },
          {
            room_id: 249,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 265,
            s: 240,
            e: 282,
            w: null
          },
          {
            room_id: 250,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 229,
            s: 294,
            e: 289,
            w: null
          },
          {
            room_id: 251,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 315,
            w: 193
          },
          {
            room_id: 252,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,68)",
            elevation: 0,
            terrain: "CAVE",
            n: 284,
            s: null,
            e: 234,
            w: null
          },
          {
            room_id: 253,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 221,
            s: null,
            e: 258,
            w: null
          },
          {
            room_id: 254,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: 245,
            s: null,
            e: null,
            w: 314
          },
          {
            room_id: 255,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 189
          },
          {
            room_id: 256,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 360,
            e: 327,
            w: 243
          },
          {
            room_id: 257,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 320,
            s: null,
            e: 146,
            w: 364
          },
          {
            room_id: 258,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 306,
            w: 253
          },
          {
            room_id: 259,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,66)",
            elevation: 0,
            terrain: "CAVE",
            n: 242,
            s: null,
            e: null,
            w: 310
          },
          {
            room_id: 260,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 167
          },
          {
            room_id: 261,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 277,
            e: 322,
            w: 247
          },
          {
            room_id: 262,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 167,
            s: 370,
            e: 358,
            w: null
          },
          {
            room_id: 263,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,66)",
            elevation: 0,
            terrain: "CAVE",
            n: 218,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 264,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 236,
            s: 274,
            e: null,
            w: 273
          },
          {
            room_id: 265,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 279,
            s: 249,
            e: 270,
            w: null
          },
          {
            room_id: 266,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 241
          },
          {
            room_id: 267,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 285,
            s: 172,
            e: null,
            w: 271
          },
          {
            room_id: 268,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 203,
            e: 411,
            w: 312
          },
          {
            room_id: 269,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 319,
            s: 227,
            e: null,
            w: null
          },
          {
            room_id: 270,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: 416,
            s: null,
            e: 338,
            w: 265
          },
          {
            room_id: 271,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 337,
            s: null,
            e: 267,
            w: null
          },
          {
            room_id: 272,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 295,
            s: 232,
            e: null,
            w: null
          },
          {
            room_id: 273,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 343,
            s: null,
            e: 264,
            w: null
          },
          {
            room_id: 274,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 264,
            s: null,
            e: null,
            w: 308
          },
          {
            room_id: 275,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
            coordinates: "(53,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 242,
            w: 456
          },
          {
            room_id: 276,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 197,
            w: 419
          },
          {
            room_id: 277,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: 261,
            s: null,
            e: 323,
            w: null
          },
          {
            room_id: 278,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 225,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 279,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 265,
            e: null,
            w: null
          },
          {
            room_id: 280,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 325,
            s: null,
            e: 248,
            w: null
          },
          {
            room_id: 281,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 228,
            s: 318,
            e: 309,
            w: 317
          },
          {
            room_id: 282,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 249
          },
          {
            room_id: 283,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 331,
            s: 223,
            e: 313,
            w: null
          },
          {
            room_id: 284,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,69)",
            elevation: 0,
            terrain: "CAVE",
            n: 302,
            s: 252,
            e: null,
            w: 303
          },
          {
            room_id: 285,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 286,
            s: 267,
            e: null,
            w: null
          },
          {
            room_id: 286,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: 336,
            s: 285,
            e: null,
            w: 291
          },
          {
            room_id: 287,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,68)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 242,
            e: null,
            w: 339
          },
          {
            room_id: 288,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 206,
            e: null,
            w: null
          },
          {
            room_id: 289,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 250
          },
          {
            room_id: 290,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 207,
            w: null
          },
          {
            room_id: 291,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: 410,
            s: null,
            e: 286,
            w: 347
          },
          {
            room_id: 292,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 301,
            s: null,
            e: 148,
            w: null
          },
          {
            room_id: 293,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 243,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 294,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 250,
            s: 334,
            e: null,
            w: null
          },
          {
            room_id: 295,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 272,
            e: null,
            w: null
          },
          {
            room_id: 296,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 248,
            e: null,
            w: null
          },
          {
            room_id: 297,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 230
          },
          {
            room_id: 298,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 324,
            e: null,
            w: 164
          },
          {
            room_id: 299,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 311,
            w: 203
          },
          {
            room_id: 300,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 226,
            s: 377,
            e: null,
            w: 389
          },
          {
            room_id: 301,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 304,
            s: 292,
            e: null,
            w: null
          },
          {
            room_id: 302,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,70)",
            elevation: 0,
            terrain: "TRAP",
            n: 422,
            s: 284,
            e: null,
            w: null
          },
          {
            room_id: 303,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,69)",
            elevation: 0,
            terrain: "CAVE",
            n: 361,
            s: null,
            e: 284,
            w: 405
          },
          {
            room_id: 304,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 301,
            e: null,
            w: null
          },
          {
            room_id: 305,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 365,
            s: 222,
            e: null,
            w: null
          },
          {
            room_id: 306,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 397,
            w: 258
          },
          {
            room_id: 307,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 230,
            s: 373,
            e: 371,
            w: 321
          },
          {
            room_id: 308,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 274,
            w: null
          },
          {
            room_id: 309,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 333,
            e: 326,
            w: 281
          },
          {
            room_id: 310,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,66)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: null,
            e: 259,
            w: 412
          },
          {
            room_id: 311,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 299
          },
          {
            room_id: 312,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: 328,
            s: null,
            e: 268,
            w: null
          },
          {
            room_id: 313,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 283
          },
          {
            room_id: 314,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 254,
            w: null
          },
          {
            room_id: 315,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 251
          },
          {
            room_id: 316,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: 344,
            s: null,
            e: null,
            w: 155
          },
          {
            room_id: 317,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 387,
            e: 281,
            w: 409
          },
          {
            room_id: 318,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 281,
            s: 487,
            e: null,
            w: null
          },
          {
            room_id: 319,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: 359,
            s: 269,
            e: 345,
            w: null
          },
          {
            room_id: 320,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: 348,
            s: 257,
            e: null,
            w: null
          },
          {
            room_id: 321,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 413,
            e: 307,
            w: null
          },
          {
            room_id: 322,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 382,
            s: null,
            e: 435,
            w: 261
          },
          {
            room_id: 323,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 433,
            w: 277
          },
          {
            room_id: 324,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 298,
            s: 349,
            e: 354,
            w: null
          },
          {
            room_id: 325,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 353,
            s: 280,
            e: null,
            w: 374
          },
          {
            room_id: 326,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 342,
            e: null,
            w: 309
          },
          {
            room_id: 327,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 427,
            w: 256
          },
          {
            room_id: 328,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 332,
            s: 312,
            e: 357,
            w: 363
          },
          {
            room_id: 329,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 153
          },
          {
            room_id: 330,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: 369,
            s: 235,
            e: null,
            w: 383
          },
          {
            room_id: 331,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 283,
            e: 446,
            w: null
          },
          {
            room_id: 332,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 350,
            s: 328,
            e: null,
            w: null
          },
          {
            room_id: 333,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 309,
            s: 378,
            e: null,
            w: null
          },
          {
            room_id: 334,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 294,
            s: 393,
            e: 341,
            w: 391
          },
          {
            room_id: 335,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 188,
            w: 366
          },
          {
            room_id: 336,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,74)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 286,
            e: null,
            w: null
          },
          {
            room_id: 337,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 271,
            e: null,
            w: null
          },
          {
            room_id: 338,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 379,
            e: null,
            w: 270
          },
          {
            room_id: 339,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,68)",
            elevation: 0,
            terrain: "TRAP",
            n: null,
            s: null,
            e: 287,
            w: 445
          },
          {
            room_id: 340,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 168
          },
          {
            room_id: 341,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 449,
            e: null,
            w: 334
          },
          {
            room_id: 342,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 326,
            s: 432,
            e: null,
            w: null
          },
          {
            room_id: 343,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 273,
            e: null,
            w: 351
          },
          {
            room_id: 344,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: 392,
            s: 316,
            e: 390,
            w: null
          },
          {
            room_id: 345,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 375,
            e: null,
            w: 319
          },
          {
            room_id: 346,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 177,
            w: null
          },
          {
            room_id: 347,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: 452,
            s: 442,
            e: 291,
            w: null
          },
          {
            room_id: 348,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,65)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 320,
            e: null,
            w: null
          },
          {
            room_id: 349,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 324,
            s: 352,
            e: 384,
            w: 356
          },
          {
            room_id: 350,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 436,
            s: 332,
            e: 404,
            w: null
          },
          {
            room_id: 351,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 491,
            e: 343,
            w: 478
          },
          {
            room_id: 352,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 349,
            s: 362,
            e: 485,
            w: null
          },
          {
            room_id: 353,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 325,
            e: null,
            w: null
          },
          {
            room_id: 354,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 324
          },
          {
            room_id: 355,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 235,
            w: null
          },
          {
            room_id: 356,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 349,
            w: null
          },
          {
            room_id: 357,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 328
          },
          {
            room_id: 358,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 401,
            w: 262
          },
          {
            room_id: 359,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,74)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 319,
            e: null,
            w: null
          },
          {
            room_id: 360,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: 256,
            s: null,
            e: 398,
            w: null
          },
          {
            room_id: 361,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,70)",
            elevation: 0,
            terrain: "TRAP",
            n: 408,
            s: 303,
            e: null,
            w: null
          },
          {
            room_id: 362,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 352,
            s: 399,
            e: null,
            w: 463
          },
          {
            room_id: 363,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 372,
            s: null,
            e: 328,
            w: null
          },
          {
            room_id: 364,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: 429,
            s: 381,
            e: 257,
            w: 448
          },
          {
            room_id: 365,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 305,
            e: null,
            w: null
          },
          {
            room_id: 366,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 335,
            w: null
          },
          {
            room_id: 367,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: 111,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 368,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(56,69)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 234,
            e: null,
            w: null
          },
          {
            room_id: 369,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 400,
            s: 330,
            e: null,
            w: 376
          },
          {
            room_id: 370,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 262,
            s: 434,
            e: 407,
            w: null
          },
          {
            room_id: 371,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 475,
            e: null,
            w: 307
          },
          {
            room_id: 372,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: 441,
            s: 363,
            e: null,
            w: null
          },
          {
            room_id: 373,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 307,
            s: 480,
            e: null,
            w: null
          },
          {
            room_id: 374,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 325,
            w: null
          },
          {
            room_id: 375,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 345,
            s: null,
            e: 385,
            w: null
          },
          {
            room_id: 376,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 369,
            w: null
          },
          {
            room_id: 377,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: 300,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 378,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 333,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 379,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 338,
            s: null,
            e: 395,
            w: null
          },
          {
            room_id: 380,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: 424,
            s: null,
            e: null,
            w: 206
          },
          {
            room_id: 381,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: 364,
            s: null,
            e: null,
            w: 394
          },
          {
            room_id: 382,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 322,
            e: 388,
            w: null
          },
          {
            room_id: 383,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 330,
            w: 495
          },
          {
            room_id: 384,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 349
          },
          {
            room_id: 385,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 375
          },
          {
            room_id: 386,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 414,
            w: 240
          },
          {
            room_id: 387,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 317,
            s: 417,
            e: null,
            w: 431
          },
          {
            room_id: 388,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 477,
            w: 382
          },
          {
            room_id: 389,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,51)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 300,
            w: null
          },
          {
            room_id: 390,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 344
          },
          {
            room_id: 391,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 396,
            e: 334,
            w: 428
          },
          {
            room_id: 392,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 344,
            e: 462,
            w: null
          },
          {
            room_id: 393,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 334,
            s: 482,
            e: null,
            w: null
          },
          {
            room_id: 394,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 381,
            w: null
          },
          {
            room_id: 395,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 403,
            e: 421,
            w: 379
          },
          {
            room_id: 396,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(54,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 391,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 397,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 306
          },
          {
            room_id: 398,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 438,
            w: 360
          },
          {
            room_id: 399,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 362,
            s: 467,
            e: null,
            w: null
          },
          {
            room_id: 400,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 369,
            e: null,
            w: null
          },
          {
            room_id: 401,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 358
          },
          {
            room_id: 402,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 176,
            w: 451
          },
          {
            room_id: 403,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: 395,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 404,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 481,
            s: null,
            e: null,
            w: 350
          },
          {
            room_id: 405,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,69)",
            elevation: 0,
            terrain: "CAVE",
            n: 406,
            s: null,
            e: 303,
            w: null
          },
          {
            room_id: 406,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,70)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 405,
            e: null,
            w: 415
          },
          {
            room_id: 407,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 496,
            e: null,
            w: 370
          },
          {
            room_id: 408,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,71)",
            elevation: 0,
            terrain: "CAVE",
            n: 458,
            s: 361,
            e: null,
            w: 423
          },
          {
            room_id: 409,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 317,
            w: null
          },
          {
            room_id: 410,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,74)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 291,
            e: null,
            w: null
          },
          {
            room_id: 411,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,69)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 268
          },
          {
            room_id: 412,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,66)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 488,
            e: 310,
            w: null
          },
          {
            room_id: 413,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(62,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 321,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 414,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,59)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 386
          },
          {
            room_id: 415,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,70)",
            elevation: 0,
            terrain: "TRAP",
            n: null,
            s: null,
            e: 406,
            w: 418
          },
          {
            room_id: 416,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,62)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 270,
            e: null,
            w: null
          },
          {
            room_id: 417,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 387,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 418,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(51,70)",
            elevation: 0,
            terrain: "CAVE",
            n: 425,
            s: 474,
            e: 415,
            w: null
          },
          {
            room_id: 419,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 276,
            w: null
          },
          {
            room_id: 420,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 444,
            e: 213,
            w: 437
          },
          {
            room_id: 421,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 440,
            s: null,
            e: null,
            w: 395
          },
          {
            room_id: 422,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,71)",
            elevation: 0,
            terrain: "TRAP",
            n: 426,
            s: 302,
            e: null,
            w: null
          },
          {
            room_id: 423,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,71)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: null,
            e: 408,
            w: 454
          },
          {
            room_id: 424,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 380,
            e: 473,
            w: null
          },
          {
            room_id: 425,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(51,71)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 418,
            e: null,
            w: 469
          },
          {
            room_id: 426,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,72)",
            elevation: 0,
            terrain: "TRAP",
            n: 457,
            s: 422,
            e: null,
            w: null
          },
          {
            room_id: 427,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 430,
            w: 327
          },
          {
            room_id: 428,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(53,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 391,
            w: null
          },
          {
            room_id: 429,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,64)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 364,
            e: null,
            w: null
          },
          {
            room_id: 430,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: 443,
            s: null,
            e: 439,
            w: 427
          },
          {
            room_id: 431,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 387,
            w: 492
          },
          {
            room_id: 432,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(61,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 342,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 433,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 455,
            e: 460,
            w: 323
          },
          {
            room_id: 434,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(65,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 370,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 435,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 322
          },
          {
            room_id: 436,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(57,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 350,
            e: null,
            w: null
          },
          {
            room_id: 437,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 420,
            w: 497
          },
          {
            room_id: 438,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 465,
            w: 398
          },
          {
            room_id: 439,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,57)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 430
          },
          {
            room_id: 440,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 421,
            e: null,
            w: 476
          },
          {
            room_id: 441,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 372,
            e: null,
            w: null
          },
          {
            room_id: 442,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,72)",
            elevation: 0,
            terrain: "NORMAL",
            n: 347,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 443,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 430,
            e: 471,
            w: null
          },
          {
            room_id: 444,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: 420,
            s: null,
            e: null,
            w: 490
          },
          {
            room_id: 445,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,68)",
            elevation: 0,
            terrain: "CAVE",
            n: 447,
            s: null,
            e: 339,
            w: 450
          },
          {
            room_id: 446,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 466,
            w: 331
          },
          {
            room_id: 447,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,69)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 445,
            e: null,
            w: null
          },
          {
            room_id: 448,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 364,
            w: null
          },
          {
            room_id: 449,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: 341,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 450,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(51,68)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: null,
            e: 445,
            w: null
          },
          {
            room_id: 451,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 402,
            w: 453
          },
          {
            room_id: 452,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(60,74)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 347,
            e: null,
            w: null
          },
          {
            room_id: 453,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 464,
            e: 451,
            w: null
          },
          {
            room_id: 454,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,71)",
            elevation: 0,
            terrain: "CAVE",
            n: 470,
            s: null,
            e: 423,
            w: null
          },
          {
            room_id: 455,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(71,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 433,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 456,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
            coordinates: "(52,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 275,
            w: 499
          },
          {
            room_id: 457,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(55,73)",
            elevation: 0,
            terrain: "TRAP",
            n: 461,
            s: 426,
            e: null,
            w: null
          },
          {
            room_id: 458,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(54,72)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 408,
            e: null,
            w: 459
          },
          {
            room_id: 459,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(53,72)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: null,
            e: 458,
            w: null
          },
          {
            room_id: 460,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 433
          },
          {
            room_id: 461,
            title: "Linh's Shrine",
            description:
              "You are standing before a glowing shrine to a Linh, the Swift. She looks quite fast.",
            coordinates: "(55,74)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 457,
            e: null,
            w: null
          },
          {
            room_id: 462,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,70)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 392
          },
          {
            room_id: 463,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,49)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 468,
            e: 362,
            w: null
          },
          {
            room_id: 464,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,60)",
            elevation: 0,
            terrain: "NORMAL",
            n: 453,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 465,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 498,
            w: 438
          },
          {
            room_id: 466,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 486,
            e: 472,
            w: 446
          },
          {
            room_id: 467,
            title: "Pirate Ry's",
            description:
              "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'",
            coordinates: "(68,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 399,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 468,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 463,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 469,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(50,71)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: null,
            e: 425,
            w: null
          },
          {
            room_id: 470,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,72)",
            elevation: 0,
            terrain: "CAVE",
            n: null,
            s: 454,
            e: null,
            w: null
          },
          {
            room_id: 471,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 443
          },
          {
            room_id: 472,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(70,68)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 466
          },
          {
            room_id: 473,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 494,
            w: 424
          },
          {
            room_id: 474,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(51,69)",
            elevation: 0,
            terrain: "CAVE",
            n: 418,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 475,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 371,
            s: 484,
            e: null,
            w: null
          },
          {
            room_id: 476,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,61)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 440,
            w: null
          },
          {
            room_id: 477,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(72,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 483,
            w: 388
          },
          {
            room_id: 478,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,53)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 351,
            w: null
          },
          {
            room_id: 479,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(68,63)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 205
          },
          {
            room_id: 480,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(63,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 373,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 481,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(58,73)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: 404,
            e: null,
            w: null
          },
          {
            room_id: 482,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(55,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 393,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 483,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 477
          },
          {
            room_id: 484,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(64,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 475,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 485,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,50)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 352
          },
          {
            room_id: 486,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(69,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: 466,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 487,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,47)",
            elevation: 0,
            terrain: "NORMAL",
            n: 318,
            s: 489,
            e: null,
            w: null
          },
          {
            room_id: 488,
            title: "A Dark Cave",
            description: "You are standing in a dark cave.",
            coordinates: "(52,65)",
            elevation: 0,
            terrain: "CAVE",
            n: 412,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 489,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(59,46)",
            elevation: 0,
            terrain: "NORMAL",
            n: 487,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 490,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(51,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 444,
            w: 493
          },
          {
            room_id: 491,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(52,52)",
            elevation: 0,
            terrain: "NORMAL",
            n: 351,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 492,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(56,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 431,
            w: null
          },
          {
            room_id: 493,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(50,54)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 490,
            w: null
          },
          {
            room_id: 494,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(67,71)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 473
          },
          {
            room_id: 495,
            title: "The Transmogriphier",
            description:
              'A strange machine stands in this room.  There is a large opening on the top.  A placard reads, "Test your luck!  One item and one Lambdacoin!"',
            coordinates: "(50,58)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 383,
            w: null
          },
          {
            room_id: 496,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(66,48)",
            elevation: 0,
            terrain: "NORMAL",
            n: 407,
            s: null,
            e: null,
            w: null
          },
          {
            room_id: 497,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(50,55)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 437,
            w: null
          },
          {
            room_id: 498,
            title: "A misty room",
            description:
              "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
            coordinates: "(73,56)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: null,
            w: 465
          },
          {
            room_id: 499,
            title: "Glasowyn's Grave",
            description:
              "You see a moss-topped gravestone which reads: 'Here lies Glasowyn of Web17/Labs12/CS18, who was crushed under the weight of her own gold.' There doesn't seem to be any gold around, but marks in the dirt suggest that someone has knelt there, perhaps in prayer.",
            coordinates: "(51,67)",
            elevation: 0,
            terrain: "NORMAL",
            n: null,
            s: null,
            e: 456,
            w: null
          }
        
        
      ]);
    });
};
