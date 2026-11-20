var testing = false;
if (window.location.href.indexOf("/testing") >= 0) testing = true;
var iioc = false;
var nsr = false;
var grq = document.getElementById("grq");
var grqh = document.getElementById("grqh");
if (!TouchEvent) var TouchEvent = function() {};
var lang = navigator.language || navigator.userLanguage;
lang = lang.substr(0, 2);
var ua = navigator.userAgent.toLowerCase();
var is_android = ua.indexOf("android") >= 0;
var is_amazon = ua.indexOf("kindle") >= 0 || ua.indexOf("silk/") >= 0;
var uua = navigator.userAgent;
var is_ios = uua.indexOf("iPad") >= 0 || uua.indexOf("iPhone") >= 0 || uua.indexOf("iPod") >= 0;
var is_mobile = ua.indexOf("mobile") >= 0;
var is_firefox = ua.indexOf("firefox") > -1;
var is_ie8oo = window.attachEvent && !window.addEventListener;
var is_chrome = false;
var is_osx = false;
var osx_ver = -1;
var is_safari = false;
if (ua.indexOf("safari") >= 0)
 if (ua.indexOf("chrome") == -1) is_safari = true;
if (ua.indexOf("chrome") >= 0)
 if (!is_safari)
  if (!is_firefox) is_chrome = true;
if (ua.indexOf("mac os x ") >= 0) {
 var j = ua.indexOf("mac os x ");
 if (j >= 0) {
  j += 9;
  var vs = [];
  var v = 0;
  for (var i = j; i < ua.length; i++) {
   var k = ua.charCodeAt(i);
   if (k >= 48 && k <= 57) {
    v *= 10;
    v += k - 48
   } else {
    vs.push(v);
    v = 0;
    if (vs.length == 3 || k != 46 && k != 95) break
   }
  }
  if (vs.length >= 2)
   if (vs[0] == 10) {
    is_osx = true;
    osx_ver = vs[1]
   }
 }
}
if (navigator.platform) {
 var ptf = ("" + navigator.platform).toLowerCase();
 if (ptf.substr(0, 3) != "mac") is_osx = false
}
var no_raf = false;
var raf = function(x) {};
if (window.requestAnimationFrame) raf = window.requestAnimationFrame;
else if (window.mozRequestAnimationFrame) raf = window.mozRequestAnimationFrame;
else if (window.webkitRequestAnimationFrame) raf = window.webkitRequestAnimationFrame;
else no_raf = true;
var timeObj = Date;
try {
 if (performance) {
  var v = performance.now();
  timeObj = performance;
  if (testing) console.log("timeObj set to performance")
 }
} catch (e) {}
var lfsx;
var lfsy;
var lfcv;
var lfvsx;
var lfvsy;
var lfesid;
var sgsdr = 0;
var fdsdr = 0;
var vvd = [];
var vch = 0;
var doiosh = false;
if (is_chrome)
 if (is_osx)
  if (osx_ver != -1)
   if (osx_ver <= 11) nsr = true;
var a, i, j, k, l, m, n, o, r, v;
var j2;
var fj;
var fjm4;
var d, d2, d3;
var qq;
var ki;
var sc;
var agpu = "translateZ(0)";
var ang, sang, vang;

function trf(d, s) {
 d.style.webkitTransform = d.style.OTransform = d.style.msTransform = d.style.MozTransform = d.style.transform = s
}

function trfo(d, s) {
 d.style.webkitTransformOrigin = d.style.OTransformOrigin = d.style.msTransformOrigin = d.style.MozTransformOrigin = d.style.transformOrigin = s
}
var pi2 = 2 * Math.PI;
var animating = false;
var startAnimation = function() {
 animating = true;
 if (!no_raf) raf(oef);
 else if (is_mobile) setInterval("oef()", 33);
 else if (is_safari) setInterval("oef()", 33);
 else setInterval("oef()", 20)
};
var ois = [];
var wic = 0;
var ldi = function(n) {
 wic++;
 var o = {};
 var ii = document.createElement("img");
 o.ii = ii;
 o.sc = 1;
 ii.onload = function() {
  for (var i = ois.length - 1; i >= 0; i--)
   if (ois[i].ii == this) {
    var o = ois[i];
    o.ww = this.width;
    o.hh = this.height;
    o.loaded = true;
    if (o.onload) o.onload();
    break
   } wic--;
  if (wic == 0) startAnimation()
 };
 o.src = n;
 ois.push(o);
 return o
};

function addCss(cssCode) {
 var styleElement = document.createElement("style");
 document.getElementsByTagName("head")[0].appendChild(styleElement);
 styleElement.type = "text/css";
 if (styleElement.styleSheet) styleElement.styleSheet.cssText = cssCode;
 else styleElement.appendChild(document.createTextNode(cssCode))
}
var tsh = [];
for (var tx = -1; tx <= 1; tx++)
 for (var ty = -1; ty <= 1; ty++) tsh.push(tx + "px " + ty + "px 0 #000");
tsh = tsh.join(", ");

function RectanglePacker(width, height, padding) {
 this.mWidth = 0;
 this.mHeight = 0;
 this.mPadding = 8;
 this.mPackedWidth = 0;
 this.mPackedHeight = 0;
 this.mInsertList = [];
 this.mInsertedRectangles = [];
 this.mFreeAreas = [];
 this.mNewFreeAreas = [];
 this.mOutsideRectangle = new IntegerRectangle(width + 1, height + 1, 0, 0);
 this.mSortableSizeStack = [];
 this.mRectangleStack = [];
 this.rectangleCount = function() {
  return this.mInsertedRectangles.length
 };
 this.reset = function(width, height, padding) {
  while (this.mInsertedRectangles.length > 0) this.freeRectangle(this.mInsertedRectangles.pop());
  while (this.mFreeAreas.length > 0) this.freeRectangle(this.mFreeAreas.pop());
  this.mWidth = width;
  this.mHeight = height;
  this.mPackedWidth = 0;
  this.mPackedHeight = 0;
  this.mFreeAreas[0] = this.allocateRectangle(0, 0, this.mWidth, this.mHeight);
  while (this.mInsertList.length > 0) this.freeSize(this.mInsertList.pop());
  this.mPadding = padding
 };
 this.getRectangle = function(index, rectangle) {
  var inserted = this.mInsertedRectangles[index];
  if (rectangle) {
   rectangle.x = inserted.x;
   rectangle.y = inserted.y;
   rectangle.width = inserted.width;
   rectangle.height =
    inserted.height;
   return rectangle
  }
  return new IntegerRectangle(inserted.x, inserted.y, inserted.width, inserted.height)
 };
 this.getRectangleId = function(index) {
  var inserted = this.mInsertedRectangles[index];
  return inserted.id
 };
 this.insertRectangle = function(width, height, id) {
  var sortableSize = this.allocateSize(width, height, id);
  this.mInsertList.push(sortableSize)
 };
 this.packRectangles = function(sort) {
  if (sort) this.mInsertList.sort(numsort_width);
  while (this.mInsertList.length > 0) {
   var sortableSize = this.mInsertList.pop();
   var width = sortableSize.width;
   var height = sortableSize.height;
   var index = this.getFreeAreaIndex(width, height);
   if (index >= 0) {
    var freeArea = this.mFreeAreas[index];
    var target = this.allocateRectangle(freeArea.x, freeArea.y, width, height);
    target.id = sortableSize.id;
    this.generateNewFreeAreas(target, this.mFreeAreas, this.mNewFreeAreas);
    while (this.mNewFreeAreas.length > 0) this.mFreeAreas[this.mFreeAreas.length] = this.mNewFreeAreas.pop();
    this.mInsertedRectangles[this.mInsertedRectangles.length] = target;
    if (target.right > this.mPackedWidth) this.mPackedWidth =
     target.right;
    if (target.bottom > this.mPackedHeight) this.mPackedHeight = target.bottom
   }
   this.freeSize(sortableSize)
  }
  return this.rectangleCount()
 };
 this.filterSelfSubAreas = function(areas) {
  for (var i = areas.length - 1; i >= 0; i--) {
   var filtered = areas[i];
   for (var j = areas.length - 1; j >= 0; j--)
    if (i != j) {
     var area = areas[j];
     if (filtered.x >= area.x && filtered.y >= area.y && filtered.right <= area.right && filtered.bottom <= area.bottom) {
      this.freeRectangle(filtered);
      var topOfStack = areas.pop();
      if (i < areas.length) areas[i] = topOfStack;
      break
     }
    }
  }
 };
 this.generateNewFreeAreas = function(target, areas, results) {
  var x = target.x;
  var y = target.y;
  var right = target.right + 1 + this.mPadding;
  var bottom = target.bottom + 1 + this.mPadding;
  var targetWithPadding = null;
  if (this.mPadding == 0) targetWithPadding = target;
  for (var i = areas.length - 1; i >= 0; i--) {
   var area = areas[i];
   if (!(x >= area.right || right <= area.x || y >= area.bottom || bottom <= area.y)) {
    if (!targetWithPadding) targetWithPadding = this.allocateRectangle(target.x, target.y, target.width + this.mPadding, target.height + this.mPadding);
    this.generateDividedAreas(targetWithPadding,
     area, results);
    var topOfStack = areas.pop();
    if (i < areas.length) areas[i] = topOfStack
   }
  }
  if (targetWithPadding && targetWithPadding != target) this.freeRectangle(targetWithPadding);
  this.filterSelfSubAreas(results)
 };
 this.generateDividedAreas = function(divider, area, results) {
  var count = 0;
  var rightDelta = area.right - divider.right;
  if (rightDelta > 0) {
   results[results.length] = this.allocateRectangle(divider.right, area.y, rightDelta, area.height);
   count++
  }
  var leftDelta = divider.x - area.x;
  if (leftDelta > 0) {
   results[results.length] = this.allocateRectangle(area.x,
    area.y, leftDelta, area.height);
   count++
  }
  var bottomDelta = area.bottom - divider.bottom;
  if (bottomDelta > 0) {
   results[results.length] = this.allocateRectangle(area.x, divider.bottom, area.width, bottomDelta);
   count++
  }
  var topDelta = divider.y - area.y;
  if (topDelta > 0) {
   results[results.length] = this.allocateRectangle(area.x, area.y, area.width, topDelta);
   count++
  }
  if (count == 0 && (divider.width < area.width || divider.height < area.height)) results[results.length] = area;
  else this.freeRectangle(area)
 };
 this.getFreeAreaIndex = function(width, height) {
  var best =
   this.mOutsideRectangle;
  var index = -1;
  var paddedWidth = width + this.mPadding;
  var paddedHeight = height + this.mPadding;
  var count = this.mFreeAreas.length;
  for (var i = count - 1; i >= 0; i--) {
   var free = this.mFreeAreas[i];
   if (free.x < this.mPackedWidth || free.y < this.mPackedHeight) {
    if (free.x < best.x && paddedWidth <= free.width && paddedHeight <= free.height) {
     index = i;
     if (paddedWidth == free.width && free.width <= free.height && free.right < this.mWidth || paddedHeight == free.height && free.height <= free.width) break;
     best = free
    }
   } else if (free.x < best.x &&
    width <= free.width && height <= free.height) {
    index = i;
    if (width == free.width && free.width <= free.height && free.right < this.mWidth || height == free.height && free.height <= free.width) break;
    best = free
   }
  }
  return index
 };
 this.allocateRectangle = function(x, y, width, height) {
  if (this.mRectangleStack.length > 0) {
   var rectangle = this.mRectangleStack.pop();
   rectangle.x = x;
   rectangle.y = y;
   rectangle.width = width;
   rectangle.height = height;
   rectangle.right = x + width;
   rectangle.bottom = y + height;
   return rectangle
  }
  return new IntegerRectangle(x, y, width, height)
 };
 this.freeRectangle = function(rectangle) {
  this.mRectangleStack[this.mRectangleStack.length] = rectangle
 };
 this.allocateSize = function(width, height, id) {
  if (this.mSortableSizeStack.length > 0) {
   var size = this.mSortableSizeStack.pop();
   size.width = width;
   size.height = height;
   size.id = id;
   return size
  }
  return new SortableSize(width, height, id)
 };
 this.freeSize = function(size) {
  this.mSortableSizeStack[this.mSortableSizeStack.length] = size
 };
 this.reset(width, height, padding)
}

function IntegerRectangle(x, y, width, height) {
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
 this.right = x + width;
 this.bottom = y + height
}

function SortableSize(width, height, id) {
 this.width = width;
 this.height = height;
 this.id = id
}
var numsort_width = function(a, b) {
 return a.width - b.width
};
var j, k, l, p;
var xx, yy;
var rad;
var grw, grh;
var elem, map, imgd;
var ctx;
var rw, rh;

function makeTextBtn(s, variant) {
 var btn = document.createElement("button");
 btn.type = "button";
 btn.className = "ui-btn " + (variant || "ui-btn-primary");
 btn.textContent = s;
 var o = {};
 o.elem = btn;
 o.disabled = false;
 o.setEnabled = function(e) {
  this.disabled = !e;
  this.elem.disabled = !e
 };
 o.setText = function(t) {
  this.elem.textContent = t
 };
 return o
}

var lgbsc = 1;
var lgcsc = 1;
var lb_fr = 0;
var login_fr = 0;
var llgmtm = timeObj.now();
var login_iv = -1;

function loginFade() {
 var cmtm = timeObj.now();
 var lgfr = (cmtm - llgmtm) / 25;
 llgmtm = cmtm;
 login_fr += .05 * lgfr;
 if (choosing_skin) login_fr += .06 * lgfr;
 if (login_fr >= 1) {
  login_fr = 1;
  login.style.display = "none";
  cskh.style.display = "none";
  grqh.style.display = "none";
  login.style.opacity =
   1;
  cskh.style.opacity = 1;
  grqh.style.opacity = 1;
  pskh.style.opacity = 1;
  nskh.style.opacity = 1;
  bskh.style.opacity = 1;
  skodiv.style.opacity = 1;
  revdiv.style.opacity = 1;
  tip_fr = -1;
  tips.style.display = "none";
  mc.style.opacity = 1;
  loch.style.opacity = mmal;
  clearInterval(login_iv);
  login_iv = -1;
  if (showlogo_iv != -1) {
   lga = 1;
   lgss = 1;
   ncka = 1;
   showLogo(true);
   if (showlogo_iv != -1) {
    clearInterval(showlogo_iv);
    showlogo_iv = -1
   }
  }
 } else {
  lgcsc = 1 + .1 * Math.pow(login_fr, 2);
  var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
  trf(login, "scale(" + sc + "," + sc + ")");
  login.style.opacity = 1 - login_fr;
  cskh.style.opacity = 1 - login_fr;
  grqh.style.opacity =
   1 - login_fr;
  pskh.style.opacity = login_fr;
  nskh.style.opacity = login_fr;
  bskh.style.opacity = login_fr;
  skodiv.style.opacity = login_fr;
  revdiv.style.opacity = login_fr;
  if (choosing_skin) mc.style.opacity = login_fr;
  loch.style.opacity = login_fr * mmal
 }
}
var want_play = false;
var lcldtm = timeObj.now();
var rstr = "Reset";
if (lang == "de") rstr = "L\u00f6schen";
else if (lang == "fr") rstr = "Effacer";
else if (lang == "pt") rstr = "Apagar";
var o = makeTextBtn(rstr, "ui-btn-secondary");
var revdiv = o.elem;
revdiv.style.zIndex = 53;
revdiv.style.position = "fixed";
revdiv.style.left = "300px";
revdiv.style.top = "300px";
revdiv.style.display = "none";
revdiv.style.opacity = 0;
document.body.appendChild(revdiv);
o.elem.onclick = function() {
 if (building_skin)
  if (!ending_build_skin) {
   build_segments = [];
   var aa = getBuildSkinData(true);
   setSkin(slither, 0, aa)
  }
};
var sstr = "Save";
if (lang == "de") sstr = "OK";
else if (lang == "fr") sstr = "Bien";
else if (lang == "pt") sstr = "OK";
var o = makeTextBtn(sstr);
var sko_btn = o;
var skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
 if (building_skin)
  if (!ending_build_skin) {
   ending_build_skin = true;
   var aa = "";
   if (build_segments.length > 0) aa = getBuildSkinData(false);
   else {
    var taa = "";
    try {
     taa = localStorage.custom_skin;
     if (taa)
      if (taa.length > 0) {
       taa = ("" + taa).split(",");
       aa = new Uint8Array(taa.length);
       for (var i = 0; i < taa.length; i++) aa[i] = Number(taa[i])
      }
    } catch (e) {}
   }
   if (aa == null) aa = "";
   if (aa.length > 0) {
    setSkin(slither, 0, aa);
    var taa = [];
    for (var i = 0; i < aa.length; i++) taa.push(aa[i]);
    var fss = taa.join(",");
    try {
     localStorage.custom_skin =
      fss;
     localStorage.want_custom_skin = "1"
    } catch (e) {}
   } else {
    var cv = Math.floor(Math.random() * 9);
    try {
     var mcv = localStorage.snakercv;
     if (mcv == "" + Number(mcv)) cv = Number(mcv)
    } catch (e) {}
    setSkin(slither, cv, null);
    try {
     localStorage.want_custom_skin = "0"
    } catch (e) {}
   }
   return
  } if (playing) {
  try {
   localStorage.snakercv = slither.rcv
  } catch (e) {}
  playing = false;
  dead_mtm = timeObj.now() -
   5E3
 }
};
var nick = document.getElementById("nick");
var logo = document.getElementById("logo");
var login = document.getElementById("login");
var lastscore = document.getElementById("lastscore");
var nick_holder = document.getElementById("nick_holder");
nick.autocomplete = "off";
var pstr = "Play";
if (lang == "de") pstr = "Spielen";
else if (lang == "fr") {
 pstr = "Jouer";
 nick.placeholder = "Surnom"
} else if (lang == "pt") {
 pstr = "Joga";
 nick.placeholder = "Apelido"
}
var o = makeTextBtn(pstr, "ui-btn-primary ui-btn-play");
var play_btn = o;
var pbdiv = o.elem;
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips");
var tipss = ["Eat to grow longer", "Keep your head away from other snakes", "Once you're longer, hold the mouse to boost"];
if (lang == "de") tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"];
else if (lang == "fr") tipss = ["Mange pour cro\u00eetre !", "Clique pour courir !", "Ne laissez pas votre t\u00eate toucher d'autres serpents !"];
else if (lang == "pt") tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"];
var tip_pos = -1;
var tip_fr = 1.9;
o.elem.onclick = function() {
 if (!want_play)
  if (!play_btn.disabled) {
   want_play = true;
   play_btn.setEnabled(false);
   nick.disabled = true
  }
};
var wide = false;
var mww = 850;
var mhh = 700;
var mwwp50 = mww + 50;
var mhhp50 = mhh + 50;
var mwwp150 = mww + 150;
var mhhp150 = mhh + 150;
var mww2 = mww / 2;
var mhh2 = mhh / 2;
var mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi hud-panel";
lbh.id = "leaderboard";
lbh.style.display = "none";
var lstr = "Leaderboard";
if (lang == "de") lstr = "Bestenliste";
else if (lang == "fr") lstr = "Gagnants";
else if (lang == "pt") lstr = "Líderes";
var lbt = document.createElement("h2");
lbt.textContent = lstr;
lbh.appendChild(lbt);
var lbn = document.createElement("ol");
lbn.translate = "no";
lbh.appendChild(lbn);
document.body.appendChild(lbh);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.id = "hud-stats";
lbf.style.display = "none";
document.body.appendChild(lbf);
var loch = document.createElement("div");
loch.className = "nsi";
loch.id = "minimap";
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img");
loch.appendChild(loc);
var asmc = document.createElement("canvas");
loch.appendChild(asmc);
var asmc2 = document.createElement("canvas");
loch.appendChild(asmc2);
var myloc = document.createElement("img");
var lc = document.createElement("canvas");
lc.width = lc.height = 14;
var ctx = lc.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#131a26";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 3.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
var ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas");
var bgp2 = null;
var bgee = null;
var bgees = [];
var arena_base = "#131a26";
var arena_dot_gap = 44;
var bgw2 = arena_dot_gap * 12;
var bgh2 = arena_dot_gap * 12;
var bg_hex = buildArenaTile();

function buildArenaTile() {
 var c = document.createElement("canvas");
 c.width = bgw2;
 c.height = bgh2;
 var ctx = c.getContext("2d");
 ctx.fillStyle = arena_base;
 ctx.fillRect(0, 0, bgw2, bgh2);
 ctx.fillStyle = "#1e2737";
 for (var yy = arena_dot_gap / 2; yy < bgh2; yy += arena_dot_gap)
  for (var xx = arena_dot_gap / 2; xx < bgw2; xx += arena_dot_gap) {
   ctx.beginPath();
   ctx.arc(xx, yy, 2.4, 0, pi2);
   ctx.fill()
  }
 return c
}

function rdgbg() {
 if (!gbgmc) gbgmc = document.createElement("canvas");
 gbgmc.width = mww;
 gbgmc.height = mhh;
 var ctx = gbgmc.getContext("2d");
 var rad = Math.sqrt(mww * mww + mhh * mhh) / 2;
 var g = ctx.createRadialGradient(mww / 2, mhh / 2, rad * .45, mww / 2, mhh / 2, rad);
 g.addColorStop(0, "rgba(6, 9, 15, 0)");
 g.addColorStop(1, "rgba(6, 9, 15, .45)");
 ctx.fillStyle = g;
 ctx.fillRect(0, 0, mww, mhh)
}
var gbgmc = null;
rdgbg();

function newDeadpool() {
 var dpo = {};
 dpo.os = [];
 dpo.end_pos = 0;
 dpo.add = function(o) {
  if (this.end_pos == this.os.length) this.os.push(o);
  else this.os[this.end_pos] = o;
  this.end_pos++
 };
 dpo.get = function() {
  if (this.end_pos >= 1) {
   this.end_pos--;
   var o = this.os[this.end_pos];
   this.os[this.end_pos] = null;
   return o
  }
  return null
 };
 return dpo
}

function gdnm(s) {
 var cs = "";
 var csg = "";
 var csw = "";
 var cdc = 0;
 var dg = false;
 var sp = false;
 var i, v;
 for (i = 0; i < s.length; i++) {
  v = s.charCodeAt(i);
  if (v == 32) {
   if (!sp) {
    sp = true;
    cs += " "
   }
  } else {
   sp = false;
   cs += String.fromCharCode(v)
  }
 }
 sp = false;
 for (i = 0; i < s.length; i++) {
  v = s.charCodeAt(i);
  dg = v >= 48 && v <= 57;
  if (dg || v >= 65 && v <= 90 || v >= 97 && v <= 122) {
   csg += String.fromCharCode(v);
   csw += String.fromCharCode(v);
   sp = false;
   if (dg) {
    cdc++;
    if (cdc >= 7) return false
   } else cdc = 0
  } else if (!sp) {
   sp = true;
   csw += " "
  }
 }
 return true
}
var bpx1, bpy1, bpx2, bpy2;
var fpx1, fpy1, fpx2, fpy2;
var apx1, apy1, apx2, apy2;
var iiv;
var sgsc = .9 * 18 / 14;
var gsc = sgsc;
var bsp1 = .7;
var bsp2 = .8;
var bsp3 = .9;
var bsp4 = 1;
var bgsc1 = gsc * bsp1;
var bgsc2 = gsc * bsp2;
var bgsc3 = gsc * bsp3;
var bgsc4 = gsc * bsp4;
var grd = 16384;
var flux_grd;
var nsep = 4.5;
var tasty = 0;
var shifty = false;
var rr, gg, bb;
var render_mode = 2;
var wumsts = false;
var rank = 0;
var best_rank = 999999999;
var slither_count = 0;
var biggest_slither_count = 0;
var follow_view = true;
var cm1;
var slithers = [];
var foods = [];
var foods_c = 0;
var preys = [];
var points_dp = newDeadpool();
var os = {};
var want_e = false;
var p04 = new Float32Array(250);
j = 0;
for (i = 0; i < 250; i++) {
 p04[i] = j;
 j += (1 - j) * .04
}
var p12 = new Float32Array(250);
j = 0;
for (i = 0; i < 250; i++) {
 p12[i] = j;
 j += (1 - j) * .12
}
var spangdv = 4.8;
var nsp1 = 4.25;
var nsp2 = .5;
var nsp3 = 12;
var mamu = .033;
var mamu2 = .028;
var cst = .43;
var default_msl = 42;
var eez = 53;
var lfc = eez;
var lfas = new Float32Array(lfc);
for (i = 0; i < lfc; i++) {
 j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
 lfas[i] = j
}
var rfc = eez;
var rfas = new Float32Array(rfc);
for (i = 0; i < rfc; i++) {
 j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
 rfas[i] = j
}
var fao = {};
for (var fc = 3; fc <= 100; fc++) {
 var fas = [];
 for (i = 0; i < fc; i++) {
  j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
  fas.push(j)
 }
 fao["a" + fc] = fas
}
var hfc = eez;
var hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) {
 j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
 hfas[i] = j
}
var afc = 26;
var afas = new Float32Array(afc);
for (i = 0; i < afc; i++) {
 j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1)));
 afas[i] = j
}
var nlc = 48;
var vfas = [];
var vfc = 62;
var fvpos = 0;
var fvtg = 0;
var ovxx, ovyy;
var fvxs = [];
var fvys = [];
for (var i = 0; i < vfc; i++) {
 var j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
 j += (.5 * (1 - Math.cos(Math.PI * j)) - j) * .5;
 vfas.push(j);
 fvxs.push(0);
 fvys.push(0)
}
var smuc = 100;
var smuc_m3 = smuc - 3;
var smus;
recalcSepMults();

function recalcSepMults() {
 smus = new Float32Array(smuc);
 var n = 0;
 var k = 4;
 var mv = 0;
 for (var i = 0; i < smuc; i++)
  if (i < k) smus[i] = 1;
  else {
   n++;
   if (n <= 4) mv = cst * n / 4;
   smus[i] = 1 - mv
  }
}

function pwr(amt) {
 var a = new Float32Array(125);
 for (var i = 0; i < 125; i++) a[i] = Math.pow(amt, i);
 return a
}

function pca(amt) {
 var a = new Float32Array(125);
 for (var i = 0; i < 125; i++) a[i] = 1 - Math.pow(1 - amt, i);
 return a
}
var p1a = pca(.1);
var p35a = pca(.35);
var pwr4 = pwr(.4);
var pwr35 = pwr(.35);
var pwr93 = pwr(.93);

function setMscps(nmscps) {
 if (nmscps != mscps) {
  mscps = nmscps;
  fmlts = [];
  fpsls = [];
  for (var i = 0; i <= mscps; i++) {
   if (i >= mscps) fmlts.push(fmlts[i - 1]);
   else fmlts.push(Math.pow(1 - i / mscps, 2.25));
   if (i == 0) fpsls.push(0);
   else fpsls.push(fpsls[i - 1] + 1 / fmlts[i - 1])
  }
  var t_fmlt = fmlts[fmlts.length - 1];
  var t_fpsl = fpsls[fpsls.length - 1];
  for (var i = 0; i < 2048; i++) {
   fmlts.push(t_fmlt);
   fpsls.push(t_fpsl)
  }
 }
}
var mmrad = -1;
var mmsz = -1;
var mmal = 0;
var mmbfr = 0;
var mmgad = false;
var mmsta = .475;

function setMinimapSize(sz, force) {
 var rad = sz / 2;
 if (rad != mmrad || force) {
  mmrad = rad;
  mmsz = sz;
  loch.style.width = loch.style.height = rad * 2 + 24 + "px";
  var xx = 12 + rad;
  var yy = 12 + rad;
  var lc = document.createElement("canvas");
  lc.width = lc.height = rad * 2 + 24;
  var ctx = lc.getContext("2d");
  ctx.save();
  ctx.fillStyle = "#1b2232";
  ctx.beginPath();
  ctx.arc(xx, yy, rad, 0, pi2);
  ctx.fill();
  ctx.restore();
  ctx.fillStyle = "#212a3c";
  ctx.beginPath();
  ctx.moveTo(rad + 12, rad + 12);
  ctx.arc(xx, yy, rad, 0, Math.PI / 2);
  ctx.lineTo(xx, yy);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(xx, yy);
  ctx.arc(xx, yy, rad, Math.PI, 3 * Math.PI / 2);
  ctx.lineTo(xx, yy);
  ctx.fill();
  ctx.strokeStyle = "#2e3850";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(xx, yy - rad);
  ctx.lineTo(xx, yy + rad);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(xx - rad, yy);
  ctx.lineTo(xx + rad, yy);
  ctx.stroke();
  loc.src = lc.toDataURL();
  loc.className = "nsi";
  loc.style.position = "absolute";
  loc.style.left = "0px";
  loc.style.top = "0px";
  loc.style.opacity = 1;
  loc.style.zIndex = 11;
  trf(loc, agpu);
  asmc.width = rad * 2;
  asmc.height = rad * 2;
  asmc.className = "nsi";
  asmc.style.position = "absolute";
  asmc.style.left = asmc.style.top = "12px";
  asmc.style.zIndex = 12;
  asmc.style.opacity = mmsta;
  asmc2.width = rad * 2;
  asmc2.height = rad * 2;
  asmc2.className = "nsi";
  asmc2.style.position = "absolute";
  asmc2.style.left = asmc2.style.top = "12px";
  asmc2.style.zIndex = 13;
  asmc2.style.opacity = mmsta
 }
}

function startShowGame() {
 llgmtm = timeObj.now();
 login_iv = setInterval(loginFade, 25);
 if (choosing_skin) mc.style.opacity = 0;
 mc.style.display = "inline";
 lbh.style.opacity = lbf.style.opacity = 0;
 loch.style.opacity = 0;
 lb_fr = -1;
 bgi2.width = bgw2;
 bgi2.height = bgh2;
 var ctx = bgi2.getContext("2d");
 try {
  ctx.drawImage(bg_hex, 0, 0);
  bgp2 = ctx.createPattern(bgi2,
   "repeat")
 } catch (e) {}
 resize()
}

function setSkin(o, cv, ca) {
 o.rcv = cv;
 o.er = 6;
 o.pr = 3.5;
 o.pma = 2.3;
 o.ec = "#FFFFFF";
 o.ecv = 16777215;
 o.eca = .75;
 o.ppa = 1;
 o.ppc = "#000000";
 o.ppcv = 0;
 o.antenna = false;
 o.one_eye = false;
 o.drez = false;
 o.ed = 6;
 o.esp = 6;
 o.easp = .1;
 o.eac = false;
 o.jyt = false;
 o.jse = false;
 o.slg = false;
 o.eo = 0;
 o.swell = 0;
 o.cusk = false;
 o.grad = false;
 if (ca != null) {
  var tm = ca.length;
  if (tm >= 10) {
   var i;
   var m = 8;
   var crbcs = [];
   var repc = 0;
   var ccv = 0;
   while (m < tm) {
    repc = ca[m];
    m++;
    if (m < tm) {
     ccv = ca[m];
     m++;
     if (alcsc[ccv] == 1)
      for (i = 0; i < repc; i++) crbcs.push(ccv)
    }
   }
   if (crbcs.length > 0) {
    o.rbcs = crbcs;
    cv = o.rbcs[0];
    o.cv = cv;
    o.cusk = true
   }
  }
 }
 var fdhc = null;
 var fdtc = null;
 var fdl = 0;
 if (!o.cusk) {
  if (cv == 24) {
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#00688c";
   o.atc2 = "#64c8e7";
   o.atwg = true;
   o.atia = .35;
   o.abrot = false;
   var jc = 8;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = acbulb;
   o.blbx = -10;
   o.blby = -10;
   o.blbw = 20;
   o.blbh = 20;
   o.bsc = 1;
   o.blba = .75
  } else if (cv ==
   25) {
   o.ec = "#FF5609";
   o.ecv = 16733705;
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#000000";
   o.atc2 = "#5630d7";
   o.atia = 1;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = cdbulb;
   o.blbx = -5;
   o.blby = -10;
   o.blbw = 20;
   o.blbh = 20;
   o.bsc = 1.6;
   o.blba = 1
  } else if (cv == 27) {
   o.jse = true;
   o.one_eye = true;
   o.ebi = jsebi;
   o.ebiw = 64;
   o.ebih = 64;
   o.ebisz =
    29;
   o.epi = jsepi;
   o.epiw = 48;
   o.epih = 48;
   o.episz = 14;
   o.pma = 4;
   o.swell = .06
  } else if (cv == 37) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#301400";
   o.atc2 = "#ff6813";
   o.atwg = true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = kwkbulb;
   o.blbx = -18 - 21;
   o.blby = -42 - 21;
   o.blbw = 130 + 42;
   o.blbh = 71 + 42;
   o.bsc = .42;
   o.blba = 1
  } else if (cv ==
   39) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#1d3245";
   o.atc2 = "#44d4ff";
   o.atwg = true;
   o.atia = .43;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = pwdbulb;
   o.blbx = -15 - 21;
   o.blby = -79 - 21;
   o.blbw = 148 + 42;
   o.blbh = 146 + 42;
   o.bsc = .25;
   o.blba = 1
  } else if (cv == 40) {
   o.eac = true;
   o.jyt = true
  } else if (cv == 41) {
   o.ed = 34;
   o.esp = 14;
   o.eca =
    1;
   o.eo = 3;
   o.er = 8;
   o.easp = .038;
   o.pr = 4.5;
   o.pma = 3;
   o.slg = true
  } else if (cv == 42) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#002828";
   o.atc2 = "#80d0d0";
   o.atwg = true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = playbulb;
   o.blbx = -8 - 21;
   o.blby = -53 - 21;
   o.blbw = 100 + 42;
   o.blbh = 107 + 42;
   o.bsc = .36;
   o.blba = 1
  } else if (cv ==
   44) {
   o.ec = "#D4D4D4";
   o.ecv = 13948116
  } else if (cv == 45) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#c02020";
   o.atc2 = "#ff4040";
   o.atwg = true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = leafbulb;
   o.blbx = -(101 * .11) - 21;
   o.blby = -60 - 21;
   o.blbw = 101 + 42;
   o.blbh = 119 + 42;
   o.bsc = .33;
   o.blba = 1
  } else if (cv == 46) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#c02020";
   o.atc2 = "#ff4040";
   o.atwg = true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = swissbulb;
   o.blbx = -(98 * .11) - 21;
   o.blby = -49 - 21;
   o.blbw = 98 + 42;
   o.blbh = 98 + 42;
   o.bsc = .285;
   o.blba = 1
  } else if (cv == 47) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#3030ff";
   o.atc2 = "#6060ff";
   o.atwg =
    true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = moldovabulb;
   o.blbx = -(120 * .11) - 21;
   o.blby = -48 - 21;
   o.blbw = 120 + 42;
   o.blbh = 95 + 42;
   o.bsc = .33;
   o.blba = 1
  } else if (cv == 48) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#c02020";
   o.atc2 = "#ff4040";
   o.atwg = true;
   o.atia = .75;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = vietnambulb;
   o.blbx = -(95 * .11) - 21;
   o.blby = -50 - 21;
   o.blbw = 95 + 42;
   o.blbh = 100 + 42;
   o.bsc = .3;
   o.blba = 1
  } else if (cv == 49) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#64accf";
   o.atc2 = "#84dcff";
   o.atwg = true;
   o.atia = .7;
   o.abrot = true;
   var jc = 11;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy =
    new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = argentinabulb;
   o.blbx = -(110 * .11) - 21;
   o.blby = -55 - 21;
   o.blbw = 110 + 42;
   o.blbh = 110 + 42;
   o.bsc = .3;
   o.blba = 1
  } else if (cv == 59) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#886818";
   o.atc2 = "#ffe040";
   o.atwg = true;
   o.atia = .55;
   o.abrot = true;
   var jc = 11;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay =
    new Float32Array(jc);
   for (var j = jc - 1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = movbulb;
   o.blbx = -(100 * .2) - 21;
   o.blby = -70 - 21;
   o.blbw = 100 + 42;
   o.blbh = 121 + 42;
   o.bsc = .3;
   o.blba = 1
  } else if (cv == 60) o.drez = true;
  else if (cv == 62) {
   o.eca = 1;
   o.antenna = true;
   o.atba = 0;
   o.atc1 = "#402200";
   o.atc2 = "#ffc20f";
   o.atwg = true;
   o.atia = .5;
   o.abrot = true;
   var jc = 9;
   o.atx = new Float32Array(jc);
   o.aty = new Float32Array(jc);
   o.atvx = new Float32Array(jc);
   o.atvy = new Float32Array(jc);
   o.atax = new Float32Array(jc);
   o.atay = new Float32Array(jc);
   for (var j = jc -
     1; j >= 0; j--) {
    o.atx[j] = o.xx;
    o.aty[j] = o.yy
   }
   o.bulb = bonkbulb;
   o.blbx = -8 - 21;
   o.blby = -68 - 21;
   o.blbw = 131 + 42;
   o.blbh = 136 + 42;
   o.bsc = .25;
   o.blba = 1
  } else if (cv == 63) {
   o.ec = "#000000";
   o.ecv = 0;
   o.eca = 1;
   o.ppc = "#CCCCCC";
   o.ppcv = 13421772;
   o.pr = 2.5
  } else if (cv == 64) {
   o.ec = "#FFFF80";
   o.ecv = 16777088;
   o.eca = 1
  } else if (cv == 65);
  var rbcs = null;
  if (cv == 9) rbcs = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  else if (cv == 10) rbcs = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7];
  else if (cv == 11) rbcs = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
  else if (cv == 12) rbcs = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
  else if (cv == 13) rbcs = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
  else if (cv == 14) rbcs = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
  else if (cv == 15) rbcs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  else if (cv == 16) rbcs = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
  else if (cv == 17) rbcs = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
  else if (cv == 18) rbcs = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
  else if (cv == 19) rbcs = [9];
  else if (cv == 20) rbcs = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
  else if (cv == 21) rbcs = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18,
   18
  ];
  else if (cv == 22) rbcs = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13];
  else if (cv == 23) rbcs = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7];
  else if (cv == 24) rbcs = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18];
  else if (cv == 25) rbcs = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22];
  else if (cv == 26) rbcs = [24];
  else if (cv == 27) rbcs = [25];
  else if (cv == 28) rbcs = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7];
  else if (cv == 29) rbcs = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11];
  else if (cv ==
   30) rbcs = [10, 10, 19, 20, 10, 10, 20, 19];
  else if (cv == 31) rbcs = [10, 10];
  else if (cv == 32) rbcs = [20, 20];
  else if (cv == 33) rbcs = [12, 11, 11];
  else if (cv == 34) rbcs = [7, 7, 9, 13, 13, 9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9];
  else if (cv == 35) rbcs = [7, 7, 9, 9, 6, 6, 9, 9];
  else if (cv == 36) rbcs = [16, 16, 9, 9, 15, 15, 9, 9];
  else if (cv == 37) rbcs = [22];
  else if (cv == 38) rbcs = [18];
  else if (cv == 39) rbcs = [23];
  else if (cv == 40) rbcs = [26];
  else if (cv == 41) rbcs = [27];
  else if (cv == 42) rbcs = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7];
  else if (cv == 43) rbcs = [28];
  else if (cv == 44) rbcs = [29];
  else if (cv == 45) rbcs = [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7];
  else if (cv == 46) rbcs = [7];
  else if (cv == 47) rbcs = [16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7, 7, 16, 16, 16, 16];
  else if (cv == 48) rbcs = [7];
  else if (cv == 49) rbcs = [23, 23, 23, 23, 23, 9, 9, 9, 9, 9, 9, 9, 9, 23, 23];
  else if (cv == 50) rbcs = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 7, 7, 7];
  else if (cv == 51) rbcs = [7, 7, 7, 9, 9, 16, 16, 16, 16, 16, 16, 9, 9];
  else if (cv == 52) rbcs = [7, 7, 7, 7, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7];
  else if (cv ==
   53) rbcs = [30];
  else if (cv == 54) rbcs = [31];
  else if (cv == 55) rbcs = [32];
  else if (cv == 56) rbcs = [33];
  else if (cv == 57) rbcs = [34];
  else if (cv == 58) rbcs = [35];
  else if (cv == 59) rbcs = [18];
  else if (cv == 60) {
   rbcs = [36];
   fdhc = 37;
   fdtc = 38;
   fdl = 30
  } else if (cv == 61) rbcs = [30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34];
  else if (cv == 62) rbcs = [17, 17, 17, 17, 17, 39, 39, 39, 39, 39];
  else if (cv == 63) rbcs = [7, 7, 7, 11, 11, 11];
  else if (cv == 64) rbcs = [16, 16, 11, 11];
  else if (cv == 65) rbcs = [4, 4, 4, 4, 9, 9, 9, 9];
  else if (cv >= grad_skin_base && cv < grad_skin_base + grad_ramps.length) {
   rbcs = grad_ramps[cv - grad_skin_base];
   o.grad = true;
   o.gc0 = grad_palettes[cv - grad_skin_base][0];
   o.gc1 = grad_palettes[cv - grad_skin_base][1]
  } else cv = cv % 9;
  if (rbcs) cv = rbcs[0];
  o.rbcs = rbcs;
  o.cv = cv
 }
 o.fdhc = fdhc;
 o.fdtc = fdtc;
 o.fdl = fdl
}
var slither_dp = newDeadpool();
var ssdo = null;
var food_dp = newDeadpool();
var prey_dp = newDeadpool();
var name_dp = newDeadpool();

function destroySlitherAtIndex(index) {
 var o = slithers[index];
 slithers.splice(index, 1);
 return
}

function arp(o, q, xx, yy) {
 if (q < o.gptz.length) {
  var gpo = o.gptz[q];
  gpo.xx = xx;
  gpo.yy = yy;
  return gpo
 } else {
  gpo = {};
  gpo.xx = xx;
  gpo.yy = yy;
  o.gptz.push(gpo);
  return gpo
 }
}

function newSlither(id, xx, yy, cv, ang, pts, msl, custom_skin_uint8) {
 var o = {};
 o.id = id;
 o.xx = xx;
 o.yy = yy;
 setSkin(o, cv, custom_skin_uint8);
 cv = o.cv;
 o.fnfr = 0;
 o.na = 1;
 o.chl = 0;
 o.tsp = 0;
 o.sfr = 0;
 o.gptz = [];
 o.kill_count = 0;
 o.rr = Math.min(255, rrs[cv] + Math.floor(Math.random() * 20));
 o.gg = Math.min(255, ggs[cv] + Math.floor(Math.random() * 20));
 o.bb = Math.min(255, bbs[cv] + Math.floor(Math.random() * 20));
 var rs = "00" + Math.min(255, Math.max(0, Math.round(o.rr))).toString(16);
 var gs = "00" + Math.min(255, Math.max(0, Math.round(o.gg))).toString(16);
 var bs = "00" + Math.min(255, Math.max(0, Math.round(o.bb))).toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 o.cs = "#" + rs + gs + bs;
 var v = .4;
 rs = "00" + Math.min(255, Math.max(0, Math.round(o.rr * v))).toString(16);
 gs = "00" + Math.min(255, Math.max(0, Math.round(o.gg * v))).toString(16);
 bs = "00" + Math.min(255, Math.max(0, Math.round(o.bb * v))).toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 o.cs04 = "#" + rs + gs + bs;
 var v = 1.5;
 rs = "00" + Math.min(255, Math.max(0,
  Math.round((255 + o.rr) * .5))).toString(16);
 gs = "00" + Math.min(255, Math.max(0, Math.round((255 + o.gg) * .5))).toString(16);
 bs = "00" + Math.min(255, Math.max(0, Math.round((255 + o.bb) * .5))).toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 o.csw = "#" + rs + gs + bs;
 o.sc = 1;
 o.ssp = nsp1 + nsp2 * o.sc;
 o.fsp = o.ssp + .1;
 o.msp = nsp3;
 o.fxs = new Float32Array(rfc);
 o.fys = new Float32Array(rfc);
 o.fchls = new Float32Array(rfc);
 o.fpos = 0;
 o.ftg = 0;
 o.fx = 0;
 o.fy = 0;
 o.fchl = 0;
 o.fas = new Float32Array(afc);
 o.fapos = 0;
 o.fatg = 0;
 o.fa = 0;
 o.ehang = ang;
 o.wehang = ang;
 o.ehl = 1;
 o.msl = msl;
 o.fam = 0;
 o.rsc = 0;
 o.ang = ang;
 o.eang = ang;
 o.wang = ang;
 o.rex = 0;
 o.rey = 0;
 o.sp = 2;
 if (pts) {
  o.pts = pts;
  o.sct = pts.length;
  if (pts[0].dying) o.sct--
 } else {
  o.pts = [];
  o.sct = 0
 }
 o.flpos = 0;
 o.fls = new Float32Array(lfc);
 o.fl = 0;
 o.fltg = 0;
 o.tl = o.sct + o.fam;
 if (render_mode == 1) o.cfl = o.tl;
 else o.cfl = o.tl - .6;
 o.scang = 1;
 o.dead_amt = 0;
 o.alive_amt = 0;
 slithers.splice(0, 0, o);
 os["s" + o.id] = o;
 return o
}

function getBuildSkinData(pad) {
 var fa = [];
 fa.push(255);
 fa.push(255);
 fa.push(255);
 fa.push(0);
 fa.push(0);
 fa.push(0);
 fa.push(Math.floor(Math.random() * 256));
 fa.push(Math.floor(Math.random() * 256));
 var i;
 var j;
 j = build_segments.length;
 if (j > 0) {
  var s;
  var ls = build_segments[0];
  var c = 0;
  for (i = 0; i < j; i++) {
   s = build_segments[i];
   if (s != ls) {
    if (c > 255) c = 255;
    fa.push(c);
    fa.push(ls);
    c = 0;
    ls = s
   }
   c++
  }
  if (c > 0) {
   fa.push(c);
   fa.push(ls)
  }
 }
 if (pad) {
  fa.push(250);
  fa.push(40)
 }
 var ffa = new Uint8Array(fa.length);
 for (i = 0; i < fa.length; i++) ffa[i] =
  fa[i];
 return ffa
}

function snl(o) {
 var orl = o.tl;
 o.tl = o.sct + Math.min(1, o.fam);
 var d = o.tl - orl;
 var k = o.flpos;
 for (var j = 0; j < lfc; j++) {
  o.fls[k] -= d * lfas[j];
  k++;
  if (k >= lfc) k = 0
 }
 o.fl = o.fls[o.flpos];
 o.fltg = lfc;
 if (o == slither) wumsts = true
}

function newFood(id, xx, yy, rad, rapid, cv) {
 var fo = {};
 fo.id = id;
 fo.xx = xx;
 fo.yy = yy;
 fo.rx = xx;
 fo.ry = yy;
 if (rapid) fo.rsp = 3;
 else fo.rsp = 1;
 if (cv > 9) cv %= 9;
 fo.cv = cv;
 fo.rad = 1E-5;
 fo.sz = rad;
 fo.lrrad = fo.rad;
 var pci = per_color_imgs[fo.cv];
 fo.cv2 = Math.floor(pci.ic * gsc * fo.sz / 16.5);
 if (fo.cv2 < 0) fo.cv2 = 0;
 if (fo.cv2 >= pci.ic) fo.cv2 = pci.ic - 1;
 fo.fi = pci.imgs[fo.cv2];
 fo.fw = pci.fws[fo.cv2];
 fo.fh = pci.fhs[fo.cv2];
 fo.fw2 = pci.fw2s[fo.cv2];
 fo.fh2 = pci.fh2s[fo.cv2];
 fo.ofi = pci.oimgs[fo.cv2];
 fo.ofw = pci.ofws[fo.cv2];
 fo.ofh = pci.ofhs[fo.cv2];
 fo.ofw2 = pci.ofw2s[fo.cv2];
 fo.ofh2 = pci.ofh2s[fo.cv2];
 fo.gcv = Math.floor(pci.ic * gsc * (.25 + .75 * fo.sz / 16.5));
 if (fo.gcv < 0) fo.gcv = 0;
 if (fo.gcv >= pci.ic) fo.gcv = pci.ic - 1;
 fo.gfi = pci.gimgs[fo.gcv];
 fo.gfw = pci.gfws[fo.gcv];
 fo.gfh = pci.gfhs[fo.gcv];
 fo.gfw2 = pci.gfw2s[fo.gcv];
 fo.gfh2 = pci.gfh2s[fo.gcv];
 fo.g2cv = Math.floor(pci.ic * gsc * 2 * (.25 + .75 * fo.sz / 16.5));
 if (fo.g2cv < 0) fo.g2cv = 0;
 if (fo.g2cv >= pci.ic) fo.g2cv = pci.ic - 1;
 fo.g2fi = pci.gimgs[fo.g2cv];
 fo.g2fw = pci.gfws[fo.g2cv];
 fo.g2fh = pci.gfhs[fo.g2cv];
 fo.g2fw2 = pci.gfw2s[fo.g2cv];
 fo.g2fh2 = pci.gfh2s[fo.g2cv];
 fo.fr = 0;
 fo.gfr = Math.random() * 64;
 fo.gr = .65 + .1 * fo.sz;
 fo.wsp = (2 * Math.random() - 1) * .0225;
 fo.eaten_fr = 0;
 foods[foods_c++] = fo;
 return fo
}

function newPrey(id, xx, yy, rad, cv, dir, wang, ang, speed) {
 var pr = {};
 pr.id = id;
 pr.xx = xx;
 pr.yy = yy;
 pr.rad = 1E-5;
 pr.sz = rad;
 pr.cv = cv % 9;
 pr.dir = dir;
 pr.wang = wang;
 pr.ang = ang;
 pr.sp = speed;
 pr.fr = 0;
 pr.gfr = Math.random() * 64;
 pr.gr = .5 + Math.random() * .15 + .1 * pr.sz;
 pr.rr = Math.min(255, rrs[cv]);
 pr.gg = Math.min(255, ggs[cv]);
 pr.bb = Math.min(255, bbs[cv]);
 var rs = "00" + Math.min(255, Math.max(0, Math.round(pr.rr))).toString(16);
 var gs = "00" + Math.min(255, Math.max(0, Math.round(pr.gg))).toString(16);
 var bs = "00" + Math.min(255, Math.max(0, Math.round(pr.bb))).toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 var pci = per_color_imgs[pr.cv];
 pr.cs = "#" + rs + gs + bs;
 pr.cv2 = Math.floor(pci.pr_imgs.length * gsc * pr.sz / 9);
 if (pr.cv2 < 0) pr.cv2 = 0;
 if (pr.cv2 >= pci.pr_imgs.length) pr.cv2 = pci.pr_imgs.length - 1;
 pr.fi = pci.pr_imgs[pr.cv2];
 pr.fw = pci.pr_fws[pr.cv2];
 pr.fh = pci.pr_fhs[pr.cv2];
 pr.fw2 = pci.pr_fw2s[pr.cv2];
 pr.fh2 = pci.pr_fh2s[pr.cv2];
 pr.gcv = pci.gimgs.length - 1;
 pr.gfi = pci.gimgs[pr.gcv];
 pr.gfw = pci.gfws[pr.gcv];
 pr.gfh = pci.gfhs[pr.gcv];
 pr.gfw2 = pci.gfw2s[pr.gcv];
 pr.gfh2 = pci.gfh2s[pr.gcv];
 pr.fxs = new Float32Array(rfc);
 pr.fys = new Float32Array(rfc);
 pr.fpos = 0;
 pr.ftg = 0;
 pr.fx = 0;
 pr.fy = 0;
 pr.eaten = false;
 pr.eaten_fr = 0;
 preys.push(pr);
 return pr
}
var ecmc = document.createElement("canvas");
ecmc.width = ecmc.height = 48;
var ctx = ecmc.getContext("2d");
ctx.fillStyle = "#000000";
ctx.moveTo(36, 6);
ctx.lineTo(30, 6);
ctx.quadraticCurveTo(0, 24, 30, 48 - 6);
ctx.lineTo(36, 48 - 6);
ctx.quadraticCurveTo(14, 24, 36, 6);
ctx.fill();
var pjcsc;
var pjesc;
var pjmsc;
var pjmh;
var pjmshsc;
var pjc = {};
var pje = {};
var pjem = {};
var pjp = {};
var pjpm = {};
var pjmo = {};
var pjm = {};
var pjr = {};
var pjlr = {};
var pjmm = {};
var pjl = {};
var pjlsh = {};
var pjt = {};
var pjmsh = {};
var pjpsz;
var pjlmsz;
var pjesz;
var o;
var kdo;
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
var ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52;
var komc = document.createElement("canvas");
komc.width = komc.height = sz;
var ctx = komc.getContext("2d");
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
 var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
 if (v <= 4) v = 1 - v / 4;
 else v = 0;
 v *= .8;
 imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
 imgd[p + 3] = Math.floor(255 * v);
 xx++;
 if (xx >= sz) {
  xx = 0;
  yy++
 }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
 var u = komc.toDataURL();
 var ii = document.createElement("img");
 ii.src = u;
 komc = ii
}
sz = 62;
var ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
var ctx = ksmc.getContext("2d");
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
 var v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15;
 v *= .1;
 if (v < 0) v = -v;
 if (v > 1) v = 1;
 v = 1 - v;
 v *= .25;
 imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
 imgd[p + 3] = Math.floor(255 * v);
 xx++;
 if (xx >= sz) {
  xx = 0;
  yy++
 }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
 var u = ksmc.toDataURL();
 var ii = document.createElement("img");
 ii.src = u;
 ksmc = ii
}
var kst;
var kso;
var koso;
var sz = 64;
var jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
var ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
 var v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
 v = v * 1.06 - .06;
 if (v < 0) v = 0;
 else {
  v = Math.pow(v, .35);
  v *= 1.35
 }
 v += (1 - v) * .25;
 imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v)));
 imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v)));
 imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v)));
 xx++;
 if (xx >= sz) {
  xx = 0;
  yy++
 }
 v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2));
 if (v <= 3) imgd[p + 3] = Math.max(0, Math.min(255, Math.round(v / 3 * 255)));
 else imgd[p + 3] = 255
}
ctx.putImageData(map, 0, 0);
var jsebt;
var jsebo;
var sz = 48;
var jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
var ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
 var v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
 if (v > .5) v = 0;
 else v = 1 - Math.pow(v / .5, 1);
 v *= .8;
 if (v == 0) {
  imgd[p] = 0;
  imgd[p + 1] = 0;
  imgd[p + 2] = 0
 } else {
  imgd[p] = Math.max(0, Math.min(255, Math.round(28 + (87 - 28) * v)));
  imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + (168 - 83) * v)));
  imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + (238 - 128) * v)))
 }
 xx++;
 if (xx >= sz) {
  xx = 0;
  yy++
 }
}
ctx.putImageData(map, 0, 0);
var jsept;
var jsepo;
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
var ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32 - 1);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
var ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 58 / 2, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 10 + 44, 58, 22);
var ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
var ctx = acbulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32 - 1);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var kwkbulb = document.createElement("canvas");
kwkbulb.width = 130 + 42;
kwkbulb.height = 71 + 42;
var kwki = document.createElement("img");
kwki.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 130 + 42;
 tmc.height = 71 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(kwki, 21, 21);
 var ctx = kwkbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
kwki.src = "img/skins/kwk.png";
var jmou = document.createElement("canvas");
jmou.width = 79;
jmou.height = 130;
var jmoi = document.createElement("img");
jmoi.onload = function() {
 var ctx = jmou.getContext("2d");
 ctx.drawImage(jmoi, 0, 0)
};
jmoi.src = "img/skins/jmou.png";
var pwdbulb = document.createElement("canvas");
pwdbulb.width = 148 + 42;
pwdbulb.height = 146 + 42;
var pwdi = document.createElement("img");
pwdi.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 148 + 42;
 tmc.height = 146 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(pwdi, 21, 21);
 var ctx = pwdbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
pwdi.src = "img/skins/pewd.png";
var sestt;
var sest = document.createElement("canvas");
sest.width = 105;
sest.height = 88;
var sesti = document.createElement("img");
sesti.onload = function() {
 var ctx = sest.getContext("2d");
 ctx.drawImage(sesti, 0, 0)
};
sesti.src = "img/skins/sest.png";
var playbulb = document.createElement("canvas");
playbulb.width = 100 + 42;
playbulb.height = 107 + 42;
var plyi = document.createElement("img");
plyi.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 100 + 42;
 tmc.height = 107 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(plyi, 21, 21);
 var ctx = playbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
plyi.src = "img/skins/play.png";
var bonkbulb = document.createElement("canvas");
bonkbulb.width = 131 + 42;
bonkbulb.height = 136 + 42;
var bnki = document.createElement("img");
bnki.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 131 + 42;
 tmc.height = 136 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(bnki, 21, 21);
 var ctx = bonkbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
bnki.src = "img/skins/bonkers.png";
var leafbulb = document.createElement("canvas");
leafbulb.width = 101 + 42;
leafbulb.height = 119 + 42;
var leafi = document.createElement("img");
leafi.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 101 + 42;
 tmc.height = 119 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(leafi, 21, 21);
 var ctx = leafbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
leafi.src = "img/skins/leaf.png";
var swissbulb = document.createElement("canvas");
swissbulb.width = 98 + 42;
swissbulb.height = 98 + 42;
var swissi = document.createElement("img");
swissi.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 98 + 42;
 tmc.height = 98 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(swissi, 21, 21);
 var ctx = swissbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
swissi.src = "img/skins/swiss.png";
var moldovabulb = document.createElement("canvas");
moldovabulb.width = 120 + 42;
moldovabulb.height = 95 + 42;
var moldovai = document.createElement("img");
moldovai.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 120 + 42;
 tmc.height = 95 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(moldovai, 21, 21);
 var ctx = moldovabulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
moldovai.src = "img/skins/moldova.png";
var vietnambulb = document.createElement("canvas");
vietnambulb.width = 95 + 42;
vietnambulb.height = 100 + 42;
var vietnami = document.createElement("img");
vietnami.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 95 + 42;
 tmc.height = 100 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(vietnami, 21, 21);
 var ctx = vietnambulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
vietnami.src = "img/skins/vietnam.png";
var argentinabulb = document.createElement("canvas");
argentinabulb.width = 110 + 42;
argentinabulb.height = 110 + 42;
var argentinai = document.createElement("img");
argentinai.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 110 + 42;
 tmc.height = 110 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(argentinai, 21, 21);
 var ctx = argentinabulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
argentinai.src = "img/skins/argentina.png";
var movbulb = document.createElement("canvas");
movbulb.width = 100 + 42;
movbulb.height = 121 + 42;
var movi = document.createElement("img");
movi.onload = function() {
 var tmc = document.createElement("canvas");
 tmc.width = 100 + 42;
 tmc.height = 121 + 42;
 var ctx = tmc.getContext("2d");
 ctx.drawImage(movi, 21, 21);
 var ctx = movbulb.getContext("2d");
 ctx.shadowColor = "#000000";
 ctx.shadowBlur = 20;
 ctx.drawImage(tmc, 0, 0)
};
movi.src = "img/skins/mov.png";
var colc;
if (testing) {
 colc = document.createElement("canvas");
 colc.width = 256;
 colc.height = 106;
 colc.style.position = "fixed";
 colc.style.left = "0px";
 colc.style.top = "100px";
 colc.style.zIndex = 2147483647;
 document.body.appendChild(colc)
}
var pbx = new Float32Array(32767);
var pby = new Float32Array(32767);
var pba = new Float32Array(32767);
var pbu = new Uint8Array(32767);
var per_color_imgs = [];
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 0, 217, 255, 144, 32, 240, 240, 240, 240, 32, 40, 104, 0, 104, 0, 128];
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255, 69, 64, 144, 32, 32, 240, 144, 32, 240, 60, 128, 0, 40, 0, 128];
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 83, 69, 64, 144, 240, 32, 32, 32, 240, 32, 173, 255, 112, 170, 0, 255];
var base_palette = [
 [138, 108, 255],
 [63, 176, 255],
 [25, 214, 192],
 [154, 230, 46],
 [255, 204, 31],
 [255, 154, 46],
 [255, 90, 61],
 [255, 79, 154],
 [216, 108, 255]
];
for (var i = 0; i < base_palette.length; i++) {
 rrs[i] = base_palette[i][0];
 ggs[i] = base_palette[i][1];
 bbs[i] = base_palette[i][2]
}
var grad_palettes = [
 [0xffa21f, 0xff2e7a],
 [0x19e3c9, 0x7a5cff],
 [0xff4fa3, 0x9b5cff],
 [0xffd21f, 0xff5a1f],
 [0x3fd0ff, 0x6a5cff],
 [0xa6e81f, 0x19c9a6],
 [0xff7a3d, 0xff2e5e],
 [0xe25cff, 0x3fa2ff],
 [0x4ff0b0, 0x3f8cff],
 [0xb38cff, 0xff6fb5],
 [0xff3d5a, 0xffb52e],
 [0x2fd6ff, 0x2fe08a]
];
var grad_steps = 12;
var grad_ramps = [];
var grad_skin_base = 66;
for (var i = 0; i < grad_palettes.length; i++) {
 var ca0 = grad_palettes[i][0];
 var ca1 = grad_palettes[i][1];
 var ramp = [];
 for (var j = 0; j < grad_steps; j++) {
  var t = j / (grad_steps - 1);
  ramp.push(rrs.length);
  rrs.push(Math.round((ca0 >> 16 & 255) + ((ca1 >> 16 & 255) - (ca0 >> 16 & 255)) * t));
  ggs.push(Math.round((ca0 >> 8 & 255) + ((ca1 >> 8 & 255) - (ca0 >> 8 & 255)) * t));
  bbs.push(Math.round((ca0 & 255) + ((ca1 & 255) - (ca0 & 255)) * t))
 }
 grad_ramps.push(ramp)
}
var ccs = [];
var ccvs = [];
var max_skin_cv = grad_skin_base + grad_palettes.length - 1;
for (var i = 0; i < rrs.length; i++) {
 var rs = "00" + rrs[i].toString(16);
 var gs = "00" + ggs[i].toString(16);
 var bs = "00" + bbs[i].toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 ccs.push("#" + rs + gs + bs);
 ccvs.push(rrs[i] << 16 | ggs[i] << 8 | bbs[i])
}
var alcsc = new Uint8Array(256);
var ralcsc = new Uint8Array(256);
var falcsc = new Uint8Array(256);
var csks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39, 41];
for (var i = 0; i <= 255; i++) {
 ralcsc[i] = 0;
 falcsc[i] = 0
}
for (var i = csks.length - 1; i >= 0; i--) {
 ralcsc[csks[i]] = 1;
 falcsc[csks[i]] = 1
}
falcsc[40] = 1;
alcsc = ralcsc;
var eyet;
var pupilt;
var tpupilt;
for (var i = 0; i < rrs.length; i++) {
 var o = {};
 o.imgs = [];
 o.fws = [];
 o.fhs = [];
 o.fw2s = [];
 o.fh2s = [];
 o.gimgs = [];
 o.gfws = [];
 o.gfhs = [];
 o.gfw2s = [];
 o.gfh2s = [];
 o.oimgs = [];
 o.ofws = [];
 o.ofhs = [];
 o.ofw2s = [];
 o.ofh2s = [];
 var rs = "00" + rrs[i].toString(16);
 var gs = "00" + ggs[i].toString(16);
 var bs = "00" + bbs[i].toString(16);
 rs = rs.substr(rs.length - 2);
 gs = gs.substr(gs.length - 2);
 bs = bs.substr(bs.length - 2);
 o.cs = "#" + rs + gs + bs;
 var sz = 62;
 var kfmc = document.createElement("canvas");
 kfmc.width = kfmc.height = sz;
 var ctx = kfmc.getContext("2d");
 var map =
  ctx.getImageData(0, 0, sz, sz);
 var imgd = map.data;
 var l = imgd.length;
 var p;
 var xx = 0;
 var yy = 0;
 var fi = i;
 if (i == 26) fi = 3;
 else if (i == 29) fi = 9;
 else if (i == 30) fi = 15;
 else if (i == 31) fi = 7;
 else if (i == 32) fi = 4;
 else if (i == 33) fi = 5;
 else if (i == 34) fi = 0;
 else if (i == 35) fi = 3;
 else if (i == 36) fi = 7;
 else if (i == 41) fi = 15;
 var rr = rrs[fi];
 var gg = ggs[fi];
 var bb = bbs[fi];
 var t1 = (rr + gg + bb) / 3;
 if (t1 <= 24) rr = gg = bb = 90;
 else {
  var t2 = 120 / t1;
  rr = Math.min(255, Math.floor(rr * t2));
  gg = Math.min(255, Math.floor(gg * t2));
  bb = Math.min(255, Math.floor(bb * t2))
 }
 for (p =
  0; p < l; p += 4) {
  var v = 1 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) / 32;
  if (v < 0) v = 0;
  else v = .5 * (1 - Math.cos(Math.PI * v));
  imgd[p] = rr;
  imgd[p + 1] = gg;
  imgd[p + 2] = bb;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
   xx = 0;
   yy++
  }
 }
 ctx.putImageData(map, 0, 0);
 o.kfmc = kfmc;
 var ksz = 48;
 var ksz2 = ksz / 2;
 var kmc = document.createElement("canvas");
 kmc.width = kmc.height = ksz;
 var ctx = kmc.getContext("2d");
 ctx.fillStyle = "#FFFFFF";
 ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
 ctx.fill();
 var map = ctx.getImageData(0, 0, ksz, ksz);
 var imgd = map.data;
 var l = imgd.length;
 var p;
 var xx = 0;
 var yy = 0;
 var jk = 7;
 var rr, gg, bb;
 if (i == 36) jk = 60;
 var v3;
 var kmcs = [];
 var kmos = [];
 for (var j = 0; j < jk; j++) {
  xx = yy = 0;
  for (p = 0; p < l; p += 4) {
   var v;
   var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
   if (nsr) v = Math.pow(v2, .5);
   else {
    v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
    v += (v2 - v) * .375
   }
   rr = rrs[i];
   gg = ggs[i];
   bb = bbs[i];
   if (i == 24) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2 * 1.05, 4);
    if (v2 > 1) v2 = 1;
    rr += (255 * 1.2 - rr) *
     v2;
    gg += (192 * 1.2 - gg) * v2;
    bb += (64 * 1.2 - bb) * v2;
    v *= 1.22 - .44 * j / (jk - 1)
   } else if (i == 26) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v *= 1.22 - .44 * j / (jk - 1);
    rr *= v;
    gg *= v;
    bb *= v;
    v = 1;
    rr += (128 * 1.1 - rr) * v2;
    gg += (255 * 1.1 - gg) * v2;
    bb += (136 * 1.1 - bb) * v2
   } else if (i == 27) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v *= 1.22 - .44 * j / (jk - 1);
    rr *= v;
    gg *= v;
    bb *= v;
    v = 1;
    rr += (217 * 1.1 - rr) * v2;
    gg += (69 * 1.1 - gg) * v2;
    bb += (69 * 1.1 - bb) * v2
   } else if (i ==
    28) {
    v2 = .5 - .5 * Math.cos(Math.PI * j / jk);
    rr += (128 * 1 - rr) * v2;
    gg += (128 * 1 - gg) * v2;
    bb += (255 * 1 - bb) * v2;
    v *= 1.1;
    if (v > 1) v = 1
   } else if (i == 29) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v *= 1.44 - .88 * j / (jk - 1);
    rr = v * 32;
    gg = v * 32;
    bb = v * 32;
    v = 1;
    rr += (255 * 1 - rr) * v2;
    gg += (255 * 1 - gg) * v2;
    bb += (255 * 1 - bb) * v2
   } else if (i == 30) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = v * 80;
    gg = v * 80;
    bb = 128 + v * 160;
    rr += (255 * 1 - rr) * .3 *
     v2;
    gg += (255 * 1 - gg) * .3 * v2;
    bb += (255 * 1.4 - bb) * .3 * v2;
    v = 1
   } else if (i == 31) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = 128 + v * 160;
    gg = v * 80;
    bb = v * 80;
    rr += (255 * 1.4 - rr) * .3 * v2;
    gg += (255 * 1 - gg) * .3 * v2;
    bb += (255 * 1 - bb) * .3 * v2;
    v = 1
   } else if (i == 32) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = 96 + v * 128;
    gg = 96 + v * 128;
    bb = v * 80;
    rr += (255 * 1.2 - rr) * .6 * v2;
    gg += (255 * 1.2 - gg) * .6 * v2;
    bb += (255 * 1 - bb) *
     .6 * v2;
    v = 1
   } else if (i == 33) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = 96 + v * 128;
    gg = 48 + v * 80;
    bb = v * 48;
    rr += (255 * 1.2 - rr) * .6 * v2;
    gg += (255 * 1.1 - gg) * .6 * v2;
    bb += (255 * 1 - bb) * .6 * v2;
    v = 1
   } else if (i == 34) {
    v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = 96 + v * 128;
    gg = v * 80;
    bb = 96 + v * 128;
    rr += (255 * 1.2 - rr) * .6 * v2;
    gg += (255 * 1 - gg) * .6 * v2;
    bb += (255 * 1.2 - bb) * .6 * v2;
    v = 1
   } else if (i == 35) {
    v2 = Math.sqrt(Math.pow(.5 *
     (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = v * 80;
    gg = 96 + v * 128;
    bb = v * 80;
    rr += (255 * 1 - rr) * .6 * v2;
    gg += (255 * 1.2 - gg) * .6 * v2;
    bb += (255 * 1 - bb) * .6 * v2;
    v = 1
   } else if (i == 36) {
    v3 = (j / jk + .6 + .25 * (xx / ksz)) % 1;
    v2 = (yy - ksz2) / ksz;
    v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
    v2 = v2 * 2;
    if (v2 < 0) v2 = -v2;
    v2 *= 2.4;
    if (v2 < 1) {
     rr += (255 * 2.2 - rr) * 1 * (1 - v2);
     gg += (255 * 2.2 - gg) * 1 * (1 - v2);
     bb += (255 * 2.2 - bb) * 1 * (1 - v2)
    }
    if (v3 < .5) v2 = (yy - ksz2 * .055 - ksz2) / ksz;
    else v2 = (yy + ksz2 * .055 - ksz2) / ksz;
    v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
    v2 = v2 * 2;
    if (v2 < 0) v2 = -v2;
    v2 *= 4.8;
    if (v2 < 1) {
     rr += (255 * 1 - rr) * 1 * (1 - v2);
     gg += (32 * 1 - gg) * 1 * (1 - v2);
     bb += (64 * 1 - bb) * 1 * (1 - v2)
    }
    v2 = (ksz2 - yy) / ksz;
    v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
    v2 = v2 * 2;
    if (v2 < 0) v2 = -v2;
    v2 *= 2.4;
    if (v2 < 1) {
     rr += (255 * 2.2 - rr) * 1 * (1 - v2);
     gg += (255 * 2.2 - gg) * 1 * (1 - v2);
     bb += (255 * 2.2 - bb) * 1 * (1 - v2)
    }
    if (v3 < .5) v2 = (ksz2 + ksz2 * .055 - yy) / ksz;
    else v2 = (ksz2 - ksz2 * .055 - yy) / ksz;
    v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
    v2 = v2 * 2;
    if (v2 < 0) v2 = -v2;
    v2 *= 4.8;
    if (v2 < 1) {
     rr += (255 * 1 - rr) * 1 * (1 - v2);
     gg += (32 * 1 - gg) * 1 * (1 - v2);
     bb += (64 * 1 - bb) * 1 * (1 - v2)
    }
    v2 = (yy - ksz2) / ksz;
    if (v3 >= .47 && v3 <= .53) {
     rr = 255;
     gg = 32;
     bb = 64
    } else if (v2 >= -.1 && v2 <= .1) {
     v3 = .5 - v3;
     if (v3 < 0) v3 = -v3;
     v3 = 1 - Math.pow(v3 / .5, 2);
     rr += (255 - rr) * v3;
     gg += (32 - gg) * v3;
     bb += (64 - bb) * v3
    } else if (v3 >= .44 && v3 <= .56 || v2 >= -.15 && v2 <= .15) {
     v3 = .5 - v3;
     if (v3 < 0) v3 = -v3;
     v3 = 1 - Math.pow(v3 / .5, 2);
     rr += (255 - rr) * v3;
     gg += (255 - gg) * v3;
     bb += (255 - bb) * v3
    }
    if (!nsr) {
     v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
     v2 = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .5);
     rr += (rrs[i] - rr) * (1 - v2);
     gg += (ggs[i] - gg) * (1 - v2);
     bb += (bbs[i] - bb) * (1 - v2)
    }
   } else if (i == 41) {
    v2 = Math.sqrt(Math.pow(.5 *
     (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
    v2 = Math.pow(v2, 2);
    if (v2 > 1) v2 = 1;
    v = (.1 + .9 * j / jk) % 1;
    rr = v * 240;
    gg = v * 255;
    bb = 160 + v * 255;
    rr += (255 * 1 - rr) * .3 * v2;
    gg += (255 * 1 - gg) * .3 * v2;
    bb += (255 * 1.4 - bb) * .3 * v2;
    v = 1
   } else v *= 1.22 - .44 * j / (jk - 1);
   imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
   imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
   imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
   xx++;
   if (xx >= ksz) {
    xx = 0;
    yy++
   }
  }
  ctx.putImageData(map, 0, 0);
  var kmc2 = document.createElement("canvas");
  kmc2.width = kmc2.height = ksz;
  var ctx2 =
   kmc2.getContext("2d");
  ctx2.drawImage(kmc, 0, 0);
  if (i == 10) {
   var fk = -1;
   var tk = 1;
   if (nsr) {
    fk = -4;
    tk = 3
   }
   for (var k = fk; k <= tk; k++) {
    var tx = ksz2 + Math.cos(2 * Math.PI * k / 8) * (ksz2 / 16) * 13;
    var ty = ksz2 + Math.sin(2 * Math.PI * k / 8) * (ksz2 / 16) * 13;
    ctx2.fillStyle = "#FFFFFF";
    ctx2.beginPath();
    for (var m = 0; m <= 5; m++) {
     xx = tx + Math.cos(2 * Math.PI * m / 5) * 24 * .05 * (ksz / 32);
     yy = ty + Math.sin(2 * Math.PI * m / 5) * 24 * .05 * (ksz / 32);
     if (m == 0) ctx2.moveTo(xx, yy);
     else ctx2.lineTo(xx, yy);
     xx = tx + Math.cos(2 * Math.PI * (m + .5) / 5) * 62 * .05 * (ksz / 32);
     yy = ty + Math.sin(2 * Math.PI * (m +
      .5) / 5) * 62 * .05 * (ksz / 32);
     ctx2.lineTo(xx, yy)
    }
    ctx2.fill()
   }
  } else if (i == 19) {
   var fk = -2;
   var tk = 2;
   if (nsr) {
    fk = -7;
    tk = 7
   }
   for (var k = fk; k <= tk; k++) {
    var tx = ksz2 + Math.cos(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
    var ty = ksz2 + Math.sin(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
    ctx2.save();
    ctx2.globalAlpha = .7;
    ctx2.fillStyle = "#FFFFFF";
    ctx2.beginPath();
    for (var m = 0; m <= 5; m++) {
     xx = tx + Math.cos(2 * Math.PI * m / 5) * 12 * .05 * (ksz / 32);
     yy = ty + Math.sin(2 * Math.PI * m / 5) * 12 * .05 * (ksz / 32);
     if (m == 0) ctx2.moveTo(xx, yy);
     else ctx2.lineTo(xx, yy);
     xx = tx + Math.cos(2 * Math.PI * (m + .5) /
      5) * 31 * .05 * (ksz / 32);
     yy = ty + Math.sin(2 * Math.PI * (m + .5) / 5) * 31 * .05 * (ksz / 32);
     ctx2.lineTo(xx, yy)
    }
    ctx2.fill();
    ctx2.restore()
   }
  } else if (i == 20) {
   var fk = -1.5;
   var tk = 1.5;
   if (nsr) {
    fk = -6.5;
    tk = 7.5
   }
   for (var k = fk; k <= tk; k++) {
    var tx = ksz2 + Math.cos(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
    var ty = ksz2 + Math.sin(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
    ctx2.save();
    ctx2.globalAlpha = .7;
    ctx2.fillStyle = "#FFFFFF";
    ctx2.beginPath();
    for (var m = 0; m <= 5; m++) {
     xx = tx + Math.cos(2 * Math.PI * m / 5) * 14 * .05 * (ksz2 / 16);
     yy = ty + Math.sin(2 * Math.PI * m / 5) * 14 * .05 * (ksz2 / 16);
     if (m == 0) ctx2.moveTo(xx,
      yy);
     else ctx2.lineTo(xx, yy);
     xx = tx + Math.cos(2 * Math.PI * (m + .5) / 5) * 36 * .05 * (ksz2 / 16);
     yy = ty + Math.sin(2 * Math.PI * (m + .5) / 5) * 36 * .05 * (ksz2 / 16);
     ctx2.lineTo(xx, yy)
    }
    ctx2.fill();
    ctx2.restore()
   }
  }
  if (iioc && testing)
   if (kmcs.length >= 1) kmcs.push(kmcs[0]);
   else if (per_color_imgs.length >= 2) kmcs.push(per_color_imgs[0].kmcs[0]);
  else {
   var u = kmc2.toDataURL();
   var ii = document.createElement("img");
   ii.src = "ayy.png";
   kmcs.push(ii)
  } else kmcs.push(kmc2)
 }
 o.kmcs = kmcs;
 o.kmos = kmos;
 o.kl = kmcs.length;
 o.klp = true;
 if (i == 36) o.klp = false;
 per_color_imgs.push(o);
 if (i <= 9)
  for (var j = 2.8; j <= 18.8; j += 1) {
   var cc = document.createElement("canvas");
   var sz = Math.ceil(2 * (j * .65 + 0 * 6));
   cc.width = cc.height = sz;
   var ctx = cc.getContext("2d");
   var eam = .2;
   var g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
   var trr = rr;
   var tgg = gg;
   var tbb = bb;
   if (i == 1);
   else if (i == 9) {
    trr = 160;
    tgg = 160;
    tbb = 160
   }
   g.addColorStop(0, "rgba(" + trr + ", " + tgg + ", " + tbb + ", 1)");
   g.addColorStop(.99, "rgba(" + trr + ", " + tgg + ", " + tbb + ", " + eam + ")");
   g.addColorStop(1, "rgba(" + trr + ", " + tgg + ", " + tbb + ", 0)");
   ctx.fillStyle = g;
   ctx.fillRect(0,
    0, sz, sz);
   if (iioc && testing) {
    var u = cc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    o.imgs.push(ii)
   } else o.imgs.push(cc);
   o.fws.push(sz);
   o.fhs.push(sz);
   o.fw2s.push(sz / 2);
   o.fh2s.push(sz / 2);
   sz = Math.ceil(j * 8 + 6);
   var cc = document.createElement("canvas");
   cc.width = cc.height = sz;
   var ctx = cc.getContext("2d");
   var g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, j * 4);
   g.addColorStop(0, "rgba(" + rr + ", " + gg + ", " + bb + ", 1)");
   g.addColorStop(1, "rgba(" + rr + ", " + gg + ", " + bb + ", 0)");
   ctx.fillStyle = g;
   ctx.fillRect(0, 0,
    sz, sz);
   if (iioc && testing) {
    var u = cc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    o.gimgs.push(ii)
   } else o.gimgs.push(cc);
   o.gfws.push(sz);
   o.gfhs.push(sz);
   o.gfw2s.push(sz / 2);
   o.gfh2s.push(sz / 2);
   var cc = document.createElement("canvas");
   var bsz = Math.ceil(2 * (j * .7 + 0 * 6)) + 2;
   var sz = bsz + 20;
   cc.width = cc.height = sz;
   var ctx = cc.getContext("2d");
   ctx.shadowBlur = 6;
   ctx.shadowOffsetY = 1 + 2 * j / 18.8;
   ctx.shadowColor = "#000000";
   ctx.globalAlpha = 1;
   ctx.beginPath();
   for (var k = 0; k <= 600; k++) {
    xx = sz / 2 + Math.cos(2 * Math.PI * k / 600) *
     bsz / 2;
    yy = sz / 2 + Math.sin(2 * Math.PI * k / 600) * bsz / 2;
    if (k == 0) ctx.moveTo(xx, yy);
    else ctx.lineTo(xx, yy)
   }
   ctx.fill();
   if (iioc && testing) {
    var u = cc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    o.oimgs.push(ii)
   } else o.oimgs.push(cc);
   o.ofws.push(sz);
   o.ofhs.push(sz);
   o.ofw2s.push(sz / 2);
   o.ofh2s.push(sz / 2)
  }
 if (i <= 9) {
  o.ic = o.imgs.length;
  o.pr_imgs = [];
  o.pr_fws = [];
  o.pr_fhs = [];
  o.pr_fw2s = [];
  o.pr_fh2s = [];
  var cc;
  var sz;
  var ctx;
  for (var j = 3; j <= 24; j += 1) {
   cc = document.createElement("canvas");
   sz = Math.ceil(j * 2 + 38);
   cc.width =
    cc.height = sz;
   ctx = cc.getContext("2d");
   ctx.fillStyle = o.cs;
   ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2);
   ctx.shadowBlur = 22;
   ctx.shadowOffsetY = 0;
   ctx.shadowColor = "#" + rs + gs + bs;
   ctx.fill();
   ctx.fill();
   if (iioc && testing) {
    var u = cc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    o.pr_imgs.push(ii)
   } else o.pr_imgs.push(cc);
   o.pr_fws.push(sz);
   o.pr_fhs.push(sz);
   o.pr_fw2s.push(sz / 2);
   o.pr_fh2s.push(sz / 2)
  }
 }
}
if (testing) {
 var ctx = colc.getContext("2d");
 ctx.fillStyle = "#000000";
 ctx.fillRect(0, 0, colc.width, colc.height);
 ctx.fillStyle = "#FFFFFF";
 ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif";
 ctx.textBaseline = "top";
 ctx.textAlign = "center";
 var xx = 0;
 var yy = 0;
 for (var i = 0; i < rrs.length; i++) {
  var pci = per_color_imgs[i];
  var kmc = pci.kmcs[0];
  ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
  ntx = o.xx + o.fx;
  nty = o.yy + o.fy;
  ntx = mww2 + (ntx - view_xx) * gsc;
  nty = mhh2 + (nty - view_yy) * gsc;
  ctx.fillText("" + i, xx + 8, yy + 16);
  xx +=
   16;
  if (xx > colc.width - 16) {
   xx = 0;
   yy += 28
  }
 }
}
var view_xx = 0;
var view_yy = 0;
var view_ang = 0;
var view_dist = 0;
var fvx = 0;
var fvy = 0;
var xm = 0;
var ym = 0;
var lsxm = 0;
var lsym = 0;
var slither = null;
var my_nick = "";
var dhx, dhy, hsz;
var fr = 0;
var lfr = 0;
var ltm = timeObj.now();
var vfr = 0;
var vfrb = 0;
var avfr = 0;
var afr = 0;
var fr2 = 0;
var lfr2 = 0;
var vfrb2 = 0;
var high_quality = true;
var gla = 1;
var wdfg = 0;
var qsm = 1;
var mqsm = 1.7;
var playing = false;
var dead_mtm = -1;
var at2lt = new Float32Array(65536);
for (yy = 0; yy < 256; yy++)
 for (xx = 0; xx < 256; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0;
var kd_r_frb = 0;
var kd_l = false;
var kd_r = false;
var kd_u = false;
var lkstm = 0;
var oef = function() {
 var ctm = timeObj.now();
 vfr = (ctm - ltm) / 8;
 if (vfr > 5) vfr = 5;
 if (vfr < 0) vfr = 0;
 avfr = vfr;
 ltm = ctm;
 lfr = fr;
 fr += vfr;
 vfrb = Math.floor(fr) - Math.floor(lfr);
 lfr2 = fr2;
 fr2 += vfr * 2;
 vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
 afr += avfr;
 if (world_running)
  if (slither != null) {
   if (kd_l) kd_l_frb += vfrb;
   if (kd_r) kd_r_frb += vfrb
  } if (want_play)
  if (dead_mtm == -1) startGame();
 if (ending_build_skin) {
  if (bdska != 0) {
   bdska -= vfr * .015;
   if (bdska <= 0) {
    bdska = 0;
    ending_build_skin =
     false;
    building_skin = false;
    alcsc = ralcsc;
    for (var i = bskbtns.length - 1; i >= 0; i--) document.body.removeChild(bskbtns[i].a);
    bskbtns = [];
    revdiv.style.display = "none"
   }
   var k = .5 * (1 - Math.cos(Math.PI * bdska));
   bskoy = k * 90;
   skoboym = k;
   reposSkinStuff();
   pskh.style.opacity = 1 - bdska;
   nskh.style.opacity = 1 - bdska;
   bskh.style.opacity = 1 - bdska;
   revdiv.style.opacity = bdska;
   for (var i = bskbtns.length - 1; i >= 0; i--) {
    var o = bskbtns[i];
    o.ii.style.opacity = bdska
   }
  }
 } else if (building_skin)
  if (bdska != 1) {
   bdska += vfr * .015;
   if (bdska >=
    1) bdska = 1;
   var k = .5 * (1 - Math.cos(Math.PI * bdska));
   bskoy = k * 90;
   skoboym = k;
   reposSkinStuff();
   pskh.style.opacity = 1 - bdska;
   nskh.style.opacity = 1 - bdska;
   bskh.style.opacity = 1 - bdska;
   revdiv.style.opacity = bdska;
   for (i = bskbtns.length - 1; i >= 0; i--) {
    var o = bskbtns[i];
    o.ii.style.opacity = bdska
   }
  } if (choosing_skin) {
  for (var i = slithers.length - 1; i >= 0; i--) {
   var o = slithers[i];
   for (var j = o.pts.length - 1; j >= 0; j--) o.pts[j].yy = grd / 2 + Math.cos(j / 4 + fr / 19) * 15 * (1 - j / o.pts.length);
   o.xx = o.pts[o.pts.length - 1].xx;
   o.yy = o.pts[o.pts.length - 1].yy
  }
  view_xx -= vfr
 }
 if (playing)
  if (!high_quality) {
   if (gla > 0) {
    gla -= vfr * .0075;
    if (gla < 0) gla = 0
   }
   if (qsm < mqsm) {
    qsm += vfr * 4E-5;
    if (qsm > mqsm) qsm = mqsm
   }
  } else {
   if (gla < 1) {
    gla += vfr * .0075;
    if (gla > 1) gla = 1
   }
   if (qsm > 1) {
    qsm -= vfr * 4E-5;
    if (qsm < 1) qsm = 1
   }
  }
 if (login_fr != 1)
  if (tip_fr !=
   -1) {
   tip_fr += vfr * .017;
   if (tip_fr >= pi2) {
    tip_fr -= pi2;
    tip_pos++;
    if (tip_pos >= tipss.length) tip_pos = 0;
    tips.textContent = tipss[tip_pos]
   }
   var j = .5 - .5 * Math.cos(tip_fr);
   tips.style.opacity = Math.round(Math.pow(j, .5) * 1E5) / 1E5
  } if (dead_mtm == -1) {
  if (lb_fr != -1)
   if (lb_fr != 1) {
    lb_fr += vfr * .01;
    if (lb_fr >= 1) lb_fr = 1;
    lbh.style.opacity = lbf.style.opacity = lb_fr
   }
 } else if (ctm - dead_mtm > 1600) {
  if (login_iv == -1) {
   login_iv = -2;
   login.style.display = "";
   cskh.style.display =
    "inline";
   grqh.style.display = "inline"
  }
  if (login_iv == -2) {
   login_fr -= .004 * vfr;
   if (choosing_skin) login_fr -= .007 * vfr;
   lb_fr = login_fr;
   if (login_fr <=
    0) {
    login_fr = 0;
    dead_mtm = -1;
    nick.disabled = false;
    nick.focus();
    lb_fr = -1;
    playing = false;
    if (choosing_skin) {
     choosing_skin = false;
     resetGame();
     pskh.style.display = "none";
     nskh.style.display = "none";
     bskh.style.display = "none";
     skodiv.style.display = "none";
     revdiv.style.display = "none"
    }
   }
   pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, login_fr * 6));
   lgcsc = 1 + .1 * Math.pow(login_fr, 2);
   var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
   if (sc == 1) trf(login, "");
   else trf(login, "scale(" + sc + "," + sc + ")");
   login.style.opacity =
    1 - login_fr;
   cskh.style.opacity = 1 - login_fr;
   grqh.style.opacity = 1 - login_fr;
   pskh.style.opacity = login_fr;
   nskh.style.opacity = login_fr;
   bskh.style.opacity = login_fr;
   skodiv.style.opacity = login_fr;
   revdiv.style.opacity =
    login_fr;
   if (choosing_skin) mc.style.opacity = login_fr;
   loch.style.opacity = login_fr * mmal;
   lbh.style.opacity = lbf.style.opacity = lb_fr
  }
 }
 if (want_end_world)
  if (dead_mtm == -1) endRound();
 if (!world_running && !choosing_skin && !want_play && dead_mtm == -1 && animating) startDemo();
 if (world_running) {
  if (slither != null)
   if (kd_l_frb > 0 || kd_r_frb > 0)
    if (ctm - lkstm > 50) {
     lkstm = ctm;
     if (kd_r_frb > 0)
      if (kd_l_frb > kd_r_frb) {
       kd_l_frb -= kd_r_frb;
       kd_r_frb = 0
      } if (kd_l_frb > 0)
      if (kd_r_frb > kd_l_frb) {
       kd_r_frb -= kd_l_frb;
       kd_l_frb = 0
      } if (kd_l_frb > 0) {
      v = kd_l_frb;
      if (v > 127) v = 127;
      kd_l_frb -= v;
      steerSnake(slither, slither.wang - mamu * v * slither.scang * slither.spang);
      slither.eang = slither.wang
     } else if (kd_r_frb > 0) {
      v = kd_r_frb;
      if (v > 127) v = 127;
      kd_r_frb -= v;
      steerSnake(slither, slither.wang + mamu * v * slither.scang * slither.spang);
      slither.eang = slither.wang
     }
    } if (mmgad) {
   if (mmal != 1) {
    mmal += .025;
    if (mmal >= 1) mmal = 1;
    loch.style.opacity = mmal
   }
   if (mmbfr < 1) {
    mmbfr += vfr / 230;
    if (mmbfr >= 1) mmbfr = 1;
    asmc.style.opacity = mmsta * (1 - mmbfr);
    asmc2.style.opacity = 1 - (1 - mmsta) / (1 - mmsta * (1 - mmbfr))
   }
  }
 }
 if (slither != null)
  if (world_running)
   if (ctm - locu_mtm > 150) {
    locu_mtm = timeObj.now();
    myloc.style.left = Math.round(10 * (mmrad + 12 + mmrad * (slither.xx - grd) / flux_grd - 7)) / 10 + "px";
    myloc.style.top = Math.round(10 * (mmrad + 12 + mmrad * (slither.yy - grd) / flux_grd - 7)) / 10 + "px"
   } if (ctm - lrd_mtm > 1E3) {
  if (testing) {
   var s = [];
   s.push("FPS: " + fps);
   s.push("snakes: " + slithers.length);
   s.push("foods: " + foods_c);
   s.push("preys: " + preys.length);
   s.push("segments drawn: " + sgsdr);
   s.push("foods drawn: " + fdsdr);
   pfd.innerHTML = s.join("<br>")
  }
  if (playing)
   if (want_quality == 1)
    if (fps <= 24) {
     wdfg++;
     if (high_quality)
      if (wdfg >= 1) high_quality = false
    } else if (high_quality ||
   fps >= 32)
   if (wdfg > 0) {
    wdfg *= .987;
    wdfg -= .1;
    if (wdfg <= 0) high_quality = true
   } fps = 0;
  lrd_mtm = timeObj.now()
 }
 if (slither != null) {
  slither.md = slither.wmd;
  if (xm != lsxm || ym != lsym) want_e = true;
  slither.eang = Math.atan2(ym, xm);
  if (want_e && world_running && !slither.dead) {
   want_e = false;
   lsxm = xm;
   lsym = ym;
   if (xm * xm + ym * ym > 256) steerSnake(slither, Math.atan2(ym, xm))
  }
 }
 if (world_running && !choosing_skin) stepWorld(vfr);
 var mang, vang, tang, emang;
 if (!choosing_skin)
  for (var i = slithers.length - 1; i >= 0; i--) {
   var o = slithers[i];
   mang = mamu * vfr * o.scang * o.spang;
   var csp = o.sp * vfr / 4;
   if (csp > o.msl) csp = o.msl;
   if (!o.dead) {
    if (o.tsp != o.sp)
     if (o.tsp < o.sp) {
      o.tsp += (o.sp - o.tsp) * .1;
      o.tsp += 1E-4;
      if (o.tsp > o.sp) o.tsp = o.sp
     } else {
      o.tsp += (o.sp - o.tsp) * .3;
      o.tsp -= 1E-4;
      if (o.tsp < o.sp) o.tsp = o.sp
     } if (o.tsp > o.fsp) o.sfr += (o.tsp - o.fsp) * vfr * .021;
    if (o.fltg > 0) {
     var k = vfrb;
     if (k > o.fltg) k = o.fltg;
     o.fltg -= k;
     for (qq = 0; qq < k; qq++) {
      o.fl =
       o.fls[o.flpos];
      o.fls[o.flpos] = 0;
      o.flpos++;
      if (o.flpos >= lfc) o.flpos = 0
     }
    } else if (o.fltg == 0) {
     o.fltg = -1;
     o.fl = 0
    }
    if (render_mode == 1) o.cfl = o.tl + o.fl;
    else o.cfl = o.tl + o.fl - .6
   }
   if (o.dir == 1) {
    o.ang -= mang;
    if (o.ang < 0 || o.ang >= pi2) o.ang %= pi2;
    if (o.ang < 0) o.ang += pi2;
    vang = (o.wang - o.ang) % pi2;
    if (vang < 0) vang += pi2;
    if (vang > Math.PI) vang -= pi2;
    if (vang > 0) {
     o.ang = o.wang;
     o.dir = 0
    }
   } else if (o.dir == 2) {
    o.ang += mang;
    if (o.ang < 0 || o.ang >= pi2) o.ang %= pi2;
    if (o.ang < 0) o.ang += pi2;
    vang = (o.wang - o.ang) % pi2;
    if (vang < 0) vang += pi2;
    if (vang > Math.PI) vang -= pi2;
    if (vang < 0) {
     o.ang = o.wang;
     o.dir = 0
    }
   } else o.ang = o.wang;
   if (o.ehl != 1) {
    o.ehl += .03 * vfr;
    if (o.ehl >= 1) o.ehl = 1
   }
   if (render_mode == 1) {
    var po = o.pts[o.pts.length - 1];
    o.wehang = Math.atan2(o.yy + o.fy - po.yy - po.fy + po.eby * (1 - o.ehl), o.xx + o.fx - po.xx - po.fx + po.ebx * (1 - o.ehl))
   }
   if (!o.dead)
    if (o.ehang != o.wehang) {
     vang = (o.wehang - o.ehang) % pi2;
     if (vang < 0) vang += pi2;
     if (vang > Math.PI) vang -= pi2;
     if (vang < 0) o.edir = 1;
     else if (vang > 0) o.edir = 2
    } if (o.edir == 1) {
    tang = (o.wehang - o.ehang) % pi2;
    if (tang < 0) tang += pi2;
    if (tang > Math.PI) tang -= pi2;
    o.ehang += tang * p12[vfrb];
    if (o.ehang < 0 || o.ehang >= pi2) o.ehang %= pi2;
    if (o.ehang < 0) o.ehang += pi2;
    vang = (o.wehang - o.ehang) % pi2;
    if (vang < 0) vang += pi2;
    if (vang > Math.PI) vang -= pi2;
    if (vang > 0) {
     o.ehang = o.wehang;
     o.edir = 0
    }
   } else if (o.edir == 2) {
    tang = (o.wehang - o.ehang) % pi2;
    if (tang < 0) tang += pi2;
    if (tang > Math.PI) tang -= pi2;
    o.ehang += tang * p12[vfrb];
    if (o.ehang < 0 || o.ehang >= pi2) o.ehang %= pi2;
    if (o.ehang < 0) o.ehang += pi2;
    vang = (o.wehang - o.ehang) % pi2;
    if (vang < 0) vang += pi2;
    if (vang > Math.PI) vang -= pi2;
    if (vang < 0) {
     o.ehang = o.wehang;
     o.edir = 0
    }
   }
   if (!o.dead) {
    o.xx += Math.cos(o.ang) *
     csp;
    o.yy += Math.sin(o.ang) * csp;
    o.chl += csp / o.msl
   }
   if (vfrb > 0) {
    var k = 0;
    var po;
    for (var j = o.pts.length - 1; j >= 0; j--) {
     po = o.pts[j];
     if (po.dying) {
      k++;
      po.da += .0015 * vfrb;
      if (po.da >= 1) {
       po.da = 1;
       if (k >= 4) {
        o.pts.splice(j, 1);
        po.dying = false;
        points_dp.add(po)
       }
      }
     }
    }
    for (var j = o.pts.length - 1; j >= 0; j--) {
     var po = o.pts[j];
     if (po.ftg > 0) {
      var k = vfrb;
      if (k > po.ftg) k = po.ftg;
      po.ftg -= k;
      for (qq = 0; qq < k; qq++) {
       po.fx = po.fxs[po.fpos];
       po.fy = po.fys[po.fpos];
       po.fltn = po.fltns[po.fpos];
       po.fsmu = po.fsmus[po.fpos];
       po.fxs[po.fpos] = 0;
       po.fys[po.fpos] = 0;
       po.fltns[po.fpos] =
        0;
       po.fsmus[po.fpos] = 0;
       po.fpos++;
       if (po.fpos >= hfc) po.fpos = 0
      }
     } else if (po.ftg == 0) {
      po.ftg = -1;
      po.fx = 0;
      po.fy = 0;
      po.fltn = 0;
      po.fsmu = 0
     }
    }
   }
   var wx = Math.cos(o.eang) * o.pma;
   var wy = Math.sin(o.eang) * o.pma;
   if (o.rex < wx) {
    o.rex += vfr / 6;
    if (o.rex >= wx) o.rex = wx
   }
   if (o.rey < wy) {
    o.rey += vfr / 6;
    if (o.rey >= wy) o.rey = wy
   }
   if (o.rex > wx) {
    o.rex -= vfr / 6;
    if (o.rex <= wx) o.rex = wx
   }
   if (o.rey > wy) {
    o.rey -= vfr / 6;
    if (o.rey <= wy) o.rey = wy
   }
   if (vfrb > 0) {
    if (o.ftg > 0) {
     var k = vfrb;
     if (k > o.ftg) k = o.ftg;
     o.ftg -= k;
     for (qq = 0; qq < k; qq++) {
      o.fx = o.fxs[o.fpos];
      o.fy = o.fys[o.fpos];
      o.fchl =
       o.fchls[o.fpos];
      o.fxs[o.fpos] = 0;
      o.fys[o.fpos] = 0;
      o.fchls[o.fpos] = 0;
      o.fpos++;
      if (o.fpos >= rfc) o.fpos = 0
     }
    } else if (o.ftg == 0) {
     o.ftg = -1;
     o.fx = 0;
     o.fy = 0;
     o.fchl = 0
    }
    if (o.fatg > 0) {
     var k = vfrb;
     if (k > o.fatg) k = o.fatg;
     o.fatg -= k;
     for (qq = 0; qq < k; qq++) {
      o.fa = o.fas[o.fapos];
      o.fas[o.fapos] = 0;
      o.fapos++;
      if (o.fapos >= afc) o.fapos = 0
     }
    } else if (o.fatg == 0) {
     o.fatg = -1;
     o.fa = 0
    }
   }
   if (o.dead) {
    o.dead_amt += vfr * .02;
    if (o.dead_amt >= 1) destroySlitherAtIndex(i)
   } else if (o.alive_amt != 1) {
    o.alive_amt += vfr * .015;
    if (o.alive_amt >= 1) o.alive_amt = 1
   }
  }
 for (var i = preys.length -
   1; i >= 0; i--) {
  var pr = preys[i];
  mang = mamu2 * vfr;
  var csp = pr.sp * vfr / 4;
  if (vfrb > 0)
   if (pr.ftg > 0) {
    var k = vfrb;
    if (k > pr.ftg) k = pr.ftg;
    pr.ftg -= k;
    for (qq = 1; qq <= k; qq++) {
     if (qq == k) {
      pr.fx = pr.fxs[pr.fpos];
      pr.fy = pr.fys[pr.fpos]
     }
     pr.fxs[pr.fpos] = 0;
     pr.fys[pr.fpos] = 0;
     pr.fpos++;
     if (pr.fpos >= rfc) pr.fpos = 0
    }
   } else if (pr.ftg == 0) {
   pr.fx = 0;
   pr.fy = 0;
   pr.ftg = -1
  }
  if (pr.dir == 1) {
   pr.ang -= mang;
   if (pr.ang < 0 || pr.ang >= pi2) pr.ang %= pi2;
   if (pr.ang < 0) pr.ang += pi2;
   vang = (pr.wang - pr.ang) % pi2;
   if (vang < 0) vang += pi2;
   if (vang > Math.PI) vang -= pi2;
   if (vang > 0) {
    pr.ang = pr.wang;
    pr.dir = 0
   }
  } else if (pr.dir == 2) {
   pr.ang += mang;
   if (pr.ang < 0 || pr.ang >= pi2) pr.ang %= pi2;
   if (pr.ang < 0) pr.ang += pi2;
   vang = (pr.wang - pr.ang) % pi2;
   if (vang < 0) vang += pi2;
   if (vang > Math.PI) vang -= pi2;
   if (vang < 0) {
    pr.ang = pr.wang;
    pr.dir = 0
   }
  } else pr.ang = pr.wang;
  pr.xx += Math.cos(pr.ang) * csp;
  pr.yy += Math.sin(pr.ang) * csp;
  pr.gfr += vfr * pr.gr;
  if (pr.eaten) {
   if (pr.fr != 1.5) {
    pr.fr += vfr / 150;
    if (pr.fr >= 1.5) pr.fr = 1.5
   }
   pr.eaten_fr += vfr / 47;
   pr.gfr += vfr;
   var o = pr.eaten_by;
   if (pr.eaten_fr >= 1 || !o) preys.splice(i, 1);
   else pr.rad = 1 - Math.pow(pr.eaten_fr, 3)
  } else if (pr.fr !=
   1) {
   pr.fr += vfr / 150;
   if (pr.fr >= 1) {
    pr.fr = 1;
    pr.rad = 1
   } else {
    pr.rad = .5 * (1 - Math.cos(Math.PI * pr.fr));
    pr.rad += (.5 * (1 - Math.cos(Math.PI * pr.rad)) - pr.rad) * .66
   }
  }
 }
 cm1 = foods_c - 1;
 for (var i = cm1; i >= 0; i--) {
  var fo = foods[i];
  fo.gfr += vfr * fo.gr;
  if (fo.eaten) {
   fo.eaten_fr += vfr / 41;
   var o = fo.eaten_by;
   if (fo.eaten_fr >= 1 || !o)
    if (i == cm1) {
     foods[i] = null;
     foods_c--;
     cm1--
    } else {
     foods[i] = foods[cm1];
     foods[cm1] = null;
     foods_c--;
     cm1--
    }
   else {
    var o = fo.eaten_by;
    var k = fo.eaten_fr * fo.eaten_fr;
    fo.rad = fo.lrrad * (1 - fo.eaten_fr * k);
    fo.rx = fo.xx + (o.xx + o.fx + Math.cos(o.ang +
     o.fa) * (43 - k * 24) * (1 - k) - fo.xx) * k;
    fo.ry = fo.yy + (o.yy + o.fy + Math.sin(o.ang + o.fa) * (43 - k * 24) * (1 - k) - fo.yy) * k;
    fo.rx += Math.cos(fo.wsp * fo.gfr) * 6 * (1 - fo.eaten_fr);
    fo.ry += Math.sin(fo.wsp * fo.gfr) * 6 * (1 - fo.eaten_fr)
   }
  } else {
   if (fo.fr != 1) {
    fo.fr += fo.rsp * vfr / 150;
    if (fo.fr >= 1) {
     fo.fr = 1;
     fo.rad = 1
    } else {
     fo.rad = .5 * (1 - Math.cos(Math.PI * fo.fr));
     fo.rad += (.5 * (1 - Math.cos(Math.PI * fo.rad)) - fo.rad) * .66
    }
    fo.lrrad = fo.rad
   }
   fo.rx = fo.xx;
   fo.ry = fo.yy;
   fo.rx = fo.xx + Math.cos(fo.wsp * fo.gfr) * 6;
   fo.ry = fo.yy + Math.sin(fo.wsp * fo.gfr) * 6
  }
 }
 redraw();
 vfr = 0;
 vfrb =
  0;
 if (!no_raf) raf(oef)
};
var bgx2 = 0;
var bgy2 = 0;
var fgfr = 0;
var px, py;
var lpx, lpy;
var ax, ay;
var lax, lay;
var pax, pay;
var fx, fy, fs;
var maxp = 0;
var fps = 0;
var redraw = function() {
 fps++;
 var ctx = mc.getContext("2d");
 if (!animating) return;
 if (slither) {
  var dgsc = .64285 + .514285714 / Math.max(1, (slither.sct + 16) / 36);
  if (gsc != dgsc) {
   if (gsc < dgsc) {
    gsc += 2E-4;
    if (gsc >= dgsc) gsc = dgsc
   } else {
    gsc -= 2E-4;
    if (gsc <= dgsc) gsc = dgsc
   }
   for (var i = bgees.length - 1; i >= 0; i--) bgees[i].sc = gsc * bgees[i].sp
  }
 }
 var trd;
 var fal, pal;
 var fd2, pd2;
 var lvx = view_xx;
 var lvy = view_yy;
 if (slither == null && world_running) {
  if (!demo_follow || demo_follow.dead) demo_follow = pickDemoFollow(view_xx, view_yy);
  if (demo_follow) {
   var dk = Math.min(1, .025 * avfr);
   view_xx += (demo_follow.xx + demo_follow.fx - view_xx) * dk;
   view_yy += (demo_follow.yy + demo_follow.fy - view_yy) * dk
  }
  gsc += (.85 - gsc) * Math.min(1, .02 * avfr)
 }
 if (slither != null || world_running) {
  if (slither != null) {
   if (fvtg > 0) {
    fvtg--;
    fvx = fvxs[fvpos];
    fvy = fvys[fvpos];
    fvxs[fvpos] = 0;
    fvys[fvpos] = 0;
    fvpos++;
    if (fvpos >= vfc) fvpos = 0
   }
   if (follow_view) {
    view_xx =
     slither.xx + slither.fx + fvx;
    view_yy = slither.yy + slither.fy + fvy
   }
  }
  if (choosing_skin) {
   view_xx -= slither.pts.length * 5;
   if (building_skin) view_yy -= bskoy;
   gsc = dgsc = 1.3
  }
  view_ang = Math.atan2(view_yy - grd, view_xx - grd);
  view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd));
  bpx1 = view_xx - (mww2 / gsc + 84);
  bpy1 = view_yy - (mhh2 / gsc + 84);
  bpx2 = view_xx + (mww2 / gsc + 84);
  bpy2 = view_yy + (mhh2 / gsc + 84);
  fpx1 = view_xx - (mww2 / gsc + 24);
  fpy1 = view_yy - (mhh2 / gsc + 24);
  fpx2 = view_xx + (mww2 / gsc +
   24);
  fpy2 = view_yy + (mhh2 / gsc + 24);
  apx1 = view_xx - (mww2 / gsc + 210);
  apy1 = view_yy - (mhh2 / gsc + 210);
  apx2 = view_xx + (mww2 / gsc + 210);
  apy2 = view_yy + (mhh2 / gsc + 210)
 }
 bgx2 -= (view_xx - lvx) * 1 / bgw2;
 bgy2 -= (view_yy - lvy) * 1 / bgh2;
 bgx2 %= 1;
 if (bgx2 < 0) bgx2 += 1;
 bgy2 %= 1;
 if (bgy2 < 0) bgy2 += 1;
 ctx.fillStyle = arena_base;
 ctx.fillRect(0, 0, mww, mhh);
 if (bgp2) {
  ctx.save();
  ctx.fillStyle = bgp2;
  ctx.translate(mww2,
   mhh2);
  ctx.scale(gsc, gsc);
  ctx.translate(bgx2 * bgw2, bgy2 * bgh2);
  ctx.globalAlpha = 1;
  ctx.fillRect(-mww * 3 / gsc, -mhh * 3 / gsc, mww * 5 / gsc, mhh * 5 / gsc);
  ctx.restore()
 }
 if (gbgmc && (high_quality || gla > 0)) ctx.drawImage(gbgmc, 0, 0);
 ctx.save();
 for (var i = foods_c - 1; i >= 0; i--) {
  var fo = foods[i];
  if (fo.rx >= fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2) {
   var frad = (2.2 + fo.sz * .62) * fo.rad * gsc * (1 + .07 * Math.sin(fo.gfr / 9));
   if (frad < .4) continue;
   fx = mww2 + gsc * (fo.rx - view_xx);
   fy = mhh2 + gsc * (fo.ry - view_yy);
   var ps = frad * pellet_scale;
   ctx.globalAlpha = fo.fr;
   ctx.drawImage(pelletSprite(fo.cv), fx - ps, fy - ps, ps * 2, ps * 2)
  }
 }
 for (var i = preys.length - 1; i >= 0; i--) {
  pr = preys[i];
  tx = pr.xx + pr.fx;
  ty = pr.yy + pr.fy;
  px = mww2 + gsc * (tx - view_xx);
  py = mhh2 + gsc * (ty - view_yy);
  if (px >= -50 && py >= -50 && px <= mwwp50 && py <= mhhp50) {
   if (pr.eaten) {
    var o = pr.eaten_by;
    var k = Math.pow(pr.eaten_fr, 2);
    tx += (o.xx + o.fx + Math.cos(o.ang + o.fa) * (43 - k * 24) * (1 - k) - tx) * k;
    ty += (o.yy + o.fy + Math.sin(o.ang + o.fa) * (43 - k * 24) * (1 - k) - ty) * k;
    px = mww2 + gsc * (tx - view_xx);
    py = mhh2 + gsc * (ty - view_yy)
   }
   var prad = (3 + pr.sz * .8) * pr.rad * gsc * (1 + .1 * Math.cos(pr.gfr / 13));
   var ps = prad * pellet_scale * 1.25;
   ctx.globalAlpha = pr.fr;
   ctx.drawImage(pelletSprite(pr.cv), px - ps, py - ps, ps * 2, ps * 2)
  }
 }
 ctx.restore();
 ctx.save();
 ctx.strokeStyle = "#90C098";
 var ntx, nty;
 var hx, hy;
 var tx, ty, dx, dy, ox, oy;
 var fang;
 var o;
 var pr;
 for (var i = slithers.length - 1; i >= 0; i--) {
  o = slithers[i];
  tx = o.xx + o.fx;
  ty = o.yy + o.fy + 40;
  if (o.na > 0)
   if (tx >= bpx1 - 100 && ty >= bpy1 && tx <= bpx2 + 100 && ty <= bpy2) {
    if (o == slither) {
     o.fnfr++;
     if (o.fnfr > 200) {
      o.na -= .004;
      if (o.na < 0) o.na = 0
     }
    }
    ntx = o.xx + o.fx;
    nty = o.yy + o.fy;
    ctx.save();
    ctx.globalAlpha =
     .5 * o.na * o.alive_amt * (1 - o.dead_amt);
    ctx.font = "600 14px Archivo, sans-serif";
    ctx.fillStyle = "#e8ecf4";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ntx = mww2 + (ntx - view_xx) * gsc;
    nty = mhh2 + (nty - view_yy) * gsc;
    ctx.fillText(o.nk, ntx, nty + 32 + 11 * o.sc * gsc);
    ctx.restore()
   }
 }
 for (var i =
   slithers.length - 1; i >= 0; i--) {
  o = slithers[i];
  iiv = false;
  for (j = o.pts.length - 1; j >= 0; j--) {
   po = o.pts[j];
   px = po.xx + po.fx;
   py = po.yy + po.fy;
   if (px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
    iiv = true;
    break
   }
  }
  if (o.iiv != iiv) {
   o.iiv = iiv;
   if (iiv) o.ehang = o.wehang = o.ang
  }
 }
 sgsdr = 0;
 for (var i = slithers.length - 1; i >= 0; i--) {
  o = slithers[i];
  if (o.iiv) {
   hx = o.xx + o.fx;
   hy = o.yy + o.fy;
   if (testing && shifty) {
    ctx.fillStyle = "#607080";
    ctx.save();
    ctx.translate(mww / 2 + (hx - view_xx) * gsc, mhh / 2 + (hy - view_yy) * gsc);
    ctx.fillRect(-8, -8, 16, 16);
    ctx.restore()
   }
   px = hx;
   py =
    hy;
   fang = o.ehang;
   var ssc = o.sc;
   var lsz = 29 * ssc;
   var rl = o.cfl;
   var po = o.pts[o.pts.length - 1];
   if (render_mode == 1) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
    var dfl = false;
    var lpo;
    for (var j = o.pts.length - 1; j >= 0; j--) {
     lpo = po;
     po = o.pts[j];
     lpx = px;
     lpy = py;
     px = po.xx;
     py = po.yy;
     var fx = po.fx;
     var fy = po.fy;
     if (rl > 0) {
      px += fx;
      py += fy;
      lax = ax;
      lay = ay;
      ax = (px + lpx) / 2;
      ay = (py + lpy) / 2;
      if (!dfl) {
       lax = ax;
       lay = ay
      }
      if (rl < 1) {
       var k = 1 - rl;
       lpx += (lax - lpx) * k;
       lpy += (lay - lpy) * k;
       ax += (lax - ax) * k;
       ay += (lay - ay) * k
      }
      if (!dfl) rl -=
       o.chl + o.fchl;
      else rl--;
      if (!dfl) {
       ctx.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
       dfl = true
      } else ctx.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc)
     }
    }
    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    if (doiosh) {
     if (o.sp > o.fsp) {
      var j = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.sp - o.ssp) / (o.msp - o.ssp)));
      ctx.save();
      ctx.strokeStyle = o.cs;
      ctx.globalAlpha = .3 * j;
      ctx.lineWidth = (lsz + 6) * gsc;
      ctx.stroke();
      ctx.lineWidth = (lsz + 9) * gsc;
      ctx.stroke();
      ctx.lineWidth = (lsz + 12) * gsc;
      ctx.stroke();
      ctx.restore()
     }
     ctx.globalAlpha = 1 * o.alive_amt * (1 - o.dead_amt);
     ctx.strokeStyle = "#000000";
     ctx.lineWidth = (lsz + 5) * gsc;
     ctx.stroke();
     ctx.strokeStyle = o.cs
    } else {
     if (o.sp > o.fsp) {
      var j = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.sp - o.ssp) / (o.msp - o.ssp)));
      ctx.save();
      ctx.lineWidth = (lsz - 2) * gsc;
      ctx.shadowBlur = 30 * gsc;
      ctx.shadowColor = "rgba(" + o.rr + "," + o.gg + "," + o.bb + ", " + Math.round(1E4 * j) / 1E4 + ")";
      ctx.stroke();
      ctx.stroke();
      ctx.restore()
     }
     ctx.globalAlpha = .4 * o.alive_amt * (1 - o.dead_amt);
     ctx.strokeStyle = "#000000";
     ctx.lineWidth = (lsz + 5) * gsc;
     ctx.stroke();
     ctx.strokeStyle = o.cs;
     ctx.lineWidth = lsz * gsc;
     ctx.strokeStyle = "#000000";
     ctx.globalAlpha = 1 * o.alive_amt * (1 - o.dead_amt);
     ctx.stroke();
     ctx.strokeStyle = o.cs
    }
    ctx.globalAlpha = .8 * o.alive_amt * (1 - o.dead_amt);
    ctx.lineWidth = lsz * gsc;
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = o.cs;
    if (o.dead) {
     var falf = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * o.dead_amt))) * Math.sin(Math.PI * o.dead_amt);
     ctx.save();
     ctx.lineJoin = "round";
     ctx.lineCap = "round";
     ctx.globalCompositeOperation =
      "lighter";
     ctx.lineWidth = (lsz - 3) * gsc;
     ctx.globalAlpha = falf;
     ctx.strokeStyle = "#FFCC99";
     ctx.stroke();
     ctx.restore()
    }
    ctx.restore()
   }
   if (render_mode == 2) {
    lsz *= .5;
    var ix1, iy1, ix2, iy2, ax1, ay1, ax2, ay2, cx2, cy2, pax1, pay1;
    var bp = 0;
    px = hx;
    py = hy;
    ax2 = px;
    ay2 = py;
    ax = px;
    ay = py;
    bp = 0;
    var drez = o.drez;
    var rezc = 0;
    if (o.sep != o.wsep)
     if (o.sep < o.wsep) {
      o.sep += .0035;
      if (o.sep >= o.wsep) o.sep = o.wsep
     } else if (o.sep > o.wsep) {
     o.sep -= .0035;
     if (o.sep <= o.wsep) o.sep = o.wsep
    }
    var opci = per_color_imgs[o.cv];
    var kmcs = opci.kmcs;
    var px, py;
    var px2, py2;
    var px3,
     py3;
    var po, po2, po3;
    var lpo;
    var ax1, ay1, ax2, ay2;
    var d, d2;
    var dx, dy;
    var d3 = 0;
    var ix1, iy2, ix2, iy2;
    var tx, ty;
    var ox, oy;
    var rx, ry;
    tx = 0;
    ty = 0;
    var j, k, l, m;
    var mv;
    var j2;
    var k2;
    var irl;
    var wk = 0;
    var wwk;
    var nkr;
    var msl = o.msl;
    var mct = 6 / (qsm * o.sep / 6);
    if (drez) mct *= 2;
    var omct = mct;
    var rmct = 1 / mct;
    var sep = msl / mct;
    var ll = 0;
    po = o.pts[o.pts.length - 1];
    px = po.xx + po.fx;
    py = po.yy + po.fy;
    d = Math.sqrt(Math.pow(hx - px, 2) + Math.pow(hy - py, 2));
    dx = (hx - px) / d;
    dy = (hy - py) / d;
    nkr = d / msl;
    var gptz = o.gptz;
    var gpt, lgpt;
    var gpt2, lgpt2;
    var gpo;
    var q =
     0;
    po3 = o.pts[o.pts.length - 2];
    po2 = o.pts[o.pts.length - 1];
    px = hx;
    py = hy;
    px2 = po2.xx + po2.fx;
    py2 = po2.yy + po2.fy;
    if (po3) {
     px3 = po3.xx + po3.fx;
     py3 = po3.yy + po3.fy
    }
    if (d > msl) {
     px = px2 + dx * msl;
     py = py2 + dy * msl
    }
    ax1 = px + (px2 - px) * .5;
    ay1 = py + (py2 - py) * .5;
    if (nkr < 1) {
     ax1 += (px - ax1) * (1 - nkr);
     ay1 += (py - ay1) * (1 - nkr)
    }
    ax2 = px3 + (px2 - px3) * .5;
    ay2 = py3 + (py2 - py3) * .5;
    d2 = Math.sqrt(Math.pow(hx - ax1, 2) + Math.pow(hy - ay1, 2));
    k = sep;
    mv = 1;
    m = mv;
    gpt = arp(o, q, hx, hy);
    q++;
    gpt.d = 0;
    lgpt = gpt;
    wk++;
    while (k < d2) {
     tx = hx - m * dx * sep;
     ty = hy - m * dy * sep;
     gpt = arp(o, q, tx, ty);
     q++;
     d = sep;
     gpt.d = d;
     lgpt = gpt;
     wk++;
     if (ll == 1) {
      ll = 2;
      break
     }
     rl -= rmct;
     if (rl <= 0) {
      ll = 1;
      mv = (rmct + rl) / rmct;
      m += mv;
      k += sep * mv
     } else {
      m++;
      k += sep
     }
    }
    irl = (k - d2) / msl;
    if (ll <= 1) {
     if (rl >= -1E-4 && rl <= 0) rl = 0;
     if (rl >= 0 || ll == 1) {
      if (nkr < 1) {
       px2 += (ax2 - px2) * .5 * (1 - nkr);
       py2 += (ay2 - py2) * .5 * (1 - nkr)
      }
      if (testing && shifty) {
       ctx.save();
       ctx.fillStyle = "#0000FF";
       ctx.translate(mww / 2 + (px2 - view_xx) * gsc, mhh / 2 + (py2 - view_yy) * gsc);
       ctx.fillRect(-2, -2, 4, 4);
       ctx.restore()
      }
      m = .5 + nkr - d2 / msl;
      while (irl >= 0 && irl < m) {
       k = irl / m;
       ix1 = ax1 + (px2 - ax1) * k;
       iy1 = ay1 + (py2 - ay1) * k;
       ix2 = px2 + (ax2 -
        px2) * k;
       iy2 = py2 + (ay2 - py2) * k;
       rx = ix1 + (ix2 - ix1) * k;
       ry = iy1 + (iy2 - iy1) * k;
       gpt = arp(o, q, rx, ry);
       q++;
       d = Math.sqrt(Math.pow(gpt.xx - lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
       gpt.d = d;
       lgpt = gpt;
       wk++;
       if (ll == 1) {
        ll = 2;
        break
       }
       rl -= rmct;
       if (rl <= 0) {
        ll = 1;
        irl += rmct + rl;
        rl = 0
       } else irl += rmct
      }
      irl -= m
     }
     if (rl >= -1E-4 && rl <= 0) rl = 0
    }
    var lj = o.pts.length;
    if (ll <= 1) {
     if (rl >= 0 || ll == 1) {
      var wsirl = false;
      var rmr = 0;
      po = o.pts[lj - 1];
      for (var j = o.pts.length - 1; j >= 2; j--) {
       lj = j;
       lpo = po;
       po3 = o.pts[j - 2];
       po2 = o.pts[j - 1];
       po = o.pts[j];
       px = po.xx + po.fx;
       py = po.yy + po.fy;
       px2 = po2.xx +
        po2.fx;
       py2 = po2.yy + po2.fy;
       px3 = po3.xx + po3.fx;
       py3 = po3.yy + po3.fy;
       ax1 = px + (px2 - px) * .5;
       ay1 = py + (py2 - py) * .5;
       ax2 = px2 + (px3 - px2) * .5;
       ay2 = py2 + (py3 - py2) * .5;
       m = po.ltn + po.fltn;
       wwk = omct * 2 + 2;
       if (po.smu != lpo.smu || po.fsmu != lpo.fsmu) {
        irl *= (lpo.smu + lpo.fsmu) / (po.smu + po.fsmu);
        mct = omct * (po.smu + po.fsmu);
        rmct = 1 / mct;
        sep = msl / mct
       }
       rl -= rmr * rmct;
       while (irl < m) {
        k = irl / m;
        ix1 = ax1 + (px2 - ax1) * k;
        iy1 = ay1 + (py2 - ay1) * k;
        ix2 = px2 + (ax2 - px2) * k;
        iy2 = py2 + (ay2 - py2) * k;
        rx = ix1 + (ix2 - ix1) * k;
        ry = iy1 + (iy2 - iy1) * k;
        gpt = arp(o, q, rx, ry);
        q++;
        if (wk <= wwk) {
         d = Math.sqrt(Math.pow(gpt.xx -
          lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
         gpt.d = d;
         lgpt = gpt;
         wk++
        }
        if (ll == 1) {
         ll = 2;
         j = -9999;
         break
        }
        rl -= rmct;
        if (rl <= 0) {
         ll = 1;
         irl += rmct + rl
        } else irl += rmct
       }
       irl -= m;
       if (testing && o == slither)
        if (irl > rmct) console.log("ahh! " + irl + "  " + rmct);
       rmr = irl / rmct;
       rl += irl;
       wsirl = true
      }
     }
     if (wsirl) rl -= irl
    }
    if (ll <= 1) {
     if (rl >= -1E-4 && rl <= 0) rl = 0;
     if (rl >= 0 || ll == 1) {
      po = o.pts[lj - 1];
      po2 = o.pts[lj - 2];
      if (po) {
       px = po.xx + po.fx;
       py = po.yy + po.fy
      }
      px2 = po2.xx + po2.fx;
      py2 = po2.yy + po2.fy;
      while (rl >= 0 || ll == 1) {
       rx = px2 - (px - px2) * (irl - .5);
       ry = py2 - (py - py2) * (irl - .5);
       gpt = arp(o,
        q, rx, ry);
       q++;
       if (wk <= wwk) {
        d = Math.sqrt(Math.pow(gpt.xx - lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
        gpt.d = d;
        lgpt = gpt;
        wk++
       }
       if (ll == 1) {
        ll = 2;
        j = -9999;
        break
       }
       rl -= rmct;
       if (rl <= 0) {
        ll = 1;
        irl += rmct + rl
       } else irl += rmct;
       if (rl >= -1E-4 && rl <= 0) rl = 0
      }
     }
    }
    k = wk - 1;
    if (k >= gptz.length) k = gptz.length;
    if (choosing_skin) k = 0;
    if (k >= 3) {
     d3 = 0;
     for (j = 0; j < k - 1; j++) {
      gpt = gptz[j];
      d3 += gpt.d
     }
     lgpt = gptz[0];
     lgpt2 = gptz[0];
     m = d3 / (k - 2);
     j = 1;
     j2 = 1;
     v = m;
     for (j = 0; j < k; j++) {
      gptz[j].ox = gptz[j].xx;
      gptz[j].oy = gptz[j].yy
     }
     for (j = 1; j < k; j++) {
      gpt = gptz[j];
      while (true) {
       gpt2 = gptz[j2];
       if (v < gpt2.d) {
        gpt.xx = lgpt2.ox + (gpt2.ox - lgpt2.ox) * v / gpt2.d;
        gpt.yy = lgpt2.oy + (gpt2.oy - lgpt2.oy) * v / gpt2.d;
        gpt.xx += (gpt.ox - gpt.xx) * Math.pow(j / k, 2);
        gpt.yy += (gpt.oy - gpt.yy) * Math.pow(j / k, 2);
        v += m;
        break
       } else {
        v -= gpt2.d;
        lgpt2 = gpt2;
        j2++;
        if (j2 >= k) {
         j = k + 1;
         break
        }
       }
      }
      lgpt = gpt
     }
    }
    var lpx, lpy;
    for (j = 0; j < q; j++) {
     px = gptz[j].xx;
     py = gptz[j].yy;
     pbx[bp] = px;
     pby[bp] = py;
     pba[bp] = 0;
     if (drez) {
      rezc--;
      if (rezc <= 0) rezc = 3
     }
     if (px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2)
      if (drez && rezc != 3) pbu[bp] = 1;
      else pbu[bp] = 2;
     if (bp >= 1) {
      tx = px - lpx;
      ty = py - lpy;
      pba[bp] =
       Math.atan2(ty, tx)
     }
     lpx = px;
     lpy = py;
     bp++
    }
    if (q >= 2) {
     pba[0] = pba[1];
     o.wehang = pba[1] + Math.PI
    } else o.wehang = o.ang;
    var dj = 4;
    if (drez) dj = 12;
    ctx.save();
    ctx.translate(mww2, mhh2);
    var olsz = gsc * lsz * 52 / 32;
    var shsz = gsc * lsz * 62 / 32;
    var a = o.alive_amt * (1 - o.dead_amt);
    a *= a;
    m = 1;
    if (o.tsp > o.fsp && !o.grad) {
     m = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.tsp - o.ssp) / (o.msp - o.ssp)));
     om = m * .37;
     mr = Math.pow(m, .5);
     var glsz = 1.5 * gsc * lsz * (1 + (62 / 32 - 1) * mr);
     var kfmc = opci.kfmc;
     ctx.save();
     ctx.globalCompositeOperation = "lighter";
     if (o.rbcs) {
      var rbcs =
       o.rbcs;
      var rbl = rbcs.length;
      var pci;
      for (j = bp - 1; j >= 0; j--)
       if (pbu[j] == 2) {
        ox = tx;
        oy = ty;
        tx = pbx[j];
        ty = pby[j];
        if (tx > ox) d2 = tx - ox;
        else d2 = ox - tx;
        if (ty > oy) d2 += ty - oy;
        else d2 += oy - ty;
        d2 /= 6;
        if (d2 > 1) d2 = 1;
        pci = per_color_imgs[rbcs[o.grad ? Math.floor(j * (rbl - 1) / Math.max(1, bp - 1)) : j % rbl]];
        kfmc = pci.kfmc;
        ctx.save();
        ctx.globalAlpha = d2 * a * mr * .38 * (.6 + .4 * Math.cos(j / dj - 1.15 * o.sfr));
        ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
        if (j < 4) {
         var tsz = glsz * (1 + (4 - j) * o.swell);
         ctx.drawImage(kfmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
        } else ctx.drawImage(kfmc, -glsz, -glsz, 2 * glsz, 2 * glsz);
        ctx.restore()
       }
     } else
      for (j =
       bp - 1; j >= 0; j--)
       if (pbu[j] == 2) {
        ox = tx;
        oy = ty;
        tx = pbx[j];
        ty = pby[j];
        if (tx > ox) d2 = tx - ox;
        else d2 = ox - tx;
        if (ty > oy) d2 += ty - oy;
        else d2 += oy - ty;
        d2 /= 6;
        if (d2 > 1) d2 = 1;
        ctx.save();
        ctx.globalAlpha = d2 * a * mr * .38 * (.6 + .4 * Math.cos(j / dj - 1.15 * o.sfr));
        ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
        if (j < 4) {
         var tsz = glsz * (1 + (4 - j) * o.swell);
         ctx.drawImage(kfmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
        } else ctx.drawImage(kfmc, -glsz, -glsz, 2 * glsz, 2 * glsz);
        ctx.restore()
       } ctx.restore();
     m = 1 - m
    }
    var am = a * m;
    if (!o.grad && (high_quality || gla > 0)) {
     var oa = am;
     if (gla != 1) oa = am * gla;
     ctx.globalAlpha =
      oa;
     for (j = bp - 1; j >= 0; j--)
      if (pbu[j] == 2) {
       ox = tx;
       oy = ty;
       tx = pbx[j];
       ty = pby[j];
       if (tx > ox) d2 = tx - ox;
       else d2 = ox - tx;
       if (ty > oy) d2 += ty - oy;
       else d2 += oy - ty;
       d2 /= 6;
       if (d2 > 1) d2 = 1;
       ctx.save();
       ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
       ctx.drawImage(komc, -olsz, -olsz, 2 * olsz, 2 * olsz);
       if (j < 9) {
        ctx.globalAlpha = d2 * a * (1 - j / 9);
        if (j < 4) {
         var tsz = shsz * (1 + (4 - j) * o.swell);
         ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
        } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
       }
       ctx.restore()
      } for (j = 1; j <= 4; j++) {
      k = bp - j;
      if (k >= 0 && k < bp)
       if (pbu[k] == 2) {
        ox = tx;
        oy = ty;
        tx = pbx[k];
        ty = pby[k];
        if (tx > ox) d2 = tx - ox;
        else d2 = ox - tx;
        if (ty > oy) d2 += ty - oy;
        else d2 += oy - ty;
        d2 /= 6;
        if (d2 > 1) d2 = 1;
        ctx.save();
        ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
        ctx.drawImage(komc, -olsz, -olsz, 2 * olsz, 2 * olsz);
        ctx.globalAlpha = d2 * a * (k / 9);
        if (k < 4) {
         var tsz = shsz * (1 + (4 - k) * o.swell);
         ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
        } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz);
        ctx.restore()
       }
     }
    }
    ctx.globalAlpha = am;
    var kl = kmcs.length;
    var kl2 = kl * 2;
    var klp = opci.klp;
    if (o.grad) drawTube(ctx, o, bp, lsz, a);
    else if (o.rbcs) {
     var rbcs = o.rbcs;
     var fdhc = o.fdhc;
     var fdtc = o.fdtc;
     var fdl = o.fdl;
     var fdam;
     var rbl = rbcs.length;
     var pci;
     for (j = bp - 1; j >= 0; j--)
      if (pbu[j] >= 1) {
       px = pbx[j];
       py = pby[j];
       if (j >= 4) {
        k = j - 4;
        if (pbu[k] == 2) {
         ox = tx;
         oy = ty;
         tx = pbx[k];
         ty = pby[k];
         ctx.save();
         ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
         if (k < 9) {
          ctx.globalAlpha = a * (k / 9);
          if (k < 4) {
           var tsz = shsz * (1 + (4 - k) * o.swell);
           ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
          } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
         } else {
          if (tx > ox) d2 = tx - ox;
          else d2 = ox - tx;
          if (ty > oy) d2 += ty - oy;
          else d2 += oy - ty;
          d2 /= 6;
          if (d2 > 1) d2 = 1;
          ctx.globalAlpha =
           a * d2;
          ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
         }
         ctx.restore()
        }
       }
       ctx.save();
       ctx.globalAlpha = a;
       ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
       if (!nsr) ctx.rotate(pba[j]);
       var k = 0;
       if (!o.cusk)
        if (klp) {
         k = j % kl2;
         if (k >= kl) k = kl2 - (k + 1)
        } else k = j % kl;
       pci = per_color_imgs[rbcs[o.grad ? Math.floor(j * (rbl - 1) / Math.max(1, bp - 1)) : j % rbl]];
       if (j < 4) {
        var tsz = lsz * (1 + (4 - j) * o.swell);
        ctx.drawImage(pci.kmcs[k], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
       } else ctx.drawImage(pci.kmcs[k], -gsc * lsz, -gsc * lsz, gsc * 2 * lsz, gsc * 2 * lsz);
       if (fdhc && j < fdl) {
        fdam = 1 - j / fdl;
        pci = per_color_imgs[fdhc];
        ctx.globalAlpha =
         a * fdam;
        var tsz = (1 + .05 * fdam) * lsz * (1 + (4 - j) * o.swell);
        ctx.drawImage(pci.kmcs[0], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
       }
       if (fdtc && j > bp - fdl) {
        fdam = 1 - (bp - j) / fdl;
        pci = per_color_imgs[fdtc];
        ctx.globalAlpha = a * fdam;
        var tsz = (1 + .05 * fdam) * lsz * (1 + (4 - j) * o.swell);
        ctx.drawImage(pci.kmcs[0], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
       }
       ctx.restore()
      } if (o.tsp > o.fsp)
      if (high_quality || gla > 0) {
       ctx.save();
       ctx.globalCompositeOperation = "lighter";
       var dj = 4;
       if (drez) dj = 12;
       var glsz = lsz * 2;
       for (j = bp - 1; j >= 0; j--)
        if (pbu[j] == 2) {
         ox = tx;
         oy = ty;
         tx = pbx[j];
         ty = pby[j];
         if (tx > ox) d2 = tx - ox;
         else d2 = ox - tx;
         if (ty > oy) d2 += ty - oy;
         else d2 += oy - ty;
         d2 /= 6;
         if (d2 > 1) d2 = 1;
         ctx.save();
         ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
         ctx.globalAlpha = d2 * a * om * gla * (.5 + .5 * Math.cos(j / dj - o.sfr));
         var k = 0;
         if (!o.cusk)
          if (klp) {
           k = j % kl2;
           if (k >= kl) k = kl2 - (k + 1)
          } else k = j % kl;
         if (j < 4) {
          var tsz = glsz * (1 + (4 - j) * o.swell);
          ctx.drawImage(per_color_imgs[rbcs[o.grad ? Math.floor(j * (rbl - 1) / Math.max(1, bp - 1)) : j % rbl]].kfmc, -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
         } else ctx.drawImage(per_color_imgs[rbcs[o.grad ? Math.floor(j * (rbl - 1) / Math.max(1, bp - 1)) : j % rbl]].kfmc, -gsc * glsz, -gsc * glsz, gsc * 2 * glsz, gsc * 2 * glsz);
         ctx.restore()
        } ctx.restore()
      }
    } else {
     for (j =
      bp - 1; j >= 0; j--)
      if (pbu[j] >= 1) {
       px = pbx[j];
       py = pby[j];
       if (j >= 4) {
        k = j - 4;
        if (pbu[k] == 2) {
         ox = tx;
         oy = ty;
         tx = pbx[k];
         ty = pby[k];
         ctx.save();
         ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
         if (k < 9) {
          ctx.globalAlpha = a * (k / 9);
          if (k < 4) {
           var tsz = shsz * (1 + (4 - k) * o.swell);
           ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
          } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
         } else {
          if (tx > ox) d2 = tx - ox;
          else d2 = ox - tx;
          if (ty > oy) d2 += ty - oy;
          else d2 += oy - ty;
          d2 /= 6;
          if (d2 > 1) d2 = 1;
          ctx.globalAlpha = a * d2;
          ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
         }
         ctx.restore()
        }
       }
       ctx.save();
       ctx.globalAlpha = a;
       ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
       if (!nsr) ctx.rotate(pba[j]);
       var k = 0;
       if (!o.cusk)
        if (klp) {
         k = j % kl2;
         if (k >= kl) k = kl2 - (k + 1)
        } else k = j % kl;
       if (j < 4) {
        var tsz = lsz * (1 + (4 - j) * o.swell);
        ctx.drawImage(kmcs[k], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
       } else ctx.drawImage(kmcs[k], -gsc * lsz, -gsc * lsz, gsc * 2 * lsz, gsc * 2 * lsz);
       ctx.restore()
      } if (o.tsp > o.fsp)
      if (high_quality || gla > 0) {
       ctx.save();
       ctx.globalCompositeOperation = "lighter";
       var dj = 4;
       if (drez) dj = 12;
       var glsz = lsz * 2;
       for (j = bp - 1; j >= 0; j--)
        if (pbu[j] == 2) {
         ox =
          tx;
         oy = ty;
         tx = pbx[j];
         ty = pby[j];
         var k = 0;
         if (!o.cusk)
          if (klp) {
           k = j % kl2;
           if (k >= kl) k = kl2 - (k + 1)
          } else k = j % kl;
         if (tx > ox) d2 = tx - ox;
         else d2 = ox - tx;
         if (ty > oy) d2 += ty - oy;
         else d2 += oy - ty;
         d2 /= 6;
         if (d2 > 1) d2 = 1;
         ctx.save();
         ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
         ctx.globalAlpha = d2 * a * om * gla * (.5 + .5 * Math.cos(j / dj - o.sfr));
         if (j < 4) {
          var tsz = glsz * (1 + (4 - j) * o.swell);
          ctx.drawImage(opci.kfmc, -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
         } else ctx.drawImage(opci.kfmc, -gsc * glsz, -gsc * glsz, gsc * 2 * glsz, gsc * 2 * glsz);
         ctx.restore()
        } ctx.restore()
      }
    }
    if (testing &&
     shifty) {
     for (j = o.pts.length - 1; j >= 0; j--) {
      var po = o.pts[j];
      px = po.xx + po.fx;
      py = po.yy + po.fy;
      ctx.save();
      if (po.dying) ctx.fillStyle = "#FF0000";
      else ctx.fillStyle = "#FF00FF";
      ctx.globalAlpha = 1 - po.da;
      ctx.translate(0 * mww / 2 + (px - view_xx) * gsc, 0 * mhh / 2 + (py - view_yy) * gsc);
      ctx.fillRect(-4, -4, 8, 8);
      ctx.restore()
     }
     for (j = o.pts.length - 1; j >= 0; j--) {
      po = o.pts[j];
      if (!po.dying) {
       px = po.xx + po.fx;
       py = po.yy + po.fy;
       ctx.fillStyle = "#FFFFFF";
       ctx.globalAlpha = 1 - po.da;
       ctx.save();
       ctx.translate(0 * mww / 2 + (px - view_xx) * gsc, 0 * mhh / 2 + (py - view_yy) * gsc);
       ctx.fillRect(-2,
        -2, 4, 4);
       ctx.restore()
      }
     }
     for (j = 0; j < bp; j++) {
      ctx.save();
      ctx.fillStyle = "#00FF00";
      ctx.translate(0 * mww / 2 + (gptz[j].xx - view_xx) * gsc, 0 * mhh / 2 + (gptz[j].yy - view_yy) * gsc);
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore()
     }
    }
    if (o.antenna) {
     tx = Math.cos(o.ang);
     ty = Math.sin(o.ang);
     ax = hx - tx * 8 * o.sc;
     ay = hy - ty * 8 * o.sc;
     if (bp >= 2 && (ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2)) {
      o.atx[0] = ax;
      o.aty[0] = ay;
      var m = o.sc * gsc;
      fj = o.atx.length - 1;
      if (choosing_skin)
       for (var j = 1; j <= fj; j++) {
        o.atvx[j] -= .3;
        o.atvy[j] += Math.cos(fr / 23 - 7 * j / fj) * .14
       } else if (!o.antenna_shown) {
        o.antenna_shown =
         true;
        for (var j = 1; j <= fj; j++) {
         o.atx[j] = ax - tx * j * 4 * o.sc;
         o.aty[j] = ay - ty * j * 4 * o.sc
        }
       } for (var j = 1; j <= fj; j++) {
       xx = o.atx[j - 1];
       yy = o.aty[j - 1];
       xx += Math.random() * 2 - 1;
       yy += Math.random() * 2 - 1;
       tx = o.atx[j] - xx;
       ty = o.aty[j] - yy;
       if (tx >= -4 && ty >= -4 && tx < 4 && ty < 4) ang = at2lt[ty * 32 + 128 << 8 | tx * 32 + 128];
       else if (tx >= -8 && ty >= -8 && tx < 8 && ty < 8) ang = at2lt[ty * 16 + 128 << 8 | tx * 16 + 128];
       else if (tx >= -16 && ty >= -16 && tx < 16 && ty < 16) ang = at2lt[ty * 8 + 128 << 8 | tx * 8 + 128];
       else if (tx >= -127 && ty >= -127 && tx < 127 && ty < 127) ang = at2lt[ty + 128 << 8 | tx + 128];
       else ang = Math.atan2(ty, tx);
       xx += Math.cos(ang) * 4 * o.sc;
       yy += Math.sin(ang) * 4 * o.sc;
       o.atvx[j] += (xx - o.atx[j]) * .1;
       o.atvy[j] += (yy - o.aty[j]) * .1;
       o.atx[j] += o.atvx[j];
       o.aty[j] += o.atvy[j];
       o.atvx[j] *= .88;
       o.atvy[j] *= .88;
       tx = o.atx[j] - o.atx[j - 1];
       ty = o.aty[j] - o.aty[j - 1];
       d = Math.sqrt(tx * tx + ty * ty);
       if (d > 4 * o.sc) {
        if (tx >= -4 && ty >= -4 && tx < 4 && ty < 4) ang = at2lt[ty * 32 + 128 << 8 | tx * 32 + 128];
        else if (tx >= -8 && ty >= -8 && tx < 8 && ty < 8) ang = at2lt[ty * 16 + 128 << 8 | tx * 16 + 128];
        else if (tx >= -16 && ty >= -16 && tx < 16 && ty < 16) ang = at2lt[ty * 8 + 128 << 8 | tx * 8 + 128];
        else if (tx >= -127 && ty >= -127 && tx < 127 && ty <
         127) ang = at2lt[ty + 128 << 8 | tx + 128];
        else ang = Math.atan2(ty, tx);
        o.atx[j] = o.atx[j - 1] + Math.cos(ang) * 4 * o.sc;
        o.aty[j] = o.aty[j - 1] + Math.sin(ang) * 4 * o.sc
       }
      }
      ctx.globalAlpha = a;
      ctx.strokeStyle = o.atc1;
      ctx.lineWidth = 5 * m;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      fj = o.atx.length - 1;
      tx = (o.atx[fj] - view_xx) * gsc;
      ty = (o.aty[fj] - view_yy) * gsc;
      ctx.moveTo(tx, ty);
      for (var j = fj - 1; j >= 1; j--) {
       xx = (o.atx[j] - view_xx) * gsc;
       yy = (o.aty[j] - view_yy) * gsc;
       if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
        tx = xx;
        ty = yy;
        ctx.lineTo(tx, ty)
       }
      }
      xx = ((o.atx[1] +
       o.atx[0]) * .5 - view_xx) * gsc;
      yy = ((o.aty[1] + o.aty[0]) * .5 - view_yy) * gsc;
      if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
       tx = xx;
       ty = yy;
       ctx.lineTo(tx, ty)
      }
      ctx.stroke();
      ctx.globalAlpha = o.atia * a;
      ctx.strokeStyle = o.atc2;
      ctx.lineWidth = 4 * m;
      ctx.beginPath();
      fj = o.atx.length - 1;
      tx = (o.atx[fj] - view_xx) * gsc;
      ty = (o.aty[fj] - view_yy) * gsc;
      ctx.moveTo(tx, ty);
      for (var j = fj - 1; j >= 0; j--) {
       xx = (o.atx[j] - view_xx) * gsc;
       yy = (o.aty[j] - view_yy) * gsc;
       if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
        tx = xx;
        ty = yy;
        ctx.lineTo(tx, ty)
       }
      }
      ctx.stroke();
      if (o.atwg) {
       ctx.lineWidth =
        3 * m;
       ctx.stroke();
       ctx.lineWidth = 2 * m;
       ctx.stroke()
      }
      ctx.globalAlpha = a * o.blba;
      if (o.abrot) {
       ctx.save();
       ctx.translate((o.atx[fj] - view_xx) * gsc, (o.aty[fj] - view_yy) * gsc);
       vang = Math.atan2(o.aty[fj] - o.aty[fj - 1], o.atx[fj] - o.atx[fj - 1]) - o.atba;
       if (vang < 0 || vang >= pi2) vang %= pi2;
       if (vang < -Math.PI) vang += pi2;
       else if (vang > Math.PI) vang -= pi2;
       o.atba = (o.atba + vang * .15) % pi2;
       ctx.rotate(o.atba);
       ctx.drawImage(o.bulb, o.blbx * o.bsc * m, o.blby * o.bsc * m, o.blbw * o.bsc * m, o.blbh * o.bsc * m);
       ctx.restore()
      } else ctx.drawImage(o.bulb, (o.atx[fj] - view_xx +
       o.blbx * o.bsc * o.sc) * gsc, (o.aty[fj] - view_yy + o.blby * o.bsc * o.sc) * gsc, o.blbw * o.bsc * m, o.blbh * o.bsc * m);
      if (o.apbs) {
       ctx.globalAlpha = .5 * a;
       ctx.lineWidth = 3 * m;
       ctx.stroke();
       ctx.lineWidth = 2 * m;
       ctx.stroke()
      }
     } else if (o.antenna_shown) o.antenna_shown = false
    }
    if (o.dead && !o.grad) {
     ctx.save();
     ctx.globalCompositeOperation = "lighter";
     var falf = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * o.dead_amt))) * Math.sin(Math.PI * o.dead_amt);
     var dsz = gsc * lsz;
     for (j = bp - 1; j >= 0; j--)
      if (pbu[j] == 2) {
       ox = tx;
       oy = ty;
       tx = pbx[j];
       ty = pby[j];
       if (tx > ox) d2 = tx - ox;
       else d2 = ox - tx;
       if (ty > oy) d2 += ty - oy;
       else d2 += oy - ty;
       d2 /= 6;
       if (d2 > 1) d2 = 1;
       px = pbx[j];
       py = pby[j];
       ctx.save();
       ctx.globalAlpha = d2 * falf * (.6 + .4 * Math.cos(j / 4 - 15 * o.dead_amt));
       ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
       if (j < 4) {
        var tsz = dsz * (1 + (4 - j) * o.swell);
        ctx.drawImage(kdmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
       } else ctx.drawImage(kdmc, -dsz, -dsz, 2 * dsz, 2 * dsz);
       ctx.restore()
      } ctx.restore()
    }
    ctx.restore()
   }
   if (o.one_eye) {
    var ed = 3 * ssc;
    var ex = Math.cos(fang) * ed;
    var ey = Math.sin(fang) * ed;
    var esz = ssc * o.ebisz;
    if (o.dead_amt == 0) ctx.globalAlpha = 1;
    else ctx.globalAlpha =
     Math.sqrt(1 - o.dead_amt);
    ctx.drawImage(o.ebi, 0, 0, o.ebiw, o.ebih, mww2 + (ex + hx - esz / 2 - view_xx) * gsc, mhh2 + (ey + hy - esz / 2 - view_yy) * gsc, esz * gsc, esz * gsc);
    var ex = Math.cos(fang) * (ed + .15) + o.rex * ssc;
    var ey = Math.sin(fang) * (ed + .15) + o.rey * ssc;
    var esz = ssc * o.episz;
    ctx.drawImage(o.epi, 0, 0, o.epiw, o.epih, mww2 + (ex + hx - esz / 2 - view_xx) * gsc, mhh2 + (ey + hy - esz / 2 - view_yy) * gsc, esz * gsc, esz * gsc)
   } else {
    if (!o.eac) drawEyes(o, ctx, fang, ssc, 1, 1);
    if (o.jyt) {
     var m = o.sc * gsc * .25;
     var ed = -3 * ssc;
     var esp = 7 * ssc;
     var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang - Math.PI / 2) * esp;
     var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang - Math.PI / 2) * esp;
     ctx.save();
     ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
     ctx.rotate(fang);
     ctx.drawImage(ecmc, -24 * m, -24 * m, 48 * m, 48 * m);
     ctx.restore();
     var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang + Math.PI / 2) * esp;
     var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang + Math.PI / 2) * esp;
     ctx.save();
     ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
     ctx.rotate(fang);
     ctx.drawImage(ecmc, -24 * m, -24 * m, 48 * m, 48 * m);
     ctx.restore();
     var ed = 5 * ssc;
     var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc;
     var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc;
     m = o.sc * gsc * .16;
     ctx.save();
     ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
     ctx.rotate(fang);
     ctx.drawImage(jmou, -40 * m, -65 * m, 79 * m, 130 * m);
     ctx.restore()
    }
   }
   ctx.globalAlpha = 1;
   if (o.slg) {
    var m = o.sc * gsc * .25;
    ctx.save();
    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang - Math.PI /
     2) * (6 * ssc + .5);
    var ty = Math.sin(fang) * 13 * ssc + Math.sin(fang - Math.PI / 2) * (6 * ssc + .5);
    ctx.translate(mww2 + (tx + hx - view_xx) * gsc, mhh2 + (ty + hy - view_yy) * gsc);
    ctx.rotate(fang - .4);
    ctx.drawImage(sest, -28 * m, -44 * m, 105 * m, 88 * m);
    ctx.restore();
    ctx.save();
    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang + Math.PI / 2) * (6 * ssc + .5);
    var ty = Math.sin(fang) * 13 * ssc + Math.sin(fang + Math.PI / 2) * (6 * ssc + .5);
    ctx.translate(mww2 + (tx + hx - view_xx) * gsc, mhh2 + (ty + hy - view_yy) * gsc);
    ctx.rotate(fang + .4);
    ctx.drawImage(sest, -28 * m, -44 * m, 105 * m, 88 * m);
    ctx.restore()
   }
  }
 }
 if (!choosing_skin)
  if (Math.abs(flux_grd - view_dist) < 4E3) {
   ctx.save();
   ctx.lineWidth = 10 * gsc;
   ctx.strokeStyle = "rgba(255, 79, 106, .75)";
   ctx.fillStyle = "#0b1018";
   ctx.globalAlpha = 1;
   for (i = 1; i <= 2; i++) {
    ctx.beginPath();
    k = flux_grd;
    if (4E3 / flux_grd > 2 * Math.PI) k = 4E3 / (2 * Math.PI);
    xx = grd + Math.cos(view_ang - 2E3 / k) * flux_grd;
    yy = grd + Math.sin(view_ang - 2E3 / k) * flux_grd;
    ctx.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
    for (j = -2E3; j <= 2E3; j += 100) {
     xx = grd + Math.cos(view_ang + j / k) * flux_grd;
     yy = grd + Math.sin(view_ang + j /
      k) * flux_grd;
     ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc)
    }
    if (i == 1)
     for (j = 2E3; j >= -2E3; j -= 100) {
      xx = grd + Math.cos(view_ang + j / k) * (flux_grd + 4E3);
      yy = grd + Math.sin(view_ang + j / k) * (flux_grd + 4E3);
      ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc)
     }
    if (i == 1) {
     ctx.closePath();
     ctx.fill()
    } else ctx.stroke()
   }
   ctx.restore()
  } if (wumsts)
  if (rank > 0)
   if (slither_count > 0)
    if (playing) {
     wumsts = false;
     var f_htm = "";
     var yl = "Length";
     var ofstr = "of";
     var rstr = "Rank";
     if (lang == "de") {
      yl = "Deine Länge";
      ofstr = "von";
      rstr = "Dein rang"
     } else if (lang == "fr") {
      yl = "Votre longueur";
      ofstr = "de";
      rstr = "Ton rang"
     } else if (lang == "pt") {
      yl = "Seu comprimento";
      ofstr = "do";
      rstr = "Seu classificação"
     } else if (lang == "es") {
      yl = "Tu longitud";
      ofstr = "de";
      rstr = "Tu rango"
     }
     var sct = slither.sct + slither.rsc;
     var score = Math.floor((fpsls[sct] + slither.fam / fmlts[sct] - 1) * 15 - 5) / 1;
     f_htm += '<div class="lbl">' + yl + '</div><div class="val">' + score + '</div><div class="rank">' + rstr + " <b>" + rank + "</b> " + ofstr + " " + slither_count + "</div>";
     lbf.innerHTML = f_htm
    } ctx.restore()
};

var pellet_px = 64;
var pellet_body = 22;
var pellet_scale = (pellet_px / 2) / pellet_body;
var pellet_cache = [];

function pelletSprite(cv) {
 if (pellet_cache[cv]) return pellet_cache[cv];
 var c = document.createElement("canvas");
 c.width = c.height = pellet_px;
 var ctx = c.getContext("2d");
 var m = pellet_px / 2;
 var rr = rrs[cv],
  gg = ggs[cv],
  bb = bbs[cv];
 var col = function(k, a) {
  var r = k >= 0 ? rr + (255 - rr) * k : rr * (1 + k);
  var g = k >= 0 ? gg + (255 - gg) * k : gg * (1 + k);
  var b = k >= 0 ? bb + (255 - bb) * k : bb * (1 + k);
  return "rgba(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + "," + a + ")"
 };
 var glow = ctx.createRadialGradient(m, m, pellet_body * .6, m, m, m);
 glow.addColorStop(0, col(0, .35));
 glow.addColorStop(1, col(0, 0));
 ctx.fillStyle = glow;
 ctx.fillRect(0, 0, pellet_px, pellet_px);
 var body = ctx.createRadialGradient(m - pellet_body * .32, m - pellet_body * .36, 0, m, m, pellet_body);
 body.addColorStop(0, col(.55, 1));
 body.addColorStop(.45, col(.12, 1));
 body.addColorStop(.85, col(0, 1));
 body.addColorStop(1, col(-.18, 1));
 ctx.fillStyle = body;
 ctx.beginPath();
 ctx.arc(m, m, pellet_body, 0, pi2);
 ctx.fill();
 pellet_cache[cv] = c;
 return c
}

function tubePath(ctx, i0, i1) {
 ctx.beginPath();
 ctx.moveTo((pbx[i0] - view_xx) * gsc, (pby[i0] - view_yy) * gsc);
 for (var i = i0 + 1; i <= i1; i++) ctx.lineTo((pbx[i] - view_xx) * gsc, (pby[i] - view_yy) * gsc)
}

function drawTube(ctx, o, bp, lsz, a) {
 if (bp < 1) return;
 var last = bp - 1;
 var r = lsz * gsc;
 var c0 = o.gc0;
 var c1 = o.gc1;
 var r0 = c0 >> 16 & 255,
  g0 = c0 >> 8 & 255,
  b0 = c0 & 255;
 var r1 = c1 >> 16 & 255,
  g1 = c1 >> 8 & 255,
  b1 = c1 & 255;
 ctx.save();
 ctx.lineCap = "round";
 ctx.lineJoin = "round";
 ctx.globalAlpha = a;
 ctx.save();
 ctx.translate(0, r * .4);
 ctx.strokeStyle = "rgba(0, 0, 0, .28)";
 ctx.lineWidth = r * 2.15;
 tubePath(ctx, 0, last);
 ctx.stroke();
 ctx.restore();
 if (o.tsp > o.fsp) {
  var bm = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.tsp - o.ssp) / (o.msp - o.ssp)));
  ctx.globalAlpha = a * bm * (.22 + .1 * Math.sin(o.sfr * 2.2));
  ctx.strokeStyle = "rgb(" + r0 + "," + g0 + "," + b0 + ")";
  ctx.lineWidth = r * 3.4;
  tubePath(ctx, 0, last);
  ctx.stroke();
  ctx.globalAlpha = a
 }
 ctx.strokeStyle = "rgba(6, 9, 15, .55)";
 ctx.lineWidth = r * 2 + Math.max(2, r * .2);
 tubePath(ctx, 0, last);
 ctx.stroke();
 ctx.lineWidth = r * 2;
 if (last == 0) {
  ctx.fillStyle = "rgb(" + r0 + "," + g0 + "," + b0 + ")";
  ctx.beginPath();
  ctx.arc((pbx[0] - view_xx) * gsc, (pby[0] - view_yy) * gsc, r, 0, pi2);
  ctx.fill()
 } else {
  var nb = Math.max(1, Math.min(56, last));
  for (var b = nb - 1; b >= 0; b--) {
   var i0 = Math.floor(b * last / nb);
   var i1 = Math.floor((b + 1) * last / nb);
   if (i1 <= i0) continue;
   var t = (i0 + i1) / 2 / last;
   ctx.strokeStyle = "rgb(" + Math.round(r0 + (r1 - r0) * t) + "," + Math.round(g0 + (g1 - g0) * t) + "," + Math.round(b0 + (b1 - b0) * t) + ")";
   tubePath(ctx, i0, i1);
   ctx.stroke()
  }
 }
 ctx.restore()
}

function drawEyes(o, ctx, fang, ssc, a, a2) {
 var ed = o.ed * ssc;
 var esp = o.esp * ssc;
 var hx = o.xx + o.fx;
 var hy = o.yy + o.fy;
 var ex = Math.cos(fang) * ed + Math.cos(fang - Math.PI / 2) * (esp + .5);
 var ey = Math.sin(fang) * ed + Math.sin(fang - Math.PI / 2) * (esp + .5);
 ctx.fillStyle = o.ec;
 if (o.eo > 0) {
  ctx.lineWidth = o.eo * gsc;
  ctx.strokeStyle = "#000000"
 }
 if (o.dead_amt == 0) ctx.globalAlpha = o.eca * a;
 else ctx.globalAlpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
 ctx.beginPath();
 ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.er * ssc * gsc, 0, pi2);
 ctx.closePath();
 if (o.eo > 0) ctx.stroke();
 ctx.fill();
 var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang - Math.PI / 2) * esp;
 var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang - Math.PI / 2) * esp;
 if (o.dead_amt == 0) ctx.globalAlpha = o.ppa * a2;
 else ctx.globalAlpha = o.ppa * Math.sqrt(1 - o.dead_amt) * a2;
 ctx.fillStyle = o.ppc;
 ctx.beginPath();
 ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.pr * ssc * gsc, 0, pi2);
 ctx.closePath();
 ctx.fill();
 var ex = Math.cos(fang) * ed + Math.cos(fang + Math.PI / 2) * (esp + .5);
 var ey = Math.sin(fang) * ed + Math.sin(fang +
  Math.PI / 2) * (esp + .5);
 ctx.fillStyle = o.ec;
 if (o.eo > 0) {
  ctx.lineWidth = o.eo * gsc;
  ctx.strokeStyle = "#000000"
 }
 if (o.dead_amt == 0) ctx.globalAlpha = o.eca * a;
 else ctx.globalAlpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
 ctx.beginPath();
 ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.er * ssc * gsc, 0, pi2);
 ctx.closePath();
 if (o.eo > 0) ctx.stroke();
 ctx.fill();
 var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang + Math.PI / 2) * esp;
 var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang + Math.PI / 2) * esp;
 if (o.dead_amt == 0) ctx.globalAlpha =
  o.ppa * a2;
 else ctx.globalAlpha = o.ppa * Math.sqrt(1 - o.dead_amt) * a2;
 ctx.fillStyle = o.ppc;
 ctx.beginPath();
 ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.pr * ssc * gsc, 0, pi2);
 ctx.closePath();
 ctx.fill()
}

function reposBskbtns() {
 if (bskbtns.length > 0)
  for (var i = bskbtns.length - 1; i >= 0; i--) {
   var o = bskbtns[i];
   var a = o.a;
   a.style.left = Math.floor(ww / 2 + o.xx) + "px";
   a.style.top = Math.floor(hh / 2 + o.yy) + "px"
  }
}
var ww = window.innerWidth;
var hh = window.innerHeight;
var lww = 0,
 lhh = 0;
var csc;

function resize() {
 ww = Math.ceil(window.innerWidth);
 hh = Math.ceil(window.innerHeight);
 if (ww != lww || hh != lhh) {
  lww = ww;
  lhh = hh;
  pskh.style.left = Math.round(ww * (ww < 640 ? .14 : .25) - 36) + "px";
  nskh.style.left = Math.round(ww * (ww < 640 ? .86 : .75) - 36) + "px";
  reposSkinStuff();
  pskh.style.top = Math.round(hh / 2 - 36) + "px";
  nskh.style.top = Math.round(hh / 2 - 36) + "px";
  var lsc = Math.min(1, (ww - 32) / 450, Math.max(.55, (hh - 330) / 300));
  logo.style.width = Math.round(450 * lsc) + "px";
  logo.style.height = Math.round(135 * lsc) + "px";
  if (lmch) {
   trfo(lmch, "0% 0%");
   trf(lmch, "scale(" + lsc + "," + lsc + ")")
  }
  reposBskbtns();
  var wdl = 1800;
  var dl = Math.sqrt(ww * ww + hh * hh);
  var nmww = Math.ceil(ww * wdl / dl);
  var nmhh = Math.ceil(hh * wdl / dl);
  if (nmww > 1500) {
   nmhh = Math.ceil(nmhh * 1500 / nmww);
   nmww = 1500
  }
  if (nmhh > 1500) {
   nmww = Math.ceil(nmww * 1500 / nmhh);
   nmhh = 1500
  }
  if (mww != nmww || mhh != nmhh) {
   mww = nmww;
   mhh = nmhh;
   mc.width = mww;
   mc.height = mhh;
   mwwp50 = mww + 50;
   mhhp50 = mhh + 50;
   mwwp150 = mww + 150;
   mhhp150 = mhh + 150;
   mww2 = mww / 2;
   mhh2 = mhh / 2;
   rdgbg()
  }
  csc = Math.min(ww / mww, hh / mhh);
  trf(mc, "scale(" + csc + "," + csc + ")");
  mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
  mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
 }
 redraw()
}
window.onresize = function() {
 resize()
};
for (var i = ois.length - 1; i >= 0; i--) ois[i].ii.src = ois[i].src;
if (wic == 0) startAnimation();
window.onmousemove = function(e) {
 e = e || window.event;
 if (e)
  if (typeof e.clientX != "undefined") {
   xm = e.clientX - ww / 2;
   ym = e.clientY - hh / 2;
   if (!follow_view)
    if (slither) {
     xm += (view_xx - slither.xx) * gsc;
     ym += (view_yy - slither.yy) * gsc
    }
  }
};

function setAcceleration(mode) {
 if (slither != null) slither.wmd = mode == 1
}
window.oncontextmenu = function(e) {
 e.preventDefault();
 e.stopPropagation();
 return false
};
window.ontouchmove = function(e) {
 dmutm = timeObj.now() + 1500;
 if (slither != null) {
  e = e || window.event;
  if (e) {
   var tchx, tchy;
   var t = e.touches[0];
   if (typeof t.clientX != "undefined") {
    xm = t.clientX - ww / 2;
    ym = t.clientY - hh / 2
   } else {
    xm = t.pageX - ww / 2;
    ym = t.pageY - hh / 2
   }
  }
 }
};
var dmutm = 0;
var ltchx = -1;
var ltchy = -1;
var ltchmtm = -1;
window.ontouchstart = function(e) {
 dmutm = timeObj.now() + 1500;
 if (slither != null) {
  e = e || window.event;
  if (e) {
   var tchx, tchy;
   var t = e.touches[0];
   if (typeof t.clientX != "undefined") {
    tchx = t.clientX - ww / 2;
    tchy = t.clientY - hh / 2
   } else {
    tchx = t.pageX - ww / 2;
    tchy = t.pageY - hh / 2
   }
   var mtm = timeObj.now();
   if (Math.abs(tchx - ltchx) < 24 && Math.abs(tchy - ltchy) < 24)
    if (mtm - ltchmtm < 400) setAcceleration(1);
   ltchx = tchx;
   ltchy = tchy;
   ltchmtm = mtm;
   xm = tchx;
   ym = tchy
  }
  e.preventDefault()
 }
};
window.onmousedown = function(e) {
 if (dmutm == 0 || timeObj.now() > dmutm) {
  dmutm = 0;
  if (slither != null) {
   window.onmousemove(e);
   setAcceleration(1);
   e.preventDefault()
  }
 }
};
window.ontouchend = function() {
 setAcceleration(0)
};

function omu(e) {
 setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var mscps = 0;
var fmlts = [];
var fpsls = [];
var lrd_mtm = timeObj.now();
var locu_mtm = 0;
var pfd;
if (testing) {
 pfd = document.createElement("div");
 pfd.style.position = "fixed";
 pfd.style.right = "4px";
 pfd.style.bottom = "209px";
 pfd.style.width = "200px";
 pfd.style.background = "rgba(0, 0, 0, .8)";
 pfd.style.color = "#80FF80";
 pfd.style.fontFamily = "Verdana";
 pfd.style.zIndex = 999999;
 pfd.style.fontSize = "11px";
 pfd.style.padding = "10px";
 pfd.style.borderRadius = "12px";
 document.body.appendChild(pfd)
}
var world_running = false;
var want_end_world = false;
var world_radius = 5600;
var bot_count = 30;
var food_target = 6000;
var prey_target = 20;
var world_cell = 300;
var world_cells = 1;
var food_grid = [];
var body_grid = [];
var body_cells_used = [];
var seg_pool = [];
var seg_count = 0;
var food_natural = 0;
var next_snake_id = 1;
var next_food_id = 1;
var next_prey_id = 1;
var bot_respawns = [];
var lb_mtm = 0;
var mm_mtm = 0;
var food_cleanup_mtm = 0;
var world_clock = 0;
var ray_px = new Float32Array(4096);
var ray_py = new Float32Array(4096);
var ray_pr = new Float32Array(4096);
var ray_n = 0;
var bot_names = ["Noodle", "Slinky", "Wiggles", "Zigzag", "Squiggle", "Ribbon", "Neon", "Comet", "Blitz", "Nova", "Bolt", "Hydra", "Jelly", "Tofu", "Mochi", "Nugget", "Pickle", "Taco", "Waffle", "Gizmo", "Turbo", "Zippy", "Goose", "Mango", "Kiwi", "Banjo", "Echo", "Orbit", "Twister", "Swirl", "Sprout", "Ziggy", "Chomp", "Muncher", "Gobbler", "Nibbles", "Snacky", "Shadow", "Ghost", "Ninja", "Rocket", "Spaghetti", "Lasso", "Mamba", "Viper", "Cobra", "Python", "Boa", "Rattler", "Adder", "Pretzel", "Bubbles", "Sparky", "Dash", "Pebble", "Marble", "Jinx", "Nacho", "Biscuit", "Pixel", "Glitch", "Meteor", "Zap", "Fizz", "Rascal", "Bandit", "Yeti", "Kraken", "Wasabi", "Sushi", "Ramen", "Udon", "Noodle Boss", "Long Boi", "Big Chungus", "Danger Noodle", "Hiss", "Sneky", "Slurp", "Wobble"];

function worldCellIndex(xx, yy) {
 var cx = Math.floor(xx / world_cell);
 var cy = Math.floor(yy / world_cell);
 if (cx < 0) cx = 0;
 else if (cx >= world_cells) cx = world_cells - 1;
 if (cy < 0) cy = 0;
 else if (cy >= world_cells) cy = world_cells - 1;
 return cy * world_cells + cx
}

function randomWorldPoint(max_rad) {
 var a = Math.random() * pi2;
 var r = Math.sqrt(Math.random()) * max_rad;
 return {
  xx: grd + Math.cos(a) * r,
  yy: grd + Math.sin(a) * r
 }
}

function snakeMassFor(sct, fam) {
 return fpsls[sct] + fam / fmlts[sct]
}

function snakeScore(o) {
 return Math.floor((snakeMassFor(o.sct, o.fam) - 1) * 15 - 5)
}

function setSnakeScale(o) {
 o.sc = Math.min(6, 1 + (o.sct - 2) / 106);
 o.scang = .13 + .87 * Math.pow((7 - o.sc) / 6, 2);
 o.ssp = nsp1 + nsp2 * o.sc;
 o.fsp = o.ssp + .1;
 o.wsep = 6 * o.sc;
 var mwsep = nsep / gsc;
 if (o.wsep < mwsep) o.wsep = mwsep
}

function newPoint() {
 var po = points_dp.get();
 if (!po) {
  po = {};
  po.fxs = new Float32Array(hfc);
  po.fys = new Float32Array(hfc);
  po.fltns = new Float32Array(hfc);
  po.fsmus = new Float32Array(hfc)
 } else
  for (var i = hfc - 1; i >= 0; i--) {
   po.fxs[i] = 0;
   po.fys[i] = 0;
   po.fltns[i] = 0;
   po.fsmus[i] = 0
  }
 po.dying = false;
 po.fpos = 0;
 po.ftg = 0;
 po.smu = 1;
 po.fsmu = 0;
 po.fx = 0;
 po.fy = 0;
 po.fltn = 0;
 po.da = 0;
 po.ltn = 1;
 return po
}

function steerSnake(o, a) {
 a %= pi2;
 if (a < 0) a += pi2;
 o.wang = a;
 var da = (a - o.ang) % pi2;
 if (da < 0) da += pi2;
 if (da > Math.PI) da -= pi2;
 if (da < 0) o.dir = 1;
 else if (da > 0) o.dir = 2;
 else o.dir = 0;
 if (o != slither) o.eang = a
}

function steerPrey(pr, a) {
 a %= pi2;
 if (a < 0) a += pi2;
 pr.wang = a;
 var da = (a - pr.ang) % pi2;
 if (da < 0) da += pi2;
 if (da > Math.PI) da -= pi2;
 if (da < 0) pr.dir = 1;
 else if (da > 0) pr.dir = 2;
 else pr.dir = 0
}

function spawnSnake(xx, yy, ang, sct, cv, nk, custom_skin) {
 var coords = [];
 var px = xx;
 var py = yy;
 var a = ang + Math.PI;
 var curl = (Math.random() < .5 ? -1 : 1) * (.05 + Math.random() * .2);
 for (var i = 0; i < sct; i++) {
  coords.push(px, py);
  a += curl + (Math.random() - .5) * .3;
  px += Math.cos(a) * default_msl;
  py += Math.sin(a) * default_msl
 }
 var pts = [];
 var lx = coords[(sct - 1) * 2];
 var ly = coords[(sct - 1) * 2 + 1];
 for (var i = sct - 1; i >= 0; i--) {
  var po = newPoint();
  po.xx = coords[i * 2];
  po.yy = coords[i * 2 + 1];
  po.ebx = po.xx - lx;
  po.eby = po.yy - ly;
  lx = po.xx;
  ly = po.yy;
  pts.push(po)
 }
 var k = 1;
 var j = 0;
 for (var i = pts.length - 1; i >= 0; i--) {
  if (j < smuc_m3) {
   k = smus[j];
   j++
  }
  pts[i].smu = k
 }
 var o = newSlither(next_snake_id++, xx, yy, cv, ang, pts, default_msl, custom_skin);
 o.nk = nk;
 o.eang = o.wang = ang;
 o.dir = 0;
 o.fam = 0;
 o.ms = fpsls[o.sct];
 setSnakeScale(o);
 o.sep = o.wsep;
 o.sp = o.ssp;
 o.spang = Math.min(1, o.sp / spangdv);
 o.bot = false;
 o.boost = false;
 o.bdrop = 0;
 snl(o);
 return o
}

function addSlitherPoint(o, xx, yy, adding_only) {
 if (adding_only) o.sct++;
 else
  for (var j = 0; j < o.pts.length; j++)
   if (!o.pts[j].dying) {
    o.pts[j].dying = true;
    break
   } var lpo = o.pts[o.pts.length - 1];
 var msl = o.msl;
 var mpo, mv, lmpo, dx, dy, ox, oy, dltn, dsmu, osmu, d, d2, d3, k, n, n2;
 var po = newPoint();
 po.xx = xx;
 po.yy = yy;
 po.ltn = Math.sqrt(Math.pow(po.xx - lpo.xx, 2) + Math.pow(po.yy - lpo.yy, 2)) / msl;
 po.ebx = po.xx - lpo.xx;
 po.eby = po.yy - lpo.yy;
 o.pts.push(po);
 if (o.iiv) {
  var hx = o.xx + o.fx;
  var hy = o.yy + o.fy;
  dx = hx - (lpo.xx + lpo.fx);
  dy = hy - (lpo.yy + lpo.fy);
  d = Math.sqrt(dx * dx + dy * dy);
  if (d > 1) {
   dx /= d;
   dy /= d
  }
  d2 = po.ltn * msl;
  if (d < msl) d3 = d;
  else d3 = d2;
  ox = lpo.xx + lpo.fx + dx * d3;
  oy = lpo.yy + lpo.fy + dy * d3;
  dltn = d2 > 0 ? 1 - d3 / d2 : 0;
  dx = po.xx - ox;
  dy = po.yy - oy;
  k = po.fpos;
  for (var j = 0; j < hfc; j++) {
   po.fxs[k] -= dx * hfas[j];
   po.fys[k] -= dy * hfas[j];
   po.fltns[k] -= dltn * hfas[j];
   k++;
   if (k >= hfc) k = 0
  }
  po.fx = po.fxs[po.fpos];
  po.fy = po.fys[po.fpos];
  po.fltn = po.fltns[po.fpos];
  po.fsmu = po.fsmus[po.fpos];
  po.ftg = hfc
 }
 n2 = 3;
 k = o.pts.length - 3;
 if (k >= 1) {
  lmpo = o.pts[k];
  n = 0;
  mv = 0;
  for (var m = k - 1; m >= 0; m--) {
   mpo = o.pts[m];
   n++;
   ox = mpo.xx;
   oy = mpo.yy;
   if (n <= 4) mv = cst * n / 4;
   mpo.xx += (lmpo.xx - mpo.xx) * mv;
   mpo.yy += (lmpo.yy - mpo.yy) * mv;
   if (mpo.smu != smus[n2]) {
    osmu = mpo.smu;
    mpo.smu = smus[n2];
    dsmu = mpo.smu - osmu
   } else dsmu = 0;
   if (n2 < smuc_m3) n2++;
   if (o.iiv) {
    dx = mpo.xx - ox;
    dy = mpo.yy - oy;
    var q = mpo.fpos;
    for (var j = 0; j < hfc; j++) {
     mpo.fxs[q] -= dx * hfas[j];
     mpo.fys[q] -= dy * hfas[j];
     mpo.fsmus[q] -= dsmu * hfas[j];
     q++;
     if (q >= hfc) q = 0
    }
    mpo.fx = mpo.fxs[mpo.fpos];
    mpo.fy = mpo.fys[mpo.fpos];
    mpo.fsmu = mpo.fsmus[mpo.fpos];
    mpo.ftg = hfc
   }
   lmpo = mpo
  }
 }
 setSnakeScale(o);
 o.chl = 0;
 o.ehl = 0
}

function shrinkSnake(o) {
 for (var j = 0; j < o.pts.length; j++)
  if (!o.pts[j].dying) {
   o.pts[j].dying = true;
   o.sct--;
   setSnakeScale(o);
   break
  }
}

function addMass(o, dm) {
 o.ms += dm;
 if (o.ms < fpsls[2]) o.ms = fpsls[2];
 if (o.ms > fpsls[mscps]) o.ms = fpsls[mscps];
 o.fam = (o.ms - fpsls[o.sct]) * fmlts[o.sct];
 while (o.fam < 0 && o.sct > 2) {
  shrinkSnake(o);
  o.fam = (o.ms - fpsls[o.sct]) * fmlts[o.sct]
 }
 snl(o)
}

function spawnFood(xx, yy, sz, cv, rapid, val, natural) {
 var fo = newFood(next_food_id++, xx, yy, sz, rapid, cv);
 fo.val = val;
 fo.natural = natural;
 fo.born_mtm = world_clock;
 fo.gi = worldCellIndex(xx, yy);
 food_grid[fo.gi].push(fo);
 if (natural) food_natural++;
 return fo
}

function unlistFood(fo) {
 var cell = food_grid[fo.gi];
 var i = cell.indexOf(fo);
 if (i >= 0) {
  cell[i] = cell[cell.length - 1];
  cell.pop()
 }
 if (fo.natural) food_natural--
}

function spawnNaturalFoodCluster() {
 var p = randomWorldPoint(world_radius - 80);
 var n = 1 + Math.floor(Math.random() * 5);
 var cv = Math.floor(Math.random() * 9);
 for (var i = 0; i < n; i++) {
  var a = Math.random() * pi2;
  var r = Math.random() * 60;
  var sz = 4 + Math.pow(Math.random(), 2) * 7;
  if (Math.random() < .4) cv = Math.floor(Math.random() * 9);
  spawnFood(p.xx + Math.cos(a) * r, p.yy + Math.sin(a) * r, sz, cv, false, sz * sz / 600, true)
 }
}

function dropFood(xx, yy, val, cv) {
 var sz = Math.sqrt(val * 600);
 if (sz < 5) sz = 5;
 if (sz > 16) sz = 16;
 var dx = xx - grd;
 var dy = yy - grd;
 var d = Math.sqrt(dx * dx + dy * dy);
 if (d > world_radius - 30) {
  xx = grd + dx * (world_radius - 30) / d;
  yy = grd + dy * (world_radius - 30) / d
 }
 spawnFood(xx, yy, sz, foodColorFor(cv), true, val, false)
}

var food_color_cache = [];

function foodColorFor(cv) {
 if (cv < 9) return cv;
 if (food_color_cache[cv] !== undefined) return food_color_cache[cv];
 var best = 0;
 var bd = 1E9;
 for (var i = 0; i < 9; i++) {
  var dr = rrs[i] - rrs[cv];
  var dg = ggs[i] - ggs[cv];
  var db = bbs[i] - bbs[cv];
  var d = dr * dr + dg * dg + db * db;
  if (d < bd) {
   bd = d;
   best = i
  }
 }
 food_color_cache[cv] = best;
 return best
}

function randomGradientSkin() {
 return grad_skin_base + Math.floor(Math.random() * grad_ramps.length)
}

function storedSkin() {
 var cv = -1;
 try {
  var mcv = localStorage.snakercv;
  if (mcv == "" + Number(mcv)) cv = Number(mcv)
 } catch (e) {}
 if (cv < grad_skin_base || cv > max_skin_cv) cv = randomGradientSkin();
 return cv
}

function killSnake(o, killer) {
 if (o.dead) return;
 var live = [];
 for (var j = 0; j < o.pts.length; j++)
  if (!o.pts[j].dying) live.push(o.pts[j]);
 live.push({
  xx: o.xx,
  yy: o.yy
 });
 var total = (o.ms - fpsls[1]) * .6;
 var n = Math.min(400, Math.max(3, Math.round(live.length * 1.6)));
 var val = total / n;
 var spread = 10 + 8 * o.sc;
 for (var i = 0; i < n; i++) {
  var t = i / n * (live.length - 1);
  var a = Math.floor(t);
  var b = Math.min(live.length - 1, a + 1);
  var f = t - a;
  var xx = live[a].xx + (live[b].xx - live[a].xx) * f + (Math.random() * 2 - 1) * spread;
  var yy = live[a].yy + (live[b].yy - live[a].yy) * f + (Math.random() * 2 - 1) * spread;
  var cv = o.rbcs ? o.rbcs[i % o.rbcs.length] : o.cv;
  dropFood(xx, yy, val, cv)
 }
 if (killer && !killer.dead) killer.kill_count++;
 o.dead = true;
 o.dead_amt = 0;
 o.edir = 0;
 delete os["s" + o.id];
 if (o == slither) {
  dead_mtm = timeObj.now();
  gameOver()
 } else if (o.bot) bot_respawns.push(world_clock + 1500 + Math.random() * 4500)
}

function rebuildBodyGrid() {
 for (var i = body_cells_used.length - 1; i >= 0; i--) body_grid[body_cells_used[i]].length = 0;
 body_cells_used.length = 0;
 seg_count = 0;
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (o.dead) continue;
  var pts = o.pts;
  var len = pts.length;
  for (var j = 0; j < len; j++) {
   var a = pts[j];
   if (a.dying) continue;
   var bx, by;
   if (j + 1 < len) {
    bx = pts[j + 1].xx;
    by = pts[j + 1].yy
   } else {
    bx = o.xx;
    by = o.yy
   }
   var sg = seg_pool[seg_count];
   if (!sg) {
    sg = {};
    seg_pool[seg_count] = sg
   }
   seg_count++;
   sg.o = o;
   sg.ax = a.xx;
   sg.ay = a.yy;
   sg.bx = bx;
   sg.by = by;
   sg.r = 14.5 * o.sc;
   var ci = worldCellIndex((a.xx + bx) / 2, (a.yy + by) / 2);
   var cell = body_grid[ci];
   if (cell.length == 0) body_cells_used.push(ci);
   cell.push(sg)
  }
 }
}

function segDist2(px, py, sg) {
 var vx = sg.bx - sg.ax;
 var vy = sg.by - sg.ay;
 var wx = px - sg.ax;
 var wy = py - sg.ay;
 var l2 = vx * vx + vy * vy;
 var t = l2 > 0 ? (wx * vx + wy * vy) / l2 : 0;
 if (t < 0) t = 0;
 else if (t > 1) t = 1;
 var dx = wx - vx * t;
 var dy = wy - vy * t;
 return dx * dx + dy * dy
}

function findCollision(o) {
 var hx = o.xx;
 var hy = o.yy;
 var cx = Math.floor(hx / world_cell);
 var cy = Math.floor(hy / world_cell);
 var hr = 7 * o.sc;
 for (var y = cy - 1; y <= cy + 1; y++) {
  if (y < 0 || y >= world_cells) continue;
  for (var x = cx - 1; x <= cx + 1; x++) {
   if (x < 0 || x >= world_cells) continue;
   var cell = body_grid[y * world_cells + x];
   for (var i = cell.length - 1; i >= 0; i--) {
    var sg = cell[i];
    if (sg.o == o || sg.o.dead) continue;
    var rr = sg.r + hr;
    if (segDist2(hx, hy, sg) < rr * rr) return sg.o
   }
  }
 }
 return null
}

function gatherRayPoints(o, hx, hy, rad) {
 ray_n = 0;
 var c1x = Math.max(0, Math.floor((hx - rad) / world_cell));
 var c2x = Math.min(world_cells - 1, Math.floor((hx + rad) / world_cell));
 var c1y = Math.max(0, Math.floor((hy - rad) / world_cell));
 var c2y = Math.min(world_cells - 1, Math.floor((hy + rad) / world_cell));
 for (var y = c1y; y <= c2y; y++)
  for (var x = c1x; x <= c2x; x++) {
   var cell = body_grid[y * world_cells + x];
   for (var i = cell.length - 1; i >= 0; i--) {
    var sg = cell[i];
    if (sg.o == o) continue;
    if (ray_n + 2 >= ray_px.length) return;
    ray_px[ray_n] = sg.ax;
    ray_py[ray_n] = sg.ay;
    ray_pr[ray_n] = sg.r;
    ray_n++;
    ray_px[ray_n] = (sg.ax + sg.bx) / 2;
    ray_py[ray_n] = (sg.ay + sg.by) / 2;
    ray_pr[ray_n] = sg.r;
    ray_n++
   }
  }
}

function rayDanger(hx, hy, a, look, clear) {
 var ca = Math.cos(a);
 var sa = Math.sin(a);
 var hit = look;
 for (var i = 0; i < ray_n; i++) {
  var dx = ray_px[i] - hx;
  var dy = ray_py[i] - hy;
  var r = ray_pr[i] + clear;
  var t = dx * ca + dy * sa;
  if (t < -r || t > hit + r) continue;
  var perp = dy * ca - dx * sa;
  if (perp < 0) perp = -perp;
  if (perp < r) {
   var tt = t - Math.sqrt(r * r - perp * perp);
   if (tt < 0) tt = 0;
   if (tt < hit) hit = tt
  }
 }
 var R = world_radius - 50;
 var ox = hx - grd;
 var oy = hy - grd;
 var b = ox * ca + oy * sa;
 var c = ox * ox + oy * oy - R * R;
 var disc = b * b - c;
 if (disc > 0) {
  var tb = -b + Math.sqrt(disc);
  if (tb < 0) tb = 0;
  if (tb < hit) hit = tb
 } else hit = 0;
 if (hit >= look) return 0;
 return 1 - hit / look
}

function findFoodFor(o) {
 var hx = o.xx;
 var hy = o.yy;
 var ca = Math.cos(o.ang);
 var sa = Math.sin(o.ang);
 var cx = Math.floor(hx / world_cell);
 var cy = Math.floor(hy / world_cell);
 var best = null;
 var bs = 0;
 for (var y = cy - 1; y <= cy + 1; y++) {
  if (y < 0 || y >= world_cells) continue;
  for (var x = cx - 1; x <= cx + 1; x++) {
   if (x < 0 || x >= world_cells) continue;
   var cell = food_grid[y * world_cells + x];
   for (var i = cell.length - 1; i >= 0; i--) {
    var fo = cell[i];
    var dx = fo.xx - hx;
    var dy = fo.yy - hy;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d > 460) continue;
    var front = (dx * ca + dy * sa) / (d + 1);
    var s = fo.val / (d + 50) * (1.5 + .7 * front);
    if (s > bs) {
     bs = s;
     best = fo
    }
   }
  }
 }
 return best
}

function botThink(o) {
 var hx = o.xx;
 var hy = o.yy;
 var look = 190 + 110 * o.sc;
 if (o.boost) look += 140;
 var clear = 14.5 * o.sc + 12;
 gatherRayPoints(o, hx, hy, look + 90);
 var goal = o.ang;
 var goal_w = .3;
 o.boost = false;
 var target = null;
 var td = 700;
 if (Math.random() < o.aggr) {
  for (var i = slithers.length - 1; i >= 0; i--) {
   var s = slithers[i];
   if (s == o || s.dead) continue;
   if (s.sct > o.sct * 1.3 + 4) continue;
   var dx = s.xx - hx;
   var dy = s.yy - hy;
   var d = Math.sqrt(dx * dx + dy * dy);
   if (d < td) {
    td = d;
    target = s
   }
  }
 }
 if (target) {
  var lead = 70 + target.sp * 22;
  var tx = target.xx + Math.cos(target.ang) * lead;
  var ty = target.yy + Math.sin(target.ang) * lead;
  goal = Math.atan2(ty - hy, tx - hx);
  goal_w = 1.3;
  if (td < 380 && o.sct > 10 && Math.random() < o.aggr) o.boost = true
 } else {
  var fo = findFoodFor(o);
  if (fo) {
   goal = Math.atan2(fo.yy - hy, fo.xx - hx);
   goal_w = 1.1;
   if (fo.val > .25 && o.sct > 14 && Math.random() < .25 * o.aggr) o.boost = true
  } else {
   var wdx = o.wx - hx;
   var wdy = o.wy - hy;
   if (wdx * wdx + wdy * wdy < 250 * 250 || world_clock > o.wt) {
    var p = randomWorldPoint(world_radius * .8);
    o.wx = p.xx;
    o.wy = p.yy;
    o.wt = world_clock + 8E3 + Math.random() * 12E3;
    wdx = o.wx - hx;
    wdy = o.wy - hy
   }
   goal = Math.atan2(wdy, wdx);
   goal_w = .7
  }
 }
 var best_s = -1E9;
 var best_a = goal;
 var cand = 24;
 for (var k = 0; k <= cand; k++) {
  var a = k == cand ? goal : o.ang + (k / cand * 2 - 1) * Math.PI;
  var dg = rayDanger(hx, hy, a, look, clear);
  var da = a - goal;
  var dc = a - o.ang;
  var s = -dg * 9 + Math.cos(da) * goal_w + Math.cos(dc) * .45;
  if (s > best_s) {
   best_s = s;
   best_a = a
  }
 }
 var cur = rayDanger(hx, hy, o.ang, look * .7, clear);
 if (cur > .5 && o.sct > 8 && Math.random() < .35 + .4 * o.aggr) o.boost = true;
 steerSnake(o, best_a)
}

function spawnBot(sct, avoid_player) {
 for (var tries = 0; tries < 30; tries++) {
  var p = randomWorldPoint(world_radius - 400);
  if (avoid_player && slither && !slither.dead) {
   var dx = p.xx - slither.xx;
   var dy = p.yy - slither.yy;
   if (dx * dx + dy * dy < 1600 * 1600) continue
  }
  var ok = true;
  for (var i = slithers.length - 1; i >= 0 && ok; i--) {
   var s = slithers[i];
   if (s.dead) continue;
   var dx = p.xx - s.xx;
   var dy = p.yy - s.yy;
   if (dx * dx + dy * dy < 500 * 500) ok = false
  }
  if (!ok && tries < 29) continue;
  var ang = Math.atan2(grd - p.yy, grd - p.xx) + (Math.random() - .5) * 2;
  var cv = randomGradientSkin();
  var nk = pickBotName();
  var o = spawnSnake(p.xx, p.yy, ang, sct, cv, nk, null);
  o.bot = true;
  o.aggr = Math.random() * Math.random();
  o.ai_t = Math.random() * 100;
  o.wx = p.xx;
  o.wy = p.yy;
  o.wt = 0;
  addMass(o, Math.random() * .9 * (fpsls[sct + 1] - fpsls[sct]));
  return o
 }
 return null
}

function pickBotName() {
 var used = {};
 for (var i = slithers.length - 1; i >= 0; i--)
  if (!slithers[i].dead) used[slithers[i].nk] = true;
 var free = [];
 for (var i = 0; i < bot_names.length; i++)
  if (!used[bot_names[i]]) free.push(bot_names[i]);
 if (free.length == 0) return bot_names[Math.floor(Math.random() * bot_names.length)];
 return free[Math.floor(Math.random() * free.length)]
}

function randomBotLength() {
 var r = Math.random();
 if (r < .55) return 2 + Math.floor(Math.random() * 10);
 if (r < .87) return 12 + Math.floor(Math.random() * 28);
 return 40 + Math.floor(Math.random() * 45)
}

function spawnPrey() {
 var p = randomWorldPoint(world_radius - 200);
 var ang = Math.random() * pi2;
 var sz = 5 + Math.random() * 4;
 var pr = newPrey(next_prey_id++, p.xx, p.yy, sz, Math.floor(Math.random() * 9), 0, ang, ang, 2.6 + Math.random() * 1.6);
 pr.nt = 0;
 pr.life = 4E4 + Math.random() * 5E4;
 pr.val = sz * sz / 220;
 return pr
}

function stepPreys(ms) {
 for (var i = preys.length - 1; i >= 0; i--) {
  var pr = preys[i];
  if (pr.eaten) continue;
  pr.life -= ms;
  if (pr.life <= 0) {
   preys.splice(i, 1);
   continue
  }
  pr.nt -= ms;
  var flee = null;
  var fd = 260 * 260;
  for (var j = slithers.length - 1; j >= 0; j--) {
   var o = slithers[j];
   if (o.dead) continue;
   var dx = pr.xx - o.xx;
   var dy = pr.yy - o.yy;
   var d2 = dx * dx + dy * dy;
   var er = 26 + 14 * o.sc + pr.sz;
   if (d2 < er * er) {
    pr.eaten = true;
    pr.eaten_by = o;
    pr.eaten_fr = 0;
    addMass(o, pr.val);
    flee = null;
    break
   }
   if (d2 < fd) {
    fd = d2;
    flee = o
   }
  }
  if (pr.eaten) continue;
  var dcx = pr.xx - grd;
  var dcy = pr.yy - grd;
  if (dcx * dcx + dcy * dcy > Math.pow(world_radius * .9, 2)) {
   if (pr.nt <= 0) {
    steerPrey(pr, Math.atan2(-dcy, -dcx));
    pr.nt = 600
   }
  } else if (flee) {
   if (pr.nt <= 0) {
    steerPrey(pr, Math.atan2(pr.yy - flee.yy, pr.xx - flee.xx) + (Math.random() - .5) * .8);
    pr.nt = 250
   }
  } else if (pr.nt <= 0) {
   steerPrey(pr, pr.wang + (Math.random() - .5) * 2.4);
   pr.nt = 500 + Math.random() * 1500
  }
 }
 if (preys.length < prey_target && Math.random() < .02) spawnPrey()
}

function eatFoodNear(o) {
 var ca = Math.cos(o.ang);
 var sa = Math.sin(o.ang);
 var ex = o.xx + ca * 8 * o.sc;
 var ey = o.yy + sa * 8 * o.sc;
 var er = 22 + 12 * o.sc;
 var cx = Math.floor(ex / world_cell);
 var cy = Math.floor(ey / world_cell);
 for (var y = cy - 1; y <= cy + 1; y++) {
  if (y < 0 || y >= world_cells) continue;
  for (var x = cx - 1; x <= cx + 1; x++) {
   if (x < 0 || x >= world_cells) continue;
   var cell = food_grid[y * world_cells + x];
   for (var i = cell.length - 1; i >= 0; i--) {
    var fo = cell[i];
    var dx = fo.xx - ex;
    var dy = fo.yy - ey;
    var r = er + fo.sz * .6;
    if (dx * dx + dy * dy < r * r) {
     cell[i] = cell[cell.length - 1];
     cell.pop();
     if (fo.natural) food_natural--;
     fo.eaten = true;
     fo.eaten_by = o;
     fo.eaten_fr = 0;
     addMass(o, fo.val)
    }
   }
  }
 }
}

function updateLeaderboard() {
 var list = [];
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (!o.dead) list.push(o)
 }
 for (var i = list.length - 1; i >= 0; i--) list[i].lbs = snakeScore(list[i]);
 list.sort(function(a, b) {
  return b.lbs - a.lbs
 });
 slither_count = list.length;
 if (slither_count > biggest_slither_count) biggest_slither_count = slither_count;
 if (slither && !slither.dead) {
  rank = list.indexOf(slither) + 1;
  if (rank < best_rank) best_rank = rank
 }
 if (lb_fr == -1)
  if (dead_mtm == -1 && playing) lb_fr = 0;
 if (!playing) return;
 var htm = "";
 var n = Math.min(10, list.length);
 for (var i = 0; i < list.length; i++) {
  var o = list[i];
  var me = o == slither;
  if (i >= n && !me) continue;
  if (i >= n) htm += '<li class="gap" aria-hidden="true"></li>';
  htm += leaderboardRow(o, i + 1, me);
  if (i >= n) break
 }
 lbn.innerHTML = htm;
 wumsts = true
}

function leaderboardRow(o, pos, me) {
 var nk = me ? my_nick : o.nk;
 if (!gdnm(nk)) nk = "";
 if (nk.length == 0) nk = me ? "You" : "Unnamed";
 nk = nk.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
 return '<li class="' + (me ? "me" : "") + '"><span class="pos">' + pos + '</span><span class="nm">' + nk + '</span><span class="sc">' + snakeScore(o) + "</span></li>"
}

function updateMinimap() {
 if (mmgad) {
  var ctx = asmc.getContext("2d");
  ctx.clearRect(0, 0, mmsz, mmsz);
  ctx.drawImage(asmc2, 0, 0)
 }
 mmbfr = 0;
 asmc.style.opacity = mmsta;
 asmc2.style.opacity = 0;
 var ctx = asmc2.getContext("2d");
 ctx.clearRect(0, 0, mmsz, mmsz);
 ctx.fillStyle = "#8e9ab4";
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (o.dead || o == slither) continue;
  var step = Math.max(1, Math.floor(o.pts.length / 12));
  for (var j = o.pts.length - 1; j >= 0; j -= step) {
   var po = o.pts[j];
   var px = Math.floor(mmrad + mmrad * (po.xx - grd) / flux_grd);
   var py = Math.floor(mmrad + mmrad * (po.yy - grd) / flux_grd);
   ctx.fillRect(px, py, 1, 1)
  }
 }
 if (!mmgad) {
  mmgad = true;
  var ctx = asmc.getContext("2d");
  ctx.clearRect(0, 0, mmsz, mmsz);
  ctx.drawImage(asmc2, 0, 0)
 }
}

function stepWorld(vfr) {
 var ms = vfr * 8;
 world_clock += ms;
 rebuildBodyGrid();
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (o.dead) continue;
  if (o.bot) {
   o.ai_t -= ms;
   if (o.ai_t <= 0) {
    o.ai_t = 50 + Math.random() * 60;
    botThink(o)
   }
  }
  var want_boost = o == slither ? o.md : o.boost;
  var boosting = want_boost && o.ms > fpsls[3];
  o.sp = boosting ? nsp3 : o.ssp;
  o.spang = Math.min(1, o.sp / spangdv);
  if (boosting) {
   var loss = (2.5 + snakeScore(o) * .01) / 15 * ms / 1E3;
   addMass(o, -loss);
   o.bdrop += loss;
   if (o.bdrop > .06) {
    for (var j = 0; j < o.pts.length; j++)
     if (!o.pts[j].dying) {
      var tp = o.pts[j];
      dropFood(tp.xx + (Math.random() * 2 - 1) * 8, tp.yy + (Math.random() * 2 - 1) * 8, o.bdrop * .7, o.cv);
      break
     } o.bdrop = 0
   }
  }
  if (o.chl >= 1) addSlitherPoint(o, o.xx, o.yy, o.fam >= 1 && o.sct < mscps);
  eatFoodNear(o)
 }
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (o.dead) continue;
  var dx = o.xx - grd;
  var dy = o.yy - grd;
  if (dx * dx + dy * dy > world_radius * world_radius) {
   killSnake(o, null);
   continue
  }
  var killer = findCollision(o);
  if (killer) killSnake(o, killer)
 }
 stepPreys(ms);
 var spawn_budget = 4;
 while (food_natural < food_target && spawn_budget-- > 0) spawnNaturalFoodCluster();
 if (world_clock > food_cleanup_mtm) {
  food_cleanup_mtm = world_clock + 2E3;
  for (var i = foods_c - 1; i >= 0; i--) {
   var fo = foods[i];
   if (!fo.eaten && !fo.natural && world_clock - fo.born_mtm > 9E4) {
    unlistFood(fo);
    fo.eaten = true;
    fo.eaten_by = null
   }
  }
 }
 for (var i = bot_respawns.length - 1; i >= 0; i--)
  if (world_clock > bot_respawns[i]) {
   bot_respawns.splice(i, 1);
   spawnBot(randomBotLength() > 40 ? 2 + Math.floor(Math.random() * 20) : randomBotLength(), true)
  } if (world_clock > lb_mtm) {
  lb_mtm = world_clock + 1E3;
  updateLeaderboard()
 }
 if (world_clock > mm_mtm) {
  mm_mtm = world_clock + 1E3;
  updateMinimap()
 }
}

var demo_follow = null;

function initWorld() {
 resetGame();
 grd = world_radius + 400;
 flux_grd = world_radius;
 cst = .43;
 setMscps(411);
 recalcSepMults();
 world_cells = Math.ceil(2 * grd / world_cell);
 food_grid = [];
 body_grid = [];
 body_cells_used = [];
 for (var i = 0; i < world_cells * world_cells; i++) {
  food_grid.push([]);
  body_grid.push([])
 }
 food_natural = 0;
 bot_respawns = [];
 world_clock = 0;
 lb_mtm = 0;
 mm_mtm = 0;
 food_cleanup_mtm = 0;
 while (food_natural < food_target) spawnNaturalFoodCluster();
 for (var i = 0; i < prey_target; i++) spawnPrey();
 for (var i = 0; i < bot_count; i++) spawnBot(randomBotLength(), false);
 world_running = true;
 var p = randomWorldPoint(world_radius * .5);
 view_xx = p.xx;
 view_yy = p.yy;
 demo_follow = pickDemoFollow(view_xx, view_yy)
}

function startDemo() {
 initWorld();
 gsc = .9;
 mc.style.opacity = 1;
 mc.style.display = "inline";
 bgi2.width = bgw2;
 bgi2.height = bgh2;
 bgi2.getContext("2d").drawImage(bg_hex, 0, 0);
 bgp2 = bgi2.getContext("2d").createPattern(bgi2, "repeat");
 resize()
}

function pickDemoFollow(xx, yy) {
 var best = null;
 var bs = -1E9;
 for (var i = slithers.length - 1; i >= 0; i--) {
  var o = slithers[i];
  if (o.dead || o == slither) continue;
  var dx = o.xx - xx;
  var dy = o.yy - yy;
  var s = Math.min(o.sct, 40) * 40 - Math.sqrt(dx * dx + dy * dy);
  if (s > bs) {
   bs = s;
   best = o
  }
 }
 return best
}

function findSpawnPoint(xx, yy) {
 for (var tries = 0; tries < 40; tries++) {
  var a = Math.random() * pi2;
  var r = tries < 25 ? 250 + Math.random() * 700 : Math.random() * world_radius * .7;
  var px = tries < 25 ? xx + Math.cos(a) * r : grd + Math.cos(a) * r;
  var py = tries < 25 ? yy + Math.sin(a) * r : grd + Math.sin(a) * r;
  var dcx = px - grd;
  var dcy = py - grd;
  if (dcx * dcx + dcy * dcy > Math.pow(world_radius - 500, 2)) continue;
  var ok = true;
  for (var i = slithers.length - 1; i >= 0 && ok; i--) {
   var o = slithers[i];
   if (o.dead) continue;
   for (var j = o.pts.length - 1; j >= 0; j -= 2) {
    var dx = o.pts[j].xx - px;
    var dy = o.pts[j].yy - py;
    if (dx * dx + dy * dy < 320 * 320) {
     ok = false;
     break
    }
   }
  }
  if (ok) return {
   xx: px,
   yy: py
  }
 }
 return randomWorldPoint(world_radius * .6)
}

function startGame() {
 want_play = false;
 if (!world_running) initWorld();
 rank = 0;
 best_rank = 999999999;
 for (j = vfc - 1; j >= 0; j--) {
  fvxs[j] = 0;
  fvys[j] = 0
 }
 fvtg = 0;
 fvx = 0;
 fvy = 0;
 mmal = 0;
 mmgad = false;
 asmc.getContext("2d").clearRect(0, 0, mmsz, mmsz);
 asmc2.getContext("2d").clearRect(0, 0, mmsz, mmsz);
 var s = asciize(nick.value);
 if (s.length > 24) s = s.substr(0, 24);
 my_nick = s;
 var cv = storedSkin();
 var ca = null;
 var p = findSpawnPoint(view_xx, view_yy);
 var ang = Math.atan2(grd - p.yy, grd - p.xx) + (Math.random() - .5) * 1.5;
 slither = spawnSnake(p.xx, p.yy, ang, 2, cv, my_nick, ca);
 slither.md = false;
 slither.wmd = false;
 lsxm = xm;
 lsym = ym;
 demo_follow = null;
 playing = true;
 mmsta = .475;
 setMinimapSize(80, true);
 lbh.style.display = "block";
 lbf.style.display = "block";
 loch.style.display = "block";
 high_quality = true;
 gla = 1;
 wdfg = 0;
 qsm = 1;
 if (want_quality == 0) {
  high_quality = false;
  gla = 0;
  qsm = 1.7
 }
 if (render_mode == 1) {
  high_quality = false;
  gla = 0
 }
 lb_mtm = 0;
 updateLeaderboard();
 startShowGame()
}

function endRound() {
 want_end_world = false;
 playing = false;
 if (slither) demo_follow = pickDemoFollow(slither.xx, slither.yy);
 slither = null;
 lbh.style.display = "none";
 lbf.style.display = "none";
 loch.style.display = "none"
}

function resetGame() {
 want_end_world = false;
 world_running = false;
 for (var i = slithers.length - 1; i >= 0; i--) destroySlitherAtIndex(i);
 slithers = [];
 slither = null;
 foods = [];
 foods_c = 0;
 preys = [];
 os = {};
 food_grid = [];
 body_grid = [];
 body_cells_used = [];
 bot_respawns = [];
 rank = 0;
 best_rank = 999999999;
 slither_count = 0;
 biggest_slither_count = 0;
 playing = false;
 for (j = vfc - 1; j >= 0; j--) {
  fvxs[j] = 0;
  fvys[j] = 0
 }
 fvtg = 0;
 fvx = 0;
 fvy = 0;
 mmal = 0;
 mmgad = false;
 var ctx = asmc.getContext("2d");
 ctx.clearRect(0, 0, mmsz, mmsz);
 var ctx = asmc2.getContext("2d");
 ctx.clearRect(0, 0, mmsz, mmsz);
 gsc = sgsc;
 for (var i = bgees.length - 1; i >= 0; i--) bgees[i].sc = gsc * bgees[i].sp
}

function gameOver() {
 if (playing && !want_end_world) {
  play_btn.setEnabled(true);
  var sct = slither.sct + slither.rsc;
  var final_score = Math.floor((fpsls[sct] + slither.fam / fmlts[sct] - 1) * 15 - 5) / 1;
  var fstr = "Your final length was";
  if (lang == "de") fstr = "Deine endgültige Länge war";
  else if (lang == "fr") fstr = "Votre longueur finale était de";
  else if (lang == "pt") fstr = "Seu comprimento final foi de";
  var exc = "";
  if (final_score > 1E3) exc = "!";
  var s = '<span style="opacity: .45;">' + fstr + " </span><b>" +
   final_score + "</b>" + exc;
  lastscore.innerHTML = s;
  var pstr = "Play Again";
  if (lang == "fr") pstr = "Jouer";
  else if (lang == "pt") pstr = "Joga";
  play_btn.setText(pstr);
  want_end_world = true
 }
}

function asciize(s) {
 var i, l, v;
 l = s.length;
 var need_fix = false;
 for (i = 0; i < l; i++) {
  v = s.charCodeAt(i);
  if (v < 32 || v > 127) {
   need_fix = true;
   break
  }
 }
 if (need_fix) {
  var fs = "";
  for (i = 0; i < l; i++) {
   v = s.charCodeAt(i);
   if (v < 32 || v > 127) fs += " ";
   else fs += String.fromCharCode(v)
  }
  return fs
 }
 return s
}
var smh = document.getElementById("smh");
var csk = document.getElementById("csk");
var cskh = document.getElementById("cskh");
var bsk = document.getElementById("bsk");
var bskh = document.getElementById("bskh");
var want_quality = 1;
var grqi = document.getElementById("grqi");
try {
 if (localStorage.qual == "0") want_quality = 0
} catch (e) {}

function showQuality() {
 grqi.textContent = want_quality == 1 ? "High quality" : "Low quality";
 grq.setAttribute("aria-pressed", want_quality == 1 ? "true" : "false")
}
showQuality();
grq.onclick = function() {
 want_quality = want_quality == 1 ? 0 : 1;
 try {
  localStorage.qual = "" + want_quality
 } catch (e) {}
 showQuality();
 return false
};
cskh.style.display = "inline";
var psk = document.getElementById("psk");
var pskh = document.getElementById("pskh");
var nsk = document.getElementById("nsk");
var nskh = document.getElementById("nskh");
var choosing_skin = false;
var building_skin = false;
var ending_build_skin = false;
var bdska = 0;
var bskoy = 0;
var skoboym = 0;
var build_segments = [];
var bskbtns = [];
psk.onclick = function() {
 if (building_skin) return false;
 if (playing)
  if (slither != null) {
   var cv = slither.rcv - 1;
   if (cv < grad_skin_base) cv = max_skin_cv;
   setSkin(slither, cv, null);
   try {
    localStorage.want_custom_skin = "0"
   } catch (e) {}
  } return false
};
nsk.onclick = function() {
 if (building_skin) return false;
 if (playing)
  if (slither != null) {
   var cv = slither.rcv + 1;
   if (cv > max_skin_cv || cv < grad_skin_base) cv = grad_skin_base;
   setSkin(slither, cv, null);
   try {
    localStorage.want_custom_skin = "0"
   } catch (e) {}
  } return false
};

function reposSkinStuff() {
 skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
 if (building_skin) skodiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px";
 else skodiv.style.top = Math.round(hh / 2 + 120) + "px";
 revdiv.style.left = Math.round(ww / 2 - revdiv.offsetWidth / 2 - skodiv.offsetWidth - 62) + "px";
 revdiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px"
}
csk.onclick = function() {
 if (!playing)
  if (dead_mtm == -1) {
   resetGame();
   cst = 0;
   recalcSepMults();
   choosing_skin = true;
   pskh.style.opacity = 0;
   nskh.style.opacity = 0;
   bskh.style.opacity = 0;
   skodiv.style.opacity = 0;
   revdiv.style.opacity = 0;
   pskh.style.display = "inline";
   nskh.style.display = "inline";
   skodiv.style.display = "inline";
   revdiv.style.display = "none";
   reposSkinStuff();
   nick.disabled = true;
   if (mscps == 0) setMscps(300);
   var pts = [];
   for (var i = 27; i >=
    1; i--) {
    var xx = grd / 2 - i * 10;
    var yy = grd / 2;
    var po = {
     xx: xx,
     yy: yy,
     fx: 0,
     fy: 0,
     fltn: 0,
     da: 0,
     ltn: 1
    };
    po.fxs = new Float32Array(hfc);
    po.fys = new Float32Array(hfc);
    po.fltns = new Float32Array(hfc);
    po.fsmus = new Float32Array(hfc);
    po.fpos = 0;
    po.ftg = 0;
    po.smu = 1;
    po.fsmu = 0;
    po.da = 0;
    po.ebx = 10;
    po.eby = 0;
    pts.push(po)
   }
   var cv = storedSkin();
   var aa = null;
   var o = newSlither(1, grd / 2, grd / 2, cv, 0, pts, default_msl, aa);
   view_xx = grd / 2 - (22 / 2 - .5) * 10;
   view_yy = grd / 2;
   slither = o;
   o.nk = "";
   o.eang = o.wang = o.ang;
   o.sp = 4.8;
   o.spang = o.sp / spangdv;
   if (o.spang > 1) o.spang = 1;
   o.sc = 1;
   o.scang = 1;
   o.ssp = nsp1 + nsp2 * o.sc;
   o.fsp = o.ssp + .1;
   o.wsep = 6 * o.sc;
   var mwsep = nsep / gsc;
   if (o.wsep < mwsep) o.wsep =
    mwsep;
   o.sep = o.wsep;
   o.sep = o.wsep = 18.25;
   snl(o);
   o.alive_amt = 1;
   o.rex = 1.66;
   playing = true;
   high_quality = true;
   gla = 1;
   wdfg = 0;
   qsm = 1;
   startShowGame();
   lbh.style.display = "none";
   lbf.style.display = "none";
   loch.style.display = "none"
  } return false
};
bsk.onclick = function() {
 if (playing)
  if (choosing_skin)
   if (!building_skin) {
    var i, j, k;
    var o;
    var fj = 0;
    var tj = 0;
    build_segments = [];
    alcsc = falcsc;
    var taa = "";
    try {
     localStorage.want_custom_skin = "1";
     taa = localStorage.custom_skin
    } catch (e) {}
    if (taa)
     if (taa.length > 0) {
      taa = ("" + taa).split(",");
      var ct = 0;
      var cc = -1;
      var on_ct = true;
      for (var i = 8; i < taa.length; i++) {
       if (on_ct) ct = Number(taa[i]);
       else {
        cc = Number(taa[i]);
        for (var j = 0; j < ct; j++) build_segments.push(cc)
       }
       on_ct = !on_ct
      }
     } setSkin(slither, 0, getBuildSkinData(true));
    building_skin = true;
    ending_build_skin = false;
    var rc = 4;
    var sks2 = [];
    var rls = [];
    for (i = 0; i < rc; i++) {
     k = 0;
     tj = Math.floor(csks.length * (i + 1) / rc);
     for (j = fj; j < tj; j++) k++;
     rls.push(k);
     fj = tj
    }
    rls[0]--;
    rls[1]--;
    rls[2]++;
    rls[3]++;
    var tsks = [];
    fj = 0;
    for (i = 0; i < rc; i++) {
     tsks = [];
     sks2.push(tsks);
     for (j = 0; j < rls[i]; j++) {
      tsks.push(csks[fj]);
      fj++
     }
    }
    for (k = 0; k < sks2.length; k++) {
     tsks = sks2[k];
     for (i = 0; i < tsks.length; i++) {
      j = tsks[i];
      if (j >= 0 && j < rrs.length) {
       o = {};
       var pci = per_color_imgs[j];
       var kmc = pci.kmcs[0];
       var ii = document.createElement("canvas");
       o.ii = ii;
       ii.width = kmc.width;
       ii.height = kmc.height;
       var ctx = ii.getContext("2d");
       ctx.rotate(Math.PI);
       ctx.drawImage(kmc, -kmc.width, -kmc.height);
       ii.style.opacity = 0;
       ii.style.position = "absolute";
       ii.style.left = "0px";
       ii.style.top = "0px";
       ii.draggable = false;
       o.xx = Math.floor(tsks.length * 55 * (i - (tsks.length - 1) / 2) / tsks.length);
       o.yy = Math.floor(-32 - k * 62);
       var a = document.createElement("a");
       a.draggable = false;
       a.href = "#";
       a.className = "btn btnt";
       a.style.zIndex = 53;
       a.style.position = "fixed";
       a.appendChild(ii);
       o.a = a;
       document.body.appendChild(a);
       o.cv = j;
       a.onclick = function() {
        if (!choosing_skin) return false;
        if (!building_skin) return false;
        if (build_segments.length >= 47) return false;
        for (var i = bskbtns.length - 1; i >= 0; i--)
         if (bskbtns[i].a == this) {
          build_segments.push(bskbtns[i].cv);
          break
         } setSkin(slither, 0, getBuildSkinData(true));
        return false
       };
       bskbtns.push(o)
      }
     }
    }
    reposBskbtns();
    revdiv.style.opacity = 0;
    revdiv.style.display = "inline"
   } return false
};
nick.oninput = function() {
 var s = this.value;
 var fs = asciize(s);
 if (fs.length > 24) fs = fs.substr(0, 24);
 if (s != fs) this.value = fs
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas");
var lmc = document.createElement("canvas");
var lgsc = 1;
var lw = 450 * 2;
var lh = 135 * 2;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d");
var lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
 pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
 kc: 22,
 ws: 4,
 wr: .025,
 qm: .025,
 sp: .06,
 sz: 11
}, {
 pts: [150, 30, 150, 30 + (184 - 30) / 2, 150, 184],
 kc: 66,
 ws: 4,
 wr: .05,
 qm: .025,
 sp: .06,
 sz: 11
}, {
 pts: [207, 96, 207, 96 + (184 - 96) / 2, 207, 184],
 kc: 46,
 ws: 4,
 wr: .03,
 qm: .035,
 sp: .06,
 sz: 11
}, {
 pts: [207, 47, 207, 47 + (50 - 47) / 2, 207, 50],
 kc: 11,
 ws: 2,
 wr: .06,
 qm: .05,
 sp: .06,
 sz: 15,
 r: .5
}, {
 pts: [267, 65, 267, 65 + (164 - 65) / 2, 267, 164, 267, 194, 297, 186],
 kc: 66,
 ws: 6,
 wr: -.025,
 qm: -.0125,
 sp: .06,
 sz: 11,
 r: 1.5
}, {
 pts: [243, 94, 268, 94,
  293, 94
 ],
 kc: 66,
 ws: 4,
 wr: .015,
 qm: .025,
 sp: .06,
 sz: 9,
 r: 1.2
}, {
 pts: [338, 30, 338, 30 + (184 - 30) * 1 / 4, 338, 30 + (184 - 30) * 2 / 4, 338, 30 + (184 - 30) * 3 / 4, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
 kc: 46,
 ws: 4,
 wr: .005,
 qm: .02,
 sp: .06,
 sz: 11,
 r: 2.1
}, {
 pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
 kc: 35,
 ws: 6,
 wr: -.013,
 qm: -.025,
 sp: .06,
 sz: 11,
 r: 1.3
}, {
 pts: [591, 96, 591, 96 + (184 - 96) / 2, 591, 184, 591, 184 + (126 - 184) / 2, 591, 126, 613, 82, 652, 109],
 kc: 38,
 ws: 4,
 wr: .01,
 qm: -.035,
 sp: .06,
 sz: 11
}, {
 pts: [663, 177, 663, 177 + (180 - 177) / 2, 663, 180],
 kc: 11,
 ws: 2,
 wr: .06,
 qm: .05,
 sp: .06,
 sz: 15
}, {
 pts: [717, 96, 717, 96 + (184 - 96) / 2, 717, 184],
 kc: 33,
 ws: 4,
 wr: .06,
 qm: .05,
 sp: .06,
 sz: 11
}, {
 pts: [717, 47, 717, 47 + (50 - 47) / 2, 717, 50],
 kc: 11,
 ws: 2,
 wr: .06,
 qm: .05,
 sp: .06,
 sz: 15
}, {
 pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
 kc: 43,
 ws: 4,
 wr: 0,
 qm: .0274,
 sp: .073,
 sz: 11,
 r: 1.5
});
for (var i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0;
var lgss = 0;
var ncka = 0;
var mwig = 4;
var lgfr = 0;
var lgtm = timeObj.now();

function showLogo(done) {
 var ct = timeObj.now();
 var et = (ct - lgtm) / 25;
 lgtm = ct;
 var ax1, ay1, cx1, cy1, ax2, ay2, ix1, iy1, ix2, iy2, pax1, pay1, lpax1, lpay1, alpax1, alpay1, d, i, j, ang, gang, wang, dmv, q, rr, gg, bb, r;
 lgfr += et;
 if (lts[lts.length - 1].mwig == 0 && lga == 1 && lgss == 1 && ncka == 1) {
  clearInterval(showlogo_iv);
  showlogo_iv = -1
 } else {
  if (done || lga != 1) {
   lga += .05 * et;
   if (lga >= 1) lga = 1;
   lmc2.style.opacity = lga
  }
  if (lgss != 1) {
   lgss += .00375 * et;
   if (lgss >= 1) lgss = 1
  }
  if (done || ncka != 1) {
   ncka += .006 * et;
   if (ncka >= 1) ncka = 1;
   nick_holder.style.opacity = Math.min(1,
    ncka * 6);
   if (!is_mobile) smh.style.opacity = Math.max(0, Math.min(1, (ncka - .05) * 5));
   if (ncka >= .01) playh.style.opacity = Math.min(1, (ncka - .01) * 5)
  }
  lctx.clearRect(0, 0, lw, lh);
  for (i = 0; i < lts.length; i++) {
   var o = lts[i];
   var pts = o.pts;
   var kc = o.kc;
   var ws = o.ws;
   var wr = o.wr;
   var qm = o.qm;
   var sp = o.sp;
   var sz = o.sz;
   var r = o.r;
   var mwig = o.mwig;
   if (done) {
    o.wch = true;
    mwig = 1E-7
   }
   if (o.wch)
    if (mwig != 0) {
     mwig *= .982;
     mwig -= .001 * et;
     if (render_mode == 1) mwig -= .005 * et;
     if (mwig <= 0) mwig = 0;
     o.mwig = mwig
    } if (!r) r = 1;
   lctx.beginPath();
   if (i < 9) {
    var gd = lctx.createLinearGradient(20 * lgsc, 0, 330 * lgsc, 0);
    gd.addColorStop(0, "#f4f6fa");
    gd.addColorStop(1, "#f4f6fa");
    lctx.fillStyle = gd
   } else {
    var gd = lctx.createLinearGradient(330 * lgsc, 0, 440 * lgsc, 0);
    gd.addColorStop(0, "#5d6880");
    gd.addColorStop(1, "#5d6880");
    lctx.fillStyle = gd
   }
   dmv = false;
   gang = false;
   q = 0;
   ax2 = pts[0];
   ay2 = pts[1];
   alpax1 = lpax1 = ax2;
   alpay1 = lpay1 = ay2;
   var wig = ws;
   var wgang = lgfr * sp;
   for (j = 2; j < pts.length; j += 4) {
    ax1 = ax2;
    ay1 = ay2;
    cx2 = pts[j];
    cy2 = pts[j + 1];
    ax2 = pts[j + 2];
    ay2 = pts[j + 3];
    for (var k = 1; k <= kc; k++) {
     q++;
     var s_amt = k / kc;
     ix1 = ax1 + (cx2 - ax1) * s_amt;
     iy1 =
      ay1 + (cy2 - ay1) * s_amt;
     ix2 = cx2 + (ax2 - cx2) * s_amt;
     iy2 = cy2 + (ay2 - cy2) * s_amt;
     pax1 = ix1 + (ix2 - ix1) * s_amt;
     pay1 = iy1 + (iy2 - iy1) * s_amt;
     wang = Math.atan2(pay1 - lpay1, pax1 - lpax1);
     if (!gang) {
      gang = true;
      ang = wang
     } else {
      if (wang - ang > Math.PI) wang -= 2 * Math.PI;
      else if (wang - ang < -Math.PI) wang += 2 * Math.PI;
      ang += (wang - ang) * .05;
      ang %= 2 * Math.PI
     }
     lpax1 = pax1;
     lpay1 = pay1;
     pax1 += Math.cos(Math.PI / 2 + ang) * Math.sin(wgang) * wig * mwig;
     pay1 += Math.sin(Math.PI / 2 + ang) * Math.sin(wgang) * wig * mwig;
     wgang -= .76 * qm * wig;
     wig += wr;
     lctx.beginPath();
     var fsz = sz * 1.15 * Math.min(1,
      lgsc * (.2 + .8 * lga) * (30 * lgss * r - q / 20 - i / 2));
     if (fsz > .5) {
      lctx.arc(pax1 * lgsc, pay1 * lgsc, fsz, 0, pi2);
      o.wch = true
     }
     lctx.fill()
    }
   }
  }
  lctx2.clearRect(0, 0, lw, lh);
  lctx2.shadowColor = "rgba(0, 0, 0, .55)";
  lctx2.shadowBlur = 16;
  lctx2.shadowOffsetY = 7;
  lctx2.drawImage(lmc, 0, 0)
 }
}
var showlogo_iv = -1;
if (is_safari || is_mobile) {
 lga = 1;
 lgss = 1;
 ncka = 1;
 showLogo(true)
} else showlogo_iv = setInterval(function() {
 showLogo(false)
}, 25);
document.onkeydown = function(e) {
 e = e || window.event;
 var v = e.keyCode;
 if (v == 37) kd_l = true;
 else if (v == 39) kd_r = true;
 else if (v == 38 || v == 32) {
  kd_u = true;
  setAcceleration(1)
 } else if (v == 13 || v == 10) {
  if (!world_running) play_btn.elem.onclick()
 } else if (v == 16)
  if (testing) shifty = true
};
document.onkeyup = function(e) {
 e = e || window.event;
 var v = e.keyCode;
 if (v == 37) kd_l = false;
 else if (v == 39) kd_r = false;
 else if (v == 38 || v == 32) {
  kd_u = false;
  setAcceleration(0)
 } else if (v == 16)
  if (testing) shifty = false
};

var app;
var root = null;
var nmlo;
var fdglo;
var fdlo;
var prlo;
var g2lo;
var prglo;
var lglo;
var pjos = [];
var pje1;
var pje2;
var pjp1;
var pjp2;
var pjpm1;
var pjpm2;
var pjr1;
var pjr2;
var pjlr1;
var pjlr2;
var pjem1;
var pjem2;
var pjl1;
var pjl2;
var pjlm1;
var pjlm2;
var pjlsh1;
var pjlsh2;
var pjlshm1;
var pjlshm2;
var pjmo1;
var pjm1;
var pjm2;
var pjt1;
var pjmsh1;
var pjfr = 0;
var suglo;
var shilo;
var slilo;
var sfilo;
var sdilo;
var bgi;
resize();