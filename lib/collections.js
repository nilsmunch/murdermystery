Games = new Mongo.Collection("games");
Players = new Mongo.Collection("players");
Messages = new Mongo.Collection("messages");

Games.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});


Messages.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Players.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Messages.deny({insert: function(userId, game) {
  game.createdAt = new Date().valueOf();
  return false;
}});

Games.deny({insert: function(userId, game) {
  game.createdAt = new Date().valueOf();
  return false;
}});

Players.deny({insert: function(userId, player) {
  player.createdAt = new Date().valueOf();
  return false;
}});
