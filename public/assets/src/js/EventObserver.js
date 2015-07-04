export default class EventObserver {
  
  static on(name, listener, context) {
    if (EventObserver.listeners[name] == null) {
      EventObserver.listeners[name] = [];
    }
    EventObserver.listeners[name].push([listener, context]);
    return this;
  }

  static off(name, listener) {
    var i, j, len, listeners, ref;
    if (!EventObserver.listeners[name]) {
      return this;
    }
    ref = EventObserver.listeners[name];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      listeners = ref[i];
      if (listeners[0] === listener) {
        EventObserver.listeners[name].splice(i, 1);
      }
    }
    return this;
  }

  static trigger(name, args) {
    var j, len, list, listeners, ref;
    list = (ref = EventObserver.listeners) != null ? ref[name] : void 0;
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
}

EventObserver.listeners = {};