/** @format */
import Me from "../../images/me.png";
import {images} from "../../images/icons-codes";
import "./main.scss";
import {useEffect} from "react";

const Main = () => {
  /////////////////////////////////////////////////////
  useEffect(() => {
    /////////////////////////////////////////////////////

    let html = document.getElementById("main-all");
    let items = [
      {
        text: "בניית אתרים",
        paragraph:
          "בניית אתר מתחלקת למגוון תחומים מדף נחיתה ועד מערכות מורכבות יותר כגון: הרשמה, חנות, CRM,אפלקציות.",
        btn: "בניית-אתרים",
        img: "https://internet-promotion.co.il/wp-content/uploads/2021/08/13.png",
      },
      {
        text: "בניית דפי נחיתה",
        paragraph: `בעידן החדש של השיווק הדיגיטלי העברת המסר
      בצורה שנוחה למשתמש היא חשובה בהחלט`,
        btn: "דפי-נחיתה",
        img: "https://internet-promotion.co.il/wp-content/uploads/2021/08/16.png",
      },
      {
        text: "שיווק עם פייסבוק ואינסטגרם",
        paragraph: `בניית אסטרטגיה ויזואלית ושמירה על עיצוב
      מושך ואחיד ליצרת לקוחות חדשים
      ברשתות החברתיות`,
        btn: "פייסבוק-אינסטגרם",
        img: "https://internet-promotion.co.il/wp-content/uploads/2021/08/8.png",
      },
      {
        text: "שיווק עם גוגל אדס",
        paragraph: `מחקר מילות מפתח הקשורות לעסק המקודם
והקמת קמפיינים שיחסכו לכם בהרבה כסף.`,
        btn: "גוגל-אדס",
        img: "https://internet-promotion.co.il/wp-content/uploads/2021/08/6.png",
      },
      {
        text: "אודות קידום באינטרנט",
        paragraph: `החברה הוקמה בשנת 2020 אנו מתמחים
     בפתרונות דיגטילים מתקדמים לעסקים לצורך העלת רווחיות, חשיפה מיתוג, עיצוב, נגישות
     העסק.`,
        btn: "אודות",
        img: "https://internet-promotion.co.il/wp-content/uploads/2021/08/18.png",
      },
    ];
    //   console.log(html);
    //   console.log(items);

    function renderCard(text, paragraph, btn, img) {
      html.innerHTML = `
    <div id="main">
    <div class="left">
      <img
        src="${img}"
        height="200px"
        width="200px"
        alt="hey"
      />
    </div>
    <div class="right">
      <h1 class="headLine">${text}</h1>
      <p class="paragraph1">${paragraph}</p>
      <a href="${btn}" class="button1">עבור לעמוד</a>
    </div>
  </div>        
    `;
    }

    function autoCards(indexCard) {
      let {text, paragraph, btn, img} = items[indexCard];
      renderCard(text, paragraph, btn, img);
    }

    autoCards(0);

    function switchCards() {
      let index = 0;
      setInterval(() => {
        if (index === 5) {
          index = 0;
        }
        autoCards(index++);
      }, 7000);
    }
    switchCards();

    /////////////////////////////////////////////////////
  }, []);
  /////////////////////////////////////////////////////
  return (
    <>
      {/* avatar section */}
      <div className="boxMain d-flex" id="Main">
        <div className="boxMain">
          <b>Shlomi Saadon</b>
          <p>Web Developer</p>
          <img src={Me} alt="born" />
        </div>
      </div>
      {/* avatar section */}

      {/* icons | section */}
      <div className="d-flex justify-content-center">
        <div className="all">
          <div className="timeLine">
            <div className=" d-flex flex-row sliderOverflow">
              <div className=" slider">
                <div className="d-flex scroll">
                  {images.map((data, index) => {
                    return <img key={index} src={data.default} alt="born" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icons | section */}

      <div id="main-all"></div>

      <div className="Separator">
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
        <div className="d"></div>
        <div className="e"></div>
        <div className="f"></div>
        <div className="g"></div>
      </div>
    </>
  );
};

export default Main;
