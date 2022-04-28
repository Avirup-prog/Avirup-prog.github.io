(function (q, g) { "function" === typeof define && define.amd ? define([], g) : "object" === typeof module && module.exports ? module.exports = g() : q.Rellax = g() })("undefined" !== typeof window ? window : global, function () {
    var q = function (g, u) {
        function C() { if (3 === a.options.breakpoints.length && Array.isArray(a.options.breakpoints)) { var f = !0, c = !0, b; a.options.breakpoints.forEach(function (a) { "number" !== typeof a && (c = !1); null !== b && a < b && (f = !1); b = a }); if (f && c) return } a.options.breakpoints = [576, 768, 1201]; console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted") }
        var a = Object.create(q.prototype), l = 0, v = 0, m = 0, n = 0, d = [], w = !0, A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) { return setTimeout(a, 1E3 / 60) }, p = null, x = !1; try { var k = Object.defineProperty({}, "passive", { get: function () { x = !0 } }); window.addEventListener("testPassive", null, k); window.removeEventListener("testPassive", null, k) } catch (f) { } var D = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
            clearTimeout, E = window.transformProp || function () { var a = document.createElement("div"); if (null === a.style.transform) { var c = ["Webkit", "Moz", "ms"], b; for (b in c) if (void 0 !== a.style[c[b] + "Transform"]) return c[b] + "Transform" } return "transform" }(); a.options = { speed: -2, verticalSpeed: null, horizontalSpeed: null, breakpoints: [576, 768, 1201], center: !1, wrapper: null, relativeToWrapper: !1, round: !0, vertical: !0, horizontal: !1, verticalScrollAxis: "y", horizontalScrollAxis: "x", callback: function () { } }; u && Object.keys(u).forEach(function (d) {
                a.options[d] =
                u[d]
            }); u && u.breakpoints && C(); g || (g = ".rellax"); k = "string" === typeof g ? document.querySelectorAll(g) : [g]; if (0 < k.length) {
                a.elems = k; if (a.options.wrapper && !a.options.wrapper.nodeType) if (k = document.querySelector(a.options.wrapper)) a.options.wrapper = k; else { console.warn("Rellax: The wrapper you're trying to use doesn't exist."); return } var F, B = function () {
                    for (var f = 0; f < d.length; f++)a.elems[f].style.cssText = d[f].style; d = []; v = window.innerHeight; n = window.innerWidth; f = a.options.breakpoints; F = n < f[0] ? "xs" : n >= f[0] && n <
                        f[1] ? "sm" : n >= f[1] && n < f[2] ? "md" : "lg"; H(); for (f = 0; f < a.elems.length; f++) {
                            var c = void 0, b = a.elems[f], e = b.getAttribute("data-rellax-percentage"), y = b.getAttribute("data-rellax-speed"), t = b.getAttribute("data-rellax-xs-speed"), g = b.getAttribute("data-rellax-mobile-speed"), h = b.getAttribute("data-rellax-tablet-speed"), k = b.getAttribute("data-rellax-desktop-speed"), l = b.getAttribute("data-rellax-vertical-speed"), m = b.getAttribute("data-rellax-horizontal-speed"), p = b.getAttribute("data-rellax-vertical-scroll-axis"),
                            q = b.getAttribute("data-rellax-horizontal-scroll-axis"), u = b.getAttribute("data-rellax-zindex") || 0, x = b.getAttribute("data-rellax-min"), A = b.getAttribute("data-rellax-max"), C = b.getAttribute("data-rellax-min-x"), D = b.getAttribute("data-rellax-max-x"), E = b.getAttribute("data-rellax-min-y"), L = b.getAttribute("data-rellax-max-y"), r = !0; t || g || h || k ? c = { xs: t, sm: g, md: h, lg: k } : r = !1; t = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; a.options.relativeToWrapper &&
                                (t = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - a.options.wrapper.offsetTop); var z = a.options.vertical ? e || a.options.center ? t : 0 : 0, I = a.options.horizontal ? e || a.options.center ? a.options.wrapper ? a.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0; t = z + b.getBoundingClientRect().top; g = b.clientHeight || b.offsetHeight || b.scrollHeight; h = I + b.getBoundingClientRect().left; k = b.clientWidth || b.offsetWidth || b.scrollWidth;
                            z = e ? e : (z - t + v) / (g + v); e = e ? e : (I - h + n) / (k + n); a.options.center && (z = e = .5); c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed; l = l ? l : a.options.verticalSpeed; m = m ? m : a.options.horizontalSpeed; p = p ? p : a.options.verticalScrollAxis; q = q ? q : a.options.horizontalScrollAxis; y = J(e, z, c, l, m); b = b.style.cssText; r = ""; if (e = /transform\s*:/i.exec(b)) r = b.slice(e.index), r = (e = r.indexOf(";")) ? " " + r.slice(11, e).replace(/\s/g, "") : " " + r.slice(11).replace(/\s/g, ""); d.push({
                                baseX: y.x, baseY: y.y, top: t, left: h, height: g, width: k, speed: c, verticalSpeed: l,
                                horizontalSpeed: m, verticalScrollAxis: p, horizontalScrollAxis: q, style: b, transform: r, zindex: u, min: x, max: A, minX: C, maxX: D, minY: E, maxY: L
                            })
                        } K(); w && (window.addEventListener("resize", B), w = !1, G())
                }, H = function () {
                    var d = l, c = m; l = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset; m = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
                    a.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop); return d != l && a.options.vertical || c != m && a.options.horizontal ? !0 : !1
                }, J = function (d, c, b, e, g) { var f = {}; d = 100 * (g ? g : b) * (1 - d); c = 100 * (e ? e : b) * (1 - c); f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100; f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100; return f }, h = function () {
                    window.removeEventListener("resize", h); window.removeEventListener("orientationchange",
                        h); (a.options.wrapper ? a.options.wrapper : window).removeEventListener("scroll", h); (a.options.wrapper ? a.options.wrapper : document).removeEventListener("touchmove", h); p = A(G)
                }, G = function () { H() && !1 === w ? (K(), p = A(G)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (a.options.wrapper ? a.options.wrapper : window).addEventListener("scroll", h, x ? { passive: !0 } : !1), (a.options.wrapper ? a.options.wrapper : document).addEventListener("touchmove", h, x ? { passive: !0 } : !1)) }, K = function () {
                    for (var f,
                        c = 0; c < a.elems.length; c++) {
                            var b = d[c].verticalScrollAxis.toLowerCase(), e = d[c].horizontalScrollAxis.toLowerCase(); f = -1 != b.indexOf("x") ? l : 0; b = -1 != b.indexOf("y") ? l : 0; var g = -1 != e.indexOf("x") ? m : 0; e = -1 != e.indexOf("y") ? m : 0; f = J((f + g - d[c].left + n) / (d[c].width + n), (b + e - d[c].top + v) / (d[c].height + v), d[c].speed, d[c].verticalSpeed, d[c].horizontalSpeed); e = f.y - d[c].baseY; b = f.x - d[c].baseX; null !== d[c].min && (a.options.vertical && !a.options.horizontal && (e = e <= d[c].min ? d[c].min : e), a.options.horizontal && !a.options.vertical &&
                                (b = b <= d[c].min ? d[c].min : b)); null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e); null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b); null !== d[c].max && (a.options.vertical && !a.options.horizontal && (e = e >= d[c].max ? d[c].max : e), a.options.horizontal && !a.options.vertical && (b = b >= d[c].max ? d[c].max : b)); null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e); null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b); a.elems[c].style[E] = "translate3d(" + (a.options.horizontal ? b : "0") + "px," + (a.options.vertical ? e : "0") + "px," + d[c].zindex + "px) " + d[c].transform
                    } a.options.callback(f)
                };
                a.destroy = function () { for (var f = 0; f < a.elems.length; f++)a.elems[f].style.cssText = d[f].style; w || (window.removeEventListener("resize", B), w = !0); D(p); p = null }; B(); a.refresh = B; return a
            } console.warn("Rellax: The elements you're trying to select don't exist.")
    }; return q
});
console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"),
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
							duration: 0.8,
							opacity: 0,
							pointerEvents: "none",
						})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();
