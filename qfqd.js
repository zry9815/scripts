/*
9.15  

软件：  羊毛
收益：  每天200W  
注意事项 ： 运行js时不要打开软件app

获取ck：  打开软件即可------

重写：-------

主机名：-------

*/



//只需要把 qfqd 批量替换成你想取的名字
// 把  清风  改成软件名  

const $ = new Env('清风签到');
let status;

status = (status = ($.getval("qfqdstatus") || "1")) > 1 ? `${status}` : "";

const qfqdurlArr = [], qfqdhdArr = [], qfqdbodyArr = [], qfqdcount = ''

let qfqdurl = $.getdata('qfqdurl')
let qfqdhd = $.getdata('qfqdhd')
let qfqdbody = $.getdata('qfqdbody')



!(async () => {
    if (typeof $request !== "undefined") {

        qfqdck()

    } else {
        qfqdurlArr.push($.getdata('qfqdurl'))
        qfqdhdArr.push($.getdata('qfqdhd'))
        qfqdbodyArr.push($.getdata('qfqdbody'))

        let qfqdcount = ($.getval('qfqdcount') || '1');

        for (let i = 2; i <= qfqdcount; i++) {

            qfqdurlArr.push($.getdata(`qfqdurl${i}`))
            qfqdhdArr.push($.getdata(`qfqdhd${i}`))
            qfqdbodyArr.push($.getdata(`qfqdbody${i}`))

        }

        console.log(
            `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000
            ).toLocaleString()} ===============================================\n`);

        for (let i = 0; i < qfqdhdArr.length; i++) {

            if (qfqdhdArr[i]) {

                qfqdurl = qfqdurlArr[i];
                qfqdhd = qfqdhdArr[i];
                qfqdbody = qfqdbodyArr[i];

                $.index = i + 1;
                console.log(`\n\n开始【清风${$.index}】`)


                //循环运行
                for (let c = 0; c < 200; c++) {
                    $.index = c + 1

                    await qfqd()//你要执行的版块
                    // await $.wait(1000)//你要延迟的时间  1000=1秒

                }
            }
        }
    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())

//POST https://wap.xj.10086.cn/mservice/server/activity/signIn2021/sign?BTls6WcN=5w2xpYgcK_Sajuci6i6zkEbTdze_JuHL4Wuc8LnIYPghR8oT4Oi2NSU0Cnv5Fi1jtVMKa03NBEmBhLGR0abJiOph91lHINupl0G01qmepsxe3JM2JQIUgqS0XcJUVGPtkzO5MIPICQzqWN0KfieeEgatySbHXhuUURnCaAt1dEWU7xctN1Kgbhy6F8.abt4658yYvI88_wRz3kRGWuLJ12cGU4hSA26YLbOq49wnKBjcux0UsL1jiVQR__.hjyeL1yG5eSzOM9GP.g4wVJ65SPqhu4V6SSVmWPASmJyTWWHs0hI9SNjvG.LhkxQ0vO95cZjvHSYIHKJE0yOqZrwDgQlvVa_UHw46MmDMua8ZkwOPjuIRttfKbOSt_WHI_TxtTdY3rBDwFQc823CWaMBpOfq&Oft1jXVy=4RA.uXkwbe3YgJKNVszT1q7ZJLhkgdzQBdFQluAVYqTI7abj681.1uUZAaf7QPLZS8SReOjp1f.B.84rRqnr_D4wPOw_RctznSi3JP7RcSDEj74yh4F0WeDCqD5duJJiQMaklUTt.lMChpviyHH9H5.H.G6YERyAD_sLLF4jkllyL_5R2sqEKqxfe0KW._WaqFYWGBLk0xYmmAotqGZ_3Ja
//获取ck
function qfqdck() {
    if ($request.url.indexOf("fe_log") > -1) {
        const qfqdurl = $request.url
        if (qfqdurl) $.setdata(qfqdurl, `qfqdurl${status}`)
        $.log(qfqdurl)

        const qfqdhd = JSON.stringify($request.headers)
        if (qfqdhd) $.setdata(qfqdhd, `qfqdhd${status}`)
        $.log(qfqdhd)

        const qfqdbody = $request.body
        if (qfqdbody) $.setdata(qfqdbody, `qfqdbody${status}`)
        $.log(qfqdbody)

        $.msg($.name, "", `清风${status}获取headers成功`)

    }
}




//版块  取名字qfqd
function qfqd(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://apppwcwhbsd2419.h5.xiaoeknow.com/punch_card/publish_diary`,
            headers: JSON.parse(qfqdhd),
            body: `{"bizData":"{\\"clock_theme_id\\":\\"th_615e4863548fb_dYuLIDXa\\",\\"activity_id\\":\\"ac_60b4a2f5e294a_pRPxDzgk\\",\\"text_content\\":\\"打卡内容仅自己可见，在群内才可以参加这个打卡活动哟，如发现多个账号同时累积积分，直接取消该福利资格，\\\\n\\\\n亲爱哒可以看下群内专区的福利活动（在群内@小助理专区即可）会一直持续更新长期有效的  每日中午12.00-12.30还会有专属的活动通知的 可以关注下哟\\",\\"time_zone\\":-8,\\"app_version\\":\\"h5\\",\\"is_private\\":1,\\"mix_records\\":[],\\"audio_records\\":[],\\"video_records\\":[],\\"img_urls\\":[],\\"img_compressed_urls\\":[]}"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)

                if (data.code == 0) {
            console.log(msg)

                } else {
            console('打卡失败')

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}





//env模块    不要动  
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
