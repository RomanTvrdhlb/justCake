import { gsap } from "gsap";

import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector(".hero"),
  earn = document.querySelector(".earn"),
  funds = document.querySelector(".funds"),
  drop = document.querySelector(".drop"),
  footer = document.querySelector(".footer");

if (window.innerWidth > 1024) {
  if (hero) {
    const heroPlayIcon = document.querySelector(".hero .play-button__icon"),
      heroPlayText = document.querySelector(".hero .play-button__text"),
      heroPlayTextSplit = new SplitText(heroPlayText, {
        type: "lines, words",
        linesClass: "line",
      }),
      heroTitle = hero.querySelector(".hero__title"),
      heroTitleSplit = new SplitText(heroTitle, {
        type: "lines, words",
        linesClass: "line",
      }),
      heroText = hero.querySelector(".hero__text"),
      heroTextSplit = new SplitText(heroText, {
        type: "lines, chars",
        linesClass: "line",
      }),
      heroButton = hero.querySelector(".hero .start-button"),
      heroProfit = hero.querySelector(".hero-profit"),
      heroProfitBtn = hero.querySelector(".profit-button");

    gsap.utils.toArray(".benefits-list__item").forEach((item, index) => {
      const icon = item.querySelector(".benefits-list__icon"),
        text = item.querySelector(".benefits-list__item p");
      gsap
        .timeline()
        .from(icon, {
          opacity: 0,
          duration: 0.5,
          delay: 0.2 * index,
        })
        .from(text, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          delay: 0.2 * index,
        });
    });

    gsap
      .timeline()
      .from(
        heroPlayIcon,
        {
          opacity: 0,
          scaleX: 0,
          duration: 0.5,
        },
        "<"
      )
      .from(
        heroPlayTextSplit.words,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        },
        "<+=0.25"
      )
      .from(
        heroTitleSplit.words,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        },
        "<"
      )
      .from(
        heroTextSplit.chars,
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.01,
        },
        "<"
      );

    gsap.timeline().from(heroButton, {
      opacity: 0,
      scaleX: 0,
      duration: 0.5,
    });
    gsap.timeline().from(heroProfit, {
      opacity: 0,
      scale: 0,
      duration: 1,
    });
    gsap.timeline().from(heroProfitBtn, {
      opacity: 0,
      scaleX: 0,
      duration: 0.5,
    });
  }

  const headerLogo = document.querySelector(".header__logo"),
    headerNav = document.querySelector(".header__menu"),
    headerNavLinks = document.querySelectorAll(".header__menu a"),
    headerButton = document.querySelector(".header__btn");

  gsap.timeline().to(headerButton, {
    opacity: 1,
    x: 0,
    duration: 0.15,
  });
  gsap
    .timeline()
    .to(headerLogo, {
      opacity: 1,
      x: 0,
    })
    .from(
      headerNav,
      {
        opacity: 0,
        scaleX: 0,
        duration: 0.5,
      },
      "<"
    )
    .to(
      headerNavLinks,
      {
        stagger: 0.15,
        y: 0,
        duration: 0.4,
      },
      "<+=0.25"
    );

  if (earn) {
    ///earn-list && title--------------------------------------
    const cards = document.querySelectorAll(".earn-card"),
      textElements = earn.querySelectorAll(".earn-card p"),
      cardTitles = earn.querySelectorAll(".earn-card__title"),
      cardImages = earn.querySelectorAll(".earn-card__image"),
      title = earn.querySelector(".earn__title"),
      titleSplit = new SplitText(title, {
        type: "lines, words",
        linesClass: "line",
      }),
      textSplitArray = Array.from(textElements).map((textElement) => {
        return new SplitText(textElement, {
          type: "lines, words",
          linesClass: "line",
        });
      }),
      cardTitlesArray = Array.from(cardTitles).map((cardTitle) => {
        return new SplitText(cardTitle, {
          type: "lines, words",
          linesClass: "line",
        });
      }),
      timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: earn,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      timeLine.from(
        cards,
        {
          opacity: 0,
          height: 0,
          duration: 0.9,
          stagger: 0.14,
        },
        "<"
      );

      timeLine.from(
        titleSplit.words,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        },
        "<"
      );

      cardImages.forEach((image) => {
        timeLine.from(
          image,
          {
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          1
        );
      });

      cardTitlesArray.forEach((titleSplit) => {
        timeLine.from(
          titleSplit.words,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          0.7
        );
      });

      textSplitArray.forEach((textSplit) => {
        timeLine.from(
          textSplit.words,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          0.8
        );
      });

    ///earn-calculate---------------------------------------
    const subtitle = earn.querySelector(".subtitle"),
      calcBg = CSSRulePlugin.getRule(".calculate::before"),
      calcProfit = earn.querySelector('.calculate__profit'),
      calcTitle = earn.querySelector('.calc-form__title'),
      tooltip = earn.querySelector('.calc-form__title .tooltip'),
      calcFields = earn.querySelectorAll('.calc-form__field'),
      calcLabel = earn.querySelectorAll('.calc-form__field-label'),

      calcLabelSplit = new SplitText(calcLabel, {
        type: "lines, words",
        linesClass: "line",
      }),

      calcTitleSplit = new SplitText(calcTitle, {
        type: "lines, words",
        linesClass: "line",
      }),

      subtitleSplit = new SplitText(subtitle, {
        type: "lines, words",
        linesClass: "line",
      }),
      calcTl = gsap.timeline({
        scrollTrigger: {
          trigger: earn.querySelector(".earn__inner"),
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
      calcTl.from(subtitleSplit.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
        .from(
        calcBg,
        {
          cssRule: {
            scaleY: 0,
            transformOrigin: "top",
          },
          duration: .8,
        }, 0);
        
        calcTl.from(calcProfit,{
          height:0,
          opacity:0,
          duration: 0.8,
        },0.5);
        
        calcTl.from(calcTitleSplit.words, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        },0)
        .from(tooltip,{
          y: 40,
          opacity: 0,
          duration: 1,
        }, .6);

        calcTl.from(calcLabelSplit.words, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        },0.5)

      
  }

  if (funds) {
    const fundsBgAfter = CSSRulePlugin.getRule(".funds::before"),
      fundsBgImg = funds.querySelector(".allocation__image"),
      fundsButton = funds.querySelector(".transparent-button"),
      title = funds.querySelector(".subtitle"),
      titleSplit = new SplitText(title, {
        type: "words",
        linesClass: "line",
      }),
      subtitle = funds.querySelectorAll(".allocation__title"),
      subtitleSplit = new SplitText(subtitle, {
        type: "lines, words",
        linesClass: "line",
      }),
      textElements = funds.querySelectorAll(".allocation__inner p"),
      textSplitArray = Array.from(textElements).map((textElement) => {
        return new SplitText(textElement, {
          type: "lines, words",
          linesClass: "line",
        });
      }),
      valueElements = funds.querySelectorAll(".allocation__value"),
      valueSplitArray = Array.from(valueElements).map((valueElement) => {
        return new SplitText(valueElement, {
          type: "lines, words",
          linesClass: "line",
        });
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: funds,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
      .from(
        fundsBgAfter,
        {
          cssRule: {
            scaleY: 0,
            transformOrigin: "top",
          },
          duration: 1.15,
        },
        0
      )
      .from(
        fundsBgImg,
        {
          opacity: 0,
          x: 20,
          duration: 1,
        },
        0.5
      )
      .from(
        titleSplit.words,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
        },
        0.5
      )
      .from(
        subtitleSplit.words,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        0.8
      )
      .from(
        textSplitArray[0].words,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        0.8
      )
      .from(
        textSplitArray[1].words,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        0.8
      )
      .from(
        valueSplitArray[0].words,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        0.8
      )
      .from(
        valueSplitArray[1].words,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        0.8
      );
    gsap.timeline().to(fundsButton, {
      opacity: 1,
      width: "clamp(252px, 24.2735vw, 284px)",
      duration: 0.2,
      fontSize: 16,
      delay: 0.8,
    });
  }

  if (drop) {
    const dropBgAfter = CSSRulePlugin.getRule(".drop::before"),
      dropBgImg = drop.querySelector(".drop__image"),
      dropButton = drop.querySelector(".white-button"),
      dropTitle = drop.querySelector(".subtitle"),
      dropTitleSplit = new SplitText(dropTitle, {
        type: "chars",
        linesClass: "line",
      }),
      dropText = drop.querySelector(".drop__inner p"),
      dropTextSplit = new SplitText(dropText, {
        type: "lines, words",
        linesClass: "line",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: drop,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
      .from(
        dropBgAfter,
        {
          cssRule: {
            scaleX: 0,
            transformOrigin: "right",
          },
          duration: 1.15,
        },
        0
      )
      .from(
        dropBgImg,
        {
          opacity: 0,
          x: 20,
          duration: 1,
        },
        0.5
      )
      .from(
        dropTitleSplit.chars,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        0.5
      )
      .from(
        dropTextSplit.words,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        0.5
      );
    gsap.timeline().to(dropButton, {
      opacity: 1,
      width: "clamp(252px, 24.2735vw, 284px)",
      duration: 0.2,
      fontSize: 16,
      delay: 0.8,
    });
  }

  if (footer) {
    const footerLogo = footer.querySelector(".logo svg"),
      footerSocials = footer.querySelectorAll(".footer__socials a"),
      footerLinks = footer.querySelectorAll(".footer__nav a"),
      footerApp = footer.querySelector(".footer__app"),
      footerAppSplit = new SplitText(footerApp, {
        type: "lines, chars",
        linesClass: "line",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: drop,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
      .to(footerLogo, {
        y: 0,
        duration: 0.4,
      })
      .from(
        footerAppSplit.chars,
        {
          y: 100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.01,
        },
        "-=0.2"
      )
      .to(
        footerLinks,
        {
          stagger: 0.1,
          y: 0,
          duration: 0.2,
        },
        "-=0.2"
      )
      .to(
        footerSocials,
        {
          stagger: 0.1,
          y: 0,
          duration: 0.2,
        },
        "-=0.2"
      );
  }
}
