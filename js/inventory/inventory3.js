!(function (e) {
  var t = {};
  function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
              for (var o in e)
                  n.d(
                      r,
                      o,
                      function (t) {
                          return e[t];
                      }.bind(null, o)
                  );
          return r;
      }),
      (n.n = function (e) {
          var t =
              e && e.__esModule
                  ? function () {
                        return e.default;
                    }
                  : function () {
                        return e;
                    };
          return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 87));
})({
  87: function (e, t) {
      function n(e) {
          if (("performance" in window && window.performance && "function" == typeof window.performance.mark && !window.BOOMR_no_mark && window.performance.mark("boomr:check_doc_domain"), window)) {
              if (!e) {
                  if (window.parent === window || !document.getElementById("boomr-if-as")) return;
                  if (window.BOOMR && BOOMR.boomerang_frame && BOOMR.window)
                      try {
                          BOOMR.boomerang_frame.document.domain !== BOOMR.window.document.domain && (BOOMR.boomerang_frame.document.domain = BOOMR.window.document.domain);
                      } catch (e) {
                          BOOMR.isCrossOriginError(e) || BOOMR.addError(e, "BOOMR_check_doc_domain.domainFix");
                      }
                  e = document.domain;
              }
              if (e && -1 !== e.indexOf(".") && window.parent) {
                  try {
                      return void window.parent.document;
                  } catch (t) {
                      try {
                          document.domain = e;
                      } catch (e) {
                          return;
                      }
                  }
                  try {
                      return void window.parent.document;
                  } catch (t) {
                      e = e.replace(/^[\w\-]+\./, "");
                  }
                  n(e);
              }
          }
      }
      "performance" in window && window.performance && "function" == typeof window.performance.mark && !window.BOOMR_no_mark && window.performance.mark("boomr:startup"),
          (BOOMR_start = new Date().getTime()),
          n(),
          (function (e) {
              var t,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = e;
              if (
                  (e.parent !== e && document.getElementById("boomr-if-as") && "script" === document.getElementById("boomr-if-as").nodeName.toLowerCase() && (e = e.parent),
                  (o = e.document),
                  e.BOOMR || (e.BOOMR = {}),
                  (BOOMR = e.BOOMR),
                  !BOOMR.version)
              ) {
                  if (
                      ((BOOMR.version = "%boomerang_version%"),
                      (BOOMR.window = e),
                      (BOOMR.boomerang_frame = l),
                      BOOMR.plugins || (BOOMR.plugins = {}),
                      (function () {
                          try {
                              void 0 !== new e.CustomEvent("CustomEvent") &&
                                  (i = function (t, n) {
                                      return new e.CustomEvent(t, n);
                                  });
                          } catch (e) {}
                          try {
                              !i &&
                                  o.createEvent &&
                                  o.createEvent("CustomEvent") &&
                                  (i = function (e, t) {
                                      var n = o.createEvent("CustomEvent");
                                      return (t = t || { cancelable: !1, bubbles: !1 }), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                                  });
                          } catch (e) {}
                          !i &&
                              o.createEventObject &&
                              (i = function (e, t) {
                                  var n = o.createEventObject();
                                  return (n.type = n.propertyName = e), (n.detail = t.detail), n;
                              }),
                              i || (i = function () {});
                      })(),
                      (a = function (e, t, n) {
                          var r = i(e, { detail: t });
                          function a() {
                              try {
                                  o.dispatchEvent ? o.dispatchEvent(r) : o.fireEvent && o.fireEvent("onpropertychange", r);
                              } catch (t) {
                                  BOOMR.debug("Error when dispatching " + e);
                              }
                          }
                          r && (n ? BOOMR.setImmediate(a) : a());
                      }),
                      void 0 !== o.hidden
                          ? ((s = "visibilityState"), (u = "visibilitychange"))
                          : void 0 !== o.mozHidden
                          ? ((s = "mozVisibilityState"), (u = "mozvisibilitychange"))
                          : void 0 !== o.msHidden
                          ? ((s = "msVisibilityState"), (u = "msvisibilitychange"))
                          : void 0 !== o.webkitHidden && ((s = "webkitVisibilityState"), (u = "webkitvisibilitychange")),
                      (t = {
                          beacon_url: "",
                          beacon_url_force_https: !0,
                          beacon_urls_allowed: [],
                          beacon_type: "AUTO",
                          beacon_auth_key: "Authorization",
                          beacon_auth_token: void 0,
                          beacon_with_credentials: !1,
                          beacon_disable_sendbeacon: !1,
                          site_domain: e.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/, "$1").toLowerCase(),
                          user_ip: "",
                          autorun: !0,
                          hasSentPageLoadBeacon: !1,
                          r: void 0,
                          events: {
                              page_ready: [],
                              page_unload: [],
                              before_unload: [],
                              dom_loaded: [],
                              visibility_changed: [],
                              prerender_to_visible: [],
                              before_beacon: [],
                              beacon: [],
                              page_load_beacon: [],
                              xhr_load: [],
                              click: [],
                              form_submit: [],
                              config: [],
                              xhr_init: [],
                              spa_init: [],
                              spa_navigation: [],
                              spa_cancel: [],
                              xhr_send: [],
                              xhr_error: [],
                              error: [],
                              netinfo: [],
                              rage_click: [],
                          },
                          public_events: { before_beacon: "onBeforeBoomerangBeacon", beacon: "onBoomerangBeacon", onboomerangloaded: "onBoomerangLoaded" },
                          translate_events: { onbeacon: "beacon", onconfig: "config", onerror: "error", onxhrerror: "xhr_error" },
                          unloadEventsCount: 0,
                          unloadEventCalled: 0,
                          listenerCallbacks: {},
                          vars: {},
                          singleBeaconVars: {},
                          varPriority: { "-1": {}, 1: {} },
                          errors: {},
                          disabled_plugins: {},
                          localStorageSupported: !1,
                          LOCAL_STORAGE_PREFIX: "_boomr_",
                          nativeOverwrites: [],
                          xb_handler: function (n) {
                              return function (r) {
                                  var o;
                                  r || (r = e.event),
                                      r.target ? (o = r.target) : r.srcElement && (o = r.srcElement),
                                      3 === o.nodeType && (o = o.parentNode),
                                      (o && o.nodeName && "OBJECT" === o.nodeName.toUpperCase() && "application/x-shockwave-flash" === o.type) || t.fireEvent(n, o);
                              };
                          },
                          clearEvents: function () {
                              var e;
                              for (e in this.events) this.events.hasOwnProperty(e) && (this.events[e] = []);
                          },
                          clearListeners: function () {
                              var e;
                              for (e in t.listenerCallbacks) if (t.listenerCallbacks.hasOwnProperty(e)) for (; t.listenerCallbacks[e].length; ) BOOMR.utils.removeListener(t.listenerCallbacks[e][0].el, e, t.listenerCallbacks[e][0].fn);
                              t.listenerCallbacks = {};
                          },
                          fireEvent: function (e, t) {
                              var n, r, o, i;
                              if (((e = e.toLowerCase()), BOOMR.utils.mark("fire_event"), BOOMR.utils.mark("fire_event:" + e + ":start"), this.translate_events[e] && (e = this.translate_events[e]), this.events.hasOwnProperty(e))) {
                                  for (this.public_events.hasOwnProperty(e) && a(this.public_events[e], t), o = this.events[e], "before_beacon" !== e && "beacon" !== e && BOOMR.real_sendBeacon(), i = o.length, n = 0; n < i; n++)
                                      try {
                                          (r = o[n]).fn.call(r.scope, t, r.cb_data);
                                      } catch (t) {
                                          BOOMR.addError(t, "fireEvent." + e + "<" + n + ">");
                                      }
                                  for (n = 0; n < i; n++) o[n].once && (o.splice(n, 1), i--, n--);
                                  BOOMR.utils.mark("fire_event:" + e + ":end"), BOOMR.utils.measure("fire_event:" + e, "fire_event:" + e + ":start", "fire_event:" + e + ":end");
                              }
                          },
                          spaNavigation: function () {
                              t.onloadfired = !0;
                          },
                          beaconUrlAllowed: function (e) {
                              if (!t.beacon_urls_allowed || 0 === t.beacon_urls_allowed.length) return !0;
                              for (var n = 0; n < t.beacon_urls_allowed.length; n++) if (new RegExp(t.beacon_urls_allowed[n]).exec(e)) return !0;
                              return !1;
                          },
                          checkLocalStorageSupport: function () {
                              var n = t.LOCAL_STORAGE_PREFIX + "clss";
                              t.localStorageSupported = !1;
                              try {
                                  if (!e.JSON || !e.localStorage) return;
                                  e.localStorage.setItem(n, n), (t.localStorageSupported = e.localStorage.getItem(n) === n), e.localStorage.removeItem(n);
                              } catch (e) {
                                  t.localStorageSupported = !1;
                              }
                          },
                          onFrameUnloaded: function () {
                              var e, n;
                              for (BOOMR.isUnloaded = !0, e = 0; e < t.nativeOverwrites.length; e++) (n = t.nativeOverwrites[e]).obj[n.functionName] = n.origFn;
                              t.nativeOverwrites = [];
                          },
                      }),
                      (r = {
                          t_start: BOOMR_start,
                          t_end: void 0,
                          url: "",
                          config_url: null,
                          loadedLate: !1,
                          beaconsSent: 0,
                          isUnloaded: !1,
                          beaconInQueue: !1,
                          constants: { BEACON_TYPE_SPAS: ["spa", "spa_hard"], MAX_GET_LENGTH: 2e3 },
                          session: { domain: t.site_domain, ID: Math.random().toString(36).replace(/^0\./, ""), start: void 0, length: 0, enabled: !0 },
                          utils: {
                              hasPostMessageSupport: function () {
                                  return !(!e.postMessage || ("function" != typeof e.postMessage && "object" != typeof e.postMessage));
                              },
                              objectToString: function (e, t, n) {
                                  var r,
                                      o = [];
                                  if (!e || "object" != typeof e) return e;
                                  if ((void 0 === t && (t = "\n\t"), n || (n = 0), BOOMR.utils.isArray(e))) {
                                      for (r = 0; r < e.length; r++)
                                          n > 0 && null !== e[r] && "object" == typeof e[r] ? o.push(this.objectToString(e[r], t + ("\n\t" === t ? "\t" : ""), n - 1)) : "&" === t ? o.push(encodeURIComponent(e[r])) : o.push(e[r]);
                                      t = ",";
                                  } else
                                      for (r in e)
                                          Object.prototype.hasOwnProperty.call(e, r) &&
                                              (n > 0 && null !== e[r] && "object" == typeof e[r]
                                                  ? o.push(encodeURIComponent(r) + "=" + this.objectToString(e[r], t + ("\n\t" === t ? "\t" : ""), n - 1))
                                                  : "&" === t
                                                  ? o.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]))
                                                  : o.push(r + "=" + e[r]));
                                  return o.join(t);
                              },
                              getCookie: function (e) {
                                  return e
                                      ? (BOOMR.utils.mark("get_cookie"),
                                        (e = " " + e + "="),
                                        (t = (n = " " + o.cookie + ";").indexOf(e)) >= 0 ? ((t += e.length), (n = n.substring(t, n.indexOf(";", t)).replace(/^"/, "").replace(/"$/, ""))) : void 0)
                                      : null;
                                  var t, n;
                              },
                              setCookie: function (e, t, n) {
                                  var r, i, a, s, u;
                                  if (!e || !BOOMR.session.domain || void 0 === t) return BOOMR.debug("Invalid parameters or site domain: " + e + "/" + t + "/" + BOOMR.session.domain), BOOMR.addVar("nocookie", 1), !1;
                                  if ((BOOMR.utils.mark("set_cookie"), (i = e + '="' + (r = this.objectToString(t, "&")) + '"').length < 500)) {
                                      if (
                                          ((s = [i, "path=/", "domain=" + BOOMR.session.domain]),
                                          "number" == typeof n && ((u = new Date()).setTime(u.getTime() + 1e3 * n), (u = u.toGMTString()), s.push("expires=" + u)),
                                          (o.cookie = s.join("; ")),
                                          r === (a = this.getCookie(e)) || (void 0 === a && "number" == typeof n && n <= 0))
                                      )
                                          return !0;
                                      BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n" + r + "\n" + a);
                                  } else BOOMR.warn("Cookie too long: " + i.length + " " + i);
                                  return BOOMR.addVar("nocookie", 1), !1;
                              },
                              getSubCookies: function (e) {
                                  var t,
                                      n,
                                      r,
                                      o,
                                      i = !1,
                                      a = {};
                                  if (!e) return null;
                                  if ("string" != typeof e) return BOOMR.debug("TypeError: cookie is not a string: " + typeof e), null;
                                  for (n = 0, r = (t = e.split("&")).length; n < r; n++) (o = t[n].split("="))[0] && (o.push(""), (a[decodeURIComponent(o[0])] = decodeURIComponent(o[1])), (i = !0));
                                  return i ? a : null;
                              },
                              removeCookie: function (e) {
                                  return this.setCookie(e, {}, -86400);
                              },
                              getLocalStorage: function (n) {
                                  var r, o;
                                  if (!n || !t.localStorageSupported) return null;
                                  BOOMR.utils.mark("get_local_storage");
                                  try {
                                      if (null === (r = e.localStorage.getItem(t.LOCAL_STORAGE_PREFIX + n))) return;
                                      o = e.JSON.parse(r);
                                  } catch (e) {
                                      return BOOMR.warn(e), null;
                                  }
                                  return o && "object" == typeof o.items ? ("number" == typeof o.expires && BOOMR.now() >= o.expires ? void this.removeLocalStorage(n) : o.items) : (this.removeLocalStorage(n), null);
                              },
                              setLocalStorage: function (n, r, o) {
                                  var i, a, s;
                                  if (!n || !t.localStorageSupported || "object" != typeof r) return !1;
                                  if ((BOOMR.utils.mark("set_local_storage"), (i = { items: r }), "number" == typeof o && (i.expires = BOOMR.now() + 1e3 * o), (a = e.JSON.stringify(i)).length < 5e4)) {
                                      try {
                                          if ((e.localStorage.setItem(t.LOCAL_STORAGE_PREFIX + n, a), a === (s = e.localStorage.getItem(t.LOCAL_STORAGE_PREFIX + n)))) return !0;
                                      } catch (e) {}
                                      BOOMR.warn("Saved storage value doesn't match what we tried to set:\n" + a + "\n" + s);
                                  } else BOOMR.warn("Storage items too large: " + a.length + " " + a);
                                  return !1;
                              },
                              removeLocalStorage: function (n) {
                                  if (!n || !t.localStorageSupported) return !1;
                                  try {
                                      return e.localStorage.removeItem(t.LOCAL_STORAGE_PREFIX + n), !0;
                                  } catch (e) {}
                                  return !1;
                              },
                              cleanupURL: function (e, n) {
                                  if (!e || BOOMR.utils.isArray(e)) return "";
                                  if ((t.strip_query_string && (e = e.replace(/\?.*/, "?qs-redacted")), void 0 !== n && e && e.length > n)) {
                                      var r = e.indexOf("?");
                                      e = -1 !== r && r < n ? e.substr(0, r) + "?..." : e.substr(0, n - 3) + "...";
                                  }
                                  return e;
                              },
                              hashQueryString: function (e, t) {
                                  return e
                                      ? e.match
                                          ? (e.match(/^\/\//) && (e = location.protocol + e),
                                            e.match(/^(https?|file):/)
                                                ? (t && (e = e.replace(/#.*/, "")),
                                                  BOOMR.utils.MD5
                                                      ? e.replace(/\?([^#]*)/, function (e, t) {
                                                            return "?" + (t.length > 10 ? BOOMR.utils.MD5(t) : t);
                                                        })
                                                      : e)
                                                : (BOOMR.error("Passed in URL is invalid: " + e), ""))
                                          : (BOOMR.addError("TypeError: Not a string", "hashQueryString", typeof e), "")
                                      : e;
                              },
                              pluginConfig: function (e, t, n, r) {
                                  var o,
                                      i = 0;
                                  if (!t || !t[n]) return !1;
                                  for (o = 0; o < r.length; o++) void 0 !== t[n][r[o]] && ((e[r[o]] = t[n][r[o]]), i++);
                                  return i > 0;
                              },
                              arrayFilter: function (e, t) {
                                  var n = [];
                                  if (!(this.isArray(e) || (e && "number" == typeof e.length)) || "function" != typeof t) return n;
                                  if ("function" == typeof e.filter) n = e.filter(t);
                                  else for (var r, o = -1, i = e.length; ++o < i; ) t((r = e[o]), o, e) && (n[n.length] = r);
                                  return n;
                              },
                              arrayFind: function (e, t) {
                                  if ((this.isArray(e) || (e && "number" == typeof e.length)) && "function" == typeof t) {
                                      if ("function" == typeof e.find) return e.find(t);
                                      for (var n, r = -1, o = e.length; ++r < o; ) if (t((n = e[r]), r, e)) return n;
                                  }
                              },
                              isMutationObserverSupported: function () {
                                  return !(e && e.navigator && e.navigator.userAgent && e.navigator.userAgent.match(/Trident.*rv[ :]*11\./)) && e && e.MutationObserver && "function" == typeof e.MutationObserver;
                              },
                              addObserver: function (t, n, r, o, i, a) {
                                  var s,
                                      u,
                                      l = { observer: null, timer: null };
                                  if ((BOOMR.utils.mark("add_observer"), !this.isMutationObserverSupported() || !o || !t)) return null;
                                  function c(e) {
                                      var t = !1;
                                      BOOMR.utils.mark("mutation_observer_callback"),
                                          l.timer && (clearTimeout(l.timer), (l.timer = null)),
                                          o && ((t = o.call(a, e, i)) || (o = null)),
                                          !t && l.observer && (l.observer.disconnect(), (l.observer = null)),
                                          "number" == typeof t && t > 0 && (l.timer = setTimeout(c, t));
                                  }
                                  return (
                                      (s = e.MutationObserver),
                                      e.Zone &&
                                          "function" == typeof e.Zone.__symbol__ &&
                                          (u = e.Zone.__symbol__("MutationObserver")) &&
                                          "string" == typeof u &&
                                          e.hasOwnProperty(u) &&
                                          "function" == typeof e[u] &&
                                          (BOOMR.debug("Detected Zone.js, using native MutationObserver"), (s = e[u])),
                                      (l.observer = new s(c)),
                                      r && (l.timer = setTimeout(c, l.timeout)),
                                      l.observer.observe(t, n),
                                      l
                                  );
                              },
                              addListener: function (e, n, r, o) {
                                  var i = !1;
                                  BOOMR.utils.mark("add_listener"),
                                      e.addEventListener ? (o && BOOMR.browser.supportsPassive() && (i = { capture: !1, passive: !0 }), e.addEventListener(n, r, i)) : e.attachEvent && e.attachEvent("on" + n, r),
                                      (t.listenerCallbacks[n] = t.listenerCallbacks[n] || []),
                                      t.listenerCallbacks[n].push({ el: e, fn: r });
                              },
                              removeListener: function (e, n, r) {
                                  if ((BOOMR.utils.mark("remove_listener"), e.removeEventListener ? e.removeEventListener(n, r, !1) : e.detachEvent && e.detachEvent("on" + n, r), t.listenerCallbacks.hasOwnProperty(n)))
                                      for (var o = 0; o < t.listenerCallbacks[n].length; o++) if (r === t.listenerCallbacks[n][o].fn && e === t.listenerCallbacks[n][o].el) return void t.listenerCallbacks[n].splice(o, 1);
                              },
                              isArray: function (e) {
                                  return "[object Array]" === Object.prototype.toString.call(e);
                              },
                              inArray: function (e, t) {
                                  var n;
                                  if (void 0 === e || void 0 === t || !t.length) return !1;
                                  for (n = 0; n < t.length; n++) if (t[n] === e) return !0;
                                  return !1;
                              },
                              getQueryParamValue: function (e, t) {
                                  var n, r, o, i;
                                  if (!e) return null;
                                  for (
                                      "string" == typeof t ? ((n = BOOMR.window.document.createElement("a")).href = t) : (n = "object" == typeof t && "string" == typeof t.search ? t : BOOMR.window.location),
                                          r = n.search.slice(1).split(/&/),
                                          o = 0;
                                      o < r.length;
                                      o++
                                  )
                                      if (r[o] && (i = r[o].split("=")).length && i[0] === e) return i.length > 1 ? decodeURIComponent(i.splice(1).join("=").replace(/\+/g, " ")) : "";
                                  return null;
                              },
                              generateUUID: function () {
                                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                      var t = (16 * Math.random()) | 0;
                                      return ("x" === e ? t : (3 & t) | 8).toString(16);
                                  });
                              },
                              generateId: function (e) {
                                  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".substr(0, e || 40).replace(/x/g, function (e) {
                                      return "0" === (e = (Math.random() || 0.01).toString(36)) ? "0" : e.substr(2, 1);
                                  });
                              },
                              serializeForUrl: function (e) {
                                  return BOOMR.utils.Compression && BOOMR.utils.Compression.jsUrl ? BOOMR.utils.Compression.jsUrl(e) : window.JSON ? JSON.stringify(e) : (BOOMR.debug("JSON is not supported"), "");
                              },
                              getMyURL: function () {
                                  var e,
                                      t = document.currentScript || document.getElementById("boomr-if-as") || document.getElementById("boomr-scr-as");
                                  if (t) return t.src;
                                  var n,
                                      r = document.getElementsByTagName("script");
                                  for (n = r.length; n--; ) if ("interactive" === r[n].readyState) return r[n].src;
                                  try {
                                      throw new Error();
                                  } catch (t) {
                                      if (
                                          "stack" in t &&
                                          (e = this.arrayFilter(t.stack.split(/\n/), function (e) {
                                              return e.match(/https?:\/\//);
                                          })) &&
                                          e.length
                                      )
                                          return e[0].replace(/.*(https?:\/\/.+?)(:\d+)+\D*$/m, "$1");
                                  }
                                  return "";
                              },
                              scroll: function () {
                                  var t = void 0 !== e.pageXOffset,
                                      n = "CSS1Compat" === (e.document.compatMode || ""),
                                      r = { x: 0, y: 0 };
                                  return (
                                      t
                                          ? "function" == typeof e.pageXOffset
                                              ? ((r.x = e.pageXOffset()), (r.y = e.pageYOffset()))
                                              : ((r.x = e.pageXOffset), (r.y = e.pageYOffset))
                                          : n
                                          ? ((r.x = e.document.documentElement.scrollLeft), (r.y = e.document.documentElement.scrollTop))
                                          : ((r.x = e.document.body.scrollLeft), (r.y = e.document.body.scrollTop)),
                                      "number" == typeof r.sx && (r.sx = Math.round(r.sx)),
                                      "number" == typeof r.sy && (r.sy = Math.round(r.sy)),
                                      r
                                  );
                              },
                              windowHeight: function () {
                                  return e.innerHeight || e.document.documentElement.clientHeight || e.document.body.clientHeight;
                              },
                              windowWidth: function () {
                                  return e.innerWidth || e.document.documentElement.clientWidth || e.document.body.clientWidth;
                              },
                              isNative: function (e) {
                                  return !!e && e.toString && !e.hasOwnProperty("toString") && /\[native code\]/.test(String(e));
                              },
                              overwriteNative: function (e, n, r) {
                                  e && r && (BOOMR.boomerang_frame !== BOOMR.window && t.nativeOverwrites.push({ obj: e, functionName: n, origFn: e[n] }), (e[n] = r));
                              },
                              isInteger: function (e) {
                                  return (
                                      Number.isInteger ||
                                      function (e) {
                                          return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
                                      }
                                  )(e);
                              },
                              forEach: function (e, t, n) {
                                  if (BOOMR.utils.isArray(e) && "function" == typeof t) for (var r = e.length, o = 0; o < r; o++) e.hasOwnProperty(o) && t.call(n, e[o], o, e);
                              },
                              mark: function (e) {
                                  var t = BOOMR.getPerformance();
                                  t && "function" == typeof t.mark && !BOOMR.window.BOOMR_no_mark && t.mark("boomr:" + e);
                              },
                              measure: function (e, t, n) {
                                  var r = BOOMR.getPerformance();
                                  r && "function" == typeof r.measure && !BOOMR.window.BOOMR_no_mark && r.measure("boomr:" + e, t ? "boomr:" + t : void 0, n ? "boomr:" + n : void 0);
                              },
                          },
                          browser: {
                              results: {},
                              supportsPassive: function () {
                                  if (void 0 === BOOMR.browser.results.supportsPassive) {
                                      if (((BOOMR.browser.results.supportsPassive = !1), !Object.defineProperty)) return !1;
                                      try {
                                          var e = Object.defineProperty({}, "passive", {
                                              get: function () {
                                                  BOOMR.browser.results.supportsPassive = !0;
                                              },
                                          });
                                          window.addEventListener("test", null, e);
                                      } catch (e) {}
                                  }
                                  return BOOMR.browser.results.supportsPassive;
                              },
                          },
                          init: function (r) {
                              var i,
                                  a,
                                  s = [
                                      "autorun",
                                      "beacon_auth_key",
                                      "beacon_auth_token",
                                      "beacon_with_credentials",
                                      "beacon_disable_sendbeacon",
                                      "beacon_url",
                                      "beacon_url_force_https",
                                      "beacon_type",
                                      "site_domain",
                                      "strip_query_string",
                                      "user_ip",
                                  ];
                              if (
                                  (BOOMR.utils.mark("init"),
                                  n(),
                                  r || (r = {}),
                                  void 0 !== r.log && (this.log = r.log),
                                  this.log || (this.log = function () {}),
                                  this.pageId || ((this.pageId = BOOMR.utils.generateId(8)), BOOMR.debug("Generated PageID: " + this.pageId)),
                                  r.primary && t.handlers_attached)
                              )
                                  return this;
                              for (a in ("string" == typeof r.site_domain && (this.session.domain = r.site_domain), void 0 !== r.autorun && (t.autorun = r.autorun), BOOMR.utils.mark("init:plugins:start"), this.plugins))
                                  if (this.plugins.hasOwnProperty(a)) {
                                      if (r[a] && r[a].hasOwnProperty("enabled") && !1 === r[a].enabled) {
                                          (t.disabled_plugins[a] = 1), "function" == typeof this.plugins[a].disable && this.plugins[a].disable();
                                          continue;
                                      }
                                      if (t.disabled_plugins[a]) {
                                          if (!r[a] || !r[a].hasOwnProperty("enabled") || !0 !== r[a].enabled) continue;
                                          "function" == typeof this.plugins[a].enable && this.plugins[a].enable(), delete t.disabled_plugins[a];
                                      }
                                      if ("function" == typeof this.plugins[a].init)
                                          try {
                                              BOOMR.utils.mark("init:plugins:" + a + ":start"),
                                                  this.plugins[a].init(r),
                                                  BOOMR.utils.mark("init:plugins:" + a + ":end"),
                                                  BOOMR.utils.measure("init:plugins:" + a, "init:plugins:" + a + ":start", "init:plugins:" + a + ":end");
                                          } catch (e) {
                                              BOOMR.addError(e, a + ".init");
                                          }
                                  }
                              for (BOOMR.utils.mark("init:plugins:end"), BOOMR.utils.measure("init:plugins", "init:plugins:start", "init:plugins:end"), i = 0; i < s.length; i++) void 0 !== r[s[i]] && (t[s[i]] = r[s[i]]);
                              return (
                                  ((!t.handlers_attached && !r.wait) || (t.handlers_attached && t.waiting_for_config)) &&
                                      (t.onloadfired || (void 0 !== t.autorun && !1 === t.autorun) || (BOOMR.hasBrowserOnloadFired() && (BOOMR.loadedLate = !0), BOOMR.attach_page_ready(BOOMR.page_ready_autorun)),
                                      (t.waiting_for_config = !1)),
                                  t.handlers_attached ||
                                      (r.wait && (t.waiting_for_config = !0),
                                      BOOMR.attach_page_ready(function () {
                                          BOOMR.t_onload || (BOOMR.t_onload = BOOMR.now());
                                      }),
                                      BOOMR.utils.addListener(e, "DOMContentLoaded", function () {
                                          t.fireEvent("dom_loaded");
                                      }),
                                      BOOMR.fireEvent("config", r),
                                      BOOMR.subscribe("config", function (e) {
                                          e.beacon_url && (t.beacon_url = e.beacon_url);
                                      }),
                                      BOOMR.subscribe("spa_navigation", t.spaNavigation, null, t),
                                      (function () {
                                          var n, r;
                                          for (
                                              void 0 !== u &&
                                                  (BOOMR.utils.addListener(o, u, function () {
                                                      t.fireEvent("visibility_changed");
                                                  }),
                                                  (t.lastVisibilityState = BOOMR.visibilityState()),
                                                  BOOMR.subscribe("visibility_changed", function () {
                                                      var e = BOOMR.visibilityState();
                                                      (BOOMR.lastVisibilityEvent[e] = BOOMR.now()),
                                                          BOOMR.debug("Visibility changed from " + t.lastVisibilityState + " to " + e),
                                                          "prerender" === t.lastVisibilityState && "prerender" !== e && (BOOMR.addVar("vis.pre", "1"), t.fireEvent("prerender_to_visible")),
                                                          (t.lastVisibilityState = e);
                                                  })),
                                                  BOOMR.utils.addListener(o, "mouseup", t.xb_handler("click")),
                                                  n = o.getElementsByTagName("form"),
                                                  r = 0;
                                              r < n.length;
                                              r++
                                          )
                                              BOOMR.utils.addListener(n[r], "submit", t.xb_handler("form_submit"));
                                          e.onpagehide ||
                                              null === e.onpagehide ||
                                              BOOMR.utils.addListener(e, "unload", function () {
                                                  BOOMR.window = e = null;
                                              }),
                                              BOOMR.boomerang_frame !== BOOMR.window && BOOMR.utils.addListener(BOOMR.boomerang_frame, "unload", t.onFrameUnloaded);
                                      })(),
                                      (t.handlers_attached = !0)),
                                  this
                              );
                          },
                          attach_page_ready: function (t) {
                              BOOMR.hasBrowserOnloadFired() ? this.setImmediate(t, null, null, BOOMR) : e.onpagehide || null === e.onpagehide ? BOOMR.utils.addListener(e, "pageshow", t) : BOOMR.utils.addListener(e, "load", t);
                          },
                          page_ready_autorun: function (e) {
                              t.autorun && BOOMR.page_ready(e, !0);
                          },
                          page_ready: function (n, r) {
                              var o;
                              return (
                                  r || "number" != typeof n || ((o = n), (n = null)),
                                  n || (n = e.event),
                                  n || (n = { name: "load" }),
                                  r
                                      ? "number" == typeof e.BOOMR_page_ready && ((n.timing = n.timing || {}), (n.timing.loadEventEnd = e.BOOMR_page_ready), BOOMR.addVar("pr", 1, !0))
                                      : ((n.timing = n.timing || {}),
                                        o ? (n.timing.loadEventEnd = o) : "number" == typeof e.BOOMR_page_ready ? (n.timing.loadEventEnd = e.BOOMR_page_ready) : (n.timing.loadEventEnd = BOOMR.now()),
                                        BOOMR.addVar("pr", 1, !0)),
                                  t.onloadfired || (t.fireEvent("page_ready", n), (t.onloadfired = !0)),
                                  this
                              );
                          },
                          hasBrowserOnloadFired: function () {
                              var t = BOOMR.getPerformance();
                              return (o.readyState && "complete" === o.readyState) || (t && t.timing && t.timing.loadEventStart > 0) || e.BOOMR_onload > 0;
                          },
                          onloadFired: function () {
                              return t.onloadfired;
                          },
                          setImmediate: function (t, n, r, o) {
                              var i, a;
                              "undefined" != typeof Error && (a = (a = new Error()).stack ? a.stack.replace(/^Error/, "Called") : void 0),
                                  (i = function () {
                                      t.call(o || null, n, r || {}, a), (i = null);
                                  }),
                                  e.requestIdleCallback ? e.requestIdleCallback(i, { timeout: 1e3 }) : e.setImmediate ? e.setImmediate(i) : setTimeout(i, 10);
                          },
                          now:
                              Date.now ||
                              function () {
                                  return new Date().getTime();
                              },
                          getPerformance: function () {
                              try {
                                  if (BOOMR.window) return "performance" in BOOMR.window && BOOMR.window.performance ? BOOMR.window.performance : BOOMR.window.msPerformance || BOOMR.window.webkitPerformance || BOOMR.window.mozPerformance;
                              } catch (e) {}
                          },
                          hrNow: function () {
                              var e,
                                  t,
                                  n = BOOMR.getPerformance();
                              return n && n.now ? (e = n.now()) : ((t = (BOOMR.plugins.RT && BOOMR.plugins.RT.navigationStart && BOOMR.plugins.RT.navigationStart()) || BOOMR.t_lstart || BOOMR.t_start), (e = BOOMR.now() - t)), e;
                          },
                          visibilityState:
                              void 0 === s
                                  ? function () {
                                        return "visible";
                                    }
                                  : function () {
                                        return o[s];
                                    },
                          lastVisibilityEvent: {},
                          registerEvent: function (e) {
                              return t.events.hasOwnProperty(e) || (t.events[e] = []), this;
                          },
                          disable: function () {
                              t.clearEvents(), t.clearListeners();
                          },
                          fireEvent: function (e, n) {
                              return t.fireEvent(e, n);
                          },
                          subscribe: function (n, r, o, i, a) {
                              var s, u, l;
                              for (
                                  n = n.toLowerCase(),
                                      BOOMR.utils.mark("subscribe"),
                                      BOOMR.utils.mark("subscribe:" + n),
                                      t.translate_events[n] && (n = t.translate_events[n]),
                                      t.events.hasOwnProperty(n) || (t.events[n] = []),
                                      l = t.events[n],
                                      s = 0;
                                  s < l.length;
                                  s++
                              )
                                  if ((u = l[s]) && u.fn === r && u.cb_data === o && u.scope === i) return this;
                              return (
                                  l.push({ fn: r, cb_data: o || {}, scope: i || null, once: a || !1 }),
                                  "page_ready" === n && t.onloadfired && t.autorun && this.setImmediate(r, null, o, i),
                                  ("page_unload" !== n && "before_unload" !== n) ||
                                      (t.unloadEventsCount++,
                                      (function () {
                                          var a;
                                          l.length,
                                              (a = function (n) {
                                                  r && r.call(i, n || e.event, o), ++t.unloadEventCalled === t.unloadEventsCount && BOOMR.real_sendBeacon();
                                              }),
                                              "page_unload" === n && (e.onpagehide || null === e.onpagehide ? BOOMR.utils.addListener(e, "pagehide", a) : BOOMR.utils.addListener(e, "unload", a)),
                                              BOOMR.utils.addListener(e, "beforeunload", a);
                                      })()),
                                  this
                              );
                          },
                          addError: function (e, n, r) {
                              var o,
                                  i = BOOMR.plugins.Errors;
                              BOOMR.utils.mark("add_error"),
                                  BOOMR.error("Boomerang caught error: " + e + ", src: " + n + ", extra: " + r),
                                  i && i.is_supported()
                                      ? "string" == typeof e
                                          ? i.send({ message: e, extra: r, functionName: n, noStack: !0 }, i.VIA_APP, i.SOURCE_BOOMERANG)
                                          : ("string" == typeof n && (e.functionName = n), void 0 !== r && (e.extra = r), i.send(e, i.VIA_APP, i.SOURCE_BOOMERANG))
                                      : ("string" != typeof e && ((o = String(e)).match(/^\[object/) && (o = e.name + ": " + (e.description || e.message).replace(/\r\n$/, "")), (e = o)),
                                        void 0 !== n && (e = "[" + n + ":" + BOOMR.now() + "] " + e),
                                        r && (e += ":: " + r),
                                        t.errors[e] ? t.errors[e]++ : (t.errors[e] = 1));
                          },
                          isCrossOriginError: function (e) {
                              return (
                                  "SecurityError" === e.name ||
                                  ("TypeError" === e.name && "Permission denied" === e.message) ||
                                  ("Error" === e.name && e.message && e.message.match(/^(Permission|Access is) denied/)) ||
                                  -2146828218 === e.number
                              );
                          },
                          addVar: function (e, n, r) {
                              if ((BOOMR.utils.mark("add_var"), "string" == typeof e)) t.vars[e] = n;
                              else if ("object" == typeof e) {
                                  var o,
                                      i = e;
                                  for (o in i) i.hasOwnProperty(o) && (t.vars[o] = i[o]);
                              }
                              return r && (t.singleBeaconVars[e] = 1), this;
                          },
                          appendVar: function (e, t) {
                              var n = BOOMR.getVar(e) || "";
                              return n && (n += ","), BOOMR.addVar(e, n + t), this;
                          },
                          removeVar: function (e) {
                              var n, r;
                              if (!arguments.length) return this;
                              for (r = 1 === arguments.length && BOOMR.utils.isArray(e) ? e : arguments, n = 0; n < r.length; n++) t.vars.hasOwnProperty(r[n]) && delete t.vars[r[n]];
                              return this;
                          },
                          hasVar: function (e) {
                              return t.vars.hasOwnProperty(e);
                          },
                          getVar: function (e) {
                              return t.vars[e];
                          },
                          setVarPriority: function (e, n) {
                              return "number" != typeof n || 1 !== Math.abs(n) || (t.varPriority[n][e] = 1), this;
                          },
                          setReferrer: function (e) {
                              t.r = e;
                          },
                          requestStart: function (e) {
                              var t = BOOMR.now();
                              return (
                                  BOOMR.plugins.RT.startTimer("xhr_" + e, t),
                                  {
                                      loaded: function (n) {
                                          BOOMR.responseEnd(e, t, n);
                                      },
                                  }
                              );
                          },
                          readyToSend: function () {
                              var e;
                              for (e in this.plugins)
                                  if (this.plugins.hasOwnProperty(e)) {
                                      if (t.disabled_plugins[e]) continue;
                                      if ("function" == typeof this.plugins[e].readyToSend && !1 === this.plugins[e].readyToSend()) return BOOMR.debug("Plugin " + e + " is not ready to send"), !1;
                                  }
                              return !0;
                          },
                          responseEnd: function (e, n, r, o) {
                              if (((n = "number" == typeof n ? n : BOOMR.now()), (o = "number" == typeof o ? o : BOOMR.now()), !BOOMR.readyToSend()))
                                  return (
                                      BOOMR.debug("Attempted to call responseEnd before all plugins were Ready to Send, trying again..."),
                                      void setTimeout(function () {
                                          BOOMR.responseEnd(e, n, r, o);
                                      }, 1e3)
                                  );
                              if (BOOMR.hasSentPageLoadBeacon() || BOOMR.utils.inArray(e.initiator, BOOMR.constants.BEACON_TYPE_SPAS))
                                  if (t.beaconInQueue)
                                      BOOMR.subscribe(
                                          "beacon",
                                          function () {
                                              BOOMR.responseEnd(e, n, r, o);
                                          },
                                          null,
                                          BOOMR,
                                          !0
                                      );
                                  else if (((t.beaconInQueue = !0), "object" == typeof e)) {
                                      if (!e.url) return void BOOMR.debug("BOOMR.responseEnd: First argument must have a url property if it's an object");
                                      t.fireEvent("xhr_load", e);
                                  } else BOOMR.real_sendBeacon(), BOOMR.addVar("xhr.pg", e), BOOMR.plugins.RT.startTimer("xhr_" + e, n), t.fireEvent("xhr_load", { name: "xhr_" + e, data: r, timing: { loadEventEnd: o } });
                              else
                                  BOOMR.subscribe(
                                      "page_load_beacon",
                                      function () {
                                          BOOMR.responseEnd(e, n, r, o);
                                      },
                                      null,
                                      BOOMR,
                                      !0
                                  );
                          },
                          uninstrumentXHR: function () {},
                          instrumentXHR: function () {},
                          uninstrumentFetch: function () {},
                          instrumentFetch: function () {},
                          sendBeacon: function (e) {
                              return e && (t.beacon_url_override = e), t.beaconQueued || ((t.beaconQueued = !0), BOOMR.setImmediate(BOOMR.real_sendBeacon, null, null, BOOMR)), !0;
                          },
                          sendBeaconWhenReady: function (e, n, r) {
                              if (t.beaconInQueue)
                                  BOOMR.subscribe(
                                      "beacon",
                                      function () {
                                          BOOMR.sendBeaconWhenReady(e, n, r);
                                      },
                                      null,
                                      BOOMR,
                                      !0
                                  );
                              else {
                                  for (var o in ((t.beaconInQueue = !0), e)) e.hasOwnProperty(o) && BOOMR.addVar(o, e[o], !0);
                                  "function" == typeof n && void 0 !== r && n.apply(r), BOOMR.sendBeacon();
                              }
                          },
                          real_sendBeacon: function () {
                              var n,
                                  r = [],
                                  i = {};
                              if (!t.beaconQueued) return !1;
                              for (n in (BOOMR.utils.mark("send_beacon:start"), (t.beaconQueued = !1), BOOMR.debug("Checking if we can send beacon"), this.plugins))
                                  if (this.plugins.hasOwnProperty(n)) {
                                      if (t.disabled_plugins[n]) continue;
                                      if (!this.plugins[n].is_complete(t.vars)) return BOOMR.debug("Plugin " + n + " is not complete, deferring beacon send"), !1;
                                  }
                              if (!(window && window.Image && window.navigator && BOOMR.window)) return BOOMR.debug("DOM not fully available, not sending a beacon"), !1;
                              var a = BOOMR.utils.inArray(t.vars["http.initiator"], BOOMR.constants.BEACON_TYPE_SPAS),
                                  s = void 0 === t.vars["http.initiator"] || a;
                              for (n in (t.vars.pgu || (t.vars.pgu = a ? o.URL : o.URL.replace(/#.*/, "")),
                              (t.vars.pgu = BOOMR.utils.cleanupURL(t.vars.pgu)),
                              (t.vars.u && !a) || (t.vars.u = t.vars.pgu),
                              t.vars.pgu === t.vars.u && delete t.vars.pgu,
                              t.r ? (t.vars.r = BOOMR.utils.cleanupURL(t.r)) : delete t.vars.r,
                              (t.vars.v = BOOMR.version),
                              BOOMR.snippetVersion && (t.vars.sv = BOOMR.snippetVersion),
                              (t.vars.sm = BOOMR.snippetMethod || "i"),
                              BOOMR.session.enabled && ((t.vars["rt.si"] = BOOMR.session.ID + "-" + Math.round(BOOMR.session.start / 1e3).toString(36)), (t.vars["rt.ss"] = BOOMR.session.start), (t.vars["rt.sl"] = BOOMR.session.length)),
                              BOOMR.visibilityState() &&
                                  ((t.vars["vis.st"] = BOOMR.visibilityState()),
                                  BOOMR.lastVisibilityEvent.visible && (t.vars["vis.lv"] = BOOMR.now() - BOOMR.lastVisibilityEvent.visible),
                                  BOOMR.lastVisibilityEvent.hidden && (t.vars["vis.lh"] = BOOMR.now() - BOOMR.lastVisibilityEvent.hidden)),
                              (t.vars["ua.plt"] = navigator.platform),
                              (t.vars["ua.vnd"] = navigator.vendor),
                              this.pageId && (t.vars.pid = this.pageId),
                              (t.vars.n = ++this.beaconsSent),
                              e !== window && (t.vars.if = ""),
                              t.errors))
                                  t.errors.hasOwnProperty(n) && r.push(n + (t.errors[n] > 1 ? " (*" + t.errors[n] + ")" : ""));
                              for (n in (r.length > 0 && (t.vars.errors = r.join("\n")), (t.errors = {}), t.fireEvent("before_beacon", t.vars), t.vars)) t.vars.hasOwnProperty(n) && (i[n] = t.vars[n]);
                              for (var u in (BOOMR.removeVar(["qt", "pgu"]), t.singleBeaconVars)) t.singleBeaconVars.hasOwnProperty(u) && BOOMR.removeVar(u);
                              return (
                                  (t.singleBeaconVars = {}),
                                  !t.hasSentPageLoadBeacon &&
                                      s &&
                                      ((t.hasSentPageLoadBeacon = !0),
                                      BOOMR.setImmediate(function () {
                                          t.fireEvent("page_load_beacon", i);
                                      })),
                                  BOOMR.session.rate_limited
                                      ? (BOOMR.debug("Skipping because we're rate limited"), !1)
                                      : ((t.beaconInQueue = !1), BOOMR.sendBeaconData(i), BOOMR.utils.mark("send_beacon:end"), BOOMR.utils.measure("send_beacon", "send_beacon:start", "send_beacon:end"), !0)
                              );
                          },
                          hasSentPageLoadBeacon: function () {
                              return t.hasSentPageLoadBeacon;
                          },
                          sendBeaconData: function (n) {
                              var r,
                                  o,
                                  i,
                                  a,
                                  s,
                                  u = [],
                                  l = !0;
                              if ((BOOMR.debug("Ready to send beacon: " + BOOMR.utils.objectToString(n)), (t.beacon_url = t.beacon_url_override || t.beacon_url), !t.beacon_url)) return BOOMR.debug("No beacon URL, so skipping."), !1;
                              if (!t.beaconUrlAllowed(t.beacon_url)) return BOOMR.debug("Beacon URL not allowed: " + t.beacon_url), !1;
                              if (0 === n.length) return !1;
                              if (
                                  (t.fireEvent("beacon", n),
                                  (u = this.getVarsOfPriority(n, -1)),
                                  (r = this.getVarsOfPriority(n, 1)),
                                  (o = u.concat(this.getVarsOfPriority(n, 0), r).join("&")),
                                  t.beacon_url_force_https && t.beacon_url.match(/^\/\//) && (t.beacon_url = "https:" + t.beacon_url),
                                  (i = t.beacon_url + (t.beacon_url.indexOf("?") > -1 ? "&" : "?") + o),
                                  "GET" === t.beacon_type
                                      ? ((l = !0),
                                        i.length > BOOMR.constants.MAX_GET_LENGTH &&
                                            ((window.console && (console.warn || console.log)) || function () {})("Boomerang: Warning: Beacon may not be sent via GET due to payload size > 2000 bytes"))
                                      : ("POST" === t.beacon_type || i.length > BOOMR.constants.MAX_GET_LENGTH) && (l = !1),
                                  e &&
                                      e.navigator &&
                                      "function" == typeof e.navigator.sendBeacon &&
                                      BOOMR.utils.isNative(e.navigator.sendBeacon) &&
                                      "function" == typeof e.Blob &&
                                      "GET" !== t.beacon_type &&
                                      void 0 === t.beacon_auth_token &&
                                      !t.beacon_disable_sendbeacon)
                              ) {
                                  var c = new e.Blob([o + "&sb=1"], { type: "application/x-www-form-urlencoded" });
                                  if (e.navigator.sendBeacon(t.beacon_url, c)) return !0;
                              }
                              if ((BOOMR.orig_XMLHttpRequest || (e && e.XMLHttpRequest) || (l = !0), l)) {
                                  try {
                                      a = new Image();
                                  } catch (e) {
                                      return BOOMR.debug("Image is not a constructor, not sending a beacon"), !1;
                                  }
                                  a.src = i;
                              } else {
                                  s = new (BOOMR.window.orig_XMLHttpRequest || BOOMR.orig_XMLHttpRequest || BOOMR.window.XMLHttpRequest)();
                                  try {
                                      this.sendXhrPostBeacon(s, o);
                                  } catch (e) {
                                      (s = new BOOMR.boomerang_frame.XMLHttpRequest()), this.sendXhrPostBeacon(s, o);
                                  }
                              }
                              return !0;
                          },
                          hasSentPageLoadBeacon: function () {
                              return t.hasSentPageLoadBeacon;
                          },
                          sendXhrPostBeacon: function (e, n) {
                              e.open("POST", t.beacon_url),
                                  e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                  void 0 !== t.beacon_auth_token && (void 0 === t.beacon_auth_key && (t.beacon_auth_key = "Authorization"), e.setRequestHeader(t.beacon_auth_key, t.beacon_auth_token)),
                                  t.beacon_with_credentials && (e.withCredentials = !0),
                                  e.send(n);
                          },
                          getVarsOfPriority: function (e, n) {
                              var r,
                                  o = [],
                                  i = 0 !== n ? t.varPriority[n] : e;
                              for (r in i) i.hasOwnProperty(r) && e.hasOwnProperty(r) && (o.push(this.getUriEncodedVar(r, void 0 === e[r] ? "" : e[r])), 0 !== n && delete e[r]);
                              return o;
                          },
                          getUriEncodedVar: function (e, t) {
                              return null == t && (t = ""), "object" == typeof t && (t = BOOMR.utils.serializeForUrl(t)), encodeURIComponent(e) + "=" + encodeURIComponent(t);
                          },
                          getResourceTiming: function (e, t, n) {
                              var r,
                                  o = BOOMR.getPerformance();
                              try {
                                  if (o && "function" == typeof o.getEntriesByName) {
                                      if (!(r = o.getEntriesByName(e)) || !r.length) return;
                                      if (!("function" != typeof n || ((r = BOOMR.utils.arrayFilter(r, n)) && r.length))) return;
                                      return r.length > 1 && "function" == typeof t && r.sort(t), r[r.length - 1];
                                  }
                              } catch (e) {
                                  BOOMR.warn("getResourceTiming:" + e);
                              }
                          },
                          setBeaconUrlsAllowed: function (e) {
                              t.beacon_urls_allowed = e;
                          },
                      }),
                      BOOMR.url)
                  ) {
                      var c = BOOMR.window.document.createElement("a");
                      (c.href = BOOMR.url), (r.url = c.href);
                  } else r.url = r.utils.getMyURL();
                  var d;
                  delete BOOMR_start,
                      "number" == typeof BOOMR_lstart ? ((r.t_lstart = BOOMR_lstart), delete BOOMR_lstart) : "number" == typeof BOOMR.window.BOOMR_lstart && (r.t_lstart = BOOMR.window.BOOMR_lstart),
                      "number" == typeof BOOMR.window.BOOMR_onload && (r.t_onload = BOOMR.window.BOOMR_onload),
                      "object" == typeof console && void 0 !== console.log
                          ? (r.log = function (e, t, n) {
                                console.log("(" + BOOMR.now() + ") {" + BOOMR.pageId + "}: " + n + ": [" + t + "] " + e);
                            })
                          : (r.log = function () {}),
                      (d = function (e) {
                          return function (t, n) {
                              return this.log(t, e, "boomerang" + (n ? "." + n : "")), this;
                          };
                      }),
                      (r.debug = d("debug")),
                      (r.info = d("info")),
                      (r.warn = d("warn")),
                      (r.error = d("error"));
                  try {
                      var O = r.getPerformance();
                      O &&
                          "function" == typeof O.now &&
                          /\[native code\]/.test(String(O.now)) &&
                          O.timing &&
                          O.timing.navigationStart &&
                          (r.now = function () {
                              return Math.round(O.now() + O.timing.navigationStart);
                          });
                  } catch (e) {}
                  t.checkLocalStorageSupport(),
                      (function () {
                          var e;
                          for (e in r) r.hasOwnProperty(e) && (BOOMR[e] = r[e]);
                          BOOMR.xhr_excludes || (BOOMR.xhr_excludes = {});
                      })(),
                      (function () {
                          if (
                              ((BOOMR.checkWindowOverrides = function (e) {
                                  if (!Object.getOwnPropertyNames) return [];
                                  var t,
                                      n,
                                      r = [];
                                  function i(t) {
                                      (function (t) {
                                          for (var n = t.split("."), r = e; r && n.length; )
                                              try {
                                                  r = r[n.shift()];
                                              } catch (e) {
                                                  return !1;
                                              }
                                          return (
                                              "function" == typeof r &&
                                              !(function (e, t) {
                                                  return (
                                                      "console.assert" === t ||
                                                      "Function.prototype" === t ||
                                                      t.indexOf("onload") >= 0 ||
                                                      t.indexOf("onbeforeunload") >= 0 ||
                                                      t.indexOf("onerror") >= 0 ||
                                                      t.indexOf("onload") >= 0 ||
                                                      t.indexOf("NodeFilter") >= 0 ||
                                                      (e.toString && !e.hasOwnProperty("toString") && /\[native code\]/.test(String(e)))
                                                  );
                                              })(r, t)
                                          );
                                      })(t) && r.push(t);
                                  }
                                  !(function () {
                                      var e = o.createElement("iframe");
                                      (e.style.display = "none"), (e.src = "javascript:false"), o.getElementsByTagName("script")[0].parentNode.appendChild(e), (t = e.contentWindow), (n = Object.getOwnPropertyNames(t));
                                  })();
                                  for (var a = 0; a < n.length; a++) {
                                      var s = n[a];
                                      if ("window" !== s && "self" !== s && "top" !== s && "parent" !== s && "frames" !== s && t[s] && ("object" == typeof t[s] || "function" == typeof t[s])) {
                                          i(s);
                                          var u = [];
                                          try {
                                              u = Object.getOwnPropertyNames(t[s]);
                                          } catch (e) {}
                                          for (var l = 0; l < u.length; l++) i([s, u[l]].join("."));
                                          if (t[s].prototype) for (u = Object.getOwnPropertyNames(t[s].prototype), l = 0; l < u.length; l++) i([s, "prototype", u[l]].join("."));
                                      }
                                  }
                                  return r;
                              }),
                              (BOOMR.checkDocumentOverrides = function (e) {
                                  return BOOMR.utils.arrayFilter(["readyState", "domain", "hidden", "URL", "cookie"], function (t) {
                                      return e.hasOwnProperty(t);
                                  });
                              }),
                              "true" === BOOMR.utils.getQueryParamValue("overridden") && e && e.Object && Object.getOwnPropertyNames)
                          ) {
                              var t = [].concat(BOOMR.checkWindowOverrides(e)).concat(BOOMR.checkDocumentOverrides(o));
                              t.length > 0 && BOOMR.warn("overridden: " + t.sort());
                          }
                      })(),
                      a("onBoomerangLoaded", { BOOMR: BOOMR }, !0);
              }
          })(window);
  },
});
