(function() {
  var BaseModel, Branches, Utils,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Utils = require('../Utils');

  Branches = (function(superClass) {
    extend(Branches, superClass);

    function Branches() {
      this.unprotect = bind(this.unprotect, this);
      this.all = bind(this.all, this);
      return Branches.__super__.constructor.apply(this, arguments);
    }

    Branches.prototype.all = function(projectId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Branches::all()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/repository/branches", (function(_this) {
        return function(err, res, data) {
          if (fn) {
            return fn(err, res, data);
          }
        };
      })(this));
    };

    Branches.prototype.unprotect = function(projectId, branchName, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Branches::unprotect()");
      return this.put("projects/" + (Utils.parseProjectId(projectId)) + "/repository/branches/" + branchName + "/unprotect", (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return Branches;

  })(BaseModel);

  module.exports = function(client) {
    return new Branches(client);
  };

}).call(this);
