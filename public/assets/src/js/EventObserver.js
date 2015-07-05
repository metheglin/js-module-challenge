export default function EventObserver(){};

EventObserver.prototype.on = function(name, listener, context) {
  if (this.listeners == null) {
    this.listeners = {};
  }
  if (this.listeners[name] == null) {
    this.listeners[name] = [];
  }
  this.listeners[name].push([listener, context]);
  return this;
}

EventObserver.prototype.off = function(name, listener) {
  var i, j, len, listeners, ref;
  if (!this.listeners[name]) {
    return this;
  }
  ref = this.listeners[name];
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    listeners = ref[i];
    if (listeners[0] === listener) {
      this.listeners[name].splice(i, 1);
    }
  }
  return this;
}

EventObserver.prototype.trigger = function(name, args) {
  var j, len, list, listeners, ref;
  list = (ref = this.listeners) != null ? ref[name] : void 0;
  if (!list) {
    return this;
  }
  for (j = 0, len = list.length; j < len; j++) {
    listeners = list[j];
    if ( listeners[1] ) {
      listeners[0].apply( listeners[1], args );
    } else {
      listeners[0].apply( this, args );
    }
  }
  return this;
};