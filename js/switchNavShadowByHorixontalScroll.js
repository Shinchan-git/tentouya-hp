"use strict"

let target = document.getElementById("nav");
                let shadowRight = document.getElementById("nav-shadow-right");

                function createEventScrollX(ele) {
                    this._past_scroll_left = 0;
                    this.ev_scroll_x = new CustomEvent('scroll-x', {
                        bubbles: true,
                        cancelable: true
                    });
                    this.dispatch_callback = function(ev) {
                        let cuT = ev.currentTarget;
                        let now_l = cuT.scrollLeft;
                        if (now_l !== this.past_scroll_left) {
                            ele.dispatchEvent(this.ev_scroll_x);
                            this.past_scroll_left = now_l;
                        }
                    };

                    let events = ["scroll", "touchmove"];
                    events.forEach(function(ev, idx, arr) {
                        ele.addEventListener(ev, this.dispatch_callback.bind(this), {
                            capture: true,
                            passive: true
                        });
                    }.bind(this));
                }

                let evX = new createEventScrollX(target);
                target.addEventListener("scroll-x", function(ev) {
                    let l = ev.currentTarget.scrollLeft;
                    if (l > 5) {
                        shadowRight.style.width = "0";
                    } else {
                        shadowRight.style.width = "25px";
                    }
                }, {
                    capture: true,
                    passive: true
                });