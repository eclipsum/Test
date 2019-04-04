!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 5)
}({
    "/rkc": function(e, t, n) {
        "use strict";
        var a = {
            ucfirst: function(e) {
                return 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : e[0].toUpperCase() + e.substring(1)
            },
            random: function(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                return Array(e).fill(0).map(function(e) {
                    return t.charAt(Math.floor(Math.random() * t.length))
                }).join("")
            },
            startsWith: function(e, t) {
                return e.slice(0, t.length) === t
            }
        };
        t.a = a
    },
    "2XJo": function(e, t, n) {
        "use strict";
        var a = {
            normalizeSelector: function(e) {
                return "string" != typeof e ? e : "#" === e[0] ? e : "#".concat(e)
            },
            show: function(e) {
                e = a.normalizeSelector(e),
                $(e).modal()
            },
            hide: function(e) {
                e = a.normalizeSelector(e),
                $(e).modal("hide")
            },
            static: function(e) {
                e = a.normalizeSelector(e),
                $(e).modal({
                    keyboard: !1,
                    backdrop: "static"
                })
            }
        };
        t.a = a
    },
    5: function(e, t, n) {
        e.exports = n("94gR")
    },
    "94gR": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("OAhp");
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        var o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, a;
            return t = e,
            a = [{
                key: "trySubmission",
                value: function(e) {
                    var t = e.answer
                      , n = e.student_id
                      , a = e.token
                      , i = e.errorHandler;
                    return console.log({
                        answer: t,
                        student_id: n,
                        token: a,
                        errorHandler: i
                    }),
                    new Promise(function(e, i) {
                        $.ajax({
                            method: "post",
                            url: "production" === window.K$.ENV ? "https://europe-west1-fir-fallback-handin.cloudfunctions.net/submit" : "http://localhost:5000/fir-fallback-handin/us-central1/submit",
                            timeout: 8e3,
                            data: {
                                answer: t || " ",
                                student_id: n,
                                token: a,
                                hostname: "production" === window.K$.ENV ? "exam.net" : "exam.app",
                                env: window.K$.ENV
                            },
                            success: function() {
                                e()
                            },
                            error: function(e) {
                                i(e)
                            }
                        })
                    }
                    )
                }
            }],
            (n = null) && i(t.prototype, n),
            a && i(t, a),
            e
        }()
          , r = {
            addFontMagnifyers: function() {
                var e = "";
                return $.FroalaEditor.DefineIcon("larger", {
                    NAME: "search-plus"
                }),
                $.FroalaEditor.RegisterCommand("larger", {
                    title: window.K$.__("Förstora text"),
                    callback: function() {
                        window.K$.events.$emit("font-larger")
                    }
                }),
                $.FroalaEditor.DefineIcon("smaller", {
                    NAME: "search-minus"
                }),
                $.FroalaEditor.RegisterCommand("smaller", {
                    title: window.K$.__("Förminska text"),
                    callback: function() {
                        window.K$.events.$emit("font-smaller")
                    }
                }),
                $.FroalaEditor.DefineIcon("copy", {
                    NAME: "cut"
                }),
                $.FroalaEditor.RegisterCommand("copy", {
                    title: window.K$.__("Klipp ut markerad text"),
                    callback: function() {
                        e = $("#writeAnswersArea").froalaEditor("selection.text"),
                        $("#writeAnswersArea").froalaEditor("html.insert", "")
                    }
                }),
                $.FroalaEditor.DefineIcon("paste", {
                    NAME: "puzzle-piece"
                }),
                $.FroalaEditor.RegisterCommand("paste", {
                    title: window.K$.__("Klistra in urklippt text"),
                    callback: function() {
                        $("#writeAnswersArea").froalaEditor("html.insert", e)
                    }
                }),
                ["copy", "paste", "larger", "smaller"]
            }
        }
          , s = {
            timeout: 36e4,
            timestamp: (new Date).getTime(),
            send: function(e) {
                e.answer && $.ajax({
                    method: "post",
                    url: "/api/fast.php?r=backup",
                    timeout: 6e3,
                    data: e
                })
            },
            sendIfTime: function(e) {
                (new Date).getTime() - s.timestamp <= s.timeout || (s.send(e),
                s.timestamp = (new Date).getTime())
            }
        }
          , c = s
          , u = n("NpBj")
          , l = n("/rkc");
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        var h = []
          , m = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, a;
            return t = e,
            a = [{
                key: "initiate",
                value: function(t) {
                    window.K$.kunskapsmatrisen.isKunskapsmatrisen || setInterval(function() {
                        return e.check(t)
                    }, 1e4)
                }
            }, {
                key: "check",
                value: function(e) {
                    var t = function(e) {
                        return e.replace(/&nbsp;/g, "").replace(/<[^>]+>/g, "").length
                    }(window.K$.myexam.answer());
                    h.length > 0 && h.slice().sort(function(e, t) {
                        return t - e
                    })[0] + 80 < t && e(),
                    h.unshift(t),
                    h = h.slice(0, 3)
                }
            }],
            (n = null) && d(t.prototype, n),
            a && d(t, a),
            e
        }()
          , f = {
            prevent: function() {
                window.onhashchange = function() {
                    "!" !== window.location.hash && (window.location.hash = "!")
                }
                ,
                window.location.href += "#",
                window.setTimeout(function() {
                    window.location.href += "!"
                }, 50)
            }
        }
          , p = n("hVn9")
          , g = {
            timeout: 72e5,
            timestamp: (new Date).getTime(),
            id: 0,
            token: "",
            register: function(e, t) {
                g.id = e,
                g.token = t,
                setInterval(function() {
                    return g.keepAlive()
                }, 5e3)
            },
            keepAlive: function() {
                (new Date).getTime() - g.timestamp > g.timeout && $.ajax({
                    url: "/api/keep-alive",
                    data: {
                        id: g.id,
                        token: g.token
                    },
                    success: function(e) {
                        "is_now_alive" === e.status && $.ajaxSetup({
                            headers: {
                                "X-CSRF-TOKEN": e.csrf
                            }
                        }),
                        g.timestamp = (new Date).getTime()
                    }
                })
            }
        }
          , w = g
          , v = n("PJwG")
          , b = n.n(v)
          , y = n("BOdp")
          , k = n("Ql4a")
          , x = n.n(k)
          , E = n("gQEB")
          , T = n("2XJo");
        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function _(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var C = window.K$
          , I = C.Fullscreen;
        window.onpageshow = function(e) {
            try {
                (e.persisted || 2 === window.performance.navigation.type) && (localStorage.setItem("tempcopy", ""),
                window.location.reload())
            } catch (e) {}
        }
        ;
        new Vue({
            el: "#app",
            data: {
                qrImages: [],
                showQR: !1,
                GeoGebra: y.a,
                Modal: T.a,
                rounding: 6,
                exam: null,
                examIsStarted: !1,
                hasHandedIn: !1,
                hasAborted: !1,
                student_token: "",
                saveTimeout: 12e3,
                pollTimeout: 14e3,
                shouldSave: !0,
                lastAnswer: "",
                showGeogebraToolbarFlag: !0,
                failCount: 0,
                isGeogebraInitialized: !1,
                isDesmosInitialized: !1,
                applet: {},
                isFolded: !1,
                student: new u.a(C.student),
                lastSaveTime: Date.now(),
                security: C.security,
                displayMode: "rows",
                state: {
                    choice: "",
                    externalIndex: 0,
                    extraDocumentIndex: 0,
                    settings: {
                        geogebra: 0,
                        calculator: 0,
                        allow_tts: 0,
                        audio: 0,
                        translate: 0,
                        writeArea: 0,
                        writeAreaMix: 0,
                        resources: {
                            audioSettings: {},
                            thesaurus: !1,
                            enThesaurus: !1,
                            allThesaurus: !1,
                            drawingArea: !1,
                            translationSettings: {
                                singleWords: !1
                            }
                        },
                        formulaActive: !1,
                        formulaChosen: "",
                        ownFormulas: [],
                        spellChecking: "0",
                        browserSecurityMode: 1,
                        km_cheat_setting: 0
                    },
                    content: {}
                },
                messageInterval: null,
                cheatExplanation: "",
                cheatExplanationError: !1,
                cheatLockTime: 0,
                cheatLockTimer: {},
                cheatUnlockPollTimer: {},
                cheatToken: "",
                cheatId: "",
                cheatProtectionDisabled: !1,
                dummyCounter: 1,
                handInStatus: "not_handed_in",
                isGeogebraLoaded: !1
            },
            computed: {
                showConnectionWarning: function() {
                    return this.examIsStarted && this.lastSaveTime && this.dummyCounter && Date.now() - this.lastSaveTime > 9e4
                },
                examWriteVisible: function() {
                    return ["exam", "answer", "exam-and-answer"].includes(this.state.choice)
                },
                showAnswerArea: function() {
                    return "answer" === this.state.choice || "exam" === this.state.choice && 1 == this.state.settings.writeArea && 1 == this.state.settings.writeAreaMix
                },
                prev_answer: function() {
                    var e = null;
                    try {
                        e = JSON.parse(C.prev_answer)
                    } catch (t) {
                        console.log("NO PREV"),
                        e = []
                    }
                    return e
                }
            },
            filters: {
                minutesAgo: function(e) {
                    return Math.ceil((Date.now() - e) / 1e3 / 60)
                }
            },
            mounted: function() {
                var e = this;
                new window.ClipboardJS(".eraseClipboard"),
                C.temp = this.generateUsbDownloadLink,
                $("#quit-button").remove(),
                $(".tooltips").tooltip(),
                C.tryit = function() {
                    return e.generateUsbDownloadLink()
                }
                ,
                C.initiateAutotypeProtection(),
                C.retryImageLoads(),
                this.setExamType(),
                this.handleUnload(),
                this.storeNameLocally(),
                this.preventRightClick(),
                this.handleDisplayModeChange(),
                C.KeyboardHandler.initExamShortcuts(),
                setInterval(function() {
                    return e.dummyCounter += 1
                }, 3e3),
                this.handleSmallScreens(),
                this.updateTime(),
                setInterval(this.updateTime, 3e4),
                this.initiateExam(!0),
                this.initKunskapsmatrisenEvents(),
                this.initFirebaseCommunication(),
                window.K$.firebaseCommunication.registerForControlStatus(function(t) {
                    if ("reduced" === t.state)
                        return console.log("Polling frequency now set to reduced mode."),
                        void (e.pollTimeout = 5e4);
                    e.pollTimeout = 14e3,
                    console.log("Polling frequency now set to normal mode.")
                }),
                window.K$.restartSave = function() {
                    console.log("KERNEL PANIC HANDLED! Restarting save ..."),
                    setTimeout(e.save, e.pollTimeout)
                }
                ,
                m.initiate(function() {
                    c.send({
                        answer: window.K$.myexam.answer(),
                        id: e.student.id,
                        token: e.student_token
                    })
                })
            },
            methods: {
                shouldIgnoreCheatProtection: function() {
                    return C.isDemo || 6 == this.state.settings.browserSecurityMode
                },
                isSecured: function() {
                    return C.usingSEB || C.chromebook.isKioskChromebook() || C.takeATest.isTat()
                },
                initFirebaseCommunication: function() {
                    var e = this;
                    C.firebaseCommunication.registerMessageListener("student", C.firebase_token, function(t) {
                        t && e.handleMessage(t)
                    })
                },
                notifyTeacher: function(e) {
                    C.firebaseCommunication.sendMessage("teacher", C.firebaseClassBucket, {
                        student_id: this.student.id,
                        type: e
                    })
                },
                initKunskapsmatrisenEvents: function() {
                    var e = this;
                    window.K$.events.$on("digital_tool", function(t, n) {
                        e.state.settings.geogebra = n ? 1 : 0,
                        e.state.settings.resources.desmos = n ? 1 : 0,
                        e.state.settings.calculator = t ? 1 : 0
                    }),
                    window.K$.events.$on("set-formula", function(t) {
                        e.state.settings.formulaChosen = t
                    }),
                    window.K$.events.$on("disable-formula", function() {
                        e.state.settings.formulaActive = !1
                    }),
                    window.K$.events.$on("wait-for-SEB", function() {
                        e.waitingForSeb = !0
                    }),
                    window.K$.events.$on("no-access", function(t) {
                        console.log("NO ACCESS CLOSING"),
                        e.hasHandedIn = !0,
                        a.a.removeItem("temporary_answer_storage"),
                        window.close()
                    })
                },
                handleDisplayModeChange: function() {
                    var e = this;
                    window.K$.events.$on("displayMode", function(t) {
                        e.displayMode = t
                    })
                },
                handleSmallScreens: function() {
                    screen.width < 768 && window.K$.events.$emit("no-write-area")
                },
                preventRightClick: function() {
                    document.addEventListener("contextmenu", function(e) {
                        e.preventDefault()
                    })
                },
                handleUnload: function() {
                    var e = this;
                    window.addEventListener("beforeunload", function() {
                        e.hasHandedIn || e.hasAborted || (C.myexam.answer() !== e.lastAnswer && e.storeOffline(),
                        e.notifyTeacher("reload_page"))
                    })
                },
                storeNameLocally: function() {
                    localStorage.setItem("student_name", this.student.name)
                },
                setExamType: function() {
                    C.kunskapsmatrisen.isKunskapsmatrisen ? C.myexam = new window.K$.MathExam : C.myexam = new window.K$.TextExam
                },
                setUpFroalaPasteProtection: function() {
                    $("#writeAnswersArea").on("froalaEditor.paste.beforeCleanup", function(e, t, n) {
                        if ("string" != typeof n)
                            return "***";
                        var a, i = ((a = document.createElement("div")).innerHTML = n,
                        a.innerText);
                        return !!C.pasteProtection.mayPaste(i) || "***"
                    })
                },
                toggleGeogebraToolbar: function() {
                    this.showGeogebraToolbarFlag = !this.showGeogebraToolbarFlag
                },
                initiateExam: function(e) {
                    var t = this;
                    function n() {
                        $.ajax({
                            url: "/api/exams/student_begin",
                            method: "post",
                            dataType: "json",
                            success: function(a) {
                                var i = a.status
                                  , o = a.student_token
                                  , r = a.discrepancies
                                  , s = a.exam;
                                t.student_token = o,
                                "exam_not_started" !== i ? "exam_started" !== i ? "isKunskapsmatrisen" !== i ? setTimeout(n, 5e3) : t.setupExam(C.myexam.createExamObject(null), e, r) : t.setupExam(s, e, r) : C.myexam.wait(t, e).then(n)
                            },
                            error: function() {
                                setTimeout(n, 5e3)
                            }
                        })
                    }
                    this.notifyTeacher("enter_exam"),
                    C.myexam instanceof window.K$.TextExam ? n() : C.myexam.wait(t, e).then(n)
                },
                quitExam: function() {
                    T.a.show("quitExamModal")
                },
                showConnectionModal: function() {
                    T.a.show("studentConnectionProblemModal")
                },
                renderFormula: function() {
                    this.$refs.formula.renderIfResized()
                },
                renderExam: function() {
                    this.$refs.exam.renderExam()
                },
                qrHandin: function() {
                    this.showQR = !0;
                    var e = LZString.compressToEncodedURIComponent(C.myexam.answer());
                    console.log(e);
                    var t = Math.floor(e.length / 1800) + 1
                      , n = l.a.random(20);
                    this.qrImages = [];
                    for (var a = 1; a <= t; ++a) {
                        var i = e.slice(1900 * (a - 1), 1900 * a);
                        console.log(this, this.student.id);
                        var o = ["exam.net", "exam-fallback.azurewebsites.net"].includes(window.K$.hostname) ? "https://kmex.azurewebsites.net" : "http://kmex.app"
                          , r = "".concat(o, "/qr\n                    ?t=").concat(t, "\n                    &i=").concat(a - 1, "\n                    &sid=").concat(this.student.id, "\n                    &tok=").concat(this.student_token, "\n                    &ident=").concat(n, "\n                    &c=").concat(i).replace(/\s/g, "");
                        console.log("URL LENGTH", r.length, r);
                        var s = new QRious({
                            value: r,
                            size: "500"
                        });
                        this.qrImages.push({
                            url: r,
                            qr: s.image.src
                        })
                    }
                },
                handInExam: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    T.a.show("handInExamModal"),
                    t.force && setTimeout(function() {
                        return e.handIn()
                    }, 500)
                },
                abort: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.force || ($.ajax({
                        url: "/api/exams/abort",
                        method: "post"
                    }),
                    this.notifyTeacher("abort_exam")),
                    this.hasAborted = !0,
                    setTimeout(function() {
                        1 != C.isDemo || e.isSecured() || window.close(),
                        e.goToEndPage("abort", t)
                    }, 100)
                },
                handIn: function() {
                    var e = this;
                    if ("IAMOFFLINE" === this.student.firstName)
                        return this.handInStatus = "is_handing_in",
                        void setTimeout(function() {
                            return e.handleHandInError()
                        }, 1e3);
                    var t = C.myexam.answer();
                    this.handInStatus = "is_handing_in",
                    C.kunskapsmatrisen.isKunskapsmatrisen ? C.gradeAndSend().then(function() {
                        e.transmitHandIn(t)
                    }).catch(function() {
                        e.handleHandInError()
                    }) : setTimeout(function() {
                        return e.transmitHandIn(t)
                    }, 200)
                },
                handleHandInError: function() {
                    T.a.hide("handInExamModal"),
                    this.storeOffline(),
                    this.handInStatus = "not_handed_in",
                    T.a.show("handInErrorModal")
                },
                transmitHandIn: function(e) {
                    var t = this;
                    e.length > 3e5 && (e = e.substring(0, 3e5));
                    var n = function() {
                        t.notifyTeacher("handed_in"),
                        t.lastAnswer = e,
                        a.a.removeItem("temporary_answer_storage"),
                        t.hasHandedIn = !0,
                        setTimeout(function() {
                            T.a.hide("handInExamModal"),
                            1 != window.K$.isDemo || t.isSecured() ? t.goToEndPage("submit") : window.close()
                        }, 500)
                    };
                    $.ajax({
                        url: "/api/exams/handin",
                        method: "post",
                        timeout: 5e3,
                        data: {
                            answer: e,
                            length: e.length
                        },
                        context: this,
                        success: function(e) {
                            "success" === e.status ? n() : this.handleHandInError()
                        },
                        error: function() {
                            var t = this;
                            o.trySubmission({
                                answer: e,
                                student_id: window.K$.student.id,
                                token: this.student_token
                            }).then(function(e) {
                                console.log({
                                    data: e
                                }),
                                n()
                            }).catch(function(e) {
                                t.handleHandInError()
                            })
                        }
                    })
                },
                goToEndPage: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.cheatProtectionDisabled = !0;
                    var n = "browser"
                      , a = t.force ? "throw_out" : e;
                    C.chromebook.isKioskChromebook() ? n = "kiosk" : C.usingSEB || C.invalidSEB ? n = "seb" : C.takeATest.isTat() && (n = "tat"),
                    window.K$.events.$emit("show-end-page", {
                        mode: n,
                        type: a
                    })
                },
                listenForFroalaInit: function() {
                    var e = this;
                    $("#writeAnswersArea").on("froalaEditor.initialized", function(t, n) {
                        $("#writeAnswersArea").froalaEditor("html.set", C.prev_answer),
                        C.registerPaste(C.prev_answer),
                        $(".fr-element").attr("data-gramm", !1),
                        a.a.getItem("temporary_answer_storage").then(function(t) {
                            if (t)
                                try {
                                    var n = JSON.parse(t).data
                                      , i = E.a.wadjvawldbvöaiwldblaw(n, E.a.jwahdbajlhwdbj2(e.student.id));
                                    $("#writeAnswersArea").froalaEditor("html.set", i.answer),
                                    C.registerPaste(i.answer)
                                } catch (e) {
                                    a.a.removeItem("temporary_answer_storage")
                                }
                        }),
                        $("#writeAnswersArea").on("froalaEditor.mousedown froalaEditor.paste.after froalaEditor.keypress froalaEditor.contentChanged", function(e, t) {
                            C.myexam.updateWordCount("#writeAnswersArea")
                        })
                    })
                },
                setupExam: function(e, t, n) {
                    var a = this;
                    T.a.hide("notStartedModal"),
                    $("#loading").hide(),
                    w.register(this.student_id, this.student_token),
                    e = new b.a(e).documents(),
                    n = n ? JSON.parse(n) : {},
                    this.exam = e,
                    this.state.settings.geogebra = e.geogebra,
                    this.state.settings.calculator = e.calculator,
                    this.state.settings.replit = e.replit,
                    this.state.settings.writeArea = e.writeArea,
                    this.state.settings.writeAreaMix = e.writeAreaMix,
                    this.state.settings.formulaActive = e.formulaActive,
                    this.state.settings.formulaChosen = e.formulaChosen,
                    this.state.settings.spellChecking = n.spellChecking || e.spellChecking,
                    this.state.settings.allow_tts = n.allow_tts || e.allow_tts,
                    this.state.settings.translate = n.translate || e.translate,
                    this.state.settings.browserSecurityMode = e.browserSecurityMode,
                    this.state.settings.km_cheat_setting = e.km_cheat_setting,
                    this.state.settings.ownFormulas = x.a.json(e.ownFormulas, "array");
                    var i = x.a.json(e.resources);
                    this.state.settings.audioFiles = i.audioFiles || [],
                    this.state.settings.audio = n.audio || i.audio,
                    this.exam.audio = this.state.settings.audio,
                    this.state.content = JSON.parse(e.content),
                    Object.assign(this.state.settings.resources, x.a.json(e.resources)),
                    ["thesaurus", "enThesaurus", "allThesaurus"].forEach(function(e) {
                        a.state.settings.resources[e] = n[e] || a.state.settings.resources[e]
                    }),
                    this.state.settings.resources.audioSettings = this.state.settings.resources.audioSettings || {};
                    if (this.setupFroala(),
                    setTimeout(this.save, this.pollTimeout),
                    setTimeout(this.shouldSaveNext, this.saveTimeout),
                    C.initMonitor(),
                    t ? ($("#wrapper").show(),
                    C.usingSEB || C.chromebook.isKioskChromebook() || C.takeATest.isTat() || 0 != C.isDemo ? 1 == C.isDemo ? T.a.static("teacherDemoModal") : setTimeout(function() {
                        return a.startExam()
                    }, 100) : setTimeout(function() {
                        return T.a.static("startExam")
                    }, 100)) : setTimeout(function() {
                        return a.startExam()
                    }, 500),
                    C.kunskapsmatrisen.isKunskapsmatrisen) {
                        var o = {
                            classid: C.kunskapsmatrisen.classid,
                            studentid: C.kunskapsmatrisen.userid,
                            token: C.kunskapsmatrisen.token
                        };
                        C.events.$emit("register-math-student", o, C.kunskapsmatrisen.examid)
                    }
                },
                setupFroala: function() {
                    var e;
                    this.listenForFroalaInit(),
                    window.K$.registerSpellCheckerPlugin();
                    var t = ["paragraphFormat", "align", "indent", "outdent", "insertTable", "|", "bold", "italic", "underline", "superscript", "subscript", "specialCharacters", "|", "undo", "redo"]
                      , n = r.addFontMagnifyers();
                    t = t.concat(n);
                    $("#writeAnswersArea").froalaEditor((S(e = {
                        language: this.__("sv"),
                        placeholderText: this.__("Skriv här ..."),
                        pluginsEnabled: ["table", "specialCharacters", "paragraphFormat", "image", "align", "draggable", "examSpellChecker"],
                        toolbarButtons: t,
                        toolbarButtonsMD: t,
                        toolbarButtonsSM: t,
                        toolbarButtonsXS: t,
                        imageEditButtons: ["imageAlign", "imageRemove"],
                        paragraphFormat: {
                            N: "Normal",
                            H1: "Heading 1",
                            H2: "Heading 2"
                        },
                        specialCharactersSets: [{
                            title: this.__("Ofta använda symboler"),
                            list: ["ß", "ü", "ñ", "ç", "Æ", "æ", "Œ", "œ", "¡", "¿"].map(function(e) {
                                return {
                                    char: e
                                }
                            })
                        }].concat(_($.FE.DEFAULTS.specialCharactersSets))
                    }, "paragraphFormat", {
                        N: "Normal",
                        H1: "Heading 1",
                        H2: "Heading 2"
                    }),
                    S(e, "enter", $.FroalaEditor.ENTER_DIV),
                    S(e, "tabSpaces", 4),
                    S(e, "spellcheck", !1),
                    S(e, "spellCheckLanguage", this.state.settings.spellChecking),
                    S(e, "toolbarSticky", !1),
                    S(e, "imageUpload", !1),
                    S(e, "imagePaste", !1),
                    S(e, "pasteDeniedTags", ["img", "a"]),
                    e));
                    var a = document.createElement("p");
                    a.className = "wordCount",
                    document.querySelector("#writeAnswersArea").appendChild(a)
                },
                startExam: function() {
                    if ($("#student-menu").children().eq(0).click(),
                    this.examIsStarted = !0,
                    T.a.hide("teacherDemoModal"),
                    T.a.hide("startExam"),
                    C.events.$emit("math-exam-render"),
                    this.$refs.exam.startExam(),
                    this.isSecured())
                        return e(),
                        void f.prevent();
                    function e() {
                        $("#writeAnswersArea").on("froalaEditor.paste.beforeCleanup", function(e, t, n) {
                            var a;
                            C.registerPaste(((a = document.createElement("div")).innerHTML = n,
                            a.innerText))
                        })
                    }
                    I.enter(),
                    this.shouldIgnoreCheatProtection() || this.startCheatProtection(),
                    6 == this.state.settings.browserSecurityMode && e(),
                    "reload" === C.reload && C.cheat && C.cheat.assumeCheating(this.handleCheatDetected)
                },
                askForUnlock: function() {
                    if (this.cheatExplanation.length < 3)
                        this.cheatExplanationError = !0;
                    else {
                        I.enter(),
                        this.cheatProtectionDisabled = !1,
                        clearInterval(this.cheatUnlockPollTimer);
                        var e = C.kunskapsmatrisen.isKunskapsmatrisen ? {
                            status: !0,
                            time: this.state.settings.km_cheat_setting
                        } : {
                            status: !1
                        };
                        $.ajax("/api/exams/".concat(C.examkey, "/cheat"), {
                            method: "post",
                            context: this,
                            timeout: 8e3,
                            data: {
                                token: this.cheatToken,
                                id: this.cheatId,
                                explanation: this.cheatExplanation,
                                km: JSON.stringify(e)
                            },
                            success: function(e) {
                                var t = this;
                                this.cheatExplanation = "",
                                this.cheatProtectionDisabled = !1,
                                this.isShowingCheatModal = !1,
                                setTimeout(function() {
                                    return C.cheat && C.cheat.detectFullScreenLeave(t.handleCheatDetected)
                                }, 400),
                                T.a.hide("cheatWarning"),
                                "ok" === e.status ? this.cheatExplanationError = !1 : "wait" === e.status && this.waitForUnlock(e.time)
                            },
                            error: function() {
                                var e = this;
                                this.cheatExplanation = "",
                                this.cheatProtectionDisabled = !1,
                                this.isShowingCheatModal = !1,
                                setTimeout(function() {
                                    return C.cheat && C.cheat.detectFullScreenLeave(e.handleCheatDetected)
                                }, 400),
                                T.a.hide("cheatWarning")
                            }
                        })
                    }
                },
                waitForUnlock: function(e) {
                    var t = this;
                    0 === e ? $("#unlockMessage").html("Väntar på lärarens upplåsning") : (this.cheatLockTime = e,
                    clearInterval(this.cheatLockTimer),
                    this.cheatLockTimer = setInterval(function() {
                        0 === t.cheatLockTime && $.ajax({
                            method: "post",
                            url: "/api/cheat/please/unlock",
                            context: t,
                            success: function(e) {
                                clearInterval(this.cheatLockTimer),
                                clearInterval(this.cheatUnlockPollTimer),
                                T.a.hide("waitModal")
                            },
                            error: function() {
                                clearInterval(this.cheatLockTimer),
                                clearInterval(this.cheatUnlockPollTimer),
                                T.a.hide("waitModal")
                            }
                        }),
                        t.cheatLockTime -= 1
                    }, 1e3)),
                    this.cheatUnlockPollTimer = setInterval(function() {
                        $.ajax({
                            method: "get",
                            url: "/api/cheat/please",
                            dataType: "json",
                            context: t,
                            success: function(e) {
                                0 == e.is_locked_out && (clearInterval(this.cheatLockTimer),
                                clearInterval(this.cheatUnlockPollTimer),
                                T.a.hide("waitModal"))
                            }
                        })
                    }, 3e3),
                    T.a.show("waitModal")
                },
                updateTime: function() {
                    var e = new Date
                      , t = (e.getHours() < 10 ? "0" : "") + e.getHours()
                      , n = (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
                    $("#clock-time").text("".concat(t, " : ").concat(n))
                },
                transmitSave: function() {
                    var e = C.myexam.answer();
                    if (document.getElementById("printView") && (document.getElementById("printView").innerHTML = e),
                    !(e.length > 3e5)) {
                        if (this.shouldSave ? (this.shouldSave = !1,
                        e === this.lastAnswer ? e = null : this.lastAnswer = e,
                        this.saveTimeout = Math.min(8e3 + 20 * C.myexam.getWordCount(), 3e4),
                        setTimeout(this.shouldSaveNext, this.saveTimeout)) : e = null,
                        null === e && Date.now() - this.lastSaveTime < 4e4)
                            return "skipping";
                        var t = {
                            answer: e,
                            id: this.student.id,
                            token: this.student_token
                        };
                        return 0 == C.isDemo && c.sendIfTime(t),
                        $.ajax({
                            method: "post",
                            url: "/api/fast.php?r=save",
                            dataType: "json",
                            timeout: 1e4,
                            data: t
                        })
                    }
                },
                handleMessage: function(e) {
                    var t = this
                      , n = {
                        discrepancies: function() {
                            console.log(e),
                            e.discrepancies || (e.discrepancies = {}),
                            ["translate", "allow_tts", "audio"].forEach(function(n) {
                                t.state.settings[n] = e.discrepancies[n] || t.exam[n]
                            });
                            var n = x.a.json(t.exam.resources);
                            ["thesaurus", "enThesaurus", "allThesaurus"].forEach(function(a) {
                                t.state.settings.resources[a] = e.discrepancies[a] || n[a]
                            });
                            var a = e.discrepancies.spellChecking || t.exam.spellChecking;
                            a !== t.state.settings.spellChecking && (window.K$.events.$emit("spellcheck-setLanguage", a),
                            t.state.settings.spellChecking = a)
                        },
                        leave_now: function() {
                            t.handIn()
                        },
                        open_part: function() {
                            C.events.$emit("open-part", e.part),
                            setTimeout(function() {
                                return t.save()
                            }, 50)
                        },
                        grant_wanted_part: function() {
                            C.events.$emit("grant-wanted-part", e.part)
                        },
                        deny_wanted_part: function() {
                            C.events.$emit("deny-wanted-part", e.part)
                        },
                        begin_exam: function() {
                            C.events.$emit("begin-exam")
                        }
                    };
                    if (!e || !e.type || "function" != typeof n[e.type])
                        throw new Error("No student message handler defined for ".concat(JSON.stringify(e)));
                    n[e.type]()
                },
                save: function() {
                    var e = this;
                    if (C.lastSaveAttempt = (new Date).getTime(),
                    !this.hasHandedIn && !this.hasAborted) {
                        var t = this
                          , n = this.transmitSave();
                        "skipping" !== n ? (setTimeout(this.save, this.pollTimeout),
                        n.done(function(t) {
                            if (!e.isShowingCheatModal) {
                                if ("received" === !t.status)
                                    return void i();
                                (t.extra || {}).is_handed_in && e.abort({
                                    force: !0
                                })
                            }
                            a.a.removeItem("temporary_answer_storage"),
                            e.failCount = 0,
                            e.lastSaveTime = Date.now()
                        }).fail(i)) : setTimeout(this.save, this.pollTimeout)
                    }
                    function i() {
                        console.log("BAD SAVE"),
                        t.lastAnswer = null,
                        t.shouldSave = !0,
                        t.failCount++,
                        t.failCount < 3 || t.storeOffline()
                    }
                },
                storeOffline: function() {
                    if (!C.isDemo) {
                        var e = {
                            save_token: this.student.save_token,
                            answer: C.myexam.answer(),
                            examkey: C.examkey,
                            student_id: this.student.id
                        }
                          , t = E.a.agwdvdhgawvdlkaöwbdöw(e, E.a.jwahdbajlhwdbj2(this.student.id));
                        a.a.setItem("temporary_answer_storage", JSON.stringify({
                            user_id: this.student.id,
                            data: t
                        }))
                    }
                },
                getEncryptedDataToStore: function() {
                    var e = {
                        save_token: this.student.save_token,
                        answer: C.myexam.answer(),
                        examkey: C.examkey,
                        student_id: this.student.id
                    }
                      , t = E.a.agwdvdhgawvdlkaöwbdöw(e, E.a.jwahdbajlhwdbj2(this.student.id));
                    return JSON.stringify({
                        user_id: this.student.id,
                        data: t
                    })
                },
                generateUsbDownloadLink: function() {
                    C.File.save("".concat(this.student.firstName).concat(this.student.lastName).concat(Date.now(), ".txt"), this.getEncryptedDataToStore())
                },
                shouldSaveNext: function() {
                    this.shouldSave = !0
                },
                startCheatProtection: function() {
                    var e = this;
                    C.cheat = Object(p.a)(),
                    C.cheat.detectFullScreenLeave(this.handleCheatDetected),
                    C.cheat.detectFocusLoss(this.handleCheatDetected),
                    C.cheat.detectSuspectWidth(function() {
                        return e.handleCheatDetected({
                            type: "width"
                        })
                    }),
                    C.pasteProtection.setup(this.student.id),
                    this.setUpFroalaPasteProtection(),
                    C.cheat.preventBack()
                },
                handleCheatDetected: function() {},
                fold: function() {
                    setTimeout(function() {
                        var e = $(".exam-toolbar").css("top");
                        e = "0px" == e ? "1px" : "0px",
                        $(".exam-toolbar").css("top", e)
                    }, 40),
                    this.isFolded = !this.isFolded,
                    C.geogebraHandler.redrawGeogebra(this)
                },
                initGeogebra: function() {
                    C.geogebraHandler.initGeogebra(this)
                },
                confirmRounding: function() {
                    y.a.rounding(this.rounding)
                },
                saveImage: function() {
                    C.geogebraHandler.saveImage()
                }
            }
        })
    },
    "9f7F": function(e, t) {
        var n = 1 / 0
          , a = 9007199254740991
          , i = 1.7976931348623157e308
          , o = NaN
          , r = "[object Function]"
          , s = "[object GeneratorFunction]"
          , c = "[object Symbol]"
          , u = /^\s+|\s+$/g
          , l = /^[-+]0x[0-9a-f]+$/i
          , d = /^0b[01]+$/i
          , h = /^0o[0-7]+$/i
          , m = /^(?:0|[1-9]\d*)$/
          , f = parseInt
          , p = Object.prototype.toString
          , g = Math.ceil
          , w = Math.max;
        function v(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function b(e) {
            return e ? (e = function(e) {
                if ("number" == typeof e)
                    return e;
                if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && p.call(e) == c
                }(e))
                    return o;
                if (v(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = v(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(u, "");
                var n = d.test(e);
                return n || h.test(e) ? f(e.slice(2), n ? 2 : 8) : l.test(e) ? o : +e
            }(e)) === n || e === -n ? (e < 0 ? -1 : 1) * i : e == e ? e : 0 : 0 === e ? e : 0
        }
        var y, k = function(e, t, n) {
            return n && "number" != typeof n && function(e, t, n) {
                if (!v(n))
                    return !1;
                var i = typeof t;
                return !!("number" == i ? function(e) {
                    return null != e && function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a
                    }(e.length) && !function(e) {
                        var t = v(e) ? p.call(e) : "";
                        return t == r || t == s
                    }(e)
                }(n) && function(e, t) {
                    return !!(t = null == t ? a : t) && ("number" == typeof e || m.test(e)) && e > -1 && e % 1 == 0 && e < t
                }(t, n.length) : "string" == i && t in n) && function(e, t) {
                    return e === t || e != e && t != t
                }(n[t], e)
            }(e, t, n) && (t = n = void 0),
            e = b(e),
            void 0 === t ? (t = e,
            e = 0) : t = b(t),
            function(e, t, n, a) {
                for (var i = -1, o = w(g((t - e) / (n || 1)), 0), r = Array(o); o--; )
                    r[a ? o : ++i] = e,
                    e += n;
                return r
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : b(n), y)
        };
        e.exports = k
    },
    BOdp: function(e, t, n) {
        "use strict";
        var a = {
            mode: function(e) {
                if (console.log("SETTING TYPE", e),
                window.ggbApplet && "function" == typeof window.ggbApplet.setPerspective) {
                    var t = {
                        standard: 1,
                        cas: 4,
                        spreadsheet: 3,
                        statistics: 6
                    };
                    void 0 !== t[e] && window.ggbApplet.setPerspective(t[e])
                }
            },
            reset: function() {
                window.ggbApplet && ggbApplet.reset()
            },
            reinitialize: function() {
                window.K$.resetGG()
            },
            rounding: function(e) {
                window.ggbApplet && window.ggbApplet.setRounding(e)
            },
            moveInputBar: function() {
                window.ggbApplet && window.ggbApplet.showAlgebraInput(!0)
            },
            deploy: function() {
                return new Promise(function(e, t) {
                    if (window.ggbApplet)
                        return e();
                    var n = document.createElement("script");
                    n.addEventListener("load", function() {
                        return e()
                    }),
                    n.addEventListener("error", function() {
                        return t()
                    }),
                    n.src = "https://cdn.geogebra.org/apps/deployggb.js",
                    document.getElementsByTagName("head")[0].appendChild(n)
                }
                )
            }
        };
        t.a = a
    },
    NpBj: function(e, t, n) {
        "use strict";
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        var i = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                Object.assign(this, t)
            }
            var t, n, i;
            return t = e,
            (n = [{
                key: "name",
                get: function() {
                    var e = this
                      , t = ["firstName", "lastName"].map(function(t) {
                        return "".concat(e[t] || "")
                    }).filter(function(e) {
                        return e.length
                    }).join(" ");
                    return t.length ? t : this.email
                }
            }, {
                key: "initials",
                get: function() {
                    var e = "";
                    return this.firstName ? (e += this.firstName[0].toUpperCase() + ".&nbsp;",
                    this.lastName && (e += this.lastName[0].toUpperCase() + "."),
                    e) : this.lastName ? this.lastName[0].toUpperCase() + "." : e = this.email.slice(0, 3)
                }
            }]) && a(t.prototype, n),
            i && a(t, i),
            e
        }();
        t.a = i
    },
    OAhp: function(e, t, n) {
        "use strict";
        function a() {
            return window.K$.chromebook.isKioskChromebook()
        }
        var i = {
            getItem: function(e) {
                return a() ? new Promise(function(t) {
                    return window.K$.chromebook.getItem(e, t)
                }
                ) : Promise.resolve(window.localStorage.getItem(e))
            },
            setItem: function(e, t) {
                a() ? window.K$.chromebook.setItem(e, t) : window.localStorage.setItem(e, t)
            },
            removeItem: function(e) {
                a() ? window.K$.chromebook.removeItem(e) : window.localStorage.removeItem(e)
            }
        };
        t.a = i
    },
    PJwG: function(e, t, n) {
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        var i = n("9f7F")
          , o = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.exam = t
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "documents",
                value: function() {
                    return this.shimFormulas().shimExamDocument().exam
                }
            }, {
                key: "shimExamDocument",
                value: function() {
                    var e = JSON.parse(this.exam.content)
                      , t = "local" === window.K$.ENV ? "https://exam.app" : "https://exam.net";
                    return e.folder && (e.documentPages = i(0, e.pageCount).map(function(n) {
                        return "".concat(t, "/examUploads/").concat(e.folder, "/").concat(n, ".png")
                    }),
                    delete e.folder,
                    delete e.pageCount),
                    this.exam.content = JSON.stringify(e),
                    this
                }
            }, {
                key: "shimFormulas",
                value: function() {
                    var e = JSON.parse(this.exam.ownFormulas)
                      , t = "local" === window.K$.ENV ? "https://exam.app" : "https://exam.net";
                    return e = e.map(function(e) {
                        return e.folder ? {
                            documentPages: i(0, e.pageCount).map(function(n) {
                                return "".concat(t, "/examUploads/").concat(e.folder, "/").concat(n, ".png")
                            })
                        } : e
                    }),
                    this.exam.ownFormulas = JSON.stringify(e),
                    this
                }
            }]) && a(t.prototype, n),
            o && a(t, o),
            e
        }();
        e.exports = o
    },
    Ql4a: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("lfnC"), o = (a = i) && a.__esModule ? a : {
            default: a
        };
        var r = {
            json: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var a = o.default.build({
                    specs: t,
                    defaultOptions: {
                        type: "object"
                    },
                    namedOptions: ["seralized", "type"]
                });
                function i() {
                    return "array" === a.type ? [] : {}
                }
                try {
                    var r = JSON.parse(a.seralized);
                    return r || i()
                } catch (e) {
                    return i()
                }
            }
        };
        t.default = r
    },
    gQEB: function(e, t, n) {
        "use strict";
        var a = {
            hash: function(e) {
                return new Promise(function(t, n) {
                    var a = new FileReader;
                    a.onload = function() {
                        var e = CryptoJS.lib.WordArray.create(this.result)
                          , n = CryptoJS.SHA1(e);
                        t(n.toString())
                    }
                    ,
                    a.onerror = function() {
                        n(new Error("Could not hash file"))
                    }
                    ,
                    a.readAsArrayBuffer(e)
                }
                )
            },
            sha256: function(e) {
                return sjcl.hash.sha256.hash(e).map(function(e) {
                    return (e < 0 ? 4294967295 + e + 1 : e).toString(16)
                }).join("")
            },
            jwahdbajlhwdbj2: function(e) {
                return a.sha256("huPYvsU6".concat(e, "LadbiBfr").concat(e, "UgdkAKRBj"))
            },
            "agwdvdhgawvdlkaöwbdöw": function(e, t) {
                var n = JSON.stringify(e);
                return sjcl.encrypt(t, n)
            },
            "wadjvawldbvöaiwldblaw": function(e, t) {
                var n = sjcl.decrypt(t, e);
                return JSON.parse(n)
            }
        };
        t.a = a
    },
    hVn9: function(e, t, n) {
        "use strict";
        function a() {
            var e = {}
              , t = !1;
            K$.events.$on("disable-protection", function() {
                return t = !0
            }),
            K$.events.$on("enable-protection", function() {
                return t = !1
            });
            var n = ["dcg-exppanel-outer", "fr-view"];
            return {
                detectSuspectWidth: function(e) {
                    var t = 0;
                    setTimeout(function() {
                        return function n() {
                            screen.width - (window.outerWidth || window.innerWidth) > 200 && e(),
                            setTimeout(function() {
                                return n()
                            }, Math.min(18e4, 1e4 + 5e3 * ++t))
                        }()
                    }, 1e4)
                },
                detectFullScreenLeave: function(n) {
                    var a, i = !1;
                    a = navigator.userAgent || navigator.vendor || window.opera,
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (i = !0),
                    i || $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(a) {
                        if (!t) {
                            clearInterval(e);
                            var i = 0;
                            e = setInterval(function() {
                                i > 10 && clearInterval(e),
                                i++,
                                document.webkitFullscreenElement || document.msFullscreenElement || document.fullscreenElement || document.mozFullScreenElement ? console.log("OK") : (clearInterval(e),
                                console.log("FULLSCREENLEAVE DETECTED"),
                                n())
                            }, 600)
                        }
                    })
                },
                preventBack: function() {
                    !function(e) {
                        if (void 0 === e)
                            throw new Error("window is undefined");
                        e.onhashchange = function() {
                            "!" !== e.location.hash && (e.location.hash = "!")
                        }
                        ,
                        $(function() {
                            e.location.href += "#",
                            e.setTimeout(function() {
                                e.location.href += "!"
                            }, 50),
                            $("body").on("keydown", function(e) {
                                e.target.nodeName.toLowerCase(),
                                function(e) {
                                    if ((e.metaKey || e.ctrlKey) && {
                                        73: "i",
                                        74: "j",
                                        85: "u"
                                    }[e.which])
                                        return console.log("Preventing a ctrl/cmd-special kombination"),
                                        !1;
                                    if (null == navigator.userAgent.match(/iPad/i)) {
                                        var t = e.target.nodeName.toLowerCase();
                                        if (8 === e.which && "input" !== t && "textarea" !== t)
                                            return console.log("Preventing backspace back"),
                                            !1
                                    }
                                    return !0
                                }(e) || e.preventDefault()
                            })
                        })
                    }(window)
                },
                detectFocusLoss: function(e) {
                    window.addEventListener("blur", function(a) {
                        if (t)
                            console.log("Blur protection disabled");
                        else {
                            if (console.log(a.currentTarget.className),
                            a.currentTarget && a.currentTarget.className && a.currentTarget.className.split(" ").find(function(e) {
                                return n.includes(e)
                            }))
                                return void console.log("Allowing whitelisted blur/focusout");
                            console.log("BLUR DETECTED", a),
                            e(a)
                        }
                    });
                    var a = "hidden";
                    function i(e) {}
                    a in document ? document.addEventListener("visibilitychange", i) : (a = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", i) : (a = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", i) : (a = "msHidden")in document ? document.addEventListener("msvisibilitychange", i) : "onfocusin"in document ? document.onfocusin = document.onfocusout = i : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = i,
                    void 0 !== document[a] && document[a]
                },
                assumeCheating: function(e) {
                    e("assumeCheating")
                }
            }
        }
        n.d(t, "a", function() {
            return a
        })
    },
    lfnC: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = {
            build: function(e) {
                var t = e.specs
                  , n = e.defaultOptions
                  , i = e.namedOptions
                  , o = Object.assign({}, n || {});
                return t.forEach(function(e, t) {
                    "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e && (i || []).length >= t + 1 && (o[i[t]] = e),
                    "object" === (void 0 === e ? "undefined" : a(e)) && (o = Object.assign(o, e))
                }),
                o
            }
        };
        t.default = i
    }
});
