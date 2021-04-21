// Disable inspect element right click
$(document).on("contextmenu",function(e) {
    e.preventDefault();
});

// Collapsible nav bar

// Initial scroll position
let scrollState = 0;
let navClasses = document.getElementById('navbar').classList;
//Return current scroll position
let scrollTop = function () {
    return window.scrollY;
}
// On scroll event
let scrollDetect = function(home, down, up) {
    // Get current scroll position
    let currentScroll = scrollTop();
    if (scrollTop() === 0) {
        home();
    }
    else if (currentScroll > scrollState) {
        down();
    }
    else {
        up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
};

function homeAction() {
    console.log("home");
}
function downAction() {
    navClasses.remove('open');
    navClasses.add('collapse');
}
function upAction() {
    navClasses.remove('collapse');
    navClasses.add('open');
}
// Listen for scroll event
window.addEventListener('scroll', function () {
    scrollDetect(homeAction, downAction, upAction);
});

// Toggle light/dark mode
let checkbox = document.querySelector('input[type=checkbox]');

checkbox.addEventListener('change', function() {
    document.body.classList.toggle("dark-theme");
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    trans();
    // Save theme preference in cookie
    document.cookie = "theme=" + theme;
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};

// Particle background animation (json)
particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3500D3"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3500D3",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);
