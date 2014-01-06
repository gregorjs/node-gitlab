// Generated by CoffeeScript 1.6.3
(function() {
  var BaseModel, Users, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BaseModel = require('./BaseModel');

  Users = (function(_super) {
    __extends(Users, _super);

    function Users() {
      this.session = __bind(this.session, this);
      this.create = __bind(this.create, this);
      this.show = __bind(this.show, this);
      this.all = __bind(this.all, this);
      _ref = Users.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Users.prototype.all = function(fn) {
      var _this = this;
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::all()");
      return this.get("users", function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    Users.prototype.show = function(userId, fn) {
      var _this = this;
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::show()");
      return this.get("users/" + (parseInt(userId)), function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    Users.prototype.create = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::create()", params);
      return this.post("users", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    Users.prototype.session = function(email, password, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::session()");
      params = {
        email: email,
        password: password
      };
      return this.post("session", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Users;

  })(BaseModel);

  module.exports = function(client) {
    return new Users(client);
  };

}).call(this);