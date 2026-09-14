document.addEventListener("DOMContentLoaded", function () {
  var $ = function (selector, parent) {
    return (parent || document).querySelector(selector);
  };

  var $$ = function (selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  };

  var refreshIcons = function () {
    if (window.lucide) window.lucide.createIcons();
  };

  /* =========================================================
     PERSONAL INFORMATION
     Replace only the text between quotation marks.
  ========================================================= */

  var profile = {
    name: "Hadeel Bannat",
    shortName: "Hadeel",
    portfolioAddress: "HADEEL · PORTFOLIO",
    email: "hadeelbanat32@gmail.com",
    phone: "+966 53 140 2676",
    linkedin: "https://www.linkedin.com/in/hadeel-bannat-4b826934a"
  };

  /* =========================================================
     PROJECTS
  ========================================================= */

  var projects = [
    {
      id: "nuqta",
      number: "01",
      title: "Nuqta",
      type: "Sustainability Hackathon Project",
      image: "media/projects/nuqta-logo.jpeg",
      description: "A sustainable solution designed to reduce waste from leftover beverages in retail operations.",
      contribution: "Collaborated on concept development, visual design, and presentation.",
      result: "Achieved 1st Place in the Sustainability Hackathon organized by the University of Jeddah and INJAZ.",
      tools: ["Idea Development", "Visual Design", "Presentation"],
      links: [
        ["View Project", "media/files/nuqta-project.pdf"]
      ]
    },
    {
      id: "meditrack",
      number: "02",
      title: "MediTrack",
      type: "UI/UX Design & Web Development",
      image: "media/projects/meditrack-logo.jpeg",
      description: "A medication management platform for finding medicines, comparing availability, and locating nearby pharmacies.",
      contribution: "Designed the complete UI/UX experience in Figma, then translated it into a responsive web application.",
      result: "Created an interactive prototype and a functional, user-friendly website.",
      tools: ["Figma", "UI/UX", "Web Development"],
      links: [
        ["Watch Demo", "media/videos/meditrack-demo.mp4"]
      ]
    },
    {
      id: "constructx",
      number: "03",
      title: "ConstructX",
      type: "AI Camp Project",
      image: "media/projects/constructx-logo.jpeg",
      description: "A construction project management concept developed during the AI Camp.",
      contribution: "Developed the idea and designed an interactive prototype using ChatGPT and Stitch, focusing on interface design and usability.",
      result: "Completed an AI-assisted platform concept and interactive UI prototype.",
      tools: ["ChatGPT", "Stitch", "UI/UX"],
      links: [
        ["View UI/UX", "https://stitch.withgoogle.com/preview/72790365676615520?node-id=959df619293a412c9b015f4a5a5762b2&raw=1"]
      ]
    }
  ];

  /* =========================================================
     CERTIFICATES
  ========================================================= */

  var certificates = [
    [
      "AI Innovation Bootcamp",
      "Google Developer Group on Campus",
      "2026",
      "media/certificates/certificate-01.jpeg"
    ],
    [
      "Robotics Camp",
      "Mashoura Research & Innovation",
      "36 Training Hours · 2025",
      "media/certificates/certificate-02.jpeg"
    ],
    [
      "Introduction to Project Management",
      "INJAZ",
      "2025",
      "media/certificates/certificate-03.jpeg"
    ],
    [
      "Advanced AI Concepts & Applications",
      "SDAIA",
      "2025",
      "media/certificates/certificate-04.jpeg"
    ]
  ];

  /* =========================================================
     SKILLS
  ========================================================= */

  var skills = [
    [
      "UI/UX Design",
      "User-focused interfaces and interactive prototypes.",
      "pen-tool"
    ],
    [
      "Figma",
      "Interface design and prototyping.",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ],
    [
      "HTML5",
      "Structured and accessible web pages.",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    ],
    [
      "CSS3",
      "Responsive layouts and visual styling.",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    ],
    [
      "Java",
      "Object-oriented programming fundamentals.",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    ],
    [
      "SQL",
      "Relational data and database queries.",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    ],
    [
      "Communication",
      "Clear communication in team and volunteer settings.",
      "messages-square"
    ],
    [
      "Teamwork",
      "Collaborating effectively on shared goals.",
      "users"
    ],
    [
      "Time Management",
      "Organizing tasks and meeting deadlines.",
      "clock-3"
    ],
    [
      "Self-Learning",
      "Continuously building new knowledge and skills.",
      "book-open-check"
    ]
  ];

  /* =========================================================
     EXPERIENCE
  ========================================================= */

  var experiences = [
    [
      "Sep 2025 – Present",
      "Student Leadership",
      "Project Management Leader",
      "College of Computer Science & Engineering Club — lead project planning for workshops, trips, and student initiatives while coordinating tasks and execution."
    ],
    [
      "Feb 2026 – Present",
      "Human Resources",
      "Bashoush Volunteer Team",
      "Handle volunteer registration and coordination, including registration cards and participant information."
    ],
    [
      "Sep 2025 – Present",
      "Activities & Events",
      "Drone Club",
      "Develop ideas for interactive workshop activities and support their planning and execution."
    ],
    [
      "Apr 2025 – Present",
      "Media & Content",
      "Electronic Games & Virtual Reality Club",
      "Handled event photography and media coverage, then moved into content writing for certificates, presentations, and emails."
    ],
    [
      "May 2025 – Present",
      "Student Program",
      "Gifted Students Program",
      "Promote program events and opportunities through university student groups to increase awareness and reach."
    ],
    [
      "2025 – Present",
      "Student Support",
      "Awn Team — Scholarship Department",
      "Support international scholarship students and contribute to student communication, news, and media content."
    ],
    [
      "July 2024 – 2025",
      "Community Moderation",
      "Lenakun Team",
      "Served as a moderator in a university community of 20,000+ members, supporting Scholarship, IT, and News departments."
    ]
  ];

  /* =========================================================
     ACHIEVEMENTS
  ========================================================= */

  var achievements = [
    [
      "1st",
      "Sustainability Hackathon",
      "Nuqta Project · University of Jeddah × INJAZ · 2025",
      "Developed a sustainable solution to reduce beverage waste in retail operations.",
      "media/achievements/achievement-01.jpeg"
    ],
    [
      "2nd",
      "Volunteer Marathon",
      "University of Jeddah · 2026",
      "Recognized for achieving 1,212 officially recorded volunteer hours.",
      "media/achievements/achievement-02.jpeg"
    ]
  ];

  var isPlaceholder = function (value) {
    return (
      !value ||
      value.indexOf("YOUR_") !== -1 ||
      value.indexOf("PASTE_") === 0
    );
  };

  function renderSocials(target) {
    var items = [
      ["mail", profile.email, "mailto:", "Email"],
      ["linkedin", profile.linkedin, "", "LinkedIn"],
      ["phone", profile.phone, "tel:", "Phone"]
    ];

    target.innerHTML = items.map(function (item) {
      var placeholder = isPlaceholder(item[1]);

      var href = placeholder
        ? "#"
        : item[2] + item[1].replace(/\s/g, "");

      var title = placeholder
        ? "Add " + item[3] + " in PERSONAL INFORMATION"
        : item[3];

      var icon = item[0] === "linkedin"
        ? '<svg class="linkedin-icon" viewBox="0 0 448 512" aria-hidden="true"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108C24.1 108 0 83.9 0 54.2 0 24.1 24.1 0 53.8 0s53.8 24.1 53.8 54.2c0 29.7-24.1 53.8-53.8 53.8zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>'
        : '<i data-lucide="' + item[0] + '"></i>';

      return (
        '<a href="' + href +
        '" class="' + (placeholder ? "is-placeholder" : "") +
        '" aria-label="' + item[3] +
        '" title="' + title + '"' +
        (placeholder
          ? ""
          : ' target="_blank" rel="noopener"') +
        ">" +
        icon +
        "</a>"
      );
    }).join("");
  }

  function renderLinks(links, asButtons) {
    return links.map(function (item) {
      var placeholder = isPlaceholder(item[1]);

      var classes =
        (asButtons ? "button button--ghost " : "") +
        (placeholder ? "is-placeholder" : "");

      return (
        '<a class="' + classes.trim() +
        '" href="' + (placeholder ? "#" : item[1]) +
        '"' +
        (placeholder
          ? ' aria-disabled="true"'
          : ' target="_blank" rel="noopener"') +
        ">" +
        item[0] +
        '<i data-lucide="external-link"></i></a>'
      );
    }).join("");
  }

  $("#heroName").textContent = profile.name;
  $("#footerName").textContent = profile.name;
  $("#brandName").textContent = profile.shortName;
  $("#footerBrand").textContent = profile.shortName;
  $("#introName").textContent = profile.portfolioAddress;

  document.title =
    profile.name + " | Software Engineering Portfolio";

  renderSocials($("#heroSocials"));
  renderSocials($("#contactSocials"));

  $("#projectGrid").innerHTML = projects.map(function (project) {
    var primaryLinks = project.links.slice(0, 1);

    return (
      '<article class="project-card reveal" data-project="' +
      project.id +
      '">' +
        '<div class="project-cover">' +
          '<span class="project-number">' +
            project.number +
          "</span>" +
          '<img src="' +
            project.image +
            '" alt="' +
            project.title +
            ' logo">' +
        "</div>" +
        '<div class="project-body">' +
          '<span class="project-type">' +
            project.type +
          "</span>" +
          "<h3>" +
            project.title +
          "</h3>" +
          "<p>" +
            project.description +
          "</p>" +
          '<div class="project-tools">' +
            project.tools.map(function (tool) {
              return "<span>" + tool + "</span>";
            }).join("") +
          "</div>" +
          '<div class="project-actions">' +
            renderLinks(primaryLinks, false) +
            '<button class="open-project" type="button">' +
              "Details " +
              '<i data-lucide="arrow-right"></i>' +
            "</button>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");

  $("#certificateGrid").innerHTML =
    certificates.map(function (item, index) {
      return (
        '<article class="certificate-card reveal"' +
          ' data-title="' + item[0] + '"' +
          ' data-image="' + item[3] + '">' +

          '<div class="certificate-visual">' +
            '<i data-lucide="award"></i>' +
            '<img src="' + item[3] +
              '" alt="' + item[0] + ' certificate">' +
          "</div>" +

          "<div>" +
            "<small>" +
              String(index + 1).padStart(2, "0") +
              " · " +
              item[2] +
            "</small>" +

            "<h3>" + item[0] + "</h3>" +
            "<p>" + item[1] + "</p>" +

            '<button class="open-image" type="button"' +
              ' data-title="' + item[0] + '"' +
              ' data-image="' + item[3] + '">' +
              "View Certificate " +
              '<i data-lucide="maximize-2"></i>' +
            "</button>" +
          "</div>" +
        "</article>"
      );
    }).join("");

  $("#skillGrid").innerHTML =
    skills.map(function (item) {
      var icon = item[2].indexOf("http") === 0
        ? '<img src="' + item[2] + '" alt="">'
        : '<i data-lucide="' + item[2] + '"></i>';

      return (
        '<article class="skill-card reveal">' +
          '<div class="skill-icon">' +
            icon +
          "</div>" +
          "<h3>" +
            item[0] +
          "</h3>" +
          "<p>" +
            item[1] +
          "</p>" +
        "</article>"
      );
    }).join("");

  $("#timeline").innerHTML =
    experiences.map(function (item, index) {
      return (
        '<article class="timeline-item reveal ' +
          (index > 3 ? "extra" : "") +
        '">' +
          "<time>" +
            item[0] +
          "</time>" +

          '<div class="timeline-card">' +
            "<small>" +
              item[1] +
            "</small>" +
            "<h3>" +
              item[2] +
            "</h3>" +
            "<p>" +
              item[3] +
            "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");

  $("#achievementList").innerHTML =
    achievements.map(function (item) {
      return (
        '<article class="achievement-card reveal"' +
          ' data-title="' + item[1] + '"' +
          ' data-image="' + item[4] + '">' +

          "<i>" +
            item[0] +
          "</i>" +

          "<div>" +
            "<small>" +
              item[2] +
            "</small>" +
            "<h3>" +
              item[1] +
            "</h3>" +
            "<p>" +
              item[3] +
            "</p>" +
          "</div>" +

          '<div class="achievement-visual">' +
            '<i data-lucide="image"></i>' +
            '<img class="achievement-image"' +
              ' src="' + item[4] + '"' +
              ' alt="' + item[1] + ' achievement">' +
          "</div>" +
        "</article>"
      );
    }).join("");

  refreshIcons();

  /* Intro */

  var closeIntro = function () {
    var intro = $("#welcome");

    if (!intro || intro.classList.contains("hidden")) {
      return;
    }

    intro.classList.add("hidden");

    setTimeout(function () {
      intro.remove();
    }, 900);
  };

  $("#skipIntro").addEventListener("click", closeIntro);

  setTimeout(
    closeIntro,
    matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 300
      : 3900
  );

  /* Navigation */

  addEventListener("scroll", function () {
    $("#navbar").classList.toggle("scrolled", scrollY > 20);
  }, {
    passive: true
  });

  $("#menuButton").addEventListener("click", function () {
    $("#navMenu").classList.toggle("open");
  });

  $$("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
      $("#navMenu").classList.remove("open");
    });
  });

  var navLinks = $$("#navMenu a");

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.hash === "#" + entry.target.id
          );
        });
      });
    },
    {
      rootMargin: "-35% 0px -55%"
    }
  );

  $$("main section[id]").forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* Reveal animations */

  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: .12
    }
  );

  function observeReveals() {
    $$(".reveal:not(.visible)").forEach(function (item, index) {
      item.style.transitionDelay =
        (index % 3) * 70 + "ms";

      revealObserver.observe(item);
    });
  }

  observeReveals();

  /* Counters */

  var counterObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        var element = entry.target;
        var target = Number(element.dataset.count);
        var start = performance.now();

        var update = function (now) {
          var progress = Math.min(
            (now - start) / 1300,
            1
          );

          element.textContent =
            Math.floor(
              (1 - Math.pow(1 - progress, 3)) * target
            ).toLocaleString("en-US");

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };

        requestAnimationFrame(update);
        observer.unobserve(element);
      });
    },
    {
      threshold: .65
    }
  );

  $$("[data-count]").forEach(function (counter) {
    counterObserver.observe(counter);
  });

  /* Typing text */

  var words = [
    "Software Engineering Student",
    "UI/UX Designer",
    "Web Developer"
  ];

  var wordIndex = 0;
  var characterIndex = 0;
  var deleting = false;

  function typeText() {
    var currentWord = words[wordIndex];

    $("#typingText").textContent =
      currentWord.slice(0, characterIndex);

    if (!deleting && characterIndex < currentWord.length) {
      characterIndex += 1;
    } else if (!deleting) {
      deleting = true;
      return setTimeout(typeText, 1400);
    } else if (characterIndex > 0) {
      characterIndex -= 1;
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeText, deleting ? 42 : 78);
  }

  typeText();

  /* Tabs */

  $$(".tabs button").forEach(function (button) {
    button.addEventListener("click", function () {
      $$(".tabs button").forEach(function (item) {
        var active = item === button;

        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", active);
      });

      $$(".tab-panel").forEach(function (panel) {
        panel.classList.toggle(
          "active",
          panel.id === button.dataset.tab
        );
      });

      observeReveals();
    });
  });

  /* Experience */

  $("#showExperience").addEventListener(
    "click",
    function (event) {
      var expanded =
        $("#timeline").classList.toggle("expanded");

      event.currentTarget.classList.toggle(
        "open",
        expanded
      );

      event.currentTarget.querySelector("span").textContent =
        expanded
          ? "Show Less"
          : "Show All Experience";

      if (expanded) {
        observeReveals();
      }
    }
  );

  /* Project details */

  var projectModal = $("#projectModal");

  $$(".open-project").forEach(function (button) {
    button.addEventListener("click", function () {
      var id =
        button.closest("[data-project]").dataset.project;

      var project = projects.find(function (item) {
        return item.id === id;
      });

      $("#projectModalType").textContent =
        project.type;

      $("#projectModalTitle").textContent =
        project.title;

      $("#projectModalText").textContent =
        project.description;

      $("#projectModalRole").textContent =
        project.contribution;

      $("#projectModalOutcome").textContent =
        project.result;

      $("#projectModalLinks").innerHTML =
        renderLinks(project.links, true);

      projectModal.classList.add("open");
      document.body.classList.add("lock");

      refreshIcons();
    });
  });

  /* Certificate and achievement images */

  $$(".certificate-visual img").forEach(function (image) {
    var showImage = function () {
      image.classList.add("loaded");

      var card = image.closest(".certificate-card");

      card.classList.add("has-image");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
    };

    image.addEventListener("load", showImage);

    if (image.complete && image.naturalWidth) {
      showImage();
    }
  });

  $$(".achievement-image").forEach(function (image) {
    var showImage = function () {
      image.classList.add("loaded");

      var card = image.closest(".achievement-card");

      card.classList.add("has-image");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
    };

    image.addEventListener("load", showImage);

    if (image.complete && image.naturalWidth) {
      showImage();
    }
  });

  var imageModal = $("#imageModal");

  var openImage = function (card) {
    if (!card.classList.contains("has-image")) {
      return;
    }

    $("#imageModalTitle").textContent =
      card.dataset.title;

    $("#imageModalPreview").src =
      card.dataset.image;

    imageModal.classList.add("open");
    document.body.classList.add("lock");
  };

  $$(".certificate-card, .achievement-card").forEach(
    function (card) {
      card.addEventListener("click", function () {
        openImage(card);
      });

      card.addEventListener("keydown", function (event) {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          openImage(card);
        }
      });
    }
  );

  /* Modals */

  function closeModals() {
    $$(".modal").forEach(function (modal) {
      modal.classList.remove("open");
    });

    document.body.classList.remove("lock");
  }

  $$("[data-close-modal]").forEach(function (button) {
    button.addEventListener("click", closeModals);
  });

  $$(".modal").forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModals();
      }
    });
  });

  addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModals();
    }
  });

  /* Prevent unfinished placeholder links */

  document.addEventListener("click", function (event) {
    var link =
      event.target.closest("a.is-placeholder");

    if (link) {
      event.preventDefault();
    }
  });

  /* Pointer glow */

  addEventListener("pointermove", function (event) {
    $(".cursor-glow").style.left =
      event.clientX + "px";

    $(".cursor-glow").style.top =
      event.clientY + "px";
  }, {
    passive: true
  });

  /* Scroll effects */

  addEventListener("scroll", function () {
    var pageHeight =
      document.documentElement.scrollHeight -
      innerHeight;

    $(".scroll-progress").style.width =
      (
        pageHeight > 0
          ? scrollY / pageHeight * 100
          : 0
      ) + "%";

    $$(".background span").forEach(
      function (blob, index) {
        var x =
          Math.sin(scrollY / 300 + index) * 70;

        var y =
          Math.cos(scrollY / 360 + index) * 28;

        blob.style.transform =
          "translate(" + x + "px," + y + "px)";
      }
    );
  }, {
    passive: true
  });

  $("#year").textContent =
    new Date().getFullYear();
});